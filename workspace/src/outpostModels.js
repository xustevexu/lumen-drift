// Procedural 3D models for player outposts, built with the same kit and materials as the
// station / ships (white ceramic hulls, grey structure, teal + orange trims, blue solar).
// Every module is built around a socket at its local origin and extends outward along +X,
// so the hub can bolt modules onto the end of its arms.
import * as THREE from 'three';
import { KIT } from './ships.js';
import { softTexture } from './shaders.js';

const { mats, lathe, rbox, add, M } = KIT;
const Y = (g) => { g.rotateX(-Math.PI / 2); return g; }; // lathe() builds along Z; stand it up on Y

function glowSprite(group, color, x, y, z, s, opacity = 0.9) {
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: softTexture(), color: new THREE.Color(color).multiplyScalar(1.8), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity }));
  sp.position.set(x, y, z); sp.scale.setScalar(s); group.add(sp); return sp;
}
function lamp(group, color, x, y, z, r = 0.7) { return add(group, new THREE.SphereGeometry(r, 8, 6), new THREE.MeshBasicMaterial({ color }), x, y, z); }

// lattice truss along +X from x0 to x1: four rails with cross braces (reads as a structural frame)
function truss(group, x0, x1, w = 3, mat = M.grey) {
  const L = x1 - x0, cx = (x0 + x1) / 2, h = w / 2;
  for (const [y, z] of [[h, h], [h, -h], [-h, h], [-h, -h]]) add(group, rbox(L, 0.45, 0.45, 0.12), mat, cx, y, z);
  const n = Math.max(2, Math.round(L / w));
  for (let i = 0; i <= n; i++) {
    const x = x0 + (L * i) / n;
    add(group, rbox(0.35, w, 0.35, 0.1), mat, x, 0, h); add(group, rbox(0.35, w, 0.35, 0.1), mat, x, 0, -h);
    add(group, rbox(0.35, 0.35, w, 0.1), mat, x, h, 0); add(group, rbox(0.35, 0.35, w, 0.1), mat, x, -h, 0);
    if (i < n) { const b = add(group, rbox(Math.hypot(L / n, w) * 0.98, 0.3, 0.3, 0.1), mat, x + L / n / 2, 0, h); b.rotation.z = Math.atan2(w, L / n); }
  }
}
// slatted vent on a face: dark frame, glowing recess, protruding slats (axis: face normal 'x'|'y'|'z', sign)
function vent(group, x, y, z, w, h, axis = 'z', sign = 1, glow = M.ventAmber, slats = 4) {
  const v = new THREE.Group(); v.position.set(x, y, z); group.add(v);
  if (axis === 'x') v.rotation.y = sign * Math.PI / 2; else if (axis === 'y') v.rotation.x = -sign * Math.PI / 2; else if (sign < 0) v.rotation.y = Math.PI;
  add(v, rbox(w + 0.5, h + 0.5, 0.3, 0.12), M.dark, 0, 0, 0.05);
  add(v, new THREE.PlaneGeometry(w, h), glow, 0, 0, 0.1);
  for (let i = 0; i < slats; i++) add(v, rbox(w, h / slats * 0.45, 0.35, 0.08), M.grey, 0, -h / 2 + (h / slats) * (i + 0.5), 0.3);
  return v;
}
// pipe from a to b (axis-aligned elbows), with joint collars
function pipe(group, pts, r = 0.35, mat = M.grey) {
  for (let i = 0; i < pts.length - 1; i++) {
    const a = new THREE.Vector3(...pts[i]), b = new THREE.Vector3(...pts[i + 1]);
    const L = a.distanceTo(b); if (L < 0.01) continue;
    const m = add(group, new THREE.CylinderGeometry(r, r, L, 8), mat, (a.x + b.x) / 2, (a.y + b.y) / 2, (a.z + b.z) / 2);
    m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), b.clone().sub(a).normalize());
    add(group, new THREE.SphereGeometry(r * 1.35, 8, 6), M.gunmetal, b.x, b.y, b.z);
  }
}
// deterministic surface clutter on the top of a box: small housings, caps, antennae
function greeble(group, cx, top, cz, w, d, n, seed) {
  let k = seed;
  const r = () => { k = (k * 9301 + 49297) % 233280; return k / 233280; };
  for (let i = 0; i < n; i++) {
    const x = cx + (r() - 0.5) * w * 0.85, z = cz + (r() - 0.5) * d * 0.85, t = r();
    if (t < 0.45) { const bw = 0.8 + r() * 2, bh = 0.4 + r() * 1.2; add(group, rbox(bw, bh, 0.8 + r() * 2, 0.15), r() < 0.5 ? M.grey : M.white, x, top + bh / 2, z); }
    else if (t < 0.75) { const h = 0.5 + r(); add(group, new THREE.CylinderGeometry(0.4 + r() * 0.5, 0.5 + r() * 0.5, h, 10), M.gunmetal, x, top + h / 2, z); }
    else if (t < 0.9) add(group, new THREE.CylinderGeometry(0.06, 0.1, 2 + r() * 3, 5), M.grey, x, top + 1.5, z);
    else lamp(group, r() < 0.5 ? 0xff7a3a : 0x6fe8ff, x, top + 0.3, z, 0.25);
  }
}
// thin radiator fin with teal edge
function radiator(group, x, y, z, w, h, ry = 0) {
  const f = add(group, rbox(w, h, 0.25, 0.08), M.white, x, y, z, 0, ry, 0);
  add(group, rbox(w, 0.25, 0.32, 0.06), M.trimTeal, x, y + h / 2, z, 0, ry, 0);
  return f;
}

