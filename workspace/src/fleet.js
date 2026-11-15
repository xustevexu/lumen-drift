// Wingmen (hired escort pilots that fly with you) and fleet trade routes (spare ships trading on their own).
import * as THREE from 'three';
import { fmt } from './rng.js';
import { COMMODITIES, COMM, HULLS, computeStats } from './data.js';
import { Ship } from './entities.js';
import { buildShipTemplate } from './ships.js';
import { pilotRank } from './economy.js';
import { factionTier, standingWith } from './factions.js';
import { jumpsFrom, routePath } from './missions.js';
import { dogfight } from './ai.js';

// ---------------------------------------------------------------- wingmen
export const SKILLS = [
  { name: 'Rookie', fee: 1500, wage: 120, kills: 0 },
  { name: 'Veteran', fee: 4500, wage: 260, kills: 5 },
  { name: 'Ace', fee: 10000, wage: 480, kills: 14 },
];
const PILOTS = ['Juno Vale', 'Ren Okoro', 'Mags Delacroix', 'Tavi Nakamura', 'Bram Holt', 'Sela Quist', 'Iko Marsh', 'Dax Ferreira', 'Noor Halim', 'Wes Calder', 'Pip Arkwright', 'Zara Voss'];
const CALLSIGNS = ['Hammer', 'Kite', 'Lantern', 'Rook', 'Ember', 'Moth', 'Jackdaw', 'Flint', 'Halo', 'Static', 'Brine', 'Vesper'];
export const ROUTE_WAGE = 150, CREW_SHARE = 0.25;
const FORMATION = [[-1.8, 0.1, 1.6], [1.8, 0.1, 1.6], [0, 1.0, 2.6]]; // beside and ahead of the leader so they stay in view of the chase camera
const _v = new THREE.Vector3(), _q = new THREE.Quaternion(), _e = new THREE.Euler();

export function normalizeFleetState(state) {
  if (!Array.isArray(state.wingmen)) state.wingmen = [];
  return state;
}
export function maxWingmen(state) { const r = pilotRank(state); return 1 + (r >= 2 ? 1 : 0) + (r >= 4 ? 1 : 0); }
export function skillOf(w) { let k = w.base || 0; for (let i = SKILLS.length - 1; i > k; i--) if (w.kills >= SKILLS[i].kills) { k = i; break; } return k; }

export class FleetManager {
  constructor(game) { this.g = game; this.wings = []; }
  get state() { return this.g.state; }

  // ---- recruits on offer today at this station (deterministic per day + system) ----
  recruits() {
    const s = this.state;
    const key = `${s.day}:${s.systemId}`;
    if (this._rkey !== key) {
      let k = (s.seed ^ (s.day * 7919 + s.systemId * 131)) >>> 0;
      const r = () => { k = (k * 1103515245 + 12345) >>> 0; return k / 4294967296; };
      const rank = pilotRank(s), n = 2 + (r() < 0.5 ? 1 : 0);
      this._recruits = [];
      for (let i = 0; i < n; i++) {
        const sk = Math.min(2, Math.floor(r() * (rank >= 2 ? 3 : 2.2)));
        const name = PILOTS[(Math.floor(r() * PILOTS.length) + i * 5) % PILOTS.length], call = CALLSIGNS[(Math.floor(r() * CALLSIGNS.length) + i * 5) % CALLSIGNS.length];
        this._recruits.push({ id: `${key}:${i}`, name, call, base: sk, fee: SKILLS[sk].fee, wage: SKILLS[sk].wage });
      }
      this._rkey = key;
    }
    const hired = new Set(s.wingmen.map((w) => w.recruitId));
    return this._recruits.filter((x) => !hired.has(x.id));
  }
  hire(id) {
    const s = this.state, r = this.recruits().find((x) => x.id === id);
    if (!r || s.credits < r.fee || s.wingmen.length >= maxWingmen(s)) return false;
    s.credits -= r.fee;
    s.wingmen.push({ id: `w${Date.now() % 1e9}`, recruitId: r.id, name: r.name, call: r.call, base: r.base, kills: 0, wage: r.wage, hired: s.day, status: 'active', back: 0 });
    return true;
  }
  dismiss(id) { const s = this.state; s.wingmen = s.wingmen.filter((w) => w.id !== id); this.despawn(id); }

