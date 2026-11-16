// Exploration: hidden anomalies in every system (detected by sensors when you get close, or all at once
// with a scanner probe), the Exodus Logs story told one fragment per system, and the dormant gate to
// the hidden system Lumen's Rest, which wakes once enough fragments are recovered.
import * as THREE from 'three';
import { RNG, fmt } from './rng.js';
import { COMM, MODULES, MODULE_ORDER } from './data.js';
import { Ship } from './entities.js';
import { KIT, buildDerelict, buildGate } from './ships.js';
import { softTexture, portalMaterial } from './shaders.js';
import { pilotRank } from './economy.js';
import { applyUnlocks } from './galaxy.js';
import { clearSystemCache, jumpsFrom } from './missions.js';
import { blueprintDrop } from './craft.js';

export const PROBE_PRICE = 300, PROBE_MAX = 5, FRAGMENTS_TO_UNLOCK = 7, HOLD_TIME = 4;

export const LORE = [
  { title: 'Day 1', text: "Log of the Lantern Fleet, day one. The home sun is failing faster than the models said. Forty ships, two hundred thousand sleepers. We burn for the dark beyond the charted lanes." },
  { title: 'Day 212', text: "The drive cores run hot. Chief Engineer Oyelaran says the Lumenite we carry is more than fuel: it remembers the light it was grown in. She talks to it at night. I have stopped asking why." },
  { title: 'Day 498', text: "The Marigold lost containment near a ringed giant. We scattered her Lumenite through the asteroid fields so whoever came after could refuel. Every glowing vein you mine is a breadcrumb we left." },
  { title: 'Day 731', text: "Raiders. Not strangers: our own people, who chose to stay behind and scavenge the convoy's trail. They call themselves the Red Wake, after the glow our engines leave. We outran them. Barely." },
  { title: 'Day 1,040', text: "We are splitting the fleet. The fast ships will settle the warm worlds and build stations. The flagship Halcyon goes on alone, carrying the Heart: the seed crystal every Lumenite vein grew from." },
  { title: 'Day 1,388', text: "Oyelaran built a gate that appears on no chart. It folds the lane shut behind Halcyon. Only someone carrying enough of these logs can wake it; the logs are its key. Forgive the riddle. It keeps the Heart safe." },
  { title: 'Day 1,702', text: "The stations already argue over who owns the lanes. Factions, they call themselves. They will all want the Heart, and so will the Wake. Whoever reads this: gather the logs, and your sensors will hear where the dormant gate sleeps." },
  { title: 'Day 2,115', text: "Halcyon has found a quiet star. The crystals grow wild here, singing in the dark. We name it Lumen's Rest, and we will wait for whoever follows the breadcrumbs." },
  { title: 'Beacon', text: "Automated convoy beacon, repeating: \"If the Heart is still beating when you arrive, take it. It was always meant for whoever kept going.\"" },
  { title: 'Last entry', text: "Captain Ilse Varga of the Halcyon, last entry. You came. The Heart is yours now: let it light your engines the way it lit ours. And tell the sector the Lantern Fleet made it." },
];
const CHARTED_LORE = LORE.length - 1; // the last entry waits in Lumen's Rest

export const TYPES = {
  wreck: { name: 'Lantern Fleet wreck', icon: '📜', desc: 'An old convoy hull. Its log core may still hold a fragment.' },
  pocket: { name: 'Crystal pocket', icon: '✦', desc: 'A drifting rock threaded with rich ore.' },
  beacon: { name: 'Survey beacon', icon: '⌁', desc: 'A forgotten survey buoy with cached market data.' },
  rift: { name: 'Gravitational rift', icon: '◎', desc: 'A tear in local space. The Lumen Institute pays well for readings.' },
  sentinel: { name: 'Sentinel cache', icon: '⟁', desc: 'An ancient automated vault, still guarded.' },
  spire: { name: 'Halcyon Heart Spire', icon: '✧', desc: "The flagship's crystal heart, grown into a spire." },
};

// ---------------------------------------------------------------- state & generation
export function normalizeExploreState(state) {
  if (!state.explore || typeof state.explore !== 'object') state.explore = {};
  const e = state.explore;
  if (!Number.isFinite(e.probes)) e.probes = 0;
  for (const k of ['done', 'seen', 'cleared']) if (!e[k] || typeof e[k] !== 'object') e[k] = {};
  if (!Number.isFinite(e.lore)) e.lore = 0;
  e.unlocked = !!e.unlocked; e.heart = !!e.heart;
  if (!Number.isFinite(e.dry)) e.dry = 0;
  // The Lantern Resonator wakes cores. Older careers (and the Heir, whose log does the same job) have it;
  // a new Deserter or Debtor gets it from Site K-7 (see applyOrigin).
  if (typeof e.resonator !== 'boolean') e.resonator = true;
  if (!e.visited || typeof e.visited !== 'object') e.visited = Object.fromEntries(Object.keys(state.intel || {}).map((k) => [k, 1]));
  if (!e.hummed || typeof e.hummed !== 'object') e.hummed = {};
  if (!e.k7 || typeof e.k7 !== 'object') e.k7 = { stage: 'none', sys: null };
  // e.cores: { wreckKey: 1 } where the remaining cores hide; placed once per career (ensureCores)
  return state;
}
export function anomaliesFor(galaxy, sysId) {
  const sys = galaxy.systems[sysId], rng = new RNG(sys.seed + 4040);
  const list = [];
  const mk = (type) => ({ key: `${sysId}:${list.length}`, type, seed: rng.int(1, 1e9), a: rng.range(0, Math.PI * 2), r: rng.range(3200, 8400), y: rng.range(-250, 250) });
  if (sys.hidden) { list.push(mk('spire')); list.push(mk('pocket')); list.push(mk('pocket')); return list; }
  list.push(mk('wreck'));
  const extra = 1 + (rng.next() < 0.6 ? 1 : 0);
  for (let i = 0; i < extra; i++) list.push(mk(rng.weighted({ pocket: 3, beacon: 2, rift: 2, sentinel: sys.eco === 'frontier' ? 3 : 1.5 })));
  // more Lantern wrecks (many already stripped by scavengers); appended so older saves keep their keys
  const wr = new RNG(sys.seed + 7171), more = 1 + (wr.next() < 0.5 ? 1 : 0);
  for (let i = 0; i < more; i++) list.push({ key: `${sysId}:${list.length}`, type: 'wreck', seed: wr.int(1, 1e9), a: wr.range(0, Math.PI * 2), r: wr.range(3200, 8400), y: wr.range(-250, 250) });
  return list;
}
export function systemExploreStatus(state, galaxy, sysId) {
  const all = anomaliesFor(galaxy, sysId), ex = state.explore;
  return { total: all.length, seen: all.filter((a) => ex.seen[a.key] || ex.done[a.key]).length, done: all.filter((a) => ex.done[a.key]).length };
}