// docking collar where a module meets its arm
function collar(group, x = 0) {
  add(group, lathe([[2.6, 1.0], [3.0, 0.6], [3.0, -0.6], [2.6, -1.0]], 20), M.grey, x, 0, 0, 0, Math.PI / 2, 0);
  add(group, new THREE.TorusGeometry(3.02, 0.1, 6, 24), M.trimTeal, x, 0, 0, 0, Math.PI / 2, 0);
}

// ---------------------------------------------------------------- core hub
export const HUB_ARMS = 6, HUB_ARM_R = 30;
export function buildHub() {
  mats();
  const g = new THREE.Group();
  add(g, Y(lathe([[0, 16], [5, 15.5], [8.5, 12], [9.5, 6], [9.5, -6], [8.5, -12], [5, -15.5], [0, -16]], 36)), M.whiteBig);
  for (const y of [-7, 0, 7]) add(g, new THREE.TorusGeometry(9.7, 0.45, 8, 40), y === 0 ? M.trimOrange : M.trimTeal, 0, y, 0, Math.PI / 2, 0, 0);
  // window band
  add(g, new THREE.CylinderGeometry(9.62, 9.62, 1.2, 40, 1, true), M.trimWhite, 0, 3.5, 0);
  // arms + sockets
  for (let i = 0; i < HUB_ARMS; i++) {
    const a = (i / HUB_ARMS) * Math.PI * 2;
    const arm = new THREE.Group(); arm.rotation.y = -a; g.add(arm);
    truss(arm, 9, HUB_ARM_R - 1, 2.6);
    add(arm, rbox(3.4, 3.4, 3.4, 0.6), M.grey, HUB_ARM_R - 1.5, 0, 0);
    lamp(arm, i % 2 ? 0xff7a3a : 0x6fe8ff, HUB_ARM_R - 1.5, 2.1, 0, 0.45);
  }
  // landing pad on top
  add(g, new THREE.CylinderGeometry(14, 14, 1.0, 6), M.grey, 0, 17, 0);
  add(g, new THREE.CylinderGeometry(13, 13, 1.1, 6), M.dark, 0, 17.1, 0);
  add(g, new THREE.TorusGeometry(10, 0.3, 6, 6), M.trimOrange, 0, 17.75, 0, Math.PI / 2, 0, 0);
  const padLights = [];
  for (let i = 0; i < 6; i++) { const a = (i / 6) * Math.PI * 2 + Math.PI / 6; padLights.push(lamp(g, 0xffb050, Math.cos(a) * 12, 17.9, Math.sin(a) * 12, 0.5)); }
  // antenna mast + dish underneath
  add(g, new THREE.CylinderGeometry(0.4, 0.6, 12, 8), M.grey, 0, -21, 0);
  const dish = add(g, Y(lathe([[0, 0], [3.5, 1.2], [4.2, 2.0]], 24)), M.white, 0, -26, 0); dish.rotation.x = Math.PI;
  // radiator fins between arms, and a command blister
  for (let i = 0; i < HUB_ARMS; i++) {
    const a = (i / HUB_ARMS) * Math.PI * 2 + Math.PI / HUB_ARMS;
    radiator(g, Math.cos(a) * 12.5, -9, Math.sin(a) * 12.5, 6, 7, -a + Math.PI / 2);
  }
  add(g, new THREE.SphereGeometry(3.2, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2), M.glass, 0, 12.5, 7.5, -0.5, 0, 0);
  add(g, new THREE.TorusGeometry(3.25, 0.25, 6, 20), M.trimTeal, 0, 12.4, 7.4, Math.PI / 2 - 0.5, 0, 0);
  for (let i = 0; i < 4; i++) { const a = i * Math.PI / 2 + 0.4; vent(g, Math.cos(a) * 9.4, -3, Math.sin(a) * 9.4, 2.4, 2.4, 'z', 1, M.ventTeal, 3).rotation.y = Math.PI / 2 - a; }
  greeble(g, 0, 17.6, 0, 9, 9, 0, 1);
  const beacon = glowSprite(g, 0x7fe8ff, 0, 20, 0, 18);
  return { group: g, beacon, padLights, radius: 20 };
}

