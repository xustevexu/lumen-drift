// Procedural sector events that interrupt the mine → trade → jump loop:
//   distress  — a disabled trader broadcasting for help (or a pirate lure), today only
//   vein      — a Lumenite surge in one asteroid field, today only
//   market    — a crash/boom born from a system's economy type, 2–3 days, felt sector-wide
//   base      — pirates occupy a derelict: armed fortress + guards, rich loot, 3 days
// Events are rolled once per in-game day from the galaxy seed, so reloading never rerolls them.
// The persistent record lives in state.events; 3D objects exist only for the current system.
import * as THREE from 'three';
import { RNG, fmt } from './rng.js';
import { COMM, MODULES, MODULE_ORDER, TRADER_NAMES, OUTLAW_NAMES, computeStats } from './data.js';
import { systemData } from './missions.js';
import { Ship } from './entities.js';
import { buildPirateBaseTemplate, buildDerelict } from './ships.js';
import { pilotRank } from './economy.js';
import { softTexture } from './shaders.js';

// daily chance per system for each event type
const CHANCE = { distress: 0.07, vein: 0.06, market: 0.03, base: 0.035 };
const MAX_MARKET = 2, MAX_BASES = 1;
const ASSIST_TIME = 4;      // seconds holding ASSIST to patch a trader up
const TRAP_RANGE = 750;     // a lure springs when you get this close
const GUARD_RANGE = 2200;   // pirate base launches guards inside this range

export const MARKET_EVENTS = {
  agricultural: { title: 'Crop blight', icon: '▲', scope: 'all', mult: { food: 1.9, medical: 1.25 }, blurb: (s) => `Blight on ${s}'s farms. Food Packs up sharply across the sector.` },
  mining: { title: 'Mine collapse', icon: '▲', scope: 'all', mult: { ferrite: 1.7, cobalt: 1.6, ice: 1.4, helion: 1.3 }, blurb: (s) => `Shafts collapsed at ${s}. Raw ore prices up everywhere.` },
  industrial: { title: 'Foundry strike', icon: '▲', scope: 'all', mult: { parts: 1.8, ferrite: 0.8, cobalt: 0.8 }, blurb: (s) => `Strike shuts ${s}'s foundries. Machine Parts scarce, ore demand dips.` },
  hightech: { title: 'Data core glut', icon: '▼', scope: 'all', mult: { data: 0.55, luxury: 1.3 }, blurb: (s) => `Overproduction at ${s}. Data Cores crash; Luxury Crystal demand rises.` },
  frontier: { title: 'Colony rush', icon: '▲', scope: 'local', mult: { food: 1.6, medical: 1.7, parts: 1.6 }, blurb: (s) => `Settlers flood ${s}. Food, medicine and parts fetch premium prices there.` },
};

// ---------------------------------------------------------------- reputation
export const REP_TIERS = [
  { min: -Infinity, name: 'Distrusted', pay: -0.1, repair: 0.15 },
  { min: 0, name: 'Unknown', pay: 0, repair: 0 },
  { min: 5, name: 'Known', pay: 0.05, repair: -0.05 },
  { min: 15, name: 'Trusted', pay: 0.1, repair: -0.1 },
  { min: 30, name: 'Renowned', pay: 0.15, repair: -0.15 },
  { min: 50, name: 'Legend', pay: 0.2, repair: -0.2 },
];
export function repTier(rep) { let t = REP_TIERS[0]; for (const r of REP_TIERS) if (rep >= r.min) t = r; return t; }
export function repSummary(rep) {
  const t = repTier(rep), pct = (x) => `${x > 0 ? '+' : ''}${Math.round(x * 100)}%`;
  return `${t.name} (${rep})${t.pay || t.repair ? ` · contract pay ${pct(t.pay)}, repairs ${pct(t.repair)}` : ''}`;
}

// ---------------------------------------------------------------- state
export function normalizeEventState(state) {
  if (!state.events || typeof state.events !== 'object' || !Array.isArray(state.events.list)) state.events = { day: 0, list: [] };
  if (!Number.isFinite(state.rep)) state.rep = 0;
  return state;
}
export function isLive(e, day, dayTime) {
  if (e.status === 'done' || e.status === 'lost' || day < e.start || day > e.end) return false;
  return day > e.start || dayTime >= (e.at || 0);
}
export function liveEvents(state) { return state.events.list.filter((e) => isLive(e, state.day, state.dayTime)); }