// ---------------------------------------------------------------- models
const { mats, lathe, rbox, add, M } = KIT;
function glow(g, color, s, y = 0, op = 0.9) { const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: softTexture(), color: new THREE.Color(color).multiplyScalar(1.8), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: op })); sp.position.y = y; sp.scale.setScalar(s); g.add(sp); return sp; }
function crystalMat(color) { return new THREE.MeshStandardMaterial({ color: new THREE.Color(color).multiplyScalar(0.5), emissive: new THREE.Color(color), emissiveIntensity: 1.6, roughness: 0.2, metalness: 0.3 }); }
function buildPocket(seed) {
  mats(); const g = new THREE.Group(), r = new RNG(seed);
  const rock = add(g, new THREE.IcosahedronGeometry(14, 1), M.rust); rock.scale.set(1.3, 0.9, 1.1); rock.rotation.set(r.range(0, 3), r.range(0, 3), 0);
  const cm = crystalMat(COMM.lumenite.color);
  for (let i = 0; i < 14; i++) {
    const c = add(g, new THREE.OctahedronGeometry(1, 0), cm); const h = r.range(5, 14);
    const d = new THREE.Vector3(r.range(-1, 1), r.range(-0.6, 1), r.range(-1, 1)).normalize();
    c.position.copy(d).multiplyScalar(12); c.scale.set(r.range(1.4, 2.6), h, r.range(1.4, 2.6)); c.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d);
  }
  return { group: g, pulse: glow(g, COMM.lumenite.color, 70, 0, 0.5) };
}
function buildBeacon() {
  mats(); const g = new THREE.Group();
  add(g, lathe([[0, 6], [2.2, 5], [2.8, 0], [2.2, -4], [0, -5]], 18), M.white, 0, 0, 0, Math.PI / 2, 0, 0);
  add(g, new THREE.TorusGeometry(2.85, 0.25, 6, 20), M.trimOrange, 0, 0, 0, Math.PI / 2, 0, 0);
  add(g, new THREE.CylinderGeometry(0.12, 0.2, 10, 6), M.grey, 0, 10, 0);
  for (const s of [1, -1]) add(g, rbox(6, 0.2, 2.5, 0.05), M.solar, s * 5, 1, 0);
  return { group: g, pulse: glow(g, 0xffc060, 14, 15) };
}
function buildRift() {
  mats(); const g = new THREE.Group();
  const disc = add(g, new THREE.CircleGeometry(30, 48), portalMaterial()); disc.material.side = THREE.DoubleSide;
  const rings = [];
  for (let i = 0; i < 3; i++) rings.push(add(g, new THREE.TorusGeometry(34 + i * 7, 0.6 - i * 0.12, 6, 64), M.trimTeal, 0, 0, 0, i * 0.6, i * 0.9, 0));
  return { group: g, rings, disc, pulse: glow(g, 0x8fb8ff, 120, 0, 0.35) };
}
function buildSentinel() {
  mats(); const g = new THREE.Group();
  add(g, rbox(8, 46, 8, 1), M.dark); add(g, rbox(8.3, 0.6, 8.3, 0.1), M.trimRed, 0, 12, 0); add(g, rbox(8.3, 0.6, 8.3, 0.1), M.trimRed, 0, -12, 0);
  add(g, new THREE.OctahedronGeometry(5, 0), crystalMat(0xff4a3a), 0, 30, 0);
  const rings = [add(g, new THREE.TorusGeometry(12, 0.5, 6, 32), M.gunmetal, 0, 0, 0, Math.PI / 2, 0, 0), add(g, new THREE.TorusGeometry(16, 0.35, 6, 32), M.trimRed, 0, 6, 0, Math.PI / 2 + 0.3, 0, 0)];
  return { group: g, rings, pulse: glow(g, 0xff4a3a, 22, 30) };
}
let DRONE_TPL = null;
function droneTemplate() {
  if (DRONE_TPL) return DRONE_TPL;
  mats(); const g = new THREE.Group();
  add(g, new THREE.OctahedronGeometry(3, 0), M.dark); add(g, new THREE.OctahedronGeometry(1.2, 0), crystalMat(0xff4a3a), 0, 0, 2.4);
  add(g, new THREE.TorusGeometry(4, 0.3, 6, 20), M.trimRed);
  for (const s of [1, -1]) add(g, rbox(5, 0.3, 2, 0.1), M.gunmetal, s * 4.5, 0, -0.5);
  DRONE_TPL = { g, engines: [], muzzles: [new THREE.Vector3(0, 0, 3.5)], box: new THREE.Box3().setFromObject(g) };
  return DRONE_TPL;
}
function buildSpire() {
  mats(); const g = new THREE.Group(), cm = crystalMat(COMM.lumenite.color), r = new RNG(42);
  cm.emissiveIntensity = 0.55; cm.color.set(0x5d7a2a); cm.metalness = 0.5; cm.roughness = 0.25; // let the facets read instead of blooming out
  add(g, lathe([[0, 90], [4, 70], [9, 20], [12, -20], [16, -40], [0, -44]], 6), cm, 0, 20, 0, -Math.PI / 2, 0, 0);
  for (let i = 0; i < 16; i++) {
    const a = r.range(0, Math.PI * 2), d = r.range(20, 55), h = r.range(10, 30);
    const c = add(g, new THREE.OctahedronGeometry(1, 0), cm, Math.cos(a) * d, r.range(-20, 50), Math.sin(a) * d); c.scale.set(r.range(2, 4), h, r.range(2, 4)); c.rotation.set(r.range(-0.4, 0.4), a, r.range(-0.4, 0.4));
  }
  add(g, new THREE.TorusGeometry(40, 1, 8, 64), M.trimTeal, 0, -10, 0, Math.PI / 2, 0, 0);
  return { group: g, pulse: glow(g, COMM.lumenite.color, 150, 30, 0.22) };
}
function buildDormantGate() {
  const G = buildGate();
  G.portal.visible = false;
  G.group.traverse((o) => { if (o.isMesh && o.material && o.material.emissive) { o.material = o.material.clone(); o.material.emissiveIntensity = 0.08; } });
  return { group: G.group, pulse: glow(G.group, 0xff6040, 60, 0, 0.25) };
}

