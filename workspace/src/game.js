import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { generateGalaxy, generateSystem } from './galaxy.js';
import { World } from './world.js';
import { Ship, FX } from './entities.js';
import { Economy, newState, pilotRank, netWorth } from './economy.js';
import { readAuto, writeAuto, clearAuto, requestPersistence } from './save.js';
import { MAX_ACTIVE, normalizeMissionState, missionSpace, missionLure, boundToShip, markTaken, routePath } from './missions.js';
import { HULLS, COMM, COMMODITIES, ECONOMIES, computeStats, DAY_LENGTH, TRADER_NAMES, OUTLAW_NAMES } from './data.js';
import { makeGlbTemplate, buildShipTemplate } from './ships.js';
import { globalUniforms } from './shaders.js';
import { Post } from './post.js';
import { Audio } from './audio.js';
import { UI } from './ui.js';
import { GamepadInput } from './gamepad.js';
import { RNG, clamp, damp, fmt } from './rng.js';

const _v = new THREE.Vector3(), _v2 = new THREE.Vector3(), _v3 = new THREE.Vector3();
const _pr1 = new THREE.Vector3(), _pr2 = new THREE.Vector3();
const UP = new THREE.Vector3(0, 1, 0);
const params = new URLSearchParams(location.search);

export class Game {
  constructor(container) {
    this.container = container;
    this.time = 0; this.mode = 'loading';
    this.traders = []; this.outlaws = [];
    this.input = { sx: 0, sy: 0, throttle: 0.35, fire: false, mine: false, boost: false };
    this.target = null; this.autopilot = null; this.warp = null;
    this.docked = false; this.paused = false; this.shake = 0;
    this.mineAcc = 0; this.salvage = null;
  }

  // ------------------------------------------------------------------ boot
  async boot() {
    const r = this.renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' });
    r.toneMapping = THREE.ACESFilmicToneMapping; r.toneMappingExposure = 1.05;
    r.outputColorSpace = THREE.SRGBColorSpace;
    this.container.appendChild(r.domElement);
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(62, 1, 1.0, 80000);
    this.keyLight = new THREE.DirectionalLight(0xffffff, 2.8); this.scene.add(this.keyLight); this.scene.add(this.keyLight.target);
    this.hemi = new THREE.HemisphereLight(0x8899cc, 0x221a22, 0.55); this.scene.add(this.hemi);
    this.rimLight = new THREE.DirectionalLight(0x6fbfff, 0.6); this.scene.add(this.rimLight); this.scene.add(this.rimLight.target);
    this.post = new Post(r, this.scene, this.camera);
    this.audio = new Audio();
    this.ui = new UI(this);
    this.pad = new GamepadInput(this);
    this.fx = new FX(this);
    this.world = new World(this);
    window.addEventListener('resize', () => this.resize());
    this.resize();

    const saved = readAuto();
    requestPersistence();
    // save when the player switches apps, locks the phone or closes the tab
    const saveOnLeave = () => { if (this.mode === 'play') this.save(); };
    document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') saveOnLeave(); });
    window.addEventListener('pagehide', saveOnLeave);
    this.state = saved || newState(params.get('seed') ? Number(params.get('seed')) : Math.floor(Math.random() * 1e9));
    normalizeMissionState(this.state);
    this.hasSave = !!saved;
    this.applyQuality(this.state.quality);

    // ---- measured loading ----
    const prog = { audio: 0, model: 0, world: 0 };
    const report = (label) => this.ui.setLoading(prog.audio * 0.55 + prog.model * 0.25 + prog.world * 0.2, label);
    const audioP = this.audio.load((f, n) => { prog.audio = f; report(`Loading audio · ${n}`); });
    const modelP = new Promise((resolve) => {
      const draco = new DRACOLoader(); draco.setDecoderPath('./draco/');
      const loader = new GLTFLoader(); loader.setDRACOLoader(draco);
      loader.load('./models/outlaw.glb', (g) => { this.outlawTpl = makeGlbTemplate(g.scene, 19); prog.model = 1; report('Outlaw signatures catalogued'); resolve(); },
        (e) => { if (e.total) { prog.model = e.loaded / e.total * 0.95; report('Loading ship models'); } },
        (err) => { console.warn('outlaw model failed, using procedural fallback', err); this.outlawTpl = null; prog.model = 1; report('Ship models ready'); resolve(); });
    });
    // world generation in small steps so the bar is honest
    this.galaxy = generateGalaxy(this.state.seed);
    this.economy = new Economy(this.galaxy, this.state);
    if (this.state.systemId == null) this.state.systemId = this.galaxy.startId;
    prog.world = 0.2; report('Charting star systems');
    await new Promise((res) => setTimeout(res, 30));
    ['wren', 'mule', 'kestrel', 'bastion'].forEach((h) => buildShipTemplate(h, 'player'));
    buildShipTemplate('mule', 'trader'); buildShipTemplate('kestrel', 'outlaw');
    prog.world = 0.5; report('Assembling hulls');
    await new Promise((res) => setTimeout(res, 30));
    this.enterSystem(this.state.systemId, null, true);
    prog.world = 1; report('Systems online');
    await Promise.all([audioP, modelP]);
    this.ui.setLoading(1, 'Ready for launch');
    this.renderer.compile(this.scene, this.camera);
    this.mode = 'menu';
    this.ui.showReady(this.hasSave);
    this.last = performance.now();
    this.renderer.setAnimationLoop(() => this.frame());
    window.__game = this;
  }

  // visual comparison helper: post FX + atmospheric layers on/off
  setFX(on) {
    this.post.setEnabled(on);
    if (this.scene.fog) this.scene.fog.density = on ? this.fogDensity : 0;
    this.world.dust.visible = on;
    for (const f of this.world.fields) f.haze.forEach((h) => (h.visible = on));
    this.world.star.children.forEach((c, i) => { if (i > 0) c.visible = on; });
  }

  applyQuality(q) {
    this.state.quality = q;
    const maxPR = q === 'high' ? 1.75 : 1.0;
    this.pixelRatio = Math.min(window.devicePixelRatio || 1, maxPR);
    this.resize();
  }
  resize() {
    const w = window.innerWidth, h = window.innerHeight;
    if (!this.renderer) return;
    const pr = this.pixelRatio || Math.min(window.devicePixelRatio || 1, 1.75);
    this.renderer.setPixelRatio(pr);
    this.renderer.setSize(w, h);
    this.camera.aspect = w / h; this.camera.updateProjectionMatrix();
    this.post.setSize(w, h, pr);
    if (this.world) this.world.dust.material.uniforms.uPx.value = pr * (h / 800);
    if (this.fx) this.fx.particles.points.material.uniforms.uPx.value = pr * (h / 800);
  }

  startGame(fresh) {
    if (fresh) {
      clearAuto();
      const seed = Math.floor(Math.random() * 1e9);
      this.state = newState(seed);
      this.galaxy = generateGalaxy(seed);
      this.economy = new Economy(this.galaxy, this.state);
      this.state.systemId = this.galaxy.startId;
      this.enterSystem(this.state.systemId, null, true);
    }
    this.audio.unlock();
    this.audio.setEnabled(this.state.sound);
    this.audio.setMusic('calm');
    this.mode = 'play';
    this.ui.enterPlay();
    this.checkDeadlines();
    if (!this.state.tutorial.docked) setTimeout(() => this.ui.toast('Welcome, pilot. Mine rocks in the field or dock at the station to trade.', 'info', 6), 600);
  }

