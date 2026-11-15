// Contract missions: courier jobs, passenger transport (incl. VIPs) and supply runs.
// Pure data/logic here; the Game applies effects (credits, cargo, autopilot) and the UI renders.
import { RNG } from './rng.js';
import { COMM, COMMODITIES, ECONOMIES, HULLS, MODULES } from './data.js';
import { FACTIONS, factionTier, standingWith } from './factions.js';
import { generateSystem } from './galaxy.js';

export const MAX_ACTIVE = 4;
export const PAX_SPACE = 2; // hold units per passenger (cabin pods)
const TYPES = ['courier', 'passenger', 'supply'];

const CLIENTS = ['Halden Logistics', 'Orbital Relief Fund', 'Meridian Survey Corps', 'Kessler & Daughters', 'Free Haulers Guild', 'Station Medical Bay', 'Colony Administration', 'Brightline Couriers'];
const CARGO = ['sealed medical crates', 'survey core samples', 'encrypted data cores', 'reactor spares', 'diplomatic pouches', 'seed vault canisters', 'relief rations', 'precision optics'];
const GROUPS = ['a geology team', 'a settler family', 'off-shift miners', 'a medical crew', 'pilgrims', 'a news crew', 'engineering contractors', 'survey students'];
const VIPS = ['Magistrate Okafor', 'Envoy Lusine Varga', 'Director Halvard Ness', 'Dr. Mireille Achterberg', 'Senator Ilya Brandt', 'Arbiter Yuen Sato'];

// ---- galaxy helpers ----
const sysCache = new Map();
export function systemData(galaxy, id) {
  const key = `${galaxy.seed}:${id}`;
  if (!sysCache.has(key)) sysCache.set(key, generateSystem(galaxy.systems[id], galaxy));
  return sysCache.get(key);
}
export function jumpsFrom(galaxy, from) {
  const dist = galaxy.systems.map(() => Infinity); dist[from] = 0; const q = [from];
  while (q.length) { const c = q.shift(); for (const l of galaxy.systems[c].links) if (dist[l] === Infinity) { dist[l] = dist[c] + 1; q.push(l); } }
  return dist;
}
export function routePath(galaxy, from, to) {
  const prev = { [from]: -1 }; const q = [from];
  while (q.length) { const c = q.shift(); if (c === to) break; for (const l of galaxy.systems[c].links) if (!(l in prev)) { prev[l] = c; q.push(l); } }
  if (!(to in prev)) return null;
  const path = []; let c = to; while (c !== -1) { path.unshift(c); c = prev[c]; } return path;
}

// ---- state ----
export function normalizeMissionState(state) {
  if (!Array.isArray(state.missions)) state.missions = [];
  if (!state.offers || typeof state.offers !== 'object') state.offers = {};
  if (!Number.isFinite(state.stats.contracts)) state.stats.contracts = 0;
  if (!state.standing || typeof state.standing !== 'object') state.standing = {};
  return state;
}

// ---- station standing: per-station contract reputation ----
export const STANDING_TIERS = [
  { min: -Infinity, name: 'Blacklisted', pay: -0.15, offers: -2, perks: 'Fewer offers, lower pay' },
  { min: -2, name: 'New face', pay: 0, offers: 0, perks: '' },
  { min: 3, name: 'Regular', pay: 0.05, offers: 0, perks: '+5% pay · more special contracts' },
  { min: 8, name: 'Preferred', pay: 0.1, offers: 1, perks: '+10% pay · extra offer · no deposits' },
  { min: 15, name: 'Partner', pay: 0.15, offers: 1, perks: '+15% pay · extra offer · no deposits · daily priority contract' },
];
export function standingOf(state, sysId) { return (state.standing && state.standing[sysId]) || 0; }
export function standingTier(pts) { let t = STANDING_TIERS[0], i = 0; STANDING_TIERS.forEach((x, k) => { if (pts >= x.min) { t = x; i = k - 1; } }); return { ...t, level: i }; }
export function nextStanding(pts) { return STANDING_TIERS.find((x) => x.min > pts) || null; }
// how much standing a finished contract earns: special jobs count double
export function standingGain(m) { return 1 + (m.hot || m.vip || m.ore || m.priority || m.exclusive ? 1 : 0); }