// ---------------------------------------------------------------- runtime
const _v = new THREE.Vector3();
// where the remaining cores hide: a fixed handful of wrecks, concentrated in a few systems, none close to home
export function placeCores(state, galaxy, home, count) {
  const ex = state.explore, rng = new RNG(state.seed + 313 + ex.lore * 7), dist = jumpsFrom(galaxy, home), cores = {};
  const bySys = (minJ) => galaxy.systems.filter((x) => !x.hidden && dist[x.id] != null && dist[x.id] >= minJ)
    .map((x) => ({ id: x.id, wrecks: anomaliesFor(galaxy, x.id).filter((a) => a.type === 'wreck' && !ex.done[a.key]).map((a) => a.key) }))
    .filter((x) => x.wrecks.length);
  let left = count;
  for (const minJ of [2, 1, 0]) {
    const pool = bySys(minJ).filter((x) => !x.wrecks.some((k) => cores[k]));
    for (let i = pool.length - 1; i > 0; i--) { const j = rng.int(0, i); [pool[i], pool[j]] = [pool[j], pool[i]]; }
    for (const sy of pool) {
      if (left <= 0) break;
      const take = Math.min(left, sy.wrecks.length, rng.int(2, 3)); // clusters of 2–3: most systems hold none
      const w = sy.wrecks.slice(); for (let i = 0; i < take; i++) { const k = w.splice(rng.int(0, w.length - 1), 1)[0]; cores[k] = 1; left--; }
    }
    if (left <= 0) break;
  }
  return cores;
}

export class ExploreManager {
  constructor(game) { this.g = game; this.rt = new Map(); this.hold = null; this.drones = []; }
  get state() { return this.g.state; }
  get ex() { return this.state.explore; }