  // ---------------------------------------------------------------- ships
  activeShipRec() { return this.state.ships.find((s) => s.uid === this.state.active); }
  spawnPlayer(pos, yaw = 0) {
    const rec = this.activeShipRec();
    if (this.player) this.player.remove();
    const stats = computeStats(rec.hull, rec.mods);
    const p = new Ship(this, { kind: 'player', hullId: rec.hull, palette: 'player', stats, name: HULLS[rec.hull].name });
    p.cargo = rec.cargo; // shared reference with save record
    if (rec.hp != null) p.hp = Math.min(p.maxHp, rec.hp);
    p.missiles = Math.min(rec.missiles || 0, stats.mslCap);
    p.pos.copy(pos); p.yaw = yaw; p.speed = 0;
    p.obj.quaternion.setFromEuler(new THREE.Euler(0, yaw, 0, 'YXZ'));
    this.player = p;
    this.playerBeams = this.playerBeams || [];
    while (this.playerBeams.length < 3) this.playerBeams.push(this.fx.makeBeam(0x58e8ff));
    this.mineBeam = this.mineBeam || this.fx.makeBeam(0xb8ff6a);
    this.camInit = false;
    this.updateMissionLoad();
    return p;
  }
  syncShipRec() {
    const rec = this.activeShipRec(); if (!rec || !this.player) return;
    rec.hp = this.player.hp; rec.missiles = this.player.missiles;
  }
  refreshPlayerStats() {
    const rec = this.activeShipRec();
    const stats = computeStats(rec.hull, rec.mods);
    this.player.applyStats(stats, false);
    this.player.missiles = Math.min(this.player.missiles, stats.mslCap);
  }
  cargoFree() { return this.player.stats.cargo - this.player.cargoUsed(); }

  // --------------------------------------------------------------- systems
  enterSystem(sysId, fromId, initial = false) {
    for (const t of this.traders) t.remove();
    for (const o of this.outlaws) o.remove();
    this.traders = []; this.outlaws = []; this.target = null; this.autopilot = null;
    this.fx.clearAll();
    this.state.systemId = sysId;
    const sys = this.galaxy.systems[sysId];
    this.sysInfo = sys;
    this.sysData = generateSystem(sys, this.galaxy);
    this.world.build(this.sysData, this.state.day);
    // player placement
    let pos, yaw;
    if (fromId != null) {
      const g = this.world.gates.find((x) => x.to === fromId) || this.world.gates[0];
      const inward = _v.copy(g.pos).negate().setY(0).normalize();
      pos = g.pos.clone().addScaledVector(inward, 430);
      yaw = Math.atan2(inward.x, inward.z);
    } else if (initial && this.state.pos) {
      pos = new THREE.Vector3(...this.state.pos); yaw = this.state.yaw || 0;
    } else {
      const s = this.world.station.pos;
      const f = this.world.fields.slice().sort((a, b) => a.center.distanceTo(s) - b.center.distanceTo(s))[0];
      const out = f ? _v.subVectors(f.center, s).setY(0).normalize() : _v.copy(s).setY(0).normalize();
      pos = s.clone().addScaledVector(out, 230); yaw = Math.atan2(out.x, out.z);
    }
    this.spawnPlayer(pos, yaw);
    this.economy.recordIntel(sysId);
    this.traderTimer = 6;
    // initial ambient traffic
    const rng = new RNG(Date.now() & 0xffff);
    const n = 1 + rng.int(0, 1) + (sys.eco === 'industrial' ? 1 : 0);
    for (let i = 0; i < n; i++) this.spawnTrader(true);
    this.rollOutlaws();
    if (!initial) this.ui.toast(`${sys.name} · ${ECONOMIES[sys.eco].name} system`, 'info', 3.5);
    this.ui.onSystemChanged();
  }

  // -------------------------------------------------------------- traders
  spawnTrader(midRoute = false) {
    const W = this.world; if (!W.gates.length) return;
    const rng = Math.random;
    const gate = W.gates[Math.floor(rng() * W.gates.length)];
    const fromGate = rng() < 0.5;
    const t = new Ship(this, { kind: 'trader', hullId: 'mule', palette: 'trader', stats: { ...computeStats('mule', { engine: 0, cargo: 0, barrier: 1, beam: 0, missile: 0, mining: 0, sensors: 0, hull: 0, reactor: 0 }), speed: 46 }, name: TRADER_NAMES[Math.floor(rng() * TRADER_NAMES.length)] });
    const originSys = fromGate ? this.galaxy.systems[gate.to] : this.sysInfo;
    const goods = COMMODITIES.filter((c) => c.kind === 'good' && ECONOMIES[originSys.eco].mult[c.id] < 1);
    const pick = goods.length ? goods : COMMODITIES.filter((c) => c.kind === 'good');
    for (let i = 0; i < 2; i++) { const c = pick[Math.floor(rng() * pick.length)]; t.cargo[c.id] = (t.cargo[c.id] || 0) + 8 + Math.floor(rng() * 22); }
    t.origin = originSys.id;
    const a = fromGate ? gate.pos : W.station.pos; const b = fromGate ? W.station.pos : gate.pos;
    t.dest = { pos: b.clone(), type: fromGate ? 'station' : 'gate', gate: fromGate ? null : gate };
    const start = a.clone().add(_v.set((rng() - 0.5) * 120, (rng() - 0.5) * 60, (rng() - 0.5) * 120));
    if (midRoute) start.lerp(b, 0.15 + rng() * 0.6);
    else start.addScaledVector(_v2.subVectors(b, a).normalize(), fromGate ? 150 : 180);
    t.pos.copy(start);
    _v.subVectors(b, start); t.yaw = Math.atan2(_v.x, _v.z);
    t.throttle = 0.85; t.speed = t.stats.speed * 0.8;
    t.beam = null;
    this.traders.push(t);
    if (!midRoute && fromGate) this.fx.particles.burst(start, 30, 60, 0xb8a0ff, 5, 1.0);
  }

  updateTraders(dt) {
    for (let i = this.traders.length - 1; i >= 0; i--) {
      const t = this.traders[i];
      if (t.dead) { this.traders.splice(i, 1); continue; }
      const threatened = this.time - t.lastHit < 8 && t.lastAttacker && !t.lastAttacker.dead;
      if (threatened) {
        _v.subVectors(t.pos, t.lastAttacker.pos).add(t.pos);
        t.steerTo(_v, dt); t.throttle = 1; t.boost = true;
      } else {
        t.boost = false;
        t.aim = t.aim || new THREE.Vector3();
        this.planRoute(t.pos, t.dest.pos, t.radius, t.dest.type === 'station' ? this.world.station : null, t.aim);
        t.steerTo(t.aim, dt, 0.6); t.throttle = this.angleTo(t, t.aim) > 0.8 ? 0.45 : 0.85;
      }
      t.updateMotion(dt, this.world); t.updateVisual(dt);
      const dd = t.pos.distanceTo(t.dest.pos);
      if (dd < (t.dest.type === 'station' ? 110 : 120)) {
        if (t.dest.type === 'gate') this.fx.particles.burst(t.pos, 40, 80, 0xb8a0ff, 5, 1.0);
        if (this.target === t) this.target = null;
        t.remove(); this.traders.splice(i, 1);
      }
    }
    this.traderTimer -= dt;
    const cap = 3 + (this.sysInfo.eco === 'industrial' || this.sysInfo.eco === 'agricultural' ? 1 : 0);
    if (this.traderTimer <= 0) { this.traderTimer = 28 + Math.random() * 35; if (this.traders.length < cap) this.spawnTrader(false); }
  }

