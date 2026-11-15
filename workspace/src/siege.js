// Pirate sieges ("horde night"): the Red Wake announces an assault on a station (or one of your bigger
// outposts) a few days ahead. Prepare — hire militia, earn faction standing, upgrade — then show up on
// the day for three waves ending in a Dreadnought flagship. Stay away and it resolves on its own odds.
import * as THREE from 'three';
import { fmt } from './rng.js';
import { DAY_LENGTH, MODULES, MODULE_ORDER, OUTLAW_NAMES } from './data.js';
import { Ship } from './entities.js';
import { buildShipTemplate } from './ships.js';
import { pilotRank } from './economy.js';
import { FACTIONS, factionTier, standingWith } from './factions.js';
import { jumpsFrom, routePath } from './missions.js';
import { builtMods, countBuilt } from './outposts.js';
import { dogfight } from './ai.js';

export const MILITIA_PRICE = 2500, MILITIA_MAX = 4;
const LEAD_DAYS = 3, ARRIVE_AT = 0.4; // announced 3 days ahead; armada arrives at 09:36 on the day
const WAVES = 3;
const _v = new THREE.Vector3(), _v2 = new THREE.Vector3(), _v3 = new THREE.Vector3();
const UP = new THREE.Vector3(0, 1, 0);
const absT = (s) => s.day + s.dayTime;

export function normalizeSiegeState(state) {
  if (!state.siege || typeof state.siege !== 'object') state.siege = { next: Math.max(6, state.day + 4), active: null, record: { won: 0, lost: 0 } };
  if (!state.siege.record) state.siege.record = { won: 0, lost: 0 };
  return state;
}

export class SiegeManager {
  constructor(game) { this.g = game; this.allies = []; this.proxy = null; this.waveTimer = 0; }
  get state() { return this.g.state; }
  get S() { return this.state.siege; }
  get A() { return this.S.active; }

  // ---------------------------------------------------------------- scheduling
  newDay(day) {
    const S = this.S;
    if (S.active && S.active.phase === 'done') S.active = null;
    if (S.active || day < S.next) return;
    const force = new URLSearchParams(location.search).get('siege');
    this.announce(day + (force ? 0 : LEAD_DAYS));
    S.next = S.active.day + 6 + Math.floor(Math.random() * 5);
  }
  announce(day) {
    const g = this.g, s = this.state, rank = pilotRank(s);
    // big outposts tempt the Red Wake; otherwise a station within reach of the player
    const bigOps = s.outposts.filter((o) => builtMods(o).length >= 3);
    let target;
    if (bigOps.length && Math.random() < 0.35) { const o = bigOps[Math.floor(Math.random() * bigOps.length)]; target = { type: 'outpost', sys: o.sys, outpostId: o.id, name: o.name }; }
    else {
      const dist = jumpsFrom(g.galaxy, s.systemId);
      const near = g.galaxy.systems.filter((x) => dist[x.id] <= 3);
      const sys = near[Math.floor(Math.random() * near.length)];
      target = { type: 'station', sys: sys.id, name: `${sys.station} Station` };
    }
    const waves = [2 + Math.floor(rank / 2), 3 + Math.floor(rank / 2), 3 + Math.floor((rank + 1) / 2)].map((n) => Math.min(6, n));
    this.S.active = { id: `siege${day}`, target, day, at: day + ARRIVE_AT, phase: 'announced', funded: 0, wave: 0, waves, flagship: OUTLAW_NAMES[Math.floor(Math.random() * OUTLAW_NAMES.length)] };
    const sys = g.galaxy.systems[target.sys].name;
    const when = day === s.day ? 'TODAY' : `on Day ${day}`;
    if (g.mode === 'play') {
      g.ui.toast(`⚔ NEWS: A Red Wake armada is massing to strike ${target.name} (${sys}) ${when}. ${target.type === 'station' ? 'The station is hiring militia.' : 'Your turrets will need help.'}`, 'warn', 9);
      g.audio.play('alarm', { vol: 0.6, rate: 0.8 });
    }
  }
  forceNow(inSec = 20) { // debug helper
    this.announce(this.state.day); const A = this.A;
    A.target = { type: 'station', sys: this.state.systemId, name: this.g.world.station.name };
    A.at = absT(this.state) + inSec / DAY_LENGTH;
  }