  // Has this pilot heard of the Lantern Fleet's logs yet? A new Deserter or Debtor hasn't, until Site K-7.
  knowsLantern() { const o = this.state.story && this.state.story.origin; return !(o === 'deserter' || o === 'debtor') || this.ex.lore > 0 || this.ex.resonator || this.ex.k7.stage !== 'none'; }
  typeName(type) { return type === 'wreck' && !this.knowsLantern() ? 'Old wreck' : TYPES[type].name; }
  // ---- cores & the Resonator ----
  coresLeft() { return Object.keys(this.ex.cores || {}).length; }
  needsK7() { const o = this.state.story && this.state.story.origin; return (o === 'deserter' || o === 'debtor') && !this.ex.resonator && this.ex.k7.stage !== 'done'; }
  ensureCores(home) {
    const ex = this.ex, want = CHARTED_LORE - ex.lore - (this.needsK7() ? 1 : 0); // K-7 holds the first core for those two
    if (ex.cores && this.coresLeft() >= want) return;
    ex.cores = { ...(ex.cores || {}), ...placeCores(this.state, this.g.galaxy, home ?? this.g.galaxy.startId, want - this.coresLeft()) };
  }
  coresIn(sys) { return Object.keys(this.ex.cores || {}).filter((k) => k.startsWith(`${sys}:`)).length; }
  hasCore(key) { return !!(this.ex.cores && this.ex.cores[key]); }
  // the galaxy-map readout, once you carry a Resonator
  signalFor(sys) {
    if (!this.ex.resonator) return null;
    const s = this.g.galaxy.systems[sys]; if (s.hidden) return null;
    if (!this.ex.visited[sys]) return '?';
    const n = this.coresIn(sys); return n ? `◆ CORE SIGNAL${n > 1 ? ` ×${n}` : ''}` : 'NO CORE SIGNAL';
  }
  // Site K-7: offered to a new Deserter or Debtor once they've mined, docked and bought 3 upgrades
  checkK7() {
    const g = this.g, s = this.state, ex = this.ex, o = s.story && s.story.origin;
    if (!this.needsK7() || ex.k7.stage !== 'none') return;
    if (!(s.stats.mined > 0 && s.tutorial.docked && (s.stats.upgrades || 0) >= 3) || g.docked || g.warp) return;
    const dist = jumpsFrom(g.galaxy, s.systemId);
    const cand = g.galaxy.systems.filter((x) => !x.hidden && dist[x.id] >= 2 && dist[x.id] <= 4);
    const fringe = cand.filter((x) => x.eco === 'mining' || x.eco === 'frontier');
    const pool = fringe.length ? fringe : cand.length ? cand : g.galaxy.systems.filter((x) => !x.hidden && x.id !== s.systemId);
    const t = pool[new RNG(s.seed + 707).int(0, pool.length - 1)];
    ex.k7 = { stage: 'go', sys: t.id };
    const msg = o === 'deserter'
      ? `I've been running your stolen cipher key against Patrol traffic, and something just decrypted. A standing order: "Site K-7, ${t.name} system. Do not approach. Do not report." The Patrol is hiding a wreck out there. I think we should see it before they find out we can read their mail.`
      : `Intercepted chatter on a Red Wake band, gold-hook call signs. Marrow's salvage crews found a wreck at a place they call Site K-7, in ${t.name}, and they're going back with cutters. Whatever's in there, if they cut it out, it dies. We could get there first.`;
    g.story.comm('wick', msg, { ack: true, kind: 'warn' });
    g.p3 && 0; g.save();
  }
  k7Pos() { const sys = this.g.galaxy.systems[this.ex.k7.sys]; const r = new RNG(sys.seed + 7007); return this.placeFor({ type: 'wreck', a: r.range(0, Math.PI * 2), r: r.range(4200, 7600), y: r.range(-200, 200) }); }

  onEnterSystem() {
    for (const r of this.rt.values()) this.g.scene.remove(r.obj.group);
    this.rt.clear(); this.drones = []; this.hold = null;
    const g = this.g, sid = this.state.systemId;
    this.ex.visited[sid] = 1;
    for (const a of anomaliesFor(g.galaxy, sid)) {
      // searched wrecks come back only if a core still sleeps in them and you now carry a Resonator
      if (this.ex.done[a.key] && !(a.type === 'wreck' && this.hasCore(a.key) && this.ex.resonator)) continue;
      const obj = a.type === 'wreck' ? this.wreckObj(a.seed) : a.type === 'pocket' ? buildPocket(a.seed) : a.type === 'beacon' ? buildBeacon() : a.type === 'rift' ? buildRift() : a.type === 'sentinel' ? buildSentinel() : buildSpire();
      const pos = this.placeFor(a);
      obj.group.position.copy(pos); if (a.type !== 'rift') obj.group.rotation.y = a.seed % 6;
      else obj.group.lookAt(0, pos.y, 0);
      g.scene.add(obj.group);
      this.rt.set(a.key, { a, obj, pos });
    }
    // Site K-7, with scavengers already working it
    if (this.ex.k7.stage === 'go' && this.ex.k7.sys === sid) {
      const obj = this.wreckObj(424242, 0xffc040), pos = this.k7Pos();
      obj.group.position.copy(pos); obj.group.scale.setScalar(1.3); g.scene.add(obj.group);
      this.rt.set('k7', { a: { key: 'k7', type: 'k7', seed: 424242 }, obj, pos });
      this.ex.seen.k7 = 2; this.k7Guards = [];
      setTimeout(() => {
        if (!this.rt.has('k7') || g.state.systemId !== sid) return;
        const deserter = this.state.story.origin === 'deserter';
        g.spawnOutlaws({ n: 2, entry: pos.clone().add(_v.set(220, 60, -180)), name: deserter ? 'Unmarked Salvager' : 'Hook Cutter', tough: 1.0, quiet: true, toast: deserter ? '⚠ Two unmarked salvage ships are working Site K-7. Patrol hardware, no transponders.' : "⚠ Two Hook Cutter rigs are already at Site K-7. Marrow's crews got here first." });
        this.k7Guards = g.outlaws.slice(-2);
      }, 2500);
    }
    // the dormant gate sleeps in the host system until the logs wake it
    if (sid === g.galaxy.hostId && !this.ex.unlocked) {
      const h = g.galaxy.systems[g.galaxy.hiddenId], host = g.galaxy.systems[sid];
      const dx = h.x - host.x, dz = h.y - host.y, L = Math.hypot(dx, dz) || 1;
      const obj = buildDormantGate(); const pos = new THREE.Vector3((dx / L) * 8200, 0, (dz / L) * 8200);
      obj.group.position.copy(pos); obj.group.lookAt(0, 0, 0); g.scene.add(obj.group);
      this.rt.set('dormant', { a: { key: 'dormant', type: 'dormant' }, obj, pos });
    }
  }
  wreckObj(seed, color = 0x6fe8ff) { const D = buildDerelict(seed); D.lamp.material = D.lamp.material.clone(); D.lamp.material.color.set(color); D.glow.material = D.glow.material.clone(); D.glow.material.color.set(color); return { group: D.group, pulse: D.glow }; }
  // deterministic spot nudged clear of planets, fields, the station and gates
  placeFor(a) {
    const W = this.g.world; let ang = a.a;
    for (let i = 0; i < 14; i++, ang += 0.45) {
      const p = new THREE.Vector3(Math.cos(ang) * a.r, a.y * 8, Math.sin(ang) * a.r);
      const ok = W.planets.every((pl) => pl.pos.distanceTo(p) > pl.radius + 500) && W.fields.every((f) => f.center.distanceTo(p) > f.radius + 250)
        && W.station.pos.distanceTo(p) > (a.type === 'spire' ? 700 : 1200) && W.gates.every((gt) => gt.pos.distanceTo(p) > 900) && p.length() > this.g.sysData.star.radius + 1500;
      if (ok) return p;
    }
    return new THREE.Vector3(Math.cos(a.a) * a.r, a.y, Math.sin(a.a) * a.r);
  }