// extra daily outlaw-raid chance while this contract is aboard
export function missionDanger(m) { return m.vip ? 0.12 : m.hot ? 0.10 : 0; }

// VIP demands on the ship that carries them
export function reqMet(m, rec) {
  if (!m.req) return true;
  if (m.req.hull) return rec.hull === m.req.hull || (m.req.hull === 'kestrel' && rec.hull === 'bastion');
  return (rec.mods[m.req.mod] || 0) >= m.req.lvl;
}
export function reqText(req) {
  if (!req) return '';
  if (req.hull) return req.hull === 'kestrel' ? 'an armed Kestrel (or Bastion)' : `a ${HULLS[req.hull].name} ${HULLS[req.hull].cls}`;
  return `${MODULES[req.mod].name} Mk${req.lvl}+`;
}
export function validateMissions(s) {
  if (s.missions == null) return;
  if (!Array.isArray(s.missions)) throw new Error('the contract list is invalid');
  for (const m of s.missions) {
    if (!m || !TYPES.includes(m.type) || !m.dest || !Number.isInteger(m.dest.sys) || !Number.isFinite(m.reward) || !Number.isInteger(m.deadline)) throw new Error('a contract record is incomplete');
  }
}

export function missionSpace(m) { return m.type === 'courier' ? m.qty : m.type === 'passenger' ? m.pax * PAX_SPACE : 0; }
// rough value outlaws see in a ship carrying this contract
export function missionLure(m) { return m.type === 'courier' ? m.qty * 35 + (m.hot ? 1500 : 0) : m.type === 'passenger' ? m.pax * (m.vip ? 400 : 60) : 0; }
export function boundToShip(m) { return m.type !== 'supply'; }
export function daysLeft(m, day) { return m.deadline - day; }