// ---------------------------------------------------------------- mining rig
export function buildMiningRig() {
  mats();
  const g = new THREE.Group();
  collar(g, 0);
  add(g, rbox(10, 7, 8, 1.2), M.white, 6.5, 0, 0);
  add(g, rbox(10.2, 1.2, 8.2, 0.3), M.orangePaint, 6.5, -2.4, 0);
  vent(g, 5, 0.6, 4.0, 4, 3, 'z', 1); vent(g, 5, 0.6, -4.0, 4, 3, 'z', -1);
  greeble(g, 6.5, 3.5, 0, 9, 7, 7, 3);
  pipe(g, [[1.5, -2.5, 3.2], [11, -2.5, 3.2], [11, -1, 3.2]], 0.4);
  pipe(g, [[1.5, -2.5, -3.2], [11, -2.5, -3.2], [11, -1, -3.2]], 0.4);
  // ore hopper on top
  add(g, Y(lathe([[3.4, 2.5], [3.6, 0], [1.6, -2.4], [0.8, -2.6]], 16)), M.grey, 8, 5.6, 0).rotation.x = Math.PI;
  // articulated drill boom: shoulder joint → arm → drill head pointing outward/down
  add(g, new THREE.SphereGeometry(2.2, 16, 12), M.gunmetal, 12, 0, 0);
  const boom = new THREE.Group(); boom.position.set(12, 0, 0); boom.rotation.z = -0.55; g.add(boom);
  for (const z of [1.1, -1.1]) add(boom, rbox(16, 1.8, 0.9, 0.35), M.white, 8, 0, z);
  add(boom, rbox(16.2, 0.35, 2.6, 0.1), M.trimOrange, 8, 1.0, 0);
  // hydraulic ram under the boom
  add(boom, new THREE.CylinderGeometry(0.55, 0.55, 8, 10), M.gunmetal, 5, -1.6, 0, 0, 0, Math.PI / 2);
  add(boom, new THREE.CylinderGeometry(0.32, 0.32, 7, 8), M.grey, 11, -1.6, 0, 0, 0, Math.PI / 2);
  add(boom, new THREE.SphereGeometry(1.6, 12, 10), M.gunmetal, 16, 0, 0);
  const head = new THREE.Group(); head.position.set(16, 0, 0); head.rotation.z = -0.9; boom.add(head);
  add(head, new THREE.CylinderGeometry(2.0, 2.0, 4, 16), M.dark, 3, 0, 0, 0, 0, Math.PI / 2);
  const bit = new THREE.Group(); bit.position.set(5, 0, 0); head.add(bit);
  add(bit, new THREE.ConeGeometry(1.8, 5, 12), M.grey, 2.5, 0, 0, 0, 0, -Math.PI / 2);
  for (let k = 0; k < 4; k++) add(bit, rbox(4.4, 0.35, 0.35, 0.1), M.trimOrange, 2.2, Math.cos(k * 1.57) * 1.0, Math.sin(k * 1.57) * 1.0, k * 0.4, 0, -0.3);
  const glow = glowSprite(head, 0xffb070, 9.5, 0, 0, 7, 0.8);
  return { group: g, bit, glow };
}