  // ---------------------------------------------------------------- odds & prep
  defenders() {
    const A = this.A; if (!A) return 0;
    if (A.target.type === 'outpost') return A.funded;
    const lvl = factionTier(standingWith(this.state, this.g.galaxy.systems[A.target.sys].eco)).level;
    return 2 + A.funded + Math.max(0, lvl);
  }
  autoOdds() {
    const A = this.A, s = this.state, rank = pilotRank(s);
    let def;
    if (A.target.type === 'outpost') { const o = s.outposts.find((x) => x.id === A.target.outpostId); def = 15 + 35 * (o ? countBuilt(o, 'turret') : 0) + 25 * A.funded; }
    else def = 40 + 28 * this.defenders();
    const att = A.waves.reduce((a, n) => a + n, 0) * (18 + rank * 5) + 120 + rank * 40;
    return def / (def + att);
  }
  hire() {
    const A = this.A, s = this.state;
    if (!A || A.phase !== 'announced' || A.funded >= MILITIA_MAX || s.credits < MILITIA_PRICE) return false;
    s.credits -= MILITIA_PRICE; A.funded++; return true;
  }
  reward() { return 3000 + pilotRank(this.state) * 1500; }

  // ---------------------------------------------------------------- per frame
  update(dt) {
    const A = this.A, g = this.g, s = this.state; if (!A || A.phase === 'done') return;
    if (A.phase === 'announced' && absT(s) >= A.at) {
      if (A.target.sys === s.systemId && !g.docked) this.startLive();
      else if (A.target.sys !== s.systemId) this.autoResolve("You weren't there.");
    }
    if (A.phase !== 'live') return;
    if (this.proxy && !this.proxy.dead) { this.proxy.updateMotion(dt, null); this.proxy.updateVisual(dt); }
    this.updateAllies(dt);
    const alive = g.outlaws.filter((o) => !o.dead && o.siegeOf === A.id);
    if (!alive.length) {
      if (A.wave >= WAVES) { this.victory(); return; }
      this.waveTimer -= dt;
      if (this.waveTimer <= 0) this.spawnWave();
    } else this.waveTimer = A.wave === 0 ? 0 : 12;
  }