// ---- offer generation (deterministic per station per day) ----
function makeOffer(rng, ctx, i) {
  const { galaxy, sysId, day, rank, tier } = ctx;
  const dist = ctx.dist;
  const rankMul = (1 + rank * 0.15) * (1 + tier.pay);
  const special = 0.07 * Math.max(0, tier.level); // better standing → more special contracts
  const round10 = (v) => Math.round(v / 10) * 10;
  const type = rng.weighted({ courier: 3, passenger: 3, supply: 2 });
  const others = galaxy.systems.filter((s) => s.id !== sysId && dist[s.id] <= 3);
  const pickSys = () => { // favour nearby systems
    const w = {}; for (const s of others) w[s.id] = dist[s.id] === 1 ? 5 : dist[s.id] === 2 ? 3 : 1;
    return Number(rng.weighted(w));
  };
  const destFor = (allowPlanet) => {
    const here = systemData(galaxy, sysId);
    if (allowPlanet && here.planets.length && rng.chance(0.3)) {
      const pi = rng.int(0, here.planets.length - 1);
      return { sys: sysId, kind: 'planet', planet: pi, name: `${here.planets[pi].name} colony` };
    }
    const sid = pickSys(); const sd = systemData(galaxy, sid);
    if (allowPlanet && sd.planets.length && rng.chance(0.35)) {
      const pi = rng.int(0, sd.planets.length - 1);
      return { sys: sid, kind: 'planet', planet: pi, name: `${sd.planets[pi].name} colony` };
    }
    return { sys: sid, kind: 'station', name: sd.station.name };
  };
  const base = { id: `${sysId}-${day}-${i}`, type, client: rng.pick(CLIENTS), from: { sys: sysId, name: systemData(galaxy, sysId).station.name }, offeredDay: day };
  if (type === 'supply') {
    const dest = destFor(false);
    const mult = ECONOMIES[galaxy.systems[dest.sys].eco].mult;
    const wanted = COMMODITIES.filter((c) => mult[c.id] >= 1.15);
    const c = wanted.length ? rng.pick(wanted) : rng.pick(COMMODITIES);
    const qty = rng.chance(0.65) ? rng.int(6, 16) : rng.int(20, 45);
    const j = dist[dest.sys];
    const offer = { ...base, dest, jumps: j, commodity: c.id, qty, title: `Supply ${qty} ${c.name}`,
      reward: round10(qty * c.base * mult[c.id] * 1.4 * (1 + rank * 0.05) * (1 + tier.pay)), deposit: 0, deadline: day + 2 + j * 2 };
    // the station also wants an ore you must mine yourself (bought ore doesn't count)
    const oreRoll = rng.next(), orePick = rng.weighted({ lumenite: 2, cobalt: 3, helion: 2 });
    if (oreRoll < 0.3 + special && orePick !== c.id) {
      const oq = orePick === 'lumenite' ? 3 + Math.floor(rng.next() * 4) : 8 + Math.floor(rng.next() * 8);
      Object.assign(offer, { ore: orePick, oreQty: oq, oreMined: 0, title: `${offer.title} + ${oq} mined ${COMM[orePick].name}`,
        reward: offer.reward + round10(oq * COMM[orePick].base * 2.2), deadline: offer.deadline + 1 });
    }
    return offer;
  }
  const dest = destFor(true);
  const j = dist[dest.sys];
  const planetBonus = dest.kind === 'planet' ? 1 : 0;
  if (type === 'courier') {
    const roll = rng.next();
    const qty = roll < 0.6 ? rng.int(6, 16) : roll < 0.9 ? rng.int(20, 45) : rng.int(55, 110);
    const cargo = rng.pick(CARGO);
    // hot cargo: outlaws know what's in the crates — more raids, more pay
    const hot = rng.next() < 0.18 + special;
    return { ...base, dest, jumps: j, qty, cargoName: cargo, hot, title: hot ? `Hot cargo: ${qty} units of ${rng.pick(HOT_CARGO)}` : `Deliver ${qty} units of ${cargo}`,
      reward: round10((180 + 380 * j + qty * (9 + 6 * j) + planetBonus * 120) * rankMul * (hot ? 1.6 : 1)), deposit: round10(qty * (hot ? 18 : 12)), deadline: day + 1 + j * 2 + planetBonus };
  }
  const vip = rng.chance(0.22);
  const pax = vip ? rng.int(1, 2) : rng.int(1, 6);
  const who = vip ? rng.pick(VIPS) : rng.pick(GROUPS);
  let reward = round10((140 + 330 * j + pax * (70 + 60 * j) + planetBonus * 100) * (vip ? 1.8 : 1) * rankMul);
  const offer = { ...base, dest, jumps: j, pax, vip, who, title: vip ? `Escort ${who}${pax > 1 ? ' + aide' : ''}` : `Transport ${pax} passenger${pax > 1 ? 's' : ''} (${who})`,
    reward, deposit: 0, deadline: day + 1 + j * 2 + planetBonus };
  const r1 = rng.next(), r2 = rng.next(), r3 = rng.next(), r4 = rng.next();
  if (vip && r1 < 0.6) {
    // VIP demands: a particular hull, or a module at a minimum level
    const lvl = rank >= 2 ? 2 : 1;
    const opts = [{ hull: 'kestrel' }, { hull: 'mule' }, { mod: 'barrier', lvl }, { mod: 'beam', lvl }, { mod: 'hull', lvl }, { mod: 'sensors', lvl: 1 }];
    offer.req = opts[Math.floor(r2 * opts.length)];
    offer.reward = round10(offer.reward * 1.3);
  } else if (!vip && r1 < 0.35 + special) {
    const dsd = systemData(galaxy, dest.sys);
    const planets = dsd.planets.map((_, k) => k).filter((k) => !(dest.kind === 'planet' && dest.planet === k));
    if (r2 < 0.5 && pax >= 2 && planets.length) {
      const pi = planets[Math.floor(r3 * planets.length)];
      offer.side = { kind: 'detour', sys: dest.sys, planet: pi, name: `${dsd.planets[pi].name} colony`, reward: round10(150 + 90 * j + r4 * 120), done: false,
        text: `One passenger asks to be dropped at ${dsd.planets[pi].name} colony on the way` };
    } else {
      offer.side = { kind: 'wreck', sys: r3 < 0.5 ? dest.sys : sysId, seed: Math.floor(r4 * 1e9), text: 'A passenger claims to know where a wreck is drifting' };
    }
  }
  return offer;
}
const HOT_CARGO = ['unregistered weapon cores', 'seized Lumenite bullion', 'black-box flight recorders', 'contraband stim crates', 'a smuggler\'s strongbox', 'prototype drive coils'];