// ---------------------------------------------------------------- gas siphon
export function buildGasSiphon() {
  mats();
  const g = new THREE.Group();
  collar(g, 0);
  add(g, new THREE.CylinderGeometry(1.6, 1.6, 24, 12), M.grey, 12, 0, 0, 0, 0, Math.PI / 2);
  for (const x of [5, 12, 19]) add(g, new THREE.TorusGeometry(1.9, 0.4, 8, 16), M.trimTeal, x, 0, 0, 0, Math.PI / 2, 0);
  pipe(g, [[3, -1.6, 0], [3, -3.5, 0], [20, -3.5, 0], [20, -1.6, 0]], 0.5, M.white);
  vent(g, 15, 2.5, 0, 3, 2, 'y', 1, M.ventAmber, 3);
  // compressor sphere tank
  add(g, new THREE.SphereGeometry(4.5, 24, 16), M.cream, 9, 4.8, 0);
  add(g, new THREE.TorusGeometry(4.55, 0.35, 8, 32), M.trimOrange, 9, 4.8, 0, Math.PI / 2, 0, 0);
  add(g, new THREE.CylinderGeometry(0.7, 0.7, 3, 8), M.grey, 9, 1.5, 0);
  // flared intake funnel at the end
  add(g, lathe([[1.6, 0], [2.2, 2], [4.2, 4.5], [6.5, 6.5], [7.0, 7.0]], 28), M.white, 24, 0, 0, 0, Math.PI / 2, 0);
  add(g, new THREE.TorusGeometry(6.9, 0.35, 8, 36), M.trimOrange, 31, 0, 0, 0, Math.PI / 2, 0);
  const inner = add(g, new THREE.CircleGeometry(6.2, 28), new THREE.MeshBasicMaterial({ color: new THREE.Color(0xf2b85a).multiplyScalar(1.4), side: THREE.DoubleSide }), 29.5, 0, 0, 0, Math.PI / 2, 0);
  const glow = glowSprite(g, 0xf2b85a, 31, 0, 0, 16, 0.6);
  return { group: g, glow, inner };
}