  targetPos() {
    const A = this.A, g = this.g;
    if (A.target.type === 'station') return g.world.station.pos.clone();
    const rr = g.outposts.rt.get(A.target.outpostId);
    return rr ? rr.pos.clone() : null;
  }
  startLive() {
    const A = this.A, g = this.g, s = this.state, rank = pilotRank(s);
    const pos = this.targetPos(); if (!pos) { this.autoResolve(''); return; }
    A.phase = 'live'; A.wave = 0; this.waveTimer = 0;
    // something for the armada to shoot at: the station's (or outpost's) defence barrier
    if (A.target.type === 'station') {
      const tpl = { g: new THREE.Group(), box: new THREE.Box3(new THREE.Vector3(-80, -40, -80), new THREE.Vector3(80, 40, 80)), muzzles: [new THREE.Vector3()] };
      const stats = { speed: 0, turn: 0, cargo: 0, shield: 1400 + rank * 250, shieldRegen: 4, hull: 2600 + rank * 500, dps: 0, beamRange: 0, hard: 0, mslCap: 0, mslDmg: 0, energy: 1, energyRegen: 0, sensor: 0 };
      this.proxy = new Ship(g, { kind: 'outpost', tpl, stats, name: A.target.name });
      this.proxy.isSiegeProxy = true; this.proxy.pos.copy(pos);
      if (A.proxyHp != null) this.proxy.hp = this.proxy.maxHp * A.proxyHp;
    } else this.proxy = null; // outposts already have their own barrier proxy
    // defenders
    const fid = g.galaxy.systems[A.target.sys].eco, F = FACTIONS[fid];
    const n = this.defenders();
    for (let i = 0; i < n; i++) {
      const stats = { speed: 84 + rank * 3, turn: 1.6, cargo: 0, shield: 60 + rank * 30, shieldRegen: 8, hull: 140 + rank * 50, dps: 9 + rank * 3, beamRange: 280, hard: 1, mslCap: 2, mslDmg: 50, energy: 140, energyRegen: 20, sensor: 3000 };
      const a = new Ship(g, { kind: 'ally', hullId: 'kestrel', palette: 'player', tpl: buildShipTemplate('kestrel', 'player'), stats, name: `${F.short} Militia ${'αβγδεζηθ'[i]}` });
      a.pos.copy(pos).add(_v.set(Math.cos(i * 1.3) * 220, 30 + (i % 3) * 20, Math.sin(i * 1.3) * 220));
      a.beam = g.fx.makeBeam(0x58e8ff); a.orbitDir = i % 2 ? 1 : -1; a.missiles = 2; a.mslCd = 5 + i;
      this.allies.push(a);
    }
    g.ui.toast(`⚔ The armada is arriving at ${A.target.name}! ${n ? `${n} defender${n > 1 ? 's' : ''} stand with you.` : 'You stand alone.'}`, 'warn', 6);
    g.audio.play('alarm', { vol: 0.9 });
  }
  spawnWave() {
    const A = this.A, g = this.g, pos = this.targetPos(); if (!pos) return;
    const n = A.waves[A.wave]; A.wave++;
    const dir = _v.copy(pos).setY(0).normalize().negate().applyAxisAngle(UP, (A.wave - 2) * 0.7);
    const entry = pos.clone().addScaledVector(dir, 2400).add(_v2.set(0, 80, 0));
    g.spawnOutlaws({ n, entry, name: 'Red Wake', tough: 1 + A.wave * 0.08, siegeOf: A.id, toast: `⚔ Wave ${A.wave}/${WAVES}: ${n} raiders${A.wave === WAVES ? ` and the Dreadnought ${A.flagship}` : ''} incoming!` });
    if (A.wave === WAVES) this.spawnFlagship(entry);
  }
  spawnFlagship(entry) {
    const g = this.g, A = this.A, rank = pilotRank(this.state);
    const base = g.outlawTpl || buildShipTemplate('kestrel', 'outlaw'), k = g.outlawTpl ? 2.6 : 3.4;
    const wrap = new THREE.Group(); const c = base.g.clone(true); c.scale.setScalar(k); wrap.add(c);
    const box = base.box.clone(); box.min.multiplyScalar(k); box.max.multiplyScalar(k);
    const tpl = { g: wrap, engines: [], muzzles: base.muzzles.map((m) => m.clone().multiplyScalar(k)), box };
    const stats = { speed: 58, turn: 0.8, cargo: 60, shield: 600 + rank * 160, shieldRegen: 10, hull: 1500 + rank * 420, dps: 20 + rank * 5, beamRange: 340, hard: 1, mslCap: 6, mslDmg: 60 + rank * 10, energy: 400, energyRegen: 40, sensor: 4000 };
    const o = new Ship(g, { kind: 'outlaw', hullId: 'kestrel', palette: 'outlaw', tpl, stats, name: `Dreadnought ${A.flagship}` });
    o.pos.copy(entry).add(_v.set(0, 40, -120)); _v.subVectors(this.targetPos(), o.pos); o.yaw = Math.atan2(_v.x, _v.z);
    o.throttle = 1; o.state = 'hunt'; o.missiles = stats.mslCap; o.mslCd = 4; o.retarget = 0; o.orbitDir = 1; o.spawnTime = g.time;
    o.beam = g.fx.makeBeam(0xff3a2a); o.siegeOf = A.id; o.isFlagship = true; o.cargo = { luxury: 6, lumenite: 6 };
    g.outlaws.push(o);
  }
  // what armada ships aim at
  target(o) {
    if (this.proxy && !this.proxy.dead) return this.proxy;
    if (this.A && this.A.target.type === 'outpost') return this.g.outposts.raidTarget({ raidOf: this.A.target.outpostId });
    return null;
  }