  update(dt) {
    const g = this.g, p = g.player, t = g.time;
    for (const [key, r] of this.rt) {
      const o = r.obj;
      if (o.pulse) o.pulse.material.opacity = (r.a.type === 'dormant' ? 0.15 : r.a.type === 'spire' ? 0.16 : 0.35) + (r.a.type === 'spire' ? 0.08 : 0.25) * Math.sin(t * 2 + r.pos.x);
      if (o.rings) o.rings.forEach((ring, i) => { ring.rotation.z += dt * (0.2 + i * 0.15) * (i % 2 ? -1 : 1); });
      if (r.a.type === 'pocket' || r.a.type === 'spire') o.group.rotation.y += dt * 0.03;
      if (key === 'dormant') continue;
      // passive detection: half your sensor range
      if (!this.ex.seen[key] && r.pos.distanceTo(p.pos) < p.stats.sensor * 0.5) {
        this.ex.seen[key] = 1;
        g.ui.toast(`? Unknown signal detected ${g.ui.dist(r.pos.distanceTo(p.pos))} away`, 'info', 4);
        g.audio.play('click', { vol: 0.5, rate: 0.7 });
      }
      // the Resonator acts up near a wreck that still holds a core
      if (r.a.type === 'wreck' && this.ex.resonator && this.hasCore(key) && !this.ex.hummed[key] && r.pos.distanceTo(p.pos) < 600) {
        this.ex.hummed[key] = 1; this.ex.seen[key] = 2;
        g.story.comm('wick', "The Resonator's acting up: it's humming at that wreck. There's a sleeping core in there. Hold a scan on it and let it wake.", { kind: 'good' });
        g.audio.play('click', { vol: 0.5, rate: 0.6 });
      }
      // sentinels wake when you come close
      if (r.a.type === 'sentinel' && !this.ex.cleared[key] && !r.awake && r.pos.distanceTo(p.pos) < 900 && !g.docked) this.wakeSentinel(r);
    }
    this.k7Check = (this.k7Check || 0) - dt; if (this.k7Check <= 0) { this.k7Check = 1; this.checkK7(); }
    if (this.drones.length) {
      this.drones = this.drones.filter((d) => !d.dead);
      if (!this.drones.length && this.awakeKey) { this.ex.cleared[this.awakeKey] = 1; g.ui.toast('⟁ The sentinels are silent. The cache is open: fly in and INVESTIGATE.', 'good', 5); this.awakeKey = null; }
    }
  }
  wakeSentinel(r) {
    const g = this.g, rank = pilotRank(this.state), n = 2 + (rank >= 3 ? 1 : 0);
    r.awake = true; this.awakeKey = r.a.key;
    for (let i = 0; i < n; i++) {
      const stats = { speed: 96, turn: 2.2, cargo: 0, shield: 90 + rank * 35, shieldRegen: 10, hull: 160 + rank * 60, dps: 10 + rank * 3.5, beamRange: 300, hard: 1, mslCap: 0, mslDmg: 0, energy: 200, energyRegen: 30, sensor: 3000 };
      const d = new Ship(g, { kind: 'outlaw', hullId: 'wren', palette: 'outlaw', tpl: droneTemplate(), stats, name: `Sentinel ${'ΑΒΓ'[i]}` });
      d.pos.copy(r.pos).add(_v.set(Math.cos(i * 2.1) * 40, 30 + i * 10, Math.sin(i * 2.1) * 40));
      d.throttle = 1; d.state = 'hunt'; d.missiles = 0; d.mslCd = 99; d.retarget = 0; d.orbitDir = i % 2 ? 1 : -1; d.spawnTime = g.time;
      d.beam = g.fx.makeBeam(0xff4a3a); d.sentinelOf = r.a.key; d.cargo = {};
      g.outlaws.push(d); this.drones.push(d);
    }
    g.ui.toast(`⟁ The sentinel cache wakes: ${n} ancient drones lock on!`, 'warn', 5);
    g.audio.play('alarm', { vol: 0.7, rate: 1.2 });
  }
  onSentinelDown(d) { this.g.fx.explosion(d.pos.clone(), 1.5, 0xff6040); }