  // -------------------------------------------------------------- outlaws
  rollOutlaws() {
    const key = `${this.state.systemId}:${this.state.day}`;
    let roll = this.state.outlawRoll[key];
    if (!roll) {
      const force = params.get('outlaws') === '1';
      // VIPs aboard draw extra outlaw attention
      const danger = this.sysInfo.danger + (this.missionsAboard().some((m) => m.vip) ? 0.12 : 0);
      const hit = force || Math.random() < danger;
      roll = { hit, at: hit ? Math.min(0.95, this.state.dayTime + (force ? 0.02 : 0.08 + Math.random() * 0.5)) : null, spawned: false, warned: false };
      // keep save small: only keep current rolls
      this.state.outlawRoll = { [key]: roll };
    }
    this.outlawKey = key;
  }
  forceOutlaws(n) { const roll = this.state.outlawRoll[this.outlawKey]; roll.hit = true; roll.at = this.state.dayTime; roll.spawned = false; this.forcedCount = n; }

  spawnOutlaws() {
    const rank = pilotRank(this.state);
    let n = rank <= 1 ? 1 : rank === 2 ? 1 + (Math.random() < 0.5 ? 1 : 0) : rank === 3 ? 2 + Math.floor(Math.random() * 2) : 2 + Math.floor(Math.random() * 3);
    if (this.forcedCount) { n = this.forcedCount; this.forcedCount = 0; }
    const W = this.world;
    // arrive through the gate nearest-ish to player but not on top of player
    const gates = W.gates.slice().sort((a, b) => a.pos.distanceTo(this.player.pos) - b.pos.distanceTo(this.player.pos));
    const gate = gates.find((g) => g.pos.distanceTo(this.player.pos) > 1800) || gates[gates.length - 1];
    let entry = gate ? gate.pos.clone() : this.player.pos.clone().add(_v.set(2500, 0, 0));
    if (gate && entry.distanceTo(this.player.pos) > 6500) entry = this.player.pos.clone().add(_v.subVectors(gate.pos, this.player.pos).normalize().multiplyScalar(4200));
    const base = OUTLAW_NAMES[Math.floor(Math.random() * OUTLAW_NAMES.length)];
    for (let i = 0; i < n; i++) {
      const stats = {
        speed: 82 + rank * 4, turn: 1.55, cargo: 40, shield: 30 + rank * 35, shieldRegen: 5 + rank * 2, hull: 90 + rank * 50,
        dps: 7 + rank * 3.5, beamRange: 250, hard: 1, mslCap: rank >= 2 ? 2 : 0, mslDmg: 40 + rank * 8, energy: 120, energyRegen: 18, sensor: 3000,
      };
      const o = new Ship(this, { kind: 'outlaw', hullId: 'kestrel', palette: 'outlaw', tpl: this.outlawTpl || buildShipTemplate('kestrel', 'outlaw'), stats, name: n > 1 ? `${base} ${['α', 'β', 'γ', 'δ'][i]}` : base });
      o.pos.copy(entry).add(_v.set((Math.random() - 0.5) * 140, (Math.random() - 0.5) * 50, (Math.random() - 0.5) * 140));
      _v.subVectors(this.player.pos, o.pos); o.yaw = Math.atan2(_v.x, _v.z);
      o.throttle = 1; o.state = 'hunt'; o.missiles = stats.mslCap; o.mslCd = 6 + Math.random() * 6; o.retarget = 0; o.orbitDir = Math.random() < 0.5 ? 1 : -1;
      o.beam = this.fx.makeBeam(0xff4a3a); o.spawnTime = this.time;
      o.cargo = { [['food', 'medical', 'parts', 'data'][Math.floor(Math.random() * 4)]]: 3 + Math.floor(Math.random() * 8) };
      this.outlaws.push(o);
    }
    this.fx.particles.burst(entry, 60, 90, 0xff6a4a, 6, 1.2);
    const near = entry.distanceTo(this.player.pos) < this.player.stats.sensor;
    this.ui.toast(near ? `⚠ OUTLAW CONTACT — ${n > 1 ? `${n} raiders` : base} jumped in!` : `⚠ Outlaw jump signature detected in ${this.sysInfo.name}`, 'warn', 5);
    this.audio.play('alarm', { vol: 0.8 });
  }

  updateOutlawSchedule() {
    const roll = this.state.outlawRoll[this.outlawKey];
    if (!roll || !roll.hit || roll.spawned) return;
    const lead = this.player.stats.sensorLvl >= 2 ? 0.13 : 0;
    if (lead && !roll.warned && this.state.dayTime >= roll.at - lead) {
      roll.warned = true;
      this.ui.toast(`Sensors: hostile jump signature forming — outlaws inbound in ~${Math.round((roll.at - this.state.dayTime) * DAY_LENGTH)}s`, 'warn', 6);
      this.audio.play('alarm', { vol: 0.5 });
    }
    if (this.state.dayTime >= roll.at && !this.docked) { roll.spawned = true; this.spawnOutlaws(); }
  }

  pickOutlawTarget(o) {
    let best = null, bs = -Infinity;
    const cands = [this.player, ...this.traders];
    for (const c of cands) {
      if (!c || c.dead || (c === this.player && this.docked)) continue;
      const d = c.pos.distanceTo(o.pos);
      const val = c.cargoValue() + (c === this.player ? 250 + this.player.stats.cargo * 2 : 0);
      const s = val / (1 + d / 1500);
      if (s > bs) { bs = s; best = c; }
    }
    return best;
  }