// Faction-flavoured premium contracts, built from the regular types.
function makeExclusive(rng, ctx, fid, level) {
  const { galaxy, sysId, day, dist } = ctx;
  const F = FACTIONS[fid];
  const pay = 1.6 + level * 0.15;
  const r10 = (v) => Math.round(v / 10) * 10;
  const near = (pred) => { const c = galaxy.systems.filter((s) => s.id !== sysId && dist[s.id] <= 3 && pred(s)); return c.length ? c[Math.floor(rng.next() * c.length)] : null; };
  const base = { id: `${sysId}-${day}-x`, client: F.name, from: { sys: sysId, name: systemData(galaxy, sysId).station.name }, offeredDay: day, exclusive: fid, deposit: 0 };
  if (fid === 'agricultural') {
    const t = near((s) => s.eco === 'frontier' || s.eco === 'mining') || near(() => true); if (!t) return null;
    const c = rng.next() < 0.6 ? 'food' : 'medical'; const qty = 15 + Math.floor(rng.next() * 20); const j = dist[t.id];
    return { ...base, type: 'supply', dest: { sys: t.id, kind: 'station', name: systemData(galaxy, t.id).station.name }, jumps: j, commodity: c, qty,
      title: `Relief convoy: ${qty} ${COMM[c].name}`, reward: r10(qty * COMM[c].base * 1.5 * pay + 300 * j), deadline: day + 2 + j * 2 };
  }
  if (fid === 'frontier') {
    const t = near((s) => s.eco === 'frontier') || near(() => true); if (!t) return null;
    const sd = systemData(galaxy, t.id); const pi = Math.floor(rng.next() * sd.planets.length); const pax = 4 + Math.floor(rng.next() * 3); const j = dist[t.id];
    return { ...base, type: 'passenger', dest: { sys: t.id, kind: 'planet', planet: pi, name: `${sd.planets[pi].name} colony` }, jumps: j, pax, vip: false, who: 'a settler convoy',
      title: `Settler convoy: ${pax} colonists`, reward: r10((140 + 330 * j + pax * (70 + 60 * j) + 100) * pay), deadline: day + 2 + j * 2 };
  }
  const spec = {
    mining: { pick: (s) => s.eco === 'industrial', cargo: 'certified ore assays', title: 'Union assay run' },
    industrial: { pick: (s) => s.eco === 'mining' || s.eco === 'frontier', cargo: 'prototype drive blocks', title: 'Combine prototype haul' },
    hightech: { pick: (s) => s.eco !== 'hightech', cargo: 'sealed Institute data vaults', title: 'Institute vault transfer', hot: true },
  }[fid];
  const t = near(spec.pick) || near(() => true); if (!t) return null;
  const qty = 10 + Math.floor(rng.next() * 15); const j = dist[t.id];
  return { ...base, type: 'courier', dest: { sys: t.id, kind: 'station', name: systemData(galaxy, t.id).station.name }, jumps: j, qty, cargoName: spec.cargo, hot: !!spec.hot,
    title: `${spec.title}: ${qty} units`, reward: r10((180 + 380 * j + qty * (9 + 6 * j)) * pay * (spec.hot ? 1.3 : 1)), deadline: day + 1 + j * 2 };
}