  probe() {
    const g = this.g, ex = this.ex;
    if (ex.probes <= 0) { g.ui.toast('No scanner probes: buy them at a station (Services)', 'warn', 3); return false; }
    ex.probes--;
    let found = 0;
    for (const key of this.rt.keys()) { if (key === 'dormant') continue; if (ex.seen[key] !== 2) found++; ex.seen[key] = 2; }
    g.fx.particles.burst(g.player.pos, 80, 400, 0x7fe8ff, 6, 1.5);
    g.audio.play('warp', { vol: 0.4, rate: 1.6 });
    const left = [...this.rt.keys()].filter((k) => k !== 'dormant').length;
    g.ui.toast(left ? `Probe sweep complete: ${left} signal${left > 1 ? 's' : ''} charted in this system${found ? '' : ' (nothing new)'}` : 'Probe sweep complete: nothing uninvestigated left in this system', 'good', 4);
    g.save();
    return true;
  }

  // ---- interactions ----
  interaction(p) {
    for (const [key, r] of this.rt) {
      if (key === 'dormant') { if (r.pos.distanceTo(p.pos) < 400) return { type: 'dormant', label: 'DORMANT GATE' }; continue; }
      if (r.pos.distanceTo(p.pos) > (r.a.type === 'rift' ? 220 : r.a.type === 'spire' ? 260 : 170)) continue;
      if (r.a.type === 'sentinel' && !this.ex.cleared[key]) continue;
      if (key === 'k7' && (this.k7Guards || []).some((o) => !o.dead)) return { type: 'blocked', label: 'CLEAR THE SCAVENGERS FIRST' };
      const pct = this.hold && this.hold.key === key ? Math.round(this.hold.t / HOLD_TIME * 100) : 0;
      const name = key === 'k7' ? 'SITE K-7' : r.a.type === 'wreck' && this.ex.done[key] ? 'SLEEPING CORE' : this.ex.seen[key] === 2 || r.a.type === 'spire' ? this.typeName(r.a.type) : 'UNKNOWN SIGNAL';
      return { type: 'investigate', label: pct ? `SCANNING ${pct}%` : `INVESTIGATE ${name.toUpperCase()}`, hold: true, warm: true, key, target: r.pos };
    }
    return null;
  }
  updateHold(dt, act) {
    const g = this.g;
    if (!(g.input.mine && act && act.type === 'investigate')) { if (this.hold) { this.hold = null; g.mineBeam.visible = false; g.audio.loop('mine', 'mine', false); } return; }
    if (!this.hold || this.hold.key !== act.key) this.hold = { key: act.key, t: 0 };
    this.hold.t += dt;
    g.fx.showBeam(g.mineBeam, g.muzzleWorld(g.player, 0, new THREE.Vector3()), act.target, 1.1);
    g.audio.loop('mine', 'mine', true, 0.25, 0.5);
    if (this.hold.t >= HOLD_TIME) { this.hold = null; g.mineBeam.visible = false; g.audio.loop('mine', 'mine', false); g.input.mine = false; this.resolve(act.key); }
  }
  logNews(n) {
    const p3 = this.g.p3, cs = this.state.p3 && this.state.p3.callsign; if (!p3 || !cs) return;
    if (n === 1) p3.headline(`Independent pilot ${cs} recovers a lost Lantern Fleet log. The Lumen Institute calls it "very interesting".`);
    else if (n === 3) p3.headline(`${cs} now holds three Exodus Logs, more than the Lumen Institute has recovered in fifty years.`);
    else if (n === 5) p3.headline(`Lantern-hunters swarm the Fringe after ${cs}'s fifth Exodus Log. Nobody else has found one.`);
  }
  dormantDialog() {
    const n = this.ex.lore;
    this.g.ui.dialog(`<div class="ov-title">DORMANT GATE</div><p>A jump gate that appears on no chart. Its ring is cold and its portal dark, but something inside hums when your sensors touch it.</p><p>Exodus Logs recovered: <b>${n}/${FRAGMENTS_TO_UNLOCK}</b> needed to wake it. Logs sleep in a handful of Lantern Fleet wrecks; scavengers have stripped the rest. Only a Lantern Resonator can wake a core.</p>`, [{ label: 'CLOSE', primary: true }]);
  }
  resolve(key) {
    const g = this.g, s = this.state, ex = this.ex, r = this.rt.get(key); if (!r) return;
    const a = r.a, rng = new RNG(a.seed + 1), rank = pilotRank(s);
    if (key === 'k7') { this.resolveK7(r); return; }
    // a wreck you already salvaged, revisited with the Resonator: just the core
    if (a.type === 'wreck' && ex.done[key] && this.hasCore(key)) {
      g.scene.remove(r.obj.group); this.rt.delete(key); g.fx.particles.burst(r.pos, 50, 70, 0x7fe8ff, 6, 1.3);
      delete ex.cores[key]; const idx = ex.lore++;
      this.showLog(idx, 'The core you found cold and silent before wakes the moment the Resonator touches it.'); this.logNews(ex.lore); this.checkUnlock(); g.save(); return;
    }
    ex.done[key] = 1; ex.seen[key] = 2;
    g.scene.remove(r.obj.group); this.rt.delete(key);
    g.fx.particles.burst(r.pos, 40, 60, 0x7fe8ff, 5, 1.2);
    g.audio.play('coins', { vol: 0.7 });
    const giveCargo = (k, n) => { const q = Math.min(n, g.cargoFree()); if (q > 0) g.player.cargo[k] = (g.player.cargo[k] || 0) + q; return q; };
    if (a.type === 'wreck') {
      const cr = 300 + rng.int(0, 500) + rank * 100; g.addCredits(cr);
      blueprintDrop(g, 0.1, 'wreck');
      if (this.hasCore(key) && !ex.resonator) {
        // a core is here, but without a Resonator it's dead to every instrument you have: it stays for later
        const know = this.knowsLantern();
        g.ui.toast(know ? `Salvaged ◈${fmt(cr)}. A Lantern core sits in the wreck's cradle, cold and silent. Nothing you carry can read it.` : `Salvaged ◈${fmt(cr)}. Something sits in the wreck's old core cradle: a lattice of crystal, cold and silent. Nothing you carry can read it.`, 'good', 7);
        if (!s.story.said['tip-coldcore']) { s.story.said['tip-coldcore'] = 1; setTimeout(() => g.story.comm('wick', know ? "That core isn't stripped, it's asleep. I can't wake it with anything we've got. Let's remember this wreck." : "Whatever that crystal is, it isn't scrap, and it isn't dead either. I can't read it. Let's remember this wreck."), 1500); }
      } else if (this.hasCore(key)) {
        delete ex.cores[key]; const idx = ex.lore++;
        const heir = s.story && s.story.origin === 'heir';
        const note = idx === 1 && heir ? " Grandmother's log was already awake. As you closed in it hummed, and this one answered."
          : idx === 0 ? ' The core was asleep in its cradle until your scan reached it.' : ' The core woke as your scan reached it.';
        this.showLog(idx, `Salvaged ◈${fmt(cr)} from the wreck.${note}`);
        if (idx === 1 && heir) setTimeout(() => g.story.comm('wick', "Your grandmother's log called that one awake. The scavengers have been cutting these cores out for centuries, and a cut core dies. Nobody ever listened. Now the logs answer each other, and they'll answer us.", { once: 'tip-firstlog' }), 1200);
        this.logNews(ex.lore); this.checkUnlock();
      } else {
        ex.dry++;
        const marrow = s.story && s.story.origin === 'debtor' && s.story.arc && s.story.arc.ch >= 2;
        const mark = marrow ? "gold-hook marks: Marrow's salvage crews" : 'Red Wake tags scratched into the hull';
        if (!this.knowsLantern()) { g.ui.toast(`Salvaged ◈${fmt(cr)}. Somebody picked this old hull clean a long time ago.`, 'good', 5); g.save(); return; }
        g.ui.toast(ex.lore >= CHARTED_LORE ? `Salvaged ◈${fmt(cr)}. The log core was already wiped.` : `Salvaged ◈${fmt(cr)}, but scavengers got here first: the log core is gone. ${mark[0].toUpperCase() + mark.slice(1)}.`, 'good', 6);
        if (ex.lore < CHARTED_LORE && !s.story.said['tip-stripped']) { s.story.said['tip-stripped'] = 1; setTimeout(() => g.story.comm('wick', "Stripped. The Red Wake has picked over the Lantern trail for three hundred years. Not every wreck still has its log; we'll have to keep looking."), 1500); }
      }
    } else if (a.type === 'pocket') {
      const lum = giveCargo('lumenite', rng.int(6, 12)), cob = giveCargo('cobalt', rng.int(8, 16));
      g.ui.toast(`✦ Crystal pocket cracked: ${lum} Lumenite${cob ? ` + ${cob} Cobaltine` : ''}${lum + cob === 0 ? ' (hold full: ore lost!)' : ''}`, 'good', 5);
    } else if (a.type === 'beacon') {
      const cr = 400 + rank * 100; g.addCredits(cr);
      const dist = jumpsFrom(g.galaxy, s.systemId); let n = 0;
      for (const x of g.galaxy.systems) if (dist[x.id] <= 2) { g.economy.recordIntel(x.id); n++; }
      g.ui.toast(`⌁ Survey beacon decoded: fresh market data for ${n} systems + ◈${fmt(cr)}`, 'good', 5);
    } else if (a.type === 'rift') {
      const cr = 800 + rng.int(0, 700) + rank * 200; g.addCredits(cr); g.factionChange('hightech', 3);
      blueprintDrop(g, 0.25, 'rift readings');
      g.ui.toast(`◎ Rift readings sold to the Lumen Institute: ◈${fmt(cr)} · Institute +3`, 'good', 5);
    } else if (a.type === 'sentinel') {
      const cr = 2000 + rng.int(0, 1000) + rank * 500; g.addCredits(cr); giveCargo('luxury', 4);
      const rec = g.activeShipRec(), open = MODULE_ORDER.filter((k) => rec.mods[k] < 3);
      let extra = '';
      if (open.length && rng.next() < 0.5) { const k = open[rng.int(0, open.length - 1)]; rec.mods[k]++; g.refreshPlayerStats(); extra = ` · ancient tech: ${MODULES[k].name} → Mk${rec.mods[k]}`; }
      blueprintDrop(g, 0.4, 'sentinel cache');
      g.ui.toast(`⟁ Sentinel cache opened: ◈${fmt(cr)} + Luxury Crystal${extra}`, 'good', 6);
    } else if (a.type === 'spire') {
      g.addCredits(15000); ex.heart = true;
      this.showLog(LORE.length - 1, '◈15,000 from the Ark\'s vault, and the Lumen Heart itself. Install it from the Upgrades tab at any station: it needs a unique module slot.');
    }
    g.save();
  }
  resolveK7(r) {
    const g = this.g, s = this.state, ex = this.ex, deserter = s.story.origin === 'deserter';
    g.scene.remove(r.obj.group); this.rt.delete('k7');
    g.fx.particles.burst(r.pos, 70, 90, 0xffc040, 7, 1.5); g.audio.play('warp', { vol: 0.4, rate: 1.3 });
    ex.resonator = true; ex.k7 = { stage: 'done', sys: ex.k7.sys };
    const idx = ex.lore++; g.addCredits(1500);
    this.ensureCores(s.systemId);
    const scene = deserter
      ? `<p>Inside K-7 the Patrol left survey gear and a sealed case stamped <b>Logistics Division · authorised D. Mercer</b>. Somebody has been studying this wreck, quietly, for a long time.</p>`
      : `<p>Cutting rigs are bolted all over the hull, a gold hook welded to every one. Marrow's crews were an hour from carving this wreck open.</p>`;
    g.ui.dialog(`<div class="arc-head"><img src="./portraits/wick.jpg" alt=""><div><small>SITE K-7</small><div class="ov-title">THE RESONATOR</div></div></div>${scene}
      <p>Wedged in the core cradle is a fist-sized lattice of brass and crystal, warm to the touch. The moment your hand closes on it, it <b>hums</b>, and the core beside it, cold for three hundred years, flickers awake.</p>
      <p>A <b>Lantern Resonator</b>. Without one, a Lantern core reads as dead scrap to any instrument. That's why nobody has found a log in three centuries. With one, they wake.</p>
      <p><small>+◈1,500 of salvage. The Resonator stays with you whatever ship you fly.</small></p>`,
    [{ label: 'WAKE THE CORE', primary: true, fn: () => {
      this.showLog(idx, 'Etched around the cradle, in an engineer\'s careful hand: "For whoever keeps going. — I. Varga"');
      this.logNews(ex.lore); this.checkUnlock();
      setTimeout(() => g.story.comm('wick', "That's what the Resonator is for. With it aboard, sleeping cores will answer us, and I can read them off the galaxy map: CORE SIGNAL or NO CORE SIGNAL for every system we've visited. Including that cold one we found earlier, if there was one.", { ack: true }), 800);
    } }]);
    g.save();
  }
  showLog(idx, footer) {
    const L = LORE[idx];
    this.g.ui.dialog(`<div class="arc-head"><img src="./portraits/varga.jpg" alt=""><div><small>CAPT. ILSE VARGA · HALCYON</small><div class="ov-title">📜 EXODUS LOG ${idx + 1}/${LORE.length}</div></div></div><p><b>${L.title}</b></p><p style="font-style:italic">${L.text}</p><p><small>${footer}</small></p>`, [{ label: 'CONTINUE', primary: true }]);
  }
  checkUnlock() {
    const g = this.g, ex = this.ex;
    if (ex.unlocked || ex.lore < FRAGMENTS_TO_UNLOCK) return;
    ex.unlocked = true;
    applyUnlocks(g.galaxy, this.state); clearSystemCache();
    const host = g.galaxy.systems[g.galaxy.hostId];
    setTimeout(() => g.ui.toast(`✧ The logs resolve into a signal. The dormant gate in ${host.name} is waking: a new route to Lumen's Rest is on your chart.`, 'good', 9), 600);
    if (g.p3 && this.state.p3) g.p3.headline(`An uncharted jump gate has woken in ${host.name}. Sources say ${this.state.p3.callsign} opened it.`);
    if (this.state.systemId === host.id) { g.save(); g.enterSystem(host.id, null, true); }
  }