// ---------------------------------------------------------------- refinery
export function buildRefinery() {
  mats();
  const g = new THREE.Group();
  collar(g, 0);
  add(g, rbox(18, 9, 12, 1.2), M.grey, 10, 0, 0);
  add(g, rbox(18.2, 1.4, 12.2, 0.3), M.orangePaint, 10, 3.6, 0);
  for (const x of [5, 10, 15]) { vent(g, x, -1.2, 6.0, 3.6, 3.2, 'z', 1); vent(g, x, -1.2, -6.0, 3.6, 3.2, 'z', -1); }
  // upper deck with railing and pipe bundles between the stacks
  add(g, rbox(18.6, 0.4, 13, 0.1), M.dark, 10, 4.7, 0);
  for (const z of [6.3, -6.3]) { add(g, rbox(18.6, 0.18, 0.18, 0.05), M.trimOrange, 10, 6, z); for (let x = 1.5; x <= 18.5; x += 2.4) add(g, rbox(0.15, 1.3, 0.15, 0.04), M.grey, x, 5.4, z); }
  pipe(g, [[6, 6, 3], [6, 7.5, 0], [16, 7.5, 0], [16, 6, -3]], 0.45, M.white);
  pipe(g, [[11, 5.5, 3], [11, 5.5, -4.5], [3, 5.5, -4.5]], 0.35);
  greeble(g, 6, 4.9, -3.5, 6, 4, 6, 7);
  for (const x of [3.5, 16.5]) radiator(g, x, 1, 7.8, 4, 6, 0);
  // side crane
  add(g, rbox(0.8, 9, 0.8, 0.2), M.grey, 18, 9, 5);
  add(g, rbox(8, 0.7, 0.7, 0.2), M.orangePaint, 15, 13.3, 5);
  add(g, new THREE.CylinderGeometry(0.05, 0.05, 4, 4), M.dark, 11.5, 11.2, 5);
  // smokestacks with heat glow
  const stacks = [];
  for (const [x, z, h] of [[6, 3, 11], [11, 3, 8], [16, -3, 13]]) {
    add(g, new THREE.CylinderGeometry(1.3, 1.8, h, 14), M.white, x, 4.5 + h / 2, z);
    for (const t of [0.35, 0.8]) add(g, new THREE.TorusGeometry(1.5 - t * 0.2, 0.22, 6, 16), t > 0.5 ? M.trimOrange : M.grey, x, 4.5 + h * t, z, Math.PI / 2, 0, 0);
    add(g, new THREE.CircleGeometry(1.15, 14), M.ventAmber, x, 4.55 + h, z, -Math.PI / 2, 0, 0);
    stacks.push(glowSprite(g, 0xff9a40, x, 6 + h, z, 6, 0.55));
  }
  // horizontal process tanks underneath
  for (const z of [-3.5, 3.5]) {
    add(g, lathe([[0, 8], [2.4, 7.4], [2.6, 6], [2.6, -6], [2.4, -7.4], [0, -8]], 18), M.cream, 10, -7.5, z, 0, Math.PI / 2, 0);
    add(g, new THREE.TorusGeometry(2.65, 0.25, 6, 18), M.trimTeal, 10, -7.5, z, 0, Math.PI / 2, 0);
  }
  return { group: g, stacks };
}

// ---------------------------------------------------------------- storage tanks
export function buildStorage() {
  mats();
  const g = new THREE.Group();
  collar(g, 0);
  truss(g, 2, 20, 2.4);
  const caps = [M.cream, M.ochre, M.cream];
  [[8, 4.5, 0], [15, -4.5, 3], [15, 4.5, -3]].forEach(([x, y, z], i) => {
    add(g, Y(lathe([[0, 5.5], [2.6, 5], [3.4, 3.2], [3.4, -3.2], [2.6, -5], [0, -5.5]], 22)), caps[i], x, y, z);
    add(g, new THREE.TorusGeometry(3.45, 0.3, 6, 22), i === 1 ? M.trimOrange : M.trimTeal, x, y, z, Math.PI / 2, 0, 0);
    add(g, rbox(0.8, Math.abs(y) - 1, 0.8, 0.2), M.grey, x, y / 2, z);
  });
  add(g, rbox(6, 6, 6, 1), M.white, 21, 0, 0);
  vent(g, 21, 0, 3.0, 3, 3, 'z', 1, M.ventTeal, 3);
  pipe(g, [[8, 0, 0.6], [8, 1.5, 0.6]], 0.4); pipe(g, [[15, 0, 2], [15, -1.5, 2]], 0.4); pipe(g, [[15, 0, -2], [15, 1.5, -2]], 0.4);
  lamp(g, 0x6fe8ff, 21, 3.4, 0, 0.5);
  return { group: g };
}