  // ---- runtime ships ----
  statsFor(w) {
    const k = skillOf(w), rank = pilotRank(this.state);
    return { speed: 92 + k * 4, turn: 1.9, cargo: 0, shield: 70 + k * 45 + rank * 20, shieldRegen: 8 + k * 2, hull: 190 + k * 90 + rank * 35, dps: 9 + k * 5 + rank * 2, beamRange: 270 + k * 20,
      hard: 1, mslCap: 2 + k, mslDmg: 55 + k * 15, energy: 150, energyRegen: 22, sensor: 3000 };
  }
  spawnAll() {
    this.despawnAll();
    const g = this.g; if (!g.player || g.player.dead || g.docked) return;
    this.state.wingmen.filter((w) => w.status === 'active').forEach((w, i) => {
      const a = new Ship(g, { kind: 'ally', hullId: 'kestrel', palette: 'player', tpl: buildShipTemplate('kestrel', 'player'), stats: this.statsFor(w), name: `${w.call} (${SKILLS[skillOf(w)].name})` });
      a.isWingman = true; a.wid = w.id; a.slot = i; a.orbitDir = i % 2 ? 1 : -1;
      a.missiles = a.stats.mslCap; a.mslCd = 4 + i * 2; a.beam = g.fx.makeBeam(0x58e8ff);
      a.pos.copy(this.slotPos(a, _v)); a.yaw = g.player.yaw; a.speed = g.player.speed;
      this.wings.push(a);
    });
  }
  despawn(id) { const i = this.wings.findIndex((a) => a.wid === id); if (i >= 0) { const a = this.wings[i]; this.g.scene.remove(a.beam); if (!a.dead) a.remove(); this.wings.splice(i, 1); } }
  despawnAll() { for (const a of this.wings) { this.g.scene.remove(a.beam); if (!a.dead) a.remove(); } this.wings = []; }

  slotPos(a, out) {
    const p = this.g.player, f = FORMATION[a.slot % FORMATION.length], L = Math.max(16, HULLS[p.hullId].len * 1.6);
    _q.setFromEuler(_e.set(0, p.yaw, 0, 'YXZ'));
    return out.set(f[0] * L, f[1] * L, f[2] * L).applyQuaternion(_q).add(p.pos);
  }
  pickTarget(a) {
    const g = this.g, p = g.player;
    if (g.target && !g.target.dead && g.target.kind === 'outlaw' && g.target.pos.distanceTo(p.pos) < 2200) return g.target;
    let best = null, bd = 1600;
    for (const o of g.outlaws) {
      if (o.dead) continue;
      const threat = o.tgt === p || (o.tgt && o.tgt.isWingman) ? 0.6 : 1; // whoever is shooting at us first
      const d = o.pos.distanceTo(p.pos) * threat;
      if (d < bd) { bd = d; best = o; }
    }
    return best;
  }
  update(dt) {
    const g = this.g, p = g.player;
    if (!p || p.dead) return;
    for (let i = this.wings.length - 1; i >= 0; i--) {
      const a = this.wings[i];
      if (a.dead) { this.wings.splice(i, 1); continue; }
      a.firing = false; a.boost = false; a.cruise = false;
      const slot = this.slotPos(a, new THREE.Vector3());
      const far = a.pos.distanceTo(slot);
      if (far > 6000) { a.pos.copy(slot); a.yaw = p.yaw; a.speed = p.speed; } // lost: catch up out of sight
      a.retarget = (a.retarget || 0) - dt;
      if (a.retarget <= 0 || !a.tgt || a.tgt.dead) { a.retarget = 1.5; a.tgt = p.cruise ? null : this.pickTarget(a); }
      if (a.tgt && !p.cruise && far < 2500) dogfight(g, a, a.tgt, dt);
      else {
        // formation flying: aim a little ahead of the slot so we match the leader's motion
        p.forwardTo(_v).multiplyScalar(Math.max(140, p.speed * 2)).add(slot); // look well ahead along the leader's heading: fly parallel
        a.steerTo(_v, dt, 1.2);
        a.cruise = p.cruise && far > 150;
        const want = far > 400 ? 1 : Math.min(1, (p.speed + far * 0.8) / a.stats.speed);
        a.throttle = Math.max(0.05, want); a.boost = far > 250 && !a.cruise && a.energy > 30;
      }
      if (!a.firing && a.beam) a.beam.visible = false;
      a.updateMotion(dt, g.world); a.updateVisual(dt);
    }
  }
  onKill(a) {
    const w = this.state.wingmen.find((x) => x.id === a.wid); if (!w) return;
    const before = skillOf(w); w.kills++;
    const after = skillOf(w);
    if (after > before) this.g.ui.toast(`★ ${w.call} has been promoted to ${SKILLS[after].name}!`, 'good', 4);
  }
  onDown(a) {
    const w = this.state.wingmen.find((x) => x.id === a.wid); if (!w) return;
    w.status = 'recovering'; w.back = this.state.day + 2;
    this.g.scene.remove(a.beam);
    this.g.ui.toast(`${w.call}'s ship is down! Pilot ejected and recovered: back on Day ${w.back}.`, 'warn', 5);
  }