// Roll today's events for every system (deterministic per seed + day).
export function rollEvents(state, galaxy) {
  const day = state.day, ev = state.events;
  if (ev.day === day) return [];
  ev.day = day;
  ev.list = ev.list.filter((e) => e.end >= day && e.status !== 'done' && e.status !== 'lost');
  const rng = new RNG((state.seed ^ (day * 7919)) + 4242);
  const fresh = [];
  const active = (type, sys) => ev.list.some((e) => e.type === type && (sys == null || e.sys === sys));
  const count = (type) => ev.list.filter((e) => e.type === type).length;
  for (const s of galaxy.systems) {
    // always draw the same number of values per system so outcomes stay stable
    const r = { distress: rng.next(), vein: rng.next(), market: rng.next(), base: rng.next() };
    const sub = { a: rng.next(), b: rng.next(), c: rng.next(), d: rng.next(), seed: rng.int(1, 1e9) };
    const data = systemData(galaxy, s.id);
    const id = (t) => `${t}-${day}-${s.id}`;
    if (r.distress < CHANCE.distress && !active('distress', s.id)) {
      fresh.push({ id: id('distress'), type: 'distress', sys: s.id, start: day, end: day, at: 0.08 + sub.a * 0.65, seed: sub.seed,
        trap: sub.b < (s.eco === 'frontier' ? 0.4 : 0.28), hintOk: sub.c < 0.75, trader: TRADER_NAMES[Math.floor(sub.d * TRADER_NAMES.length)], status: 'active' });
    }
    if (r.vein < CHANCE.vein && data.fields.length && !active('vein', s.id)) {
      fresh.push({ id: id('vein'), type: 'vein', sys: s.id, start: day, end: day, at: 0.05 + sub.a * 0.5, field: Math.floor(sub.b * data.fields.length), seed: sub.seed, status: 'active' });
    }
    if (day >= 2 && r.market < CHANCE.market && !active('market', s.id) && count('market') + fresh.filter((e) => e.type === 'market').length < MAX_MARKET) {
      const def = MARKET_EVENTS[s.eco];
      const dur = 2 + (sub.c < 0.5 ? 1 : 0);
      fresh.push({ id: id('market'), type: 'market', sys: s.id, start: day, end: day + dur - 1, at: 0, eco: s.eco, title: def.title, icon: def.icon, scope: def.scope, mult: { ...def.mult }, status: 'active' });
    }
    const baseChance = CHANCE.base * (s.eco === 'frontier' ? 2 : 1);
    if (day >= 3 && s.id !== galaxy.startId && r.base < baseChance && data.derelicts.length && count('base') + fresh.filter((e) => e.type === 'base').length < MAX_BASES) {
      fresh.push({ id: id('base'), type: 'base', sys: s.id, start: day, end: day + 2, at: 0, derelict: Math.floor(sub.d * data.derelicts.length), seed: sub.seed,
        name: OUTLAW_NAMES[Math.floor(sub.a * OUTLAW_NAMES.length)], guardsLeft: null, baseHp: 1, status: 'active' });
    }
  }
  ev.list.push(...fresh);
  return fresh;
}