  updateOutlaws(dt) {
    for (let i = this.outlaws.length - 1; i >= 0; i--) {
      const o = this.outlaws[i];
      if (o.dead) { this.outlaws.splice(i, 1); continue; }
      o.retarget -= dt;
      if (o.state !== 'flee' && (o.retarget <= 0 || !o.tgt || o.tgt.dead)) { o.tgt = this.pickOutlawTarget(o); o.retarget = 4; }
      // retaliate against whoever is shooting at us
      if (o.state !== 'flee' && o.lastAttacker && !o.lastAttacker.dead && this.time - o.lastHit < 10 && !(o.lastAttacker === this.player && this.docked)) o.tgt = o.lastAttacker;
      if (o.hp < o.maxHp * 0.22 && o.state !== 'flee') { o.state = 'flee'; this.ui.toast(`${o.name} is breaking off!`, 'info', 2.5); }
      if (this.time - o.spawnTime > DAY_LENGTH * 1.2 && o.state !== 'flee') o.state = 'flee';
      const t = o.tgt;
      o.firing = false; o.cruise = false; o.boost = false;
      if (o.state === 'flee' || !t) {
        _v.subVectors(o.pos, this.player.pos).setY(0).normalize().multiplyScalar(5000).add(o.pos);
        o.steerTo(_v, dt); o.throttle = 1; o.boost = o.energy > 20;
        if (o.pos.distanceTo(this.player.pos) > 4500) { this.fx.particles.burst(o.pos, 40, 80, 0xff6a4a, 5, 1.0); o.beam && (o.beam.visible = false); o.remove(); this.outlaws.splice(i, 1); if (this.target === o) this.target = null; continue; }
      } else {
        const d = o.pos.distanceTo(t.pos);
        if (d > 1600) { o.steerTo(t.pos, dt); o.cruise = true; o.throttle = 1; }
        else if (d > 320) {
          _v.copy(t.vel).multiplyScalar(d / 300).add(t.pos);
          o.steerTo(_v, dt); o.throttle = 1; o.boost = d > 700 && o.energy > 40;
        } else {
          // strafing orbit around the target
          _v.subVectors(o.pos, t.pos).normalize();
          _v2.crossVectors(_v, UP).multiplyScalar(o.orbitDir);
          _v3.copy(t.pos).addScaledVector(_v, 170).addScaledVector(_v2, 160);
          const aimErr = this.angleTo(o, t.pos);
          if (aimErr > 0.5) o.steerTo(_v3, dt); else o.steerTo(t.pos, dt, 0.9);
          o.throttle = 0.7;
        }
        const aim = this.angleTo(o, t.pos);
        if (d < o.stats.beamRange && aim < 0.3 && o.energy > 5) {
          o.firing = true; o.energy -= 8 * dt;
          const from = this.muzzleWorld(o, 0, _v3);
          this.fx.showBeam(o.beam, from, _v.copy(t.pos).add(_v2.set((Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2, 0)), 1.6);
          const killed = t.damage(o.stats.dps * dt, o.pos, o);
          if (t === this.player) { this.shake = Math.min(1, this.shake + dt * 2); this.ui.damagePulse(); }
          this.onShipHit(t, o, killed);
        }
        o.mslCd -= dt;
        if (o.missiles > 0 && o.mslCd <= 0 && d < 700 && aim < 0.6) { o.missiles--; o.mslCd = 9; this.fx.launchMissile(o, t, o.stats.mslDmg); if (t === this.player) this.ui.toast('⚠ Incoming missile!', 'warn', 2); }
        // interdiction
        if (t === this.player && d < 1300 && this.player.cruise) { this.player.cruise = false; this.ui.toast('Cruise disrupted by outlaw interdiction!', 'warn', 3); this.autopilot = null; }
      }
      if (!o.firing && o.beam) o.beam.visible = false;
      o.updateMotion(dt, this.world); o.updateVisual(dt);
    }
  }

  angleTo(ship, p) { ship.forwardTo(_v2); _v3.subVectors(p, ship.pos).normalize(); return Math.acos(clamp(_v2.dot(_v3), -1, 1)); }
  muzzleWorld(ship, i, out) { const m = ship.muzzles[i % ship.muzzles.length]; return out.copy(m).applyQuaternion(ship.obj.quaternion).add(ship.pos); }

  // ------------------------------------------------------------ damage hooks
  onShipHit(ship, attacker, killed) {
    if (ship.kind === 'trader' && attacker === this.player) {
      const sid = this.state.systemId;
      if (!ship.reported) { ship.reported = true; this.state.wanted[sid] = (this.state.wanted[sid] || 0) + 1; this.ui.toast(`Trader ${ship.name} reports your attack — WANTED in ${this.sysInfo.name}`, 'warn', 4); }
    }
    if (ship.kind === 'trader' && attacker && attacker.kind === 'outlaw' && !ship.distress && ship.pos.distanceTo(this.player.pos) < this.player.stats.sensor) {
      ship.distress = true; this.ui.toast(`Distress call: trader ${ship.name} under outlaw attack!`, 'warn', 4);
    }
    if (!killed) return;
    if (ship === this.player) { this.playerDestroyed(); return; }
    this.destroyShip(ship, attacker);
  }

  destroyShip(ship, attacker) {
    this.fx.explosion(ship.pos.clone(), ship.radius / 6, ship.kind === 'outlaw' ? 0xff7a40 : 0xffb060);
    // drop cargo in crates
    const entries = Object.entries(ship.cargo).filter(([, q]) => q > 0);
    for (const [k, q] of entries) { let left = Math.ceil(q * 0.7); while (left > 0) { const n = Math.min(left, 10); this.fx.dropCrate(ship.pos, { [k]: n }); left -= n; } }
    if (ship.kind === 'outlaw') {
      if (attacker === this.player) {
        const rank = pilotRank(this.state);
        const bounty = 350 + rank * 200;
        this.fx.dropCrate(ship.pos, {}, bounty);
        this.state.stats.kills++;
        this.ui.toast(`${ship.name} destroyed — bounty crate released (◈ ${fmt(bounty)})`, 'good', 3.5);
        // rescued traders
        for (const t of this.traders) if (t.distress && !t.rewarded && t.pos.distanceTo(ship.pos) < 1500) { t.rewarded = true; this.addCredits(250); this.ui.toast(`${t.name}: “Thank you, pilot!” +◈ 250`, 'good', 3); }
      }
      if (ship.beam) ship.beam.visible = false;
    }
    if (ship.kind === 'trader' && attacker && attacker.kind === 'outlaw') this.ui.toast(`Trader ${ship.name} was destroyed by outlaws.`, 'warn', 3);
    if (this.target === ship) this.target = null;
    ship.remove();
  }

  playerDestroyed() {
    const p = this.player;
    this.fx.explosion(p.pos.clone(), 3, 0xffa050);
    p.obj.visible = false; p.dead = true;
    for (const b of this.playerBeams) b.visible = false;
    this.mineBeam.visible = false;
    this.audio.loop('beam', 'beam', false); this.audio.loop('mine', 'mine', false);
    const fee = Math.round(this.state.credits * 0.1);
    setTimeout(() => {
      this.ui.dialog(`<div class="ov-title">SHIP DISABLED</div><p>Your ${HULLS[p.hullId].name} was overwhelmed. The Frontier Insurance Guild tows you to ${this.world.station.name}.</p><p><b>Cargo lost.</b> Insurance fee: <b>◈ ${fmt(fee)}</b></p>`,
        [{ label: 'ACCEPT TOW', primary: true, fn: () => {
          this.state.credits -= fee;
          const rec = this.activeShipRec(); for (const k in rec.cargo) delete rec.cargo[k]; rec.hp = null;
          for (const m of this.missionsAboard()) this.failMission(m, m.type === 'passenger' ? 'passengers evacuated by rescue pods' : 'contract cargo lost with the ship');
          for (const o of this.outlaws) { o.beam && (o.beam.visible = false); o.remove(); }
          this.outlaws = []; this.fx.clearAll();
          const s = this.world.station.pos; const out = _v.copy(s).negate().setY(0).normalize();
          this.spawnPlayer(s.clone().addScaledVector(out, 230), Math.atan2(out.x, out.z));
          this.dock();
        } }]);
    }, 1600);
  }

  addCredits(n) { this.state.credits += n; if (n > 0) this.state.stats.earned += n; this.ui.creditFlash(); }

  collectCrate(c) {
    const free = this.cargoFree();
    let need = 0; for (const k in c.cargo) need += c.cargo[k];
    if (c.credits) { this.addCredits(c.credits); this.audio.play('coins', { vol: 0.7 }); }
    if (need > free) {
      if (!c.warned) { c.warned = true; this.ui.toast('Cargo hold full — crate left behind', 'warn', 2.5); }
      if (c.credits) { c.credits = 0; }
      return need === 0;
    }
    const parts = [];
    for (const k in c.cargo) { this.player.cargo[k] = (this.player.cargo[k] || 0) + c.cargo[k]; parts.push(`${c.cargo[k]} ${COMM[k].name}`); }
    if (parts.length) { this.ui.toast(`Recovered ${parts.join(', ')}`, 'good', 2.5); this.audio.play('click', { vol: 0.6 }); }
    return true;
  }

  // --------------------------------------------------------------- docking
  dock() {
    const sid = this.state.systemId;
    this.docked = true;
    this.autopilot = null;
    const p = this.player; p.speed = 0; p.cruise = false; p.boost = false; p.throttle = 0;
    this.input.fire = false; this.input.mine = false;
    p.hp = p.hp; // repairs are a paid service
    const fine = (this.state.wanted[sid] || 0) * 600;
    if (fine > 0) { this.state.credits -= fine; this.state.wanted[sid] = 0; this.ui.toast(`Security fine for attacking traders: ◈ ${fmt(fine)}`, 'warn', 4); }
    this.state.tutorial.docked = true;
    this.economy.recordIntel(sid);
    this.audio.play('warp', { vol: 0.5, rate: 0.7 });
    this.deliverAtStation();
    this.save();
    this.ui.openStation();
  }
  undock() {
    this.docked = false;
    const s = this.world.station.pos; const out = _v.copy(this.player.pos).sub(s).setY(0).normalize();
    this.player.pos.copy(s).addScaledVector(out, 240);
    this.player.yaw = Math.atan2(out.x, out.z); this.player.pitch = 0; this.player.speed = 20; this.input.throttle = 0.35;
    this.ui.closeStation();
    this.save();
  }

  switchShip(uid) {
    if (uid === this.state.active) return true;
    if (this.missionsAboard().length) {
      this.ui.toast('Contract cargo or passengers are aboard — deliver or abandon those contracts before switching ships', 'warn', 4);
      return false;
    }
    this.syncShipRec();
    const pos = this.player.pos.clone(), yaw = this.player.yaw;
    this.state.active = uid;
    this.spawnPlayer(pos, yaw);
    this.save();
    return true;
  }

  // returns false when nothing was written (ship destroyed, or the browser refused storage)
  save() {
    if (this.player && this.player.dead) return false;
    this.syncShipRec();
    if (this.player) { this.state.pos = this.player.pos.toArray().map((x) => Math.round(x)); this.state.yaw = this.player.yaw; }
    this.state.savedAt = Date.now();
    const ok = writeAuto(this.state);
    if (!ok && !this._saveWarned) { this._saveWarned = true; this.ui.toast('⚠ Autosave failed — browser storage is full or disabled. Use Save & Load → Export to keep your progress.', 'warn', 8); }
    if (ok) this._saveWarned = false;
    return ok;
  }

  // Replace the whole career with a loaded save (slot, autosave or imported file).
  loadGame(state) {
    this.state = normalizeMissionState(state);
    this.galaxy = generateGalaxy(state.seed);
    this.economy = new Economy(this.galaxy, state);
    if (state.systemId == null) state.systemId = this.galaxy.startId;
    this.docked = false; this.warp = null; this.autopilot = null; this.target = null; this.salvage = null;
    this.input.fire = this.input.mine = this.input.boost = false; this.input.sx = this.input.sy = 0; this.input.throttle = 0.35;
    this.post.grade.uniforms.uWarp.value = 0; this.camera.fov = 62; this.camera.updateProjectionMatrix();
    this.ui.closeStation(); this.ui.closeMap(); this.ui.warpFlash(false);
    this.enterSystem(state.systemId, null, true);
    this.applyQuality(state.quality); this.audio.setEnabled(state.sound);
    this.checkDeadlines();
    this.save(); // the loaded game becomes the current autosave
  }

  // -------------------------------------------------------------- jumping
  beginJump(gate) {
    if (this.warp) return;
    this.warp = { t: 0, gate };
    this.autopilot = null; this.player.cruise = false;
    this.audio.play('warp', { vol: 0.9 });
  }
  updateWarp(dt) {
    const w = this.warp; w.t += dt;
    const p = this.player;
    p.steerTo(w.gate.pos, dt, 3); p.throttle = 1; p.boost = false;
    p.speed = Math.min(p.speed + dt * 400, 900);
    this.post.grade.uniforms.uWarp.value = Math.min(1, w.t / 1.4);
    this.camera.fov = 62 + 30 * Math.min(1, w.t / 1.4); this.camera.updateProjectionMatrix();
    if (w.t > 1.3 && !w.flashed) { w.flashed = true; this.ui.warpFlash(true); }
    if (w.t > 1.7) {
      const from = this.state.systemId;
      this.syncShipRec();
      this.enterSystem(w.gate.to, from);
      this.state.stats.jumps++;
      this.warp = null; this.post.grade.uniforms.uWarp.value = 0; this.camera.fov = 62; this.camera.updateProjectionMatrix();
      this.player.speed = 60; this.input.throttle = 0.4;
      setTimeout(() => this.ui.warpFlash(false), 80);
      this.audio.play('warp', { vol: 0.6, rate: 0.8 });
      this.save();
    }
  }

  // ---------------------------------------------------------- interactions
  findInteraction() {
    const p = this.player; const W = this.world;
    if (W.station.pos.distanceTo(p.pos) < 260) return { type: 'dock', label: 'DOCK', warm: true };
    for (const g of W.gates) if (g.pos.distanceTo(p.pos) < 340) return { type: 'jump', label: `JUMP › ${this.galaxy.systems[g.to].name}`, gate: g, warm: true };
    // contract drop-off in low orbit above a planet colony
    const drops = this.missionsAboard().filter((m) => m.dest.kind === 'planet' && m.dest.sys === this.state.systemId && this.landingPoint(m.dest.planet).distanceTo(p.pos) < 250);
    if (drops.length) return { type: 'dropoff', label: drops.some((m) => m.type === 'passenger') ? 'DROP OFF' : 'DELIVER', missions: drops, warm: true };
    for (const t of this.traders) if (!t.dead && t.pos.distanceTo(p.pos) < 110 + t.radius && this.time - t.lastHit > 10) return { type: 'hail', label: `HAIL ${t.name}`, trader: t };
    for (const d of W.derelicts) {
      if (d.pos.distanceTo(p.pos) < 150) {
        const looted = this.state.derelictLooted[`${this.state.systemId}:${d.seed}`];
        if (!looted || this.state.day - looted >= 3) return { type: 'salvage', label: this.salvage ? `SALVAGING ${Math.round(this.salvage.t / 3.5 * 100)}%` : 'SALVAGE', derelict: d, hold: true };
      }
    }
    const m = W.findMineable(p.pos, p.stats.mineRange);
    if (m) return { type: 'mine', label: m.kind === 'deposit' ? 'DRILL' : 'MINE', node: m, hold: true };
    return null;
  }

  doAction(act) {
    if (!act) return;
    if (act.type === 'dock') this.dock();
    else if (act.type === 'jump') this.beginJump(act.gate);
    else if (act.type === 'hail') this.ui.openTraderDialog(act.trader);
    else if (act.type === 'dropoff') { for (const m of act.missions) this.completeMission(m); this.save(); }
  }

  // ------------------------------------------------------------- contracts
  missionsAboard() { return this.state.missions.filter((m) => boundToShip(m) && m.shipUid === this.state.active); }
  updateMissionLoad() {
    if (!this.player) return;
    const aboard = this.missionsAboard();
    this.player.reserved = aboard.reduce((a, m) => a + missionSpace(m), 0);
    this.player.missionLure = aboard.reduce((a, m) => a + missionLure(m), 0);
  }
  // hover point ~100 m above a planet's colony / deposit (same point the map autopilot uses)
  landingPoint(planetIndex) {
    const dep = this.world.deposits[planetIndex], pl = this.world.planets[planetIndex];
    return dep.pos.clone().sub(pl.pos).normalize().multiplyScalar(100).add(dep.pos);
  }
  // returns an error message, or null when accepted
  acceptMission(offer) {
    const s = this.state;
    if (s.missions.length >= MAX_ACTIVE) return `You already have ${MAX_ACTIVE} active contracts`;
    const need = missionSpace(offer);
    if (need > this.cargoFree()) return `Needs ${need} free hold space (you have ${this.cargoFree()})`;
    if (offer.deposit > s.credits) return `Needs a ◈ ${fmt(offer.deposit)} deposit`;
    s.credits -= offer.deposit;
    s.missions.push({ ...offer, accepted: s.day, shipUid: s.active });
    markTaken(s, offer);
    this.updateMissionLoad();
    this.audio.play('click', { vol: 0.6 });
    this.save();
    return null;
  }
  completeMission(m) {
    const s = this.state;
    if (m.type === 'supply') {
      const have = this.player.cargo[m.commodity] || 0;
      if (have < m.qty) return false;
      this.player.cargo[m.commodity] = have - m.qty; if (!this.player.cargo[m.commodity]) delete this.player.cargo[m.commodity];
    }
    s.missions = s.missions.filter((x) => x !== m);
    this.addCredits(m.reward + m.deposit);
    s.stats.contracts++;
    this.updateMissionLoad();
    this.audio.play('coins', { vol: 0.9 });
    const what = m.type === 'passenger' ? (m.vip ? `${m.who} delivered safely` : `${m.pax} passenger${m.pax > 1 ? 's' : ''} dropped off`) : m.type === 'courier' ? `${m.qty} units of ${m.cargoName} delivered` : `${m.qty} ${COMM[m.commodity].name} supplied`;
    this.ui.toast(`✓ Contract complete: ${what} · +◈ ${fmt(m.reward)}${m.deposit ? ` (+◈ ${fmt(m.deposit)} deposit back)` : ''}`, 'good', 5);
    return true;
  }
  failMission(m, reason) {
    this.state.missions = this.state.missions.filter((x) => x !== m);
    this.updateMissionLoad();
    this.ui.toast(`✗ Contract failed: ${m.title} — ${reason}${m.deposit ? ` · deposit ◈ ${fmt(m.deposit)} forfeited` : ''}`, 'warn', 6);
  }
  deliverAtStation() {
    const sid = this.state.systemId;
    for (const m of this.state.missions.slice()) {
      if (m.dest.sys !== sid || m.dest.kind !== 'station') continue;
      if (m.type === 'supply') {
        const have = this.player.cargo[m.commodity] || 0;
        if (!this.completeMission(m)) this.ui.toast(`Supply contract: bring ${m.qty} ${COMM[m.commodity].name} here (you have ${have})`, 'info', 5);
      } else if (m.shipUid === this.state.active) this.completeMission(m);
    }
  }
  checkDeadlines() {
    const day = this.state.day;
    for (const m of this.state.missions.slice()) {
      if (day > m.deadline) this.failMission(m, `missed the Day ${m.deadline} deadline`);
      else if (day === m.deadline) this.ui.toast(`⏱ Last day: ${m.title} → ${m.dest.name}`, 'warn', 5);
    }
  }
  // where to fly next for a contract: its drop-off here, or the next gate on the shortest route
  missionTarget(m) {
    const sid = this.state.systemId;
    if (m.dest.sys === sid) {
      return m.dest.kind === 'station'
        ? { key: 'st', pos: this.world.station.pos, name: m.dest.name, arrive: 200, ignore: this.world.station, via: false }
        : { key: `pl${m.dest.planet}`, pos: this.landingPoint(m.dest.planet), name: m.dest.name, arrive: 45, ignore: null, via: false };
    }
    const path = routePath(this.galaxy, sid, m.dest.sys);
    const gate = path && this.world.gates.find((x) => x.to === path[1]);
    return gate ? { key: `g${gate.to}`, pos: gate.pos, name: `Gate → ${this.galaxy.systems[gate.to].name}`, arrive: 250, ignore: null, via: true } : null;
  }
  missionCourse(m) {
    const t = this.missionTarget(m);
    if (!t) return false;
    if (this.docked) this.undock();
    this.setAutopilot(t.pos, t.name, t.arrive, t.ignore);
    return true;
  }

  updateMining(dt, act) {
    const p = this.player;
    const mining = this.input.mine && act && act.type === 'mine' && !p.cruise;
    if (!mining) { this.mineBeam.visible = false; this.audio.loop('mine', 'mine', false); this.mineAcc = 0; return; }
    const node = act.node;
    if (this.cargoFree() <= 0) {
      this.mineBeam.visible = false; this.audio.loop('mine', 'mine', false);
      if (!this._fullWarn || this.time - this._fullWarn > 4) { this._fullWarn = this.time; this.ui.toast('Cargo hold full — dock to sell', 'warn', 2.5); }
      return;
    }
    if (p.energy < 1) { this.mineBeam.visible = false; return; }
    p.energy -= 4 * dt;
    const from = this.muzzleWorld(p, 0, _v3).clone();
    const hitPoint = _v.subVectors(from, node.pos).normalize().multiplyScalar(node.radius * 0.8).add(node.pos).clone();
    this.fx.showBeam(this.mineBeam, from, hitPoint, 1.4);
    if (Math.random() < 0.6) this.fx.particles.burst(hitPoint, 2, 25, node.kind === 'deposit' ? COMM[node.ore].color : 0xffd090, 1.4, 0.6);
    this.audio.loop('mine', 'mine', true, 0.35, 0.6);
    this.mineAcc += p.stats.mineRate * (node.kind === 'deposit' ? 0.85 : 1) * dt;
    while (this.mineAcc >= 1 && node.amount > 0 && this.cargoFree() > 0) {
      this.mineAcc -= 1;
      let ore = node.ore;
      const rareChance = p.stats.rare + (node.kind === 'deposit' ? 0.05 : node.field ? node.field.data.lumenite * (p.stats.rare > 0 ? 1 : 0.3) : 0);
      if (Math.random() < rareChance) { ore = 'lumenite'; this.ui.toast('✦ Lumenite crystal extracted!', 'good', 2); }
      p.cargo[ore] = (p.cargo[ore] || 0) + 1;
      node.amount -= 1; this.state.stats.mined++;
      this.ui.cargoTick(ore);
      if (node.kind === 'rock') this.world.depleteRock(node);
      if (!this.state.tutorial.mined) { this.state.tutorial.mined = true; this.ui.toast('Ore collected! Fill your hold, then dock at a station to sell.', 'info', 5); }
    }
    if (node.amount <= 0) {
      this.fx.particles.burst(node.pos, 40, 40, 0xc0b0a0, 5, 1.4);
      this.audio.play('explosion', { pos: node.pos, vol: 0.3, rate: 1.4 });
    }
  }

  updateSalvage(dt, act) {
    if (!(this.input.mine && act && act.type === 'salvage')) { this.salvage = null; return; }
    if (!this.salvage || this.salvage.d !== act.derelict) this.salvage = { d: act.derelict, t: 0 };
    this.salvage.t += dt;
    const from = this.muzzleWorld(this.player, 0, _v3).clone();
    this.fx.showBeam(this.mineBeam, from, act.derelict.pos, 1.2);
    this.audio.loop('mine', 'mine', true, 0.3, 0.45);
    if (this.salvage.t >= 3.5) {
      const d = act.derelict; const rng = new RNG(d.seed + this.state.day);
      this.state.derelictLooted[`${this.state.systemId}:${d.seed}`] = this.state.day;
      const credits = rng.int(150, 700) + pilotRank(this.state) * 120;
      this.addCredits(credits);
      const goods = ['parts', 'data', 'medical', 'luxury', 'lumenite'];
      const g = rng.pick(goods); const q = Math.min(this.cargoFree(), rng.int(2, g === 'luxury' || g === 'lumenite' ? 3 : 8));
      if (q > 0) this.player.cargo[g] = (this.player.cargo[g] || 0) + q;
      let extra = '';
      if (this.player.stats.mslCap > 0 && rng.chance(0.4)) { this.player.missiles = Math.min(this.player.stats.mslCap, this.player.missiles + 2); extra = ' + 2 missiles'; }
      this.ui.toast(`Salvaged ◈ ${fmt(credits)}${q > 0 ? ` + ${q} ${COMM[g].name}` : ''}${extra}`, 'good', 4);
      this.audio.play('coins', { vol: 0.8 });
      this.salvage = null; this.mineBeam.visible = false; this.audio.loop('mine', 'mine', false);
      this.input.mine = false;
    }
  }

  // ---------------------------------------------------------------- combat
  hostilesNear(r) { return this.outlaws.some((o) => !o.dead && o.pos.distanceTo(this.player.pos) < r); }

  cycleTarget() {
    const p = this.player;
    const cands = [...this.outlaws, ...this.traders].filter((s) => !s.dead && s.pos.distanceTo(p.pos) < p.stats.sensor).sort((a, b) => (a.kind === 'outlaw' ? 0 : 1) - (b.kind === 'outlaw' ? 0 : 1) || a.pos.distanceTo(p.pos) - b.pos.distanceTo(p.pos));
    if (!cands.length) { this.target = null; this.ui.toast('No contacts in sensor range', 'info', 1.5); return; }
    const i = cands.indexOf(this.target);
    this.target = cands[(i + 1) % cands.length];
  }

  fireMissile() {
    const p = this.player;
    if (p.stats.mslCap === 0) { this.ui.toast('No missile rack — install one at a station (Upgrades)', 'info', 3); return; }
    if (p.missiles <= 0) { this.ui.toast('Missile bay empty — restock at a station', 'warn', 2); return; }
    let t = this.target && !this.target.dead ? this.target : null;
    if (!t) t = this.autoTarget(0.7, 900);
    if (!t) { this.ui.toast('No lock — target a ship first', 'info', 1.5); return; }
    if (t.pos.distanceTo(p.pos) > 1000) { this.ui.toast('Target out of missile range (1000m)', 'info', 1.5); return; }
    p.missiles--; this.target = t;
    this.fx.launchMissile(p, t, p.stats.mslDmg);
  }

  autoTarget(cone, range) {
    let best = null, bd = Infinity;
    for (const o of this.outlaws) {
      if (o.dead) continue;
      const d = o.pos.distanceTo(this.player.pos);
      if (d < range && this.angleTo(this.player, o.pos) < cone && d < bd) { bd = d; best = o; }
    }
    return best;
  }

  updatePlayerFire(dt) {
    const p = this.player;
    const firing = this.input.fire && !p.cruise && p.energy > 1.5 && !this.warp;
    p.firing = firing;
    if (!firing) { for (const b of this.playerBeams) b.visible = false; this.audio.loop('beam', 'beam', false); return; }
    const range = p.stats.beamRange;
    let t = this.target && !this.target.dead && this.target.pos.distanceTo(p.pos) < range + this.target.radius && this.angleTo(p, this.target.pos) < 0.42 ? this.target : null;
    if (!t) { const a = this.autoTarget(0.42, range); if (a) { t = a; this.target = a; } }
    if (!t) {
      // straight shot: test any ship along the beam
      p.forwardTo(_v);
      let best = null, bt = range;
      for (const s of [...this.traders, ...this.outlaws]) {
        if (s.dead) continue;
        _v2.subVectors(s.pos, p.pos); const proj = _v2.dot(_v);
        if (proj < 0 || proj > bt) continue;
        const perp = Math.sqrt(Math.max(0, _v2.lengthSq() - proj * proj));
        if (perp < s.radius * 0.9) { bt = proj; best = s; }
      }
      t = best;
    }
    p.energy -= 9 * dt;
    let end;
    if (t) {
      end = _v.copy(t.pos).add(_v2.set((Math.random() - 0.5) * 1.5, (Math.random() - 0.5) * 1.5, 0)).clone();
      const killed = t.damage(p.stats.dps * dt, p.pos, p);
      this.onShipHit(t, p, killed);
    } else end = p.forwardTo(_v).multiplyScalar(range).add(p.pos).clone();
    const nm = Math.min(p.stats.hard, p.muzzles.length, this.playerBeams.length);
    for (let i = 0; i < this.playerBeams.length; i++) {
      const b = this.playerBeams[i];
      if (i >= nm) { b.visible = false; continue; }
      this.fx.showBeam(b, this.muzzleWorld(p, i, _v3), end, 1.3 + p.stats.dps / 60);
    }
    this.audio.loop('beam', 'beam', true, 0.4, 1.0);
  }

  // ---------------------------------------------------------- player flight
  updatePlayer(dt) {
    const p = this.player, inp = this.input;
    if (p.dead) return;
    const stick = Math.hypot(inp.sx, inp.sy);
    if (this.warp) { this.updateWarp(dt); }
    else if (this.autopilot) {
      const ap = this.autopilot;
      if (stick > 0.25) { this.autopilot = null; this.ui.toast('Autopilot disengaged', 'info', 1.5); }
      else {
        const d = ap.pos.distanceTo(p.pos);
        const aim = this.planRoute(p.pos, ap.pos, p.radius, ap.ignore, ap.aim);
        p.steerTo(aim, dt, 1.2);
        const err = this.angleTo(p, aim);
        // cruise only while far enough away to brake from cruise speed before arriving
        const brakeDist = ap.arrive + 300 + (p.stats.speed * 5.5) / 2.2 * 1.3;
        p.cruise = d > brakeDist && !this.hostilesNear(1300) && err < 0.3;
        let thr = clamp((d - ap.arrive) / 350, 0.12, 1);
        if (err > 0.8) thr = Math.min(thr, 0.45); // tighter turning circle while rounding obstacles
        p.throttle = thr;
        // arrived: inside the radius, or the closest approach has just passed (prevents circling)
        const closing = _v.subVectors(ap.pos, p.pos).dot(p.vel) > 0;
        if (d < ap.arrive || (d < ap.arrive + 150 && !closing)) {
          this.autopilot = null; p.cruise = false; p.throttle = 0; inp.throttle = 0;
          this.ui.toast(`Arrived: ${ap.name}`, 'info', 2);
        }
      }
    } else {
      const tr = p.stats.turn * (p.cruise ? 0.45 : 1);
      p.yawRate = -inp.sx * tr;
      p.yaw += p.yawRate * dt;
      p.pitch = clamp(p.pitch - inp.sy * tr * 0.75 * dt, -1.15, 1.15);
      if (Math.abs(inp.sy) < 0.05) p.pitch = damp(p.pitch, 0, 0.35, dt);
      p.throttle = inp.throttle;
      if (p.cruise && this.hostilesNear(1300)) { p.cruise = false; this.ui.toast('Cruise disrupted — hostiles nearby', 'warn', 2.5); }
    }
    p.boost = inp.boost && !p.cruise && !this.warp;
    p.updateMotion(dt, this.warp ? null : this.world);
    p.updateVisual(dt);
  }

  setCruise(on) {
    const p = this.player;
    if (on && this.hostilesNear(1300)) { this.ui.toast('Cannot engage cruise — hostiles nearby', 'warn', 2); return; }
    p.cruise = on;
    if (on) { this.input.throttle = Math.max(this.input.throttle, 0.5); this.audio.play('warp', { vol: 0.35, rate: 1.3 }); }
  }

  // ignore: the destination object itself (station or asteroid field) so it is not treated as an obstacle
  setAutopilot(pos, name, arrive = 200, ignore = null) {
    this.autopilot = { pos: pos.clone(), name, arrive, ignore, aim: new THREE.Vector3() };
    this.ui.toast(`Autopilot → ${name}`, 'info', 2);
  }

  // Steering aim that bends around planets, the star, the station and asteroid fields lying
  // between `from` and `target`. Re-evaluated every frame, so the path curves smoothly.
  planRoute(from, target, shipR, ignore, out) {
    const W = this.world;
    const obs = [];
    for (const pl of W.planets) obs.push({ c: pl.pos, hard: pl.radius, r: pl.radius + shipR + 140 });
    const sr = this.sysData.star.radius;
    obs.push({ c: W.star.position, hard: sr + 40, r: sr + shipR + 400 });
    if (ignore !== W.station) obs.push({ c: W.station.pos, hard: 80, r: 115 + shipR });
    for (const f of W.fields) if (ignore !== f) obs.push({ c: f.center, hard: 0, r: f.radius + shipR + 60, soft: true });
    const dir = _pr1.subVectors(target, from); const L = dir.length();
    if (L < 1) return out.copy(target);
    dir.multiplyScalar(1 / L);
    let best = null, bestT = Infinity;
    for (const o of obs) {
      let r = o.r;
      const minR = o.hard + shipR + 15;
      const dFrom = from.distanceTo(o.c), dTo = target.distanceTo(o.c);
      if (dFrom < r) { if (o.soft) continue; r = Math.max(minR, dFrom - 5); }
      if (dTo < r) { if (o.soft) continue; r = Math.max(minR, dTo - 10); if (dTo < r) continue; }
      const t = _pr2.subVectors(o.c, from).dot(dir);
      if (t <= 0 || t >= L || t >= bestT) continue;
      const off = _pr2.copy(from).addScaledVector(dir, t).sub(o.c);
      const od = off.length();
      if (od >= r) continue;
      bestT = t; best = { c: o.c, r, off: off.clone(), od };
    }
    if (!best) return out.copy(target);
    const side = best.off;
    if (best.od < best.r * 0.08) { side.crossVectors(dir, UP); if (side.lengthSq() < 1e-6) side.set(1, 0, 0); }
    side.normalize();
    return out.copy(best.c).addScaledVector(side, best.r + Math.max(80, best.r * 0.2));
  }

  // ---------------------------------------------------------------- camera
  updateCamera(dt) {
    const p = this.player; const cam = this.camera;
    if (this.mode === 'menu') {
      const t = this.time * 0.08; const R = HULLS[p.hullId].cam * 1.6;
      _v.set(Math.sin(t) * R, R * 0.28, Math.cos(t) * R).add(p.pos);
      cam.position.copy(_v);
      cam.lookAt(_v2.copy(p.pos).add(_v3.set(Math.sin(t + 1.4) * R * 0.5, 0, Math.cos(t + 1.4) * R * 0.5)));
      return;
    }
    const D = HULLS[p.hullId].cam * (p.cruise ? 1.25 : 1) * (this.docked ? 1.8 : 1);
    const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(p.pitch * 0.75, p.yaw, 0, 'YXZ'));
    const back = _v.set(0, D * 0.3, -D).applyQuaternion(q).add(p.pos);
    if (!this.camInit) { cam.position.copy(back); this.camInit = true; }
    const k = this.warp ? 3 : 6;
    cam.position.x = damp(cam.position.x, back.x, k, dt); cam.position.y = damp(cam.position.y, back.y, k, dt); cam.position.z = damp(cam.position.z, back.z, k, dt);
    // keep the camera at a minimum distance (high speed)
    _v2.subVectors(cam.position, p.pos); const dl = _v2.length();
    if (dl > D * 1.6) cam.position.copy(p.pos).addScaledVector(_v2.normalize(), D * 1.6);
    const look = _v2.set(0, D * 0.12, D * 0.6).applyQuaternion(q).add(p.pos);
    if (this.shake > 0) { look.x += (Math.random() - 0.5) * this.shake * 1.5; look.y += (Math.random() - 0.5) * this.shake * 1.5; this.shake = Math.max(0, this.shake - dt * 2); }
    cam.lookAt(look);
    if (!this.warp) {
      const sp = p.cruise ? 1 : clamp(p.speed / (p.stats.speed * 1.75), 0, 1);
      const fov = 62 + sp * 10;
      if (Math.abs(cam.fov - fov) > 0.05) { cam.fov = damp(cam.fov, fov, 3, dt); cam.updateProjectionMatrix(); }
    }
  }