  updateAllies(dt) {
    const g = this.g, home = this.targetPos();
    for (let i = this.allies.length - 1; i >= 0; i--) {
      const a = this.allies[i];
      if (a.dead) { this.allies.splice(i, 1); continue; }
      a.retarget = (a.retarget || 0) - dt;
      if (a.retarget <= 0 || !a.tgt || a.tgt.dead) {
        a.retarget = 2; a.tgt = null; let bd = 3500;
        for (const o of g.outlaws) { if (o.dead) continue; const d = o.pos.distanceTo(home || a.pos) * 0.6 + o.pos.distanceTo(a.pos) * 0.4; if (d < bd) { bd = d; a.tgt = o; } }
      }
      const t = a.tgt; a.firing = false; a.boost = false;
      if (!t) { // patrol around the station
        _v.subVectors(a.pos, home).setY(0).normalize(); _v2.crossVectors(_v, UP).multiplyScalar(a.orbitDir);
        _v3.copy(home).addScaledVector(_v, 260).addScaledVector(_v2, 200); a.steerTo(_v3, dt, 0.6); a.throttle = 0.5;
      } else dogfight(g, a, t, dt);
      if (!a.firing && a.beam) a.beam.visible = false;
      a.updateMotion(dt, g.world); a.updateVisual(dt);
    }
  }

  // ---------------------------------------------------------------- outcomes
  onProxyDestroyed() {
    this.g.fx.explosion(this.proxy.pos.clone(), 5, 0xffa050);
    this.proxy = null;
    this.defeat('The armada broke through the station defences.');
  }
  onShipDown(o, attacker) {
    if (!o.isFlagship || attacker !== this.g.player) return;
    // flagship loot: credits, rare cargo and a recovered piece of military tech
    const g = this.g, rank = pilotRank(this.state);
    const credits = 2500 + rank * 900;
    g.fx.dropCrate(o.pos, {}, credits);
    g.fx.dropCrate(o.pos, { lumenite: 6 }); g.fx.dropCrate(o.pos, { luxury: 5 });
    const rec = g.activeShipRec(), open = MODULE_ORDER.filter((k) => rec.mods[k] < 3);
    if (open.length) {
      const k = open[Math.floor(Math.random() * open.length)]; rec.mods[k]++; g.refreshPlayerStats();
      setTimeout(() => g.ui.toast(`⚙ Dreadnought salvage: ${MODULES[k].name} upgraded to Mk${rec.mods[k]} (free)`, 'good', 6), 1500);
    }
    g.ui.toast(`☠ Dreadnought ${this.A.flagship} destroyed! Loot crates released (◈${fmt(credits)} + cargo)`, 'good', 5);
  }
  victory() {
    const A = this.A, g = this.g, s = this.state;
    const fid = g.galaxy.systems[A.target.sys].eco;
    const pay = this.reward();
    g.addCredits(pay); g.audio.play('coins', { vol: 1 });
    g.factionChange(fid, 8); g.factionChange('pirate', -10);
    g.ui.toast(`✓ SIEGE BROKEN! ${A.target.name} holds. ${FACTIONS[fid].name} pays ◈${fmt(pay)} · ${FACTIONS[fid].short} +8 · Red Wake −10`, 'good', 8);
    s.siege.record.won++;
    this.finish();
  }
  defeat(why) {
    const A = this.A, g = this.g, s = this.state;
    for (const o of g.outlaws) if (o.siegeOf === A.id) o.state = 'flee';
    if (A.target.type === 'outpost') {
      const o = s.outposts.find((x) => x.id === A.target.outpostId);
      if (o) {
        o.storage = {}; o.credits = 0;
        const built = o.slots.map((sl, i) => (sl && sl.status === 'built' ? i : -1)).filter((i) => i >= 0);
        if (built.length) { const i = built[Math.floor(Math.random() * built.length)]; o.slots[i] = null; }
        g.outposts.rebuild(o);
        g.ui.toast(`✗ ${o.name} fell to the armada: storage and credits taken${built.length ? ', one module destroyed' : ''}. ${why}`, 'warn', 8);
      }
    } else g.ui.toast(`✗ ${A.target.name} fell to the Red Wake siege. ${why}`, 'warn', 8);
    s.siege.record.lost++;
    this.finish();
  }
  autoResolve(why) {
    const A = this.A, g = this.g, p = this.autoOdds();
    if (Math.random() < p) {
      const fid = g.galaxy.systems[A.target.sys].eco;
      g.factionChange(fid, 2);
      g.ui.toast(`✓ ${A.target.name} held off the Red Wake siege without you (${Math.round(p * 100)}% odds). ${why}`, 'good', 7);
      this.state.siege.record.won++;
      this.finish();
    } else this.defeat(`${why} Defence odds were ${Math.round(p * 100)}%.`);
  }
  finish() {
    const A = this.A; A.phase = 'done';
    this.cleanup();
  }
  cleanup() {
    for (const a of this.allies) { if (a.beam) this.g.scene.remove(a.beam); if (!a.dead) a.remove(); }
    this.allies = [];
    if (this.proxy && !this.proxy.dead) this.proxy.remove();
    this.proxy = null;
  }
  isTargetOutpost(id) { const A = this.A; return !!(A && A.phase === 'live' && A.target.type === 'outpost' && A.target.outpostId === id); }
  onEnterSystem() {
    this.cleanup(); // allies and the barrier proxy belong to the system you just left
    const A = this.A; if (!A) return;
    if (A.phase === 'live') {
      if (A.target.sys !== this.state.systemId) this.autoResolve('You left mid-battle.');
      else { A.phase = 'announced'; A.at = absT(this.state) + 5 / DAY_LENGTH; A.wave = Math.max(0, A.wave - 1); } // reload: restart from the current wave
    }
  }
  persist() { if (this.A && this.proxy && !this.proxy.dead) this.A.proxyHp = this.proxy.hp / this.proxy.maxHp; }