export function offersFor(state, galaxy, sysId, rank) {
  const key = String(sysId);
  let rec = state.offers[key];
  if (!rec || rec.day !== state.day) {
    const rng = new RNG((state.seed * 31 + sysId * 977 + state.day * 7919) >>> 0);
    const tier = standingTier(standingOf(state, sysId));
    const ctx = { galaxy, sysId, day: state.day, rank, tier, dist: jumpsFrom(galaxy, sysId) };
    const n = Math.max(2, 4 + rng.int(0, 1) + tier.offers);
    const list = []; for (let i = 0; i < n; i++) list.push(makeOffer(rng, ctx, i));
    // faction exclusive: Friendly or better with the station's faction adds one premium job
    const fid = galaxy.systems[sysId].eco, ft = factionTier(standingWith(state, fid));
    if (ft.level >= 1) { const ex = makeExclusive(rng, ctx, fid, ft.level); if (ex) list.push(ex); }
    if (tier.level >= 2) for (const o of list) o.deposit = 0; // Preferred+: deposits waived
    if (tier.level >= 3) { // Partner: one priority contract a day, premium pay
      const o = list.reduce((a, b) => (b.reward > a.reward ? b : a));
      o.priority = true; o.reward = Math.round(o.reward * 1.35 / 10) * 10; o.title = `Priority: ${o.title}`;
    }
    rec = { day: state.day, list, taken: [] };
    // keep the save small: only today's boards are remembered
    for (const k of Object.keys(state.offers)) if (state.offers[k].day !== state.day) delete state.offers[k];
    state.offers[key] = rec;
  }
  return rec.list.filter((o) => !rec.taken.includes(o.id));
}
export function markTaken(state, offer) {
  const rec = state.offers[String(offer.from.sys)];
  if (rec && !rec.taken.includes(offer.id)) rec.taken.push(offer.id);
}

// ---- presentation helpers ----
export function modTags(m) {
  const t = [];
  if (m.exclusive) t.push({ label: `${FACTIONS[m.exclusive].short.toUpperCase()} EXCLUSIVE`, cls: 'excl' });
  if (m.priority) t.push({ label: 'PRIORITY', cls: 'prio' });
  if (m.hot) t.push({ label: 'HOT CARGO', cls: 'hot' });
  if (m.req) t.push({ label: 'DEMANDS', cls: 'req' });
  if (m.side) t.push({ label: m.side.kind === 'wreck' ? 'TIP' : 'SIDE REQUEST', cls: 'side' });
  if (m.ore) t.push({ label: 'MINE IT', cls: 'ore' });
  return t;
}
export function typeTag(m) {
  if (m.type === 'passenger') return m.vip ? { label: 'VIP ESCORT', cls: 'vip' } : { label: 'PASSENGERS', cls: 'pax' };
  return m.type === 'courier' ? { label: 'COURIER', cls: 'courier' } : { label: 'SUPPLY', cls: 'supply' };
}
export function destText(m, galaxy, fromSys) {
  const sysName = galaxy.systems[m.dest.sys].name;
  const j = jumpsFrom(galaxy, fromSys)[m.dest.sys];
  return `${m.dest.name} · ${sysName}${j === 0 ? ' (this system)' : ` (${j} jump${j > 1 ? 's' : ''})`}`;
}
export function needText(m) {
  if (m.type === 'supply') return `Bring ${m.qty} ${COMM[m.commodity].name} (buy or mine it)${m.ore ? `<br>Plus <b>${m.oreQty} ${COMM[m.ore].name} you mine yourself</b>${m.ore === 'helion' ? ' (gas giant deposits)' : m.ore === 'lumenite' ? ' (rare find in asteroids)' : ''} · mined ${m.oreMined || 0}/${m.oreQty}` : ''}`;
  if (m.type === 'courier') return `Takes ${m.qty} hold space${m.hot ? ' · <b>outlaws know about this cargo</b> (more raids)' : ''}`;
  let t = `Takes ${m.pax * PAX_SPACE} hold space (${m.pax} cabin${m.pax > 1 ? 's' : ''})${m.vip ? ' · outlaws hunt VIPs' : ''}`;
  if (m.req) t += `<br>Demands to travel in <b>${reqText(m.req)}</b>`;
  if (m.side) t += `<br>${m.side.text}${m.side.kind === 'detour' ? ` (+◈ ${m.side.reward}${m.side.done ? ', done' : ''})` : m.side.revealed ? ' (location on your chart)' : ''}`;
  return t;
}
export function dueText(m, day) {
  const d = m.deadline - day;
  return `Due end of Day ${m.deadline} · ${d <= 0 ? 'TODAY' : `${d} day${d > 1 ? 's' : ''} left`}`;
}