  // ------------------------------------------------------------------ day
  newDay() {
    this.state.day++; this.state.dayTime -= 1;
    this.economy.daily(this.state.day);
    this.world.onNewDay(this.state.day);
    this.rollOutlaws();
    this.ui.toast(`Day ${this.state.day} — markets updated`, 'info', 2.5);
    this.checkDeadlines();
  }
  restUntilTomorrow() {
    this.state.dayTime = 1.0001; this.newDay(); this.state.dayTime = 0.25;
    this.rollOutlaws();
    this.save();
  }

  // ----------------------------------------------------------------- frame
  frame() {
    const now = performance.now();
    let dt = Math.min(0.05, (now - this.last) / 1000); this.last = now;
    globalUniforms.uTime.value += dt;
    this.pad.poll(dt);
    const simPaused = this.mode !== 'play' || this.paused || this.ui.modalOpen();
    if (this.mode === 'menu') { this.time += dt; this.player.updateVisual(dt); }
    if (!simPaused && !this.docked) this.simulate(dt);
    else if (!simPaused && this.docked) { this.time += dt; }
    this.updateCamera(dt);
    // lights follow the play area
    const pp = this.player.pos;
    _v.copy(pp).negate().normalize();
    this.keyLight.position.copy(pp).addScaledVector(_v, 200); this.keyLight.target.position.copy(pp);
    this.rimLight.position.copy(pp).addScaledVector(_v, -200).add(_v2.set(0, 80, 0)); this.rimLight.target.position.copy(pp);
    this.world.update(dt, this.camera.position, pp);
    this.fx.update(simPaused ? 0 : dt);
    this.audio.listener = this.camera.position;
    this.post.grade.uniforms.uDamage.value = Math.max(0, this.post.grade.uniforms.uDamage.value - dt * 1.5);
    if (this.mode === 'play') this.ui.update(dt);
    this.post.render(dt, globalUniforms.uTime.value);
  }