  // ---------------------------------------------------------------- UI helpers
  urgent() {
    const A = this.A, s = this.state; if (!A || A.phase === 'done') return null;
    if (A.phase === 'live') return { text: `⚔ DEFEND ${A.target.name.toUpperCase()}! WAVE ${Math.max(1, A.wave)}/${WAVES}`, live: true };
    if (A.day !== s.day) return null;
    const secs = Math.max(0, Math.round((A.at - absT(s)) * DAY_LENGTH));
    const where = A.target.sys === s.systemId ? 'this system' : this.g.galaxy.systems[A.target.sys].name;
    return { text: `⚔ ARMADA STRIKES ${A.target.name.toUpperCase()} (${where}) IN ${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, '0')}` };
  }
  newsLine() {
    const A = this.A, s = this.state; if (!A || A.phase === 'done') return null;
    const sys = this.g.galaxy.systems[A.target.sys].name;
    const when = A.day === s.day ? 'today' : A.day === s.day + 1 ? 'tomorrow' : `on Day ${A.day}`;
    return `Red Wake armada will strike <b>${A.target.name}</b> (${sys}) ${when}: ${A.waves.join(' + ')} raiders and a Dreadnought. Odds if you're absent: <b>${Math.round(this.autoOdds() * 100)}%</b>.`;
  }
  courseTo() {
    const A = this.A, g = this.g, s = this.state; if (!A) return;
    if (g.docked) g.undock();
    if (A.target.sys === s.systemId) { const p = this.targetPos(); if (p) g.setAutopilot(p, A.target.name, 300); return; }
    const path = routePath(g.galaxy, s.systemId, A.target.sys);
    const gate = path && g.world.gates.find((x) => x.to === path[1]);
    if (gate) g.setAutopilot(gate.pos, `Gate → ${g.galaxy.systems[path[1]].name}`, 250);
  }
}