// ---------------------------------------------------------------- solar array
export function buildSolar() {
  mats();
  const g = new THREE.Group();
  collar(g, 0);
  add(g, rbox(14, 1.6, 1.6, 0.4), M.grey, 7, 0, 0);
  add(g, new THREE.SphereGeometry(1.5, 12, 10), M.gunmetal, 14, 0, 0);
  const wing = new THREE.Group(); wing.position.set(14, 0, 0); g.add(wing);
  add(wing, rbox(1.2, 1.2, 46, 0.3), M.grey, 0, 0, 0);
  for (const s of [1, -1]) for (const z of [8, 16]) {
    add(wing, rbox(12, 0.4, 7, 0.15), M.solar, 0, 0, s * z);
    add(wing, rbox(12.2, 0.55, 0.35, 0.1), M.grey, 0, 0, s * z + s * 3.6);
  }
  add(wing, rbox(12.2, 0.5, 0.35, 0.1), M.trimTeal, 0, 0, 22.6);
  add(wing, rbox(12.2, 0.5, 0.35, 0.1), M.trimTeal, 0, 0, -22.6);
  return { group: g, wing };
}

// ---------------------------------------------------------------- defense turret
export function buildTurret() {
  mats();
  const g = new THREE.Group();
  collar(g, 0);
  add(g, rbox(7, 5, 7, 1.2), M.white, 4.5, 0, 0);
  add(g, rbox(7.2, 0.9, 7.2, 0.3), M.trimOrange, 4.5, -1.6, 0);
  vent(g, 4.5, 0, 3.6, 3.5, 2, 'z', 1, M.ventRed, 3); vent(g, 4.5, 0, -3.6, 3.5, 2, 'z', -1, M.ventRed, 3);
  add(g, Y(lathe([[4.2, 0], [4.0, 2.2], [3.0, 3.4]], 6)), M.gunmetal, 6, 2.5, 0);
  add(g, rbox(2.4, 1.8, 3.2, 0.4), M.grey, 1.8, 3.4, 0); // ammo feed housing
  const head = new THREE.Group(); head.position.set(6, 6, 0); g.add(head);
  add(head, new THREE.SphereGeometry(3.2, 20, 14, 0, Math.PI * 2, 0, Math.PI / 2), M.gunmetal, 0, 0, 0);
  add(head, rbox(6, 2.8, 5, 0.9), M.white, 0.5, 0.9, 0);
  add(head, rbox(6.2, 0.4, 5.2, 0.15), M.trimTeal, 0.5, 2.3, 0);
  for (const z of [2.7, -2.7]) add(head, rbox(4, 2, 0.6, 0.25), M.gunmetal, 0.2, 0.9, z); // armour cheeks
  add(head, new THREE.SphereGeometry(0.8, 10, 8), M.glass, -1.6, 2.6, 0); // sensor eye
  const muzzles = [];
  for (const z of [1.2, -1.2]) {
    add(head, lathe([[0, 9], [0.32, 8.6], [0.45, 0], [0.85, -0.6], [0, -0.6]], 12), M.grey, 3.2, 0.8, z, 0, Math.PI / 2, 0);
    add(head, new THREE.CylinderGeometry(0.62, 0.62, 2.2, 10), M.gunmetal, 6, 0.8, z, 0, 0, Math.PI / 2);
    add(head, new THREE.TorusGeometry(0.48, 0.12, 6, 12), M.trimOrange, 11.8, 0.8, z, 0, Math.PI / 2, 0);
    muzzles.push(new THREE.Vector3(12.3, 0.8, z));
  }
  lamp(head, 0xff4a30, -1.5, 2.4, 0, 0.4);
  return { group: g, head, muzzles };
}

