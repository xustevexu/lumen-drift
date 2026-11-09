// Contract missions: courier jobs, passenger transport (incl. VIPs) and supply runs.
// Pure data/logic here; the Game applies effects (credits, cargo, autopilot) and the UI renders.
import { RNG } from './rng.js';
import { COMM, COMMODITIES, ECONOMIES } from './data.js';
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
  return state;
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
export function missionLure(m) { return m.type === 'courier' ? m.qty * 35 : m.type === 'passenger' ? m.pax * (m.vip ? 400 : 60) : 0; }
export function boundToShip(m) { return m.type !== 'supply'; }
export function daysLeft(m, day) { return m.deadline - day; }

// ---- offer generation (deterministic per station per day) ----
function makeOffer(rng, ctx, i) {
  const { galaxy, sysId, day, rank } = ctx;
  const dist = ctx.dist;
  const rankMul = 1 + rank * 0.15;
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
    return { ...base, dest, jumps: j, commodity: c.id, qty, title: `Supply ${qty} ${c.name}`,
      reward: round10(qty * c.base * mult[c.id] * 1.4 * (1 + rank * 0.05)), deposit: 0, deadline: day + 2 + j * 2 };
  }
  const dest = destFor(true);
  const j = dist[dest.sys];
  const planetBonus = dest.kind === 'planet' ? 1 : 0;
  if (type === 'courier') {
    const roll = rng.next();
    const qty = roll < 0.6 ? rng.int(6, 16) : roll < 0.9 ? rng.int(20, 45) : rng.int(55, 110);
    const cargo = rng.pick(CARGO);
    return { ...base, dest, jumps: j, qty, cargoName: cargo, title: `Deliver ${qty} units of ${cargo}`,
      reward: round10((180 + 380 * j + qty * (9 + 6 * j) + planetBonus * 120) * rankMul), deposit: round10(qty * 12), deadline: day + 1 + j * 2 + planetBonus };
  }
  const vip = rng.chance(0.22);
  const pax = vip ? rng.int(1, 2) : rng.int(1, 6);
  const who = vip ? rng.pick(VIPS) : rng.pick(GROUPS);
  const reward = round10((140 + 330 * j + pax * (70 + 60 * j) + planetBonus * 100) * (vip ? 1.8 : 1) * rankMul);
  return { ...base, dest, jumps: j, pax, vip, who, title: vip ? `Escort ${who}${pax > 1 ? ' + aide' : ''}` : `Transport ${pax} passenger${pax > 1 ? 's' : ''} (${who})`,
    reward, deposit: 0, deadline: day + 1 + j * 2 + planetBonus };
}

export function offersFor(state, galaxy, sysId, rank) {
  const key = String(sysId);
  let rec = state.offers[key];
  if (!rec || rec.day !== state.day) {
    const rng = new RNG((state.seed * 31 + sysId * 977 + state.day * 7919) >>> 0);
    const ctx = { galaxy, sysId, day: state.day, rank, dist: jumpsFrom(galaxy, sysId) };
    const n = 4 + rng.int(0, 1);
    const list = []; for (let i = 0; i < n; i++) list.push(makeOffer(rng, ctx, i));
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
  if (m.type === 'supply') return `Bring ${m.qty} ${COMM[m.commodity].name} (buy or mine it)`;
  if (m.type === 'courier') return `Takes ${m.qty} hold space`;
  return `Takes ${m.pax * PAX_SPACE} hold space (${m.pax} cabin${m.pax > 1 ? 's' : ''})${m.vip ? ' · outlaws hunt VIPs' : ''}`;
}
export function dueText(m, day) {
  const d = m.deadline - day;
  return `Due end of Day ${m.deadline} · ${d <= 0 ? 'TODAY' : `${d} day${d > 1 ? 's' : ''} left`}`;
}