  simulate(dt) {
    this.time += dt;
    const st = this.state;
    st.dayTime += dt / DAY_LENGTH;
    if (st.dayTime >= 1) this.newDay();
    this.updatePlayer(dt);
    if (this.player.dead) { this.updateOutlaws(dt); this.updateTraders(dt); return; }
    this.updateTraders(dt);
    this.updateOutlawSchedule();
    this.updateOutlaws(dt);
    this.updatePlayerFire(dt);
    const act = this.warp ? null : this.findInteraction();
    this.currentAction = act;
    this.updateMining(dt, act);
    this.updateSalvage(dt, act);
    if (act && act.type !== 'mine' && act.type !== 'salvage' && !(act.type === 'salvage')) { this.mineBeam.visible = this.input.mine && act.type === 'salvage'; }
    // battle music when outlaws are close
    const near = this.hostilesNear(1600);
    this.audio.setMusic(near ? 'battle' : 'calm');
    // autosave occasionally
    this._saveT = (this._saveT || 0) + dt;
    if (this._saveT > 20) { this._saveT = 0; this.save(); }
    if (this.target && this.target.dead) this.target = null;
    if (this.target && this.target.pos.distanceTo(this.player.pos) > this.player.stats.sensor * 1.2) this.target = null;
  }
}

export { netWorth };