// ---------------------------------------------------------------- habitat module
export function buildHab() {
  mats();
  const g = new THREE.Group();
  collar(g, 0);
  add(g, lathe([[0, 12], [3, 11.6], [5, 10], [5.6, 7], [5.6, -7], [5, -10], [3, -11.6], [0, -12]], 28), M.whiteBig, 13, 0, 0, 0, Math.PI / 2, 0);
  // window rows: small lit panes instead of one glowing band
  const pane = new THREE.MeshBasicMaterial({ color: new THREE.Color(1.0, 0.86, 0.55).multiplyScalar(1.1) });
  for (let i = 0; i < 7; i++) for (const ang of [0.5, 1.1, 1.7, 2.3]) {
    const w = add(g, new THREE.PlaneGeometry(0.9, 0.6), pane, 8 + i * 1.7, Math.cos(ang) * 5.65, Math.sin(ang) * 5.65);
    w.lookAt(w.position.x, w.position.y * 2, w.position.z * 2);
  }
  for (const x of [6, 20]) { add(g, new THREE.TorusGeometry(5.75, 0.4, 8, 28), M.grey, x, 0, 0, 0, Math.PI / 2, 0); add(g, new THREE.TorusGeometry(5.95, 0.1, 6, 28), M.trimTeal, x, 0, 0, 0, Math.PI / 2, 0); }
  // small greenhouse dome on top
  add(g, new THREE.SphereGeometry(3, 18, 10, 0, Math.PI * 2, 0, Math.PI / 2), M.glass, 13, 5.2, 0);
  glowSprite(g, 0x9ff0a0, 13, 6, 0, 6, 0.35);
  const lights = [];
  for (let i = 0; i < 5; i++) lights.push(lamp(g, i % 2 ? 0xffd890 : 0x9ff0ff, 7 + i * 3, -5.7, 0, 0.35));
  for (const z of [6.2, -6.2]) radiator(g, 13, 0, z, 9, 3.5, 0);
  pipe(g, [[3, 4.6, 0], [8, 5.6, 0]], 0.35);
  return { group: g, lights };
}

// ---------------------------------------------------------------- trade beacon / dock
export function buildTradeDock() {
  mats();
  const g = new THREE.Group();
  collar(g, 0);
  truss(g, 2, 16, 2.4);
  // docking cradle: a U frame a trader can nose into
  add(g, rbox(2, 2, 20, 0.5), M.grey, 17, 0, 0);
  for (const s of [1, -1]) {
    add(g, rbox(18, 1.6, 1.6, 0.4), M.white, 26, 0, s * 9.2);
    add(g, rbox(18.2, 0.4, 0.4, 0.1), M.trimOrange, 26, 1.0, s * 9.2);
    for (let i = 0; i < 4; i++) lamp(g, i % 2 ? 0xffffff : 0xff7a3a, 19 + i * 5, 1.1, s * 9.2, 0.35);
  }
  // beacon mast
  add(g, new THREE.CylinderGeometry(0.5, 0.8, 22, 10), M.grey, 10, 11, 0);
  add(g, Y(lathe([[0, 1.6], [1.5, 0.8], [1.5, -0.8], [0, -1.6]], 16)), M.white, 10, 22.5, 0);
  const beacon = glowSprite(g, 0xffc060, 10, 23, 0, 14);
  return { group: g, beacon };
}

// ---------------------------------------------------------------- construction scaffold
export function buildScaffold(len = 20) {
  mats();
  const g = new THREE.Group();
  collar(g, 0);
  truss(g, 2, len, 6, M.grey);
  truss(g, 2, len * 0.7, 3, M.orangePaint);
  const blink = lamp(g, 0xffa030, len, 3.5, 0, 0.6);
  return { group: g, blink };
}

export const MODULE_BUILDERS = { mine: buildMiningRig, siphon: buildGasSiphon, refinery: buildRefinery, storage: buildStorage, solar: buildSolar, turret: buildTurret, hab: buildHab, dock: buildTradeDock };

// a full outpost: hub plus modules on sockets (array of module ids, '' = empty arm)
export function buildOutpost(modules) {
  const hub = buildHub();
  const parts = [];
  modules.forEach((id, i) => {
    if (!id) return;
    const m = id === 'scaffold' ? buildScaffold() : MODULE_BUILDERS[id]();
    const a = (i / HUB_ARMS) * Math.PI * 2;
    m.group.position.set(Math.cos(a) * HUB_ARM_R, 0, Math.sin(a) * HUB_ARM_R);
    m.group.rotation.y = -a;
    hub.group.add(m.group);
    parts.push({ id, ...m });
  });
  return { ...hub, parts };
}