  // ---- fleet trade routes ----
  routeShips() { return this.state.ships.filter((sh) => sh.route); }
  // best cargo on a leg using live prices (what the crew would actually do)
  bestCargo(from, to, cap) {
    const E = this.g.economy; let best = null;
    for (const c of COMMODITIES) {
      if (!E.canBuy(from, c.id) || E.stock(from, c.id) <= 0) continue;
      const m = E.sellPrice(to, c.id) - E.buyPrice(from, c.id);
      if (!best || m > best.m) best = { cid: c.id, m, qty: Math.min(cap, E.stock(from, c.id)) };
    }
    return best && best.m > 0 ? best : null;
  }
  estimate(a, b, cap) {
    const f = this.bestCargo(a, b, cap), r = this.bestCargo(b, a, cap);
    return { out: f, back: r, perTrip: Math.round(((f ? f.m * f.qty : 0) + (r ? r.m * r.qty : 0)) * (1 - CREW_SHARE)) };
  }
  legRisk(rec, from, to) {
    const g = this.g, path = routePath(g.galaxy, from, to) || [from, to];
    let d = 0; for (const id of path) d += g.galaxy.systems[id].danger;
    const hullK = { wren: 1.2, mule: 1.0, kestrel: 0.6, bastion: 0.3 }[rec.hull];
    const ghost = (rec.uniques || []).includes('ghost') ? 0.5 : 1;
    return Math.min(0.6, d * 0.45 * hullK * ghost * factionTier(standingWith(this.state, 'pirate')).raid);
  }
  assign(uid, b) {
    const s = this.state, rec = s.ships.find((x) => x.uid === uid), a = s.systemId;
    if (!rec || rec.uid === s.active || rec.route || a === b) return 'Not available';
    if (s.missions.some((m) => m.shipUid === uid && m.type !== 'supply')) return 'Contract cargo is aboard that ship';
    // leftover cargo is sold here before the crew sets off
    let v = 0; for (const k of Object.keys(rec.cargo)) { v += this.g.economy.sell(a, k, rec.cargo[k]); delete rec.cargo[k]; }
    if (v) this.g.addCredits(v);
    const days = Math.max(1, jumpsFrom(this.g.galaxy, a)[b]);
    rec.route = { a, b, leg: 0, progress: 0, legDays: days, earned: 0, trips: 0, last: null };
    return null;
  }
  recall(uid) { const rec = this.state.ships.find((x) => x.uid === uid); if (rec) rec.route = null; }

  newDay(day) {
    const s = this.state, g = this.g, lines = [];
    // wingmen: wages and recoveries
    for (const w of s.wingmen.slice()) {
      if (w.status === 'recovering' && day >= w.back) { w.status = 'active'; lines.push(`${w.call} is back on duty`); }
      if (s.credits >= w.wage) s.credits -= w.wage;
      else { s.wingmen = s.wingmen.filter((x) => x !== w); this.despawn(w.id); lines.push(`${w.call} quit: wages unpaid`); }
    }
    // trade routes: wages each day; a leg resolves when the ship arrives
    let trade = 0, wages = 0;
    for (const rec of this.routeShips()) {
      const R = rec.route;
      s.credits -= ROUTE_WAGE; wages += ROUTE_WAGE;
      R.progress++;
      if (R.progress < R.legDays) continue;
      R.progress = 0;
      const from = R.leg === 0 ? R.a : R.b, to = R.leg === 0 ? R.b : R.a;
      const cap = computeStats(rec.hull, rec.mods).cargo;
      const pick = this.bestCargo(from, to, cap);
      if (!pick) R.last = `ran empty to ${g.galaxy.systems[to].name} (no profitable cargo)`;
      else {
        const cost = g.economy.buy(from, pick.cid, pick.qty);
        if (Math.random() < this.legRisk(rec, from, to)) {
          s.credits -= cost; trade -= cost; R.earned -= cost;
          R.last = `raided on the way to ${g.galaxy.systems[to].name}: lost ${pick.qty} ${COMM[pick.cid].name} (−◈${fmt(cost)})`;
          if (Math.random() < 0.2) { const fee = Math.round(HULLS[rec.hull].price * 0.08); s.credits -= fee; trade -= fee; rec.route = null; R.last += `; ship disabled and towed home (◈${fmt(fee)})`; }
        } else {
          const gross = g.economy.sell(to, pick.cid, pick.qty) - cost;
          const profit = gross > 0 ? Math.round(gross * (1 - CREW_SHARE)) : gross; // the crew takes a share of good runs
          s.credits += profit; trade += profit; R.earned += profit;
          R.last = `sold ${pick.qty} ${COMM[pick.cid].name} at ${g.galaxy.systems[to].name} (+◈${fmt(profit)})`;
          g.economy.recordIntel(to); // the crew brings back fresh market intel
        }
      }
      lines.push(`${HULLS[rec.hull].name}: ${R.last}`);
      if (rec.route) { R.leg = 1 - R.leg; if (R.leg === 0) R.trips++; }
    }
    if (trade > 0) this.state.stats.earned += trade;
    const net = trade - wages;
    if (lines.length && g.mode === 'play') g.ui.toast(`⛴ Fleet report: ${lines.join(' · ')}`, net >= 0 ? 'info' : 'warn', 7);
    this._lastNet = net;
  }
}