// ---------------------------------------------------------------- text
const left = (e, day) => (e.end === day ? 'ends today' : `${e.end - day + 1} days left`);
export function eventIcon(e) {
  if (e.type === 'distress') return { ch: '⚠', col: '#f0703c' };
  if (e.type === 'vein') return { ch: '✦', col: '#c8f56a' };
  if (e.type === 'base') return { ch: '☠', col: '#ff4a3a' };
  if (e.type === 'wreck') return { ch: '✧', col: '#ffd34a' };
  return { ch: e.icon, col: e.icon === '▼' ? '#ff6b4a' : '#7bc86c' };
}
export function signalHint(e, sensorLvl) {
  if (sensorLvl >= 2) return e.trap ? '⚠ Signal analysis: spoofed transponder. Likely an ambush.' : '✓ Signal analysis: authentic distress call.';
  if (sensorLvl >= 1) { const looksTrap = e.hintOk ? e.trap : !e.trap; return looksTrap ? 'Signal looks irregular. Could be a lure (Sensor Mk2 to confirm).' : 'Signal looks genuine (Sensor Mk2 to confirm).'; }
  return 'Unverified signal. Sensors Mk1+ can analyse it.';
}
export function describe(e, galaxy, state, sensorLvl = 0) {
  const sys = galaxy.systems[e.sys].name, day = state.day;
  const ic = eventIcon(e);
  if (e.type === 'distress') return { ...ic, title: 'Distress beacon', line: `Trader ${e.trader} is disabled in ${sys}. Beacon fades at the end of today. ${signalHint(e, sensorLvl)}` };
  if (e.type === 'vein') { const f = systemData(galaxy, e.sys).fields[e.field]; return { ...ic, title: 'Lumenite surge', line: `${f ? f.name : 'An asteroid field'} in ${sys} is shedding Lumenite. Today only.` }; }
  if (e.type === 'wreck') return { ...ic, title: 'Passenger tip', line: `A passenger says an unlisted wreck is drifting in ${sys}. Salvage it before Day ${e.end + 1}.` };
  if (e.type === 'base') { const d = systemData(galaxy, e.sys).derelicts[e.derelict]; return { ...ic, title: 'Pirate base', line: `The ${e.name} gang has fortified the ${d ? d.name : 'derelict'} in ${sys}. Armed and guarded, rich loot. ${left(e, day)}.` }; }
  return { ...ic, title: e.title, line: `${MARKET_EVENTS[e.eco].blurb(sys)} ${e.scope === 'all' ? '' : '(local) '}${left(e, day)}.` };
}

// ---------------------------------------------------------------- runtime (current system)
const _v = new THREE.Vector3();

export class SectorEvents {
  constructor(game) { this.g = game; this.rt = new Map(); this.syncT = 0; this.assist = null; }
  get state() { return this.g.state; }

  // ---- lifecycle hooks called by Game ----
  onEnterSystem() {
    this.rt.clear(); this.assist = null; // Game already removed last system's ships and rebuilt the world
    const fresh = rollEvents(this.state, this.g.galaxy);
    this.announceNews(fresh);
    this.sync(true);
  }
  newDay() {
    const fresh = rollEvents(this.state, this.g.galaxy);
    this.announceNews(fresh);
    this.sync();
  }
  // toast the live events in this system once play starts (start screen hides earlier toasts)
  briefing() {
    const here = liveEvents(this.state).filter((e) => e.sys === this.state.systemId);
    here.forEach((e, i) => setTimeout(() => this.toastEvent(e, true), 1800 + i * 1500));
  }
  persist() {
    for (const [id, r] of this.rt) {
      if (r.kind !== 'base' || !r.ship || r.ship.dead) continue;
      const e = this.find(id); if (e) e.baseHp = Math.max(0.05, r.ship.hp / r.ship.maxHp);
    }
  }
  find(id) { return this.state.events.list.find((e) => e.id === id); }

  // galaxy-wide news: market shocks and new pirate bases are heard everywhere
  announceNews(fresh) {
    if (this.g.mode !== 'play') return;
    for (const e of fresh) {
      if (e.type !== 'market' && e.type !== 'base') continue;
      const d = describe(e, this.g.galaxy, this.state);
      this.g.ui.toast(`NEWS · ${d.title}: ${d.line}`, e.type === 'base' ? 'warn' : 'info', 7);
    }
  }
  toastEvent(e, entering = false) {
    if (this.g.mode !== 'play') return;
    const p = this.g.player, r = this.rt.get(e.id);
    const dist = r && r.pos ? ` · ${this.g.ui.dist(r.pos.distanceTo(p.pos))}` : '';
    if (e.type === 'distress') { this.g.ui.toast(`📡 Distress beacon: trader ${e.trader} is disabled${dist}. ${signalHint(e, p.stats.sensorLvl)}`, 'warn', 7); this.g.audio.play('alarm', { vol: 0.4, rate: 1.3 }); }
    else if (e.type === 'vein') this.g.ui.toast(`✦ Lumenite surge in ${this.g.world.fields[e.field]?.name || 'a nearby field'}! Rich veins today only.`, 'good', 6);
    else if (e.type === 'base' && entering) this.g.ui.toast(`☠ Pirate base active in this system${dist}. Expect heavy resistance.`, 'warn', 6);
    else if (e.type === 'market' && entering) { const d = describe(e, this.g.galaxy, this.state); this.g.ui.toast(`${d.title}: ${d.line}`, 'info', 5); }
  }