  // ---- HUD / map ----
  markers() {
    const out = [];
    for (const [key, r] of this.rt) {
      if (key === 'dormant') { out.push({ key: 'ex_dormant', pos: r.pos, cls: 'dormant', name: '⟁ DORMANT GATE', edge: false }); continue; }
      if (key === 'k7') { out.push({ key: 'ex_k7', pos: r.pos, cls: 'anomaly route', name: '📡 SITE K-7', edge: true }); continue; }
      const seen = this.ex.seen[key];
      if (!seen && r.a.type !== 'spire') continue;
      const T = TYPES[r.a.type], core = r.a.type === 'wreck' && this.ex.resonator && this.hasCore(key) && (this.ex.hummed[key] || this.ex.done[key]);
      out.push({ key: `ex_${key}`, pos: r.pos, cls: 'anomaly', name: core ? '◆ LANTERN WRECK · CORE DETECTED' : seen === 2 || r.a.type === 'spire' ? `${this.knowsLantern() || r.a.type !== 'wreck' ? T.icon : '▣'} ${this.typeName(r.a.type).toUpperCase()}` : '? UNKNOWN SIGNAL', edge: seen === 2 || core });
    }
    return out;
  }
  mapItems() {
    const out = [];
    for (const [key, r] of this.rt) {
      if (key === 'dormant') { out.push({ kind: 'anomaly', anomaly: r.a, pos: r.pos, name: 'Dormant gate', color: '#ff8060', r: 6, arrive: 300 }); continue; }
      if (key === 'k7') { out.push({ kind: 'anomaly', anomaly: r.a, pos: r.pos, name: 'Site K-7', color: '#ffc040', r: 6, arrive: 140 }); continue; }
      const seen = this.ex.seen[key]; if (!seen && r.a.type !== 'spire') continue;
      const core = r.a.type === 'wreck' && this.ex.resonator && this.hasCore(key) && (this.ex.hummed[key] || this.ex.done[key]);
      out.push({ kind: 'anomaly', anomaly: r.a, pos: r.pos, name: core ? 'Lantern wreck · core detected' : seen === 2 || r.a.type === 'spire' ? this.typeName(r.a.type) : 'Unknown signal', color: core ? '#c8f56a' : '#7fe8ff', r: 5, arrive: 120 });
    }
    return out;
  }
}