  // create / remove 3D content to match the live events in this system
  sync(entering = false) {
    const s = this.state, here = new Set();
    for (const e of s.events.list) {
      if (e.sys !== s.systemId || !isLive(e, s.day, s.dayTime)) continue;
      here.add(e.id);
      if (!this.rt.has(e.id)) {
        this.materialize(e);
        if (!entering || e.type !== 'market') this.toastEvent(e, entering);
      }
    }
    for (const [id, r] of this.rt) if (!here.has(id)) this.dematerialize(id, r);
  }

  materialize(e) {
    const g = this.g, W = g.world;
    if (e.type === 'market') { this.rt.set(e.id, { kind: 'market' }); return; }
    if (e.type === 'vein') {
      const f = W.fields[e.field]; if (!f) { this.rt.set(e.id, { kind: 'vein' }); return; }
      this.setSurge(f, true);
      this.rt.set(e.id, { kind: 'vein', field: f, pos: f.center });
      return;
    }
    if (e.type === 'distress') {
      const pos = this.distressPos(e);
      const stats = { ...computeStats('mule', { engine: 0, cargo: 0, barrier: 1, beam: 0, missile: 0, mining: 0, sensors: 0, hull: 0, reactor: 0 }), speed: 46, shieldRegen: 0 };
      const t = new Ship(g, { kind: 'trader', hullId: 'mule', palette: 'trader', stats, name: e.trader });
      t.pos.copy(pos); t.yaw = new RNG(e.seed).range(0, 6.28); t.pitch = 0.25; t.roll = 0.4;
      t.hp = t.maxHp * 0.32; t.shield = 0; t.speed = 0; t.throttle = 0;
      t.disabled = true; t.eventId = e.id; t.origin = e.sys;
      t.cargo = { [['food', 'medical', 'parts', 'data'][e.seed % 4]]: 10 + (e.seed % 12) };
      t.dest = { pos: W.station.pos.clone(), type: 'station', gate: null };
      t.obj.quaternion.setFromEuler(new THREE.Euler(t.pitch, t.yaw, t.roll, 'YXZ'));
      // pulsing orange beacon so it reads as "in trouble" from a distance
      const beacon = new THREE.Sprite(new THREE.SpriteMaterial({ map: softTexture(), color: new THREE.Color(1.0, 0.45, 0.15).multiplyScalar(2), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
      beacon.position.set(0, 6, 0); beacon.scale.setScalar(26); t.obj.add(beacon); t.beacon = beacon;
      g.traders.push(t);
      this.rt.set(e.id, { kind: 'distress', ship: t, pos: t.pos });
      return;
    }
    if (e.type === 'wreck') {
      const D = buildDerelict(e.seed);
      D.group.position.copy(this.openSpacePos(e.seed));
      D.group.rotation.set(1.1, e.seed % 6, 0.4);
      D.lamp.material = D.lamp.material.clone(); D.lamp.material.color.set(0xffd34a); D.glow.material = D.glow.material.clone(); D.glow.material.color.set(0xffd34a);
      g.scene.add(D.group);
      this.rt.set(e.id, { kind: 'wreck', obj: D, pos: D.group.position });
      return;
    }
    if (e.type === 'base') {
      const d = W.derelicts[e.derelict]; if (!d) { this.rt.set(e.id, { kind: 'base' }); return; }
      d.group.visible = false; d.occupied = true;
      const rank = pilotRank(this.state);
      if (e.guardsLeft == null) e.guardsLeft = 2 + Math.min(2, Math.floor(rank / 2));
      const stats = { speed: 0, turn: 0.4, cargo: 0, shield: 220 + rank * 70, shieldRegen: 8 + rank * 2, hull: 700 + rank * 260, dps: 13 + rank * 4, beamRange: 460,
        hard: 1, mslCap: 4, mslDmg: 45 + rank * 10, energy: 400, energyRegen: 40, sensor: 3000 };
      const o = new Ship(g, { kind: 'outlaw', hullId: 'kestrel', palette: 'outlaw', tpl: buildPirateBaseTemplate(), stats, name: `${e.name} Base` });
      o.pos.copy(d.pos); o.yaw = 0; o.static = true; o.isBase = true; o.eventId = e.id;
      o.hp = o.maxHp * e.baseHp; o.missiles = stats.mslCap; o.mslCd = 4; o.retarget = 0; o.state = 'guard'; o.spawnTime = g.time; o.orbitDir = 1;
      o.beam = g.fx.makeBeam(0xff4a3a);
      o.cargo = { luxury: 4, data: 6 };
      g.outlaws.push(o);
      this.rt.set(e.id, { kind: 'base', ship: o, pos: o.pos, derelict: d, guardsOut: false });
    }
  }

  dematerialize(id, r) {
    const g = this.g;
    if (r.kind === 'vein' && r.field) this.setSurge(r.field, false);
    if (r.kind === 'distress' && r.ship && !r.ship.dead) {
      g.fx.particles.burst(r.ship.pos, 30, 60, 0xb8a0ff, 5, 1.0);
      if (g.target === r.ship) g.target = null;
      r.ship.remove();
    }
    if (r.kind === 'wreck' && r.obj) g.scene.remove(r.obj.group);
    if (r.kind === 'base') {
      if (r.ship && !r.ship.dead) { r.ship.beam && (r.ship.beam.visible = false); if (g.target === r.ship) g.target = null; r.ship.remove(); }
      if (r.derelict) { r.derelict.group.visible = true; r.derelict.occupied = false; }
    }
    this.rt.delete(id);
    if (this.assist && this.assist.id === id) this.assist = null;
  }

  // somewhere along a station↔gate lane, clear of planets and the star
  distressPos(e) {
    const W = this.g.world, rng = new RNG(e.seed + 17);
    const st = W.station.pos;
    for (let i = 0; i < 20; i++) {
      const gate = W.gates[rng.int(0, W.gates.length - 1)];
      const p = st.clone().lerp(gate.pos, rng.range(0.25, 0.7));
      const side = _v.subVectors(gate.pos, st).cross(new THREE.Vector3(0, 1, 0)).normalize();
      p.addScaledVector(side, rng.range(-900, 900)).add(new THREE.Vector3(0, rng.range(-80, 80), 0));
      const clear = W.planets.every((pl) => pl.pos.distanceTo(p) > pl.radius + 450) && p.length() > this.g.sysData.star.radius + 1200
        && W.fields.every((f) => f.center.distanceTo(p) > f.radius + 150);
      if (clear) return p;
    }
    return st.clone().add(new THREE.Vector3(1400, 0, 900));
  }

  // a quiet spot away from lanes, planets and fields (for hidden wrecks)
  openSpacePos(seed) {
    const W = this.g.world, rng = new RNG(seed + 31);
    for (let i = 0; i < 30; i++) {
      const a = rng.range(0, Math.PI * 2), r = rng.range(3000, 7000);
      const p = new THREE.Vector3(Math.cos(a) * r, rng.range(-150, 150), Math.sin(a) * r);
      const clear = W.planets.every((pl) => pl.pos.distanceTo(p) > pl.radius + 450) && W.fields.every((f) => f.center.distanceTo(p) > f.radius + 200)
        && W.station.pos.distanceTo(p) > 800 && W.gates.every((gt) => gt.pos.distanceTo(p) > 800);
      if (clear) return p;
    }
    return new THREE.Vector3(4000, 0, -3000);
  }

  // passenger tip: an unlisted wreck appears on the chart until a couple of days after the contract's deadline
  addTip(m) {
    const s = this.state;
    const e = { id: `wreck-${m.id}`, type: 'wreck', sys: m.side.sys, start: s.day, end: m.deadline + 2, at: 0, seed: m.side.seed, who: m.who, status: 'active' };
    s.events.list.push(e);
    const sysName = this.g.galaxy.systems[e.sys].name;
    this.g.ui.toast(`✧ A passenger leans in: "There's a wreck nobody's claimed in ${sysName}." Marked on your chart.`, 'good', 6);
    this.sync();
  }

  // tint a field's haze and re-colour a share of its rocks to glow Lumenite green
  setSurge(f, on) {
    f.surge = on;
    const lum = new THREE.Color(COMM.lumenite.color);
    for (const h of f.haze) {
      if (on) { h.userData.col = h.userData.col || h.material.color.clone(); h.userData.op = h.userData.op ?? h.material.opacity; h.material.color.copy(lum); h.material.opacity = 0.16; }
      else if (h.userData.col) { h.material.color.copy(h.userData.col); h.material.opacity = h.userData.op; }
    }
    const rng = new RNG(f.data.seed + 5);
    const c = new THREE.Color();
    for (const r of f.rocks) {
      const pick = rng.next() < 0.35;
      const M = f.meshes[r.v];
      c.set(on && pick ? COMM.lumenite.color : COMM[r.ore].color);
      M.aOre.setXYZ(r.idx, c.r, c.g, c.b);
    }
    f.meshes.forEach((M) => (M.aOre.needsUpdate = true));
  }
  surgeBonus(field) { return field && field.surge ? 0.3 : 0; }

  // ---- per-frame ----
  update(dt) {
    this.syncT -= dt;
    if (this.syncT <= 0) { this.syncT = 0.5; this.sync(); }
    const g = this.g, p = g.player;
    for (const [id, r] of this.rt) {
      const e = this.find(id); if (!e) continue;
      if (r.kind === 'distress') {
        const t = r.ship;
        if (t.dead) { if (e.status === 'active') { e.status = 'lost'; g.ui.toast(`Trader ${e.trader}'s beacon went silent.`, 'warn', 4); } this.rt.delete(id); continue; }
        if (t.beacon) t.beacon.material.opacity = t.disabled ? 0.35 + 0.65 * (Math.sin(g.time * 5) > 0 ? 1 : 0.2) : 0;
        if (e.trap && e.status === 'active' && t.pos.distanceTo(p.pos) < TRAP_RANGE && !g.docked) this.springTrap(e, r);
      } else if (r.kind === 'base') {
        const o = r.ship;
        if (!o || o.dead) continue;
        if (!r.guardsOut && e.guardsLeft > 0 && o.pos.distanceTo(p.pos) < GUARD_RANGE && !g.docked) {
          r.guardsOut = true;
          g.spawnOutlaws({ n: e.guardsLeft, entry: o.pos.clone().add(_v.set(0, 30, 0)), name: e.name, tough: 1.25, guardOf: e.id, burstColor: 0xff4a3a,
            toast: `☠ ${e.name} Base scrambles ${e.guardsLeft} guard${e.guardsLeft > 1 ? 's' : ''}!` });
        }
      }
    }
  }

  springTrap(e, r) {
    const g = this.g, t = r.ship;
    e.status = 'done';
    g.fx.particles.burst(t.pos, 60, 70, 0xff6a4a, 6, 1.2);
    g.fx.explosion(t.pos.clone(), 1.2, 0xff7a40);
    if (g.target === t) g.target = null;
    t.remove(); this.rt.delete(e.id);
    const rank = pilotRank(this.state);
    const n = Math.max(2, rank <= 1 ? 2 : rank === 2 ? 2 : 3);
    const entry = g.player.pos.clone().add(_v.subVectors(t.pos, g.player.pos).setY(0).normalize().multiplyScalar(-650));
    g.spawnOutlaws({ n, entry, toast: `⚠ It was a lure! ${n} raiders drop out of hiding!` });
  }

  // ---- ASSIST interaction (hold action near a disabled trader) ----
  interaction(p) {
    for (const [id, r] of this.rt) {
      if (r.kind === 'wreck' && r.pos.distanceTo(p.pos) < 160) {
        const pct = this.assist && this.assist.id === id ? Math.round(this.assist.t / ASSIST_TIME * 100) : 0;
        return { type: 'assist', label: pct ? `SALVAGING ${pct}%` : 'SALVAGE TIP WRECK', hold: true, warm: true, eventId: id, target: r.pos };
      }
      if (r.kind !== 'distress' || r.ship.dead || !r.ship.disabled) continue;
      const e = this.find(id); if (!e || e.status !== 'active') continue;
      if (r.ship.pos.distanceTo(p.pos) < 170 + r.ship.radius) {
        const pct = this.assist && this.assist.id === id ? Math.round(this.assist.t / ASSIST_TIME * 100) : 0;
        return { type: 'assist', label: pct ? `REPAIRING ${pct}%` : `ASSIST ${e.trader}`, hold: true, warm: true, eventId: id, ship: r.ship };
      }
    }
    return null;
  }
  updateAssist(dt, act) {
    const g = this.g;
    if (!(g.input.mine && act && act.type === 'assist')) { if (this.assist) { this.assist = null; g.mineBeam.visible = false; g.audio.loop('mine', 'mine', false); } return; }
    if (!this.assist || this.assist.id !== act.eventId) this.assist = { id: act.eventId, t: 0 };
    this.assist.t += dt;
    const from = g.muzzleWorld(g.player, 0, new THREE.Vector3());
    g.fx.showBeam(g.mineBeam, from, act.ship ? act.ship.pos : act.target, 1.1);
    g.audio.loop('mine', 'mine', true, 0.25, 0.4);
    if (this.assist.t >= ASSIST_TIME) {
      this.assist = null; g.mineBeam.visible = false; g.audio.loop('mine', 'mine', false); g.input.mine = false;
      const e = this.find(act.eventId);
      if (e && e.type === 'wreck') this.salvageTip(e); else this.rescue(e, act.ship);
    }
  }
  rescue(e, t) {
    const g = this.g, rng = new RNG(e.seed + 3);
    e.status = 'done';
    const credits = 400 + rng.int(0, 400) + pilotRank(this.state) * 150;
    g.addCredits(credits);
    this.addRep(2);
    let gift = '';
    const [k, q] = Object.entries(t.cargo)[0] || [];
    if (k && rng.chance(0.5)) { const n = Math.min(g.cargoFree(), Math.ceil(q * 0.4)); if (n > 0) { g.player.cargo[k] = (g.player.cargo[k] || 0) + n; t.cargo[k] -= n; gift = ` + ${n} ${COMM[k].name}`; } }
    g.ui.toast(`${e.trader}: "You saved our hides, pilot!" +◈ ${fmt(credits)}${gift} · Reputation +2`, 'good', 5);
    g.audio.play('coins', { vol: 0.8 });
    // patched up: limps off to the station
    t.disabled = false; t.hp = Math.max(t.hp, t.maxHp * 0.6); t.throttle = 0.6; t.pitch = 0; t.roll = 0;
    if (t.beacon) t.beacon.visible = false;
    this.rt.delete(e.id);
  }

  salvageTip(e) {
    const g = this.g, rng = new RNG(e.seed + 11), r = this.rt.get(e.id);
    e.status = 'done';
    const credits = 600 + rng.int(0, 900) + pilotRank(this.state) * 200;
    g.addCredits(credits);
    const k = rng.pick(['luxury', 'data', 'lumenite', 'medical']);
    const q = Math.min(g.cargoFree(), rng.int(3, 8));
    if (q > 0) g.player.cargo[k] = (g.player.cargo[k] || 0) + q;
    let extra = '';
    if (g.player.stats.mslCap > 0) { g.player.missiles = Math.min(g.player.stats.mslCap, g.player.missiles + 2); extra = ' + 2 missiles'; }
    g.ui.toast(`✧ The tip was good! Salvaged ◈ ${fmt(credits)}${q > 0 ? ` + ${q} ${COMM[k].name}` : ''}${extra}`, 'good', 5);
    g.audio.play('coins', { vol: 0.8 });
    if (r) { g.fx.particles.burst(r.pos, 30, 40, 0xffd34a, 4, 1.0); this.dematerialize(e.id, r); }
  }

  addRep(n) {
    const before = repTier(this.state.rep).name;
    this.state.rep += n;
    const after = repTier(this.state.rep).name;
    if (after !== before) this.g.ui.toast(`Reputation: you are now ${after.toUpperCase()} in the sector`, n > 0 ? 'good' : 'warn', 4);
  }

  // ---- pirate base ----
  onGuardDown(o) { const e = this.find(o.guardOf); if (e && e.guardsLeft > 0) e.guardsLeft--; }
  onBaseDestroyed(o, attacker) {
    const g = this.g, e = this.find(o.eventId), r = this.rt.get(o.eventId);
    const rank = pilotRank(this.state), rng = new RNG((e ? e.seed : 1) + 9);
    g.fx.explosion(o.pos.clone(), 6, 0xff7a40);
    setTimeout(() => g.fx.explosion(o.pos.clone().add(new THREE.Vector3(18, 6, -10)), 4, 0xffb060), 350);
    g.audio.play('explosion', { vol: 1 });
    if (e) e.status = 'done';
    if (r && r.derelict) { r.derelict.group.visible = true; r.derelict.occupied = false; g.state.derelictLooted[`${g.state.systemId}:${r.derelict.seed}`] = g.state.day; }
    this.rt.delete(o.eventId);
    if (attacker !== g.player) { g.ui.toast(`${o.name} was destroyed.`, 'info', 3); return; }
    const credits = 1800 + rank * 700 + rng.int(0, 600);
    g.fx.dropCrate(o.pos, {}, credits);
    g.fx.dropCrate(o.pos, { luxury: rng.int(3, 5) });
    g.fx.dropCrate(o.pos, { lumenite: rng.int(3, 6) });
    g.fx.dropCrate(o.pos, { data: rng.int(4, 8) });
    g.state.stats.kills++;
    this.addRep(3);
    // recovered pirate tech: a free module level on the ship that did the job
    const rec = g.activeShipRec();
    const open = MODULE_ORDER.filter((k) => rec.mods[k] < 3);
    let tech;
    if (open.length) {
      const k = open[rng.int(0, open.length - 1)];
      rec.mods[k]++; g.refreshPlayerStats();
      if (k === 'missile') g.player.missiles = g.player.stats.mslCap;
      tech = `Recovered pirate tech: ${MODULES[k].name} upgraded to Mk${rec.mods[k]} (free)`;
    } else { g.addCredits(3000); tech = 'Your ship is fully upgraded, so the pirate tech sold for ◈ 3,000'; }
    g.ui.toast(`☠ ${o.name} destroyed! Loot crates released (◈ ${fmt(credits)} + cargo) · Reputation +3`, 'good', 6);
    setTimeout(() => g.ui.toast(`⚙ ${tech}`, 'good', 6), 1200);
    g.save();
  }

  // ---- map / HUD helpers ----
  markers() {
    const out = [];
    for (const [id, r] of this.rt) {
      const e = this.find(id); if (!e) continue;
      if (r.kind === 'distress' && r.ship.disabled) out.push({ key: `ev_${id}`, pos: r.pos, name: `📡 DISTRESS · ${e.trader}`, edge: true, ship: r.ship });
      if (r.kind === 'base' && r.ship && !r.ship.dead) out.push({ key: `ev_${id}`, pos: r.pos, name: `☠ ${r.ship.name.toUpperCase()}`, edge: true, ship: r.ship });
      if (r.kind === 'wreck') out.push({ key: `ev_${id}`, pos: r.pos, name: '✧ TIP: UNLISTED WRECK', edge: true });
    }
    return out;
  }
  mapItems() {
    const out = [];
    for (const [id, r] of this.rt) {
      const e = this.find(id); if (!e) continue;
      if (r.kind === 'distress' && r.ship.disabled) out.push({ kind: 'event', ev: e, pos: r.pos, name: `Distress · ${e.trader}`, color: '#f0703c', r: 6, arrive: 140 });
      if (r.kind === 'base' && r.ship && !r.ship.dead) out.push({ kind: 'event', ev: e, pos: r.pos, name: `${e.name} Base`, color: '#ff4a3a', r: 7, arrive: 900 });
      if (r.kind === 'wreck') out.push({ kind: 'event', ev: e, pos: r.pos, name: 'Unlisted wreck', color: '#ffd34a', r: 6, arrive: 110 });
    }
    return out;
  }

  // ---- debug: ?event=distress|vein|market|base forces one in the current system ----
  force(type) {
    const s = this.state, sys = this.g.sysInfo, day = s.day;
    const seed = Math.floor(Math.random() * 1e9);
    const base = { id: `${type}-${day}-${sys.id}-dbg${seed % 1000}`, type, sys: sys.id, start: day, end: day, at: s.dayTime, seed, status: 'active' };
    let e;
    if (type === 'distress') e = { ...base, trap: new URLSearchParams(location.search).get('trap') === '1', hintOk: true, trader: TRADER_NAMES[seed % TRADER_NAMES.length] };
    else if (type === 'vein') e = { ...base, field: 0 };
    else if (type === 'market') { const d = MARKET_EVENTS[sys.eco]; e = { ...base, end: day + 1, eco: sys.eco, title: d.title, icon: d.icon, scope: d.scope, mult: { ...d.mult } }; }
    else if (type === 'base') e = { ...base, end: day + 2, derelict: 0, name: OUTLAW_NAMES[seed % OUTLAW_NAMES.length], guardsLeft: null, baseHp: 1 };
    if (!e) return;
    s.events.list.push(e);
    this.sync();
  }
}
