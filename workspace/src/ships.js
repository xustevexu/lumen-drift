import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { hullMaterial, trimMaterial, exhaustMaterial, shieldMaterial, softTexture, portalMaterial, globalUniforms } from './shaders.js';

// ---------- shared materials ----------
const M = {};
function mats() {
  if (M.ready) return M;
  M.white = hullMaterial({ color: 0xe9edf0, metalness: 0.3, roughness: 0.34, panel: 1.2 });
  M.whiteBig = hullMaterial({ color: 0xe4e8ec, metalness: 0.3, roughness: 0.36, panel: 0.42 });
  M.grey = hullMaterial({ color: 0x7c8590, metalness: 0.55, roughness: 0.42, panel: 1.6, lineDark: 0.3 });
  M.dark = hullMaterial({ color: 0x2a3038, metalness: 0.7, roughness: 0.38, panel: 1.8, lineDark: 0.25 });
  M.cream = hullMaterial({ color: 0xe7dcc3, metalness: 0.25, roughness: 0.45, panel: 0.9 });
  M.ochre = hullMaterial({ color: 0xc98e3f, metalness: 0.3, roughness: 0.45, panel: 0.9 });
  M.teal = hullMaterial({ color: 0x3f8f9c, metalness: 0.35, roughness: 0.4, panel: 0.9 });
  M.orangePaint = hullMaterial({ color: 0xe8642c, metalness: 0.25, roughness: 0.4, panel: 2.0, lineDark: 0.2 });
  M.gunmetal = hullMaterial({ color: 0x3a3f47, metalness: 0.75, roughness: 0.32, panel: 1.4 });
  M.rust = hullMaterial({ color: 0x5b4036, metalness: 0.5, roughness: 0.7, panel: 1.1, lineDark: 0.5 });
  // glass stays glossy but not mirror-perfect: at roughness < 0.1 the sun's reflection collapses to a
  // single extremely bright pixel that flickers as the ship turns
  M.glass = new THREE.MeshStandardMaterial({ color: 0x0d2233, metalness: 0.9, roughness: 0.16, envMapIntensity: 1.6 });
  M.trimTeal = trimMaterial(0x4fe3f0, 2.4);
  M.trimOrange = trimMaterial(0xff7a3a, 2.0);
  M.trimRed = trimMaterial(0xff3030, 2.6);
  M.trimWhite = trimMaterial(0xdff6ff, 3.0);
  M.nozzle = new THREE.MeshStandardMaterial({ color: 0x1a1e24, metalness: 0.85, roughness: 0.3, side: THREE.DoubleSide }); // open bell: both sides visible
  M.solar = new THREE.MeshStandardMaterial({ color: 0x16305a, metalness: 0.6, roughness: 0.25, emissive: 0x0a1a3a, emissiveIntensity: 0.6, envMapIntensity: 1.5 });
  M.ventTeal = trimMaterial(0x3fd0e6, 1.3);
  M.ventAmber = trimMaterial(0xff9a40, 1.3);
  M.ventRed = trimMaterial(0xff4a30, 1.4);
  M.ready = true;
  return M;
}
export function getMats() { return mats(); }

// ---------- geometry helpers ----------
function lathe(profile, seg = 28, sx = 1, sy = 1) {
  // LatheGeometry faces outward only when the profile runs from low to high along the axis.
  // Profiles here are written nose-to-tail (descending), so normalise the order; otherwise the
  // whole surface is inside-out and back-face culling makes the part look hollow.
  const ordered = profile[0][1] > profile[profile.length - 1][1] ? profile.slice().reverse() : profile;
  const pts = ordered.map(([r, z]) => new THREE.Vector2(Math.max(r, 0.0001), z));
  const g = new THREE.LatheGeometry(pts, seg);
  g.rotateX(Math.PI / 2);
  g.scale(sx, sy, 1);
  g.computeVertexNormals();
  return g;
}
function planform(pts, thick, bevel = 0.06) {
  const s = new THREE.Shape();
  pts.forEach(([x, z], i) => (i ? s.lineTo(x, -z) : s.moveTo(x, -z)));
  s.closePath();
  const g = new THREE.ExtrudeGeometry(s, { depth: thick, bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 2, curveSegments: 4 });
  g.rotateX(-Math.PI / 2);
  g.translate(0, -thick / 2, 0);
  g.computeVertexNormals();
  return g;
}
function rbox(w, h, d, r = 0.15, seg = 3) { return new RoundedBoxGeometry(w, h, d, seg, Math.min(r, w / 2, h / 2, d / 2) * 0.999); }
function add(group, geo, mat, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0) {
  const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.rotation.set(rx, ry, rz); group.add(m); return m;
}
function mirror(group, geo, mat, x, y, z, rx = 0, ry = 0, rz = 0) {
  const a = add(group, geo, mat, x, y, z, rx, ry, rz);
  const g2 = geo.clone(); g2.scale(-1, 1, 1); g2.computeVertexNormals();
  // flipping winding for mirrored geometry
  if (g2.index) { const idx = g2.index.array; for (let i = 0; i < idx.length; i += 3) { const t = idx[i]; idx[i] = idx[i + 2]; idx[i + 2] = t; } }
  else { flipNonIndexed(g2); }
  g2.computeVertexNormals();
  const b = add(group, g2, mat, -x, y, z, rx, -ry, -rz);
  return [a, b];
}
function flipNonIndexed(g) {
  for (const name of Object.keys(g.attributes)) {
    const at = g.attributes[name]; const s = at.itemSize; const arr = at.array;
    for (let i = 0; i < at.count; i += 3) for (let k = 0; k < s; k++) { const t = arr[i * s + k]; arr[i * s + k] = arr[(i + 2) * s + k]; arr[(i + 2) * s + k] = t; }
  }
}

function nacelle(len, r) {
  return lathe([[0, len * 0.55], [r * 0.55, len * 0.52], [r * 0.9, len * 0.38], [r, len * 0.2], [r, -len * 0.3], [r * 0.92, -len * 0.42], [r * 0.78, -len * 0.47], [r * 0.7, -len * 0.45], [0, -len * 0.45]], 22);
}

// Stern detail: optional engine housing plus an exhaust grille on its rear face
// (dark recessed frame, glowing heat vent in the ship's exhaust colour, protruding slats, trim strip).
// rz = z of the rear face the grille is mounted on; housing (if any) is centred d/2 in front of it.
function sternGrille(g, { x = 0, y = 0, rz, w, h, d = 0, r = 0.15, housing = null, vent, trim, slats = 3, slatMat = M.grey }) {
  if (housing) add(g, rbox(w, h, d, r), housing, x, y, rz + d / 2);
  const t = Math.min(w, h) * 0.07;
  const gw = w * 0.76, gh = h * 0.66;
  add(g, rbox(gw + 2 * t, gh + 2 * t, t, t * 0.4), M.dark, x, y, rz - t / 2 + 0.005);
  add(g, new THREE.PlaneGeometry(gw, gh), vent, x, y, rz - t - 0.01, 0, Math.PI, 0);
  const step = gh / slats, sd = t * 0.9;
  for (let i = 0; i < slats; i++) {
    const sy = y - gh / 2 + step * (i + 0.5);
    add(g, rbox(gw, step * 0.5, sd, Math.min(step * 0.2, sd * 0.4)), slatMat, x, sy, rz - t - sd / 2);
  }
  if (trim) add(g, rbox(gw, t * 0.55, t * 0.55, t * 0.2), trim, x, y - gh / 2 - t * 1.6, rz - t * 0.4);
}

function engineFX(group, engines, x, y, z, r, len, color) {
  const nozzle = add(group, lathe([[r * 0.95, 0.0], [r * 1.05, -0.2 * r], [r * 0.85, -0.55 * r], [r * 0.6, -0.5 * r]], 20), M.nozzle, x, y, z);
  const disc = add(group, new THREE.CircleGeometry(r * 0.72, 20), new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(2.5) }), x, y, z - 0.45 * r, 0, Math.PI, 0);
  const cg = new THREE.CylinderGeometry(r * 0.75, r * 0.12, 1, 16, 1, true);
  cg.rotateX(Math.PI / 2); cg.translate(0, 0, -0.5);
  const ex = add(group, cg, exhaustMaterial(color), x, y, z - 0.45 * r);
  ex.userData.baseLen = len; ex.scale.set(1, 1, len); ex.userData.isExhaust = true;
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: softTexture(), color: new THREE.Color(color), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.9 }));
  sp.position.set(x, y, z - 0.6 * r); sp.scale.setScalar(r * 4); group.add(sp); sp.userData.isGlow = true; sp.userData.baseScale = r * 4;
  engines.push({ ex, sp, disc });
  void nozzle;
}

// ---------- ship builders (forward = +Z) ----------
function buildWren(pal) {
  const g = new THREE.Group(); const engines = []; const muzzles = [];
  const body = pal.body, acc = pal.trim, stripe = pal.stripe;
  add(g, lathe([[0, 4.7], [0.45, 4.55], [0.92, 4.0], [1.18, 3.0], [1.3, 1.6], [1.32, -1.6], [1.18, -3.0], [0.95, -3.7], [0.72, -3.85], [0.0, -3.85]], 32, 1.15, 0.82), body);
  add(g, new THREE.SphereGeometry(1, 28, 16), M.glass, 0, 0.62, 2.35).scale.set(0.72, 0.5, 1.45);
  add(g, rbox(0.7, 0.45, 3.6, 0.18), M.grey, 0, 1.08, -0.9);
  add(g, rbox(0.12, 0.1, 3.0, 0.04), acc, 0, 1.33, -0.9);
  mirror(g, planform([[0.9, 1.4], [4.1, -1.1], [4.35, -2.0], [4.2, -2.35], [0.9, -2.7]], 0.2, 0.07), body, 0, -0.28, 0);
  mirror(g, rbox(0.18, 0.16, 1.2, 0.06), acc, 4.25, -0.28, -1.6);
  mirror(g, planform([[0.9, 0.9], [2.8, -0.4], [2.9, -1.3], [0.9, -1.6]], 0.06, 0.02), stripe, 0, -0.04, -0.3);
  const nac = nacelle(4.2, 0.62);
  mirror(g, nac, M.grey, 1.95, 0.15, -1.9);
  mirror(g, rbox(0.9, 0.22, 1.4, 0.08), M.grey, 1.4, 0.08, -1.8);
  mirror(g, new THREE.TorusGeometry(0.63, 0.05, 8, 24), acc, 1.95, 0.15, -0.7);
  add(g, new THREE.TorusGeometry(1.33, 0.06, 8, 40), stripe, 0, 0, 1.0).scale.set(1.15, 0.82, 1);
  engineFX(g, engines, 1.95, 0.15, -3.9, 0.5, 5, pal.exhaust);
  engineFX(g, engines, -1.95, 0.15, -3.9, 0.5, 5, pal.exhaust);
  // stern engine block between the nacelles (nacelle inner edge at x=±1.33)
  sternGrille(g, { y: -0.05, rz: -4.2, w: 1.6, h: 0.85, d: 1.3, r: 0.22, housing: M.grey, vent: pal.vent, trim: acc, slats: 3 });
  muzzles.push(new THREE.Vector3(0, -0.5, 4.2));
  return { g, engines, muzzles };
}

function buildMule(pal) {
  const g = new THREE.Group(); const engines = []; const muzzles = [];
  add(g, lathe([[0, 11.2], [0.8, 11.0], [1.7, 10.2], [2.2, 8.8], [2.3, 6.6], [2.0, 5.9], [0, 5.9]], 30, 1.1, 0.9), pal.body);
  add(g, new THREE.SphereGeometry(1, 24, 14), M.glass, 0, 1.05, 9.0).scale.set(1.35, 0.7, 1.4);
  add(g, rbox(1.6, 1.6, 15, 0.3), M.grey, 0, 0, -1.2);
  const cont = rbox(2.35, 2.35, 3.7, 0.22);
  const colors = pal.containers;
  let ci = 0;
  for (const z of [3.6, -0.4, -4.4]) {
    for (const [x, y] of [[1.95, 0], [-1.95, 0], [0, 1.95], [0, -1.95]]) {
      add(g, cont, colors[ci++ % colors.length], x, y, z);
    }
    add(g, new THREE.TorusGeometry(2.6, 0.12, 8, 32), M.grey, 0, 0, z + 1.95);
  }
  add(g, rbox(4.4, 3.2, 3.4, 0.5), pal.body, 0, 0, -8.6);
  // side panels mounted on the engine block's flanks (block half-width 2.2)
  mirror(g, rbox(0.12, 2.6, 4.0, 0.05), M.dark, 2.24, 0, -8.6);
  mirror(g, rbox(0.05, 2.2, 3.6, 0.02), pal.trim, 2.32, 0, -8.6);
  mirror(g, planform([[2.2, -7.2], [5.6, -8.5], [5.6, -10.2], [2.2, -10.2]], 0.15, 0.04), M.grey, 0, 1.2, 0);
  mirror(g, rbox(0.2, 0.2, 1.2, 0.05), pal.trim, 5.6, 1.2, -9.4);
  const nac = nacelle(3.2, 1.1);
  mirror(g, nac, M.dark, 1.2, 0, -10.8);
  engineFX(g, engines, 1.2, 0, -12.3, 0.95, 9, pal.exhaust);
  engineFX(g, engines, -1.2, 0, -12.3, 0.95, 9, pal.exhaust);
  // dorsal auxiliary engine block + lower exhaust grille below the main nacelles
  sternGrille(g, { y: 1.95, rz: -10.7, w: 2.4, h: 0.95, d: 2.6, r: 0.25, housing: M.grey, vent: pal.vent, trim: pal.trim, slats: 3 });
  sternGrille(g, { y: -1.3, rz: -10.3, w: 3.6, h: 0.55, vent: pal.vent, slats: 2 });
  add(g, rbox(0.3, 0.3, 13, 0.1), pal.stripe, 0, 0.85, -1.2);
  muzzles.push(new THREE.Vector3(0, -1.6, 10.5));
  return { g, engines, muzzles };
}

function buildKestrel(pal) {
  const g = new THREE.Group(); const engines = []; const muzzles = [];
  add(g, lathe([[0, 7.6], [0.35, 7.0], [0.85, 5.2], [1.25, 2.8], [1.4, 0], [1.35, -3.5], [1.15, -5.5], [0.9, -6.0], [0, -6.0]], 30, 1.25, 0.72), pal.body);
  add(g, new THREE.SphereGeometry(1, 24, 14), M.glass, 0, 0.62, 2.6).scale.set(0.62, 0.42, 1.8);
  mirror(g, planform([[1.0, 2.6], [5.6, -3.2], [5.8, -4.6], [5.2, -4.8], [1.0, -4.3]], 0.24, 0.08), pal.body, 0, -0.15, 0);
  mirror(g, planform([[1.4, 1.6], [4.4, -2.4], [4.5, -3.0], [1.4, -2.0]], 0.06, 0.02), pal.stripe, 0, 0.06, 0);
  const cannon = lathe([[0, 2.6], [0.12, 2.5], [0.2, 2.0], [0.24, -2.0], [0.3, -2.4], [0, -2.4]], 14);
  mirror(g, cannon, M.grey, 5.55, -0.15, -2.0);
  mirror(g, new THREE.SphereGeometry(0.16, 10, 8), pal.trim, 5.55, -0.15, 0.62);
  // tail fins: roots sit just inside the upper hull (surface is y≈0.70–0.83 along the root at x≈1)
  mirror(g, planform([[0.2, -1.0], [0.2, -4.6], [2.2, -5.2], [1.6, -3.6]], 0.12, 0.04), pal.body, 0.9, 0.43, 0, 0, 0, Math.PI / 2 - 0.35);
  const nac = nacelle(4.0, 0.72);
  mirror(g, nac, M.grey, 1.55, -0.05, -4.3);
  engineFX(g, engines, 1.55, -0.05, -6.2, 0.6, 7, pal.exhaust);
  engineFX(g, engines, -1.55, -0.05, -6.2, 0.6, 7, pal.exhaust);
  // stern engine block between the nacelles (nacelle inner edge at x=±0.83)
  sternGrille(g, { y: 0.1, rz: -6.6, w: 1.35, h: 0.9, d: 1.6, r: 0.2, housing: M.grey, vent: pal.vent, trim: pal.trim, slats: 3 });
  add(g, rbox(0.1, 0.1, 6.5, 0.03), pal.trim, 0, 0.95, -1.2);
  muzzles.push(new THREE.Vector3(5.55, -0.15, 0.7), new THREE.Vector3(-5.55, -0.15, 0.7));
  return { g, engines, muzzles };
}

function buildBastion(pal) {
  const g = new THREE.Group(); const engines = []; const muzzles = [];
  add(g, lathe([[0, 28], [1.6, 27.4], [4.2, 24], [6.6, 16], [7.4, 4], [7.4, -10], [7.0, -18], [6.0, -23], [4.8, -24.5], [0, -24.5]], 40, 1.3, 0.62), pal.body);
  add(g, rbox(8.5, 2.6, 26, 0.8), M.grey, 0, 4.1, -3);
  add(g, rbox(6.8, 2.2, 20, 0.6), pal.body, 0, 5.6, -5);
  add(g, rbox(3.6, 4.4, 6.2, 0.6), pal.body, 0, 8.6, -12);
  add(g, rbox(3.7, 0.7, 5.0, 0.2), M.glass, 0, 9.8, -11.2);
  add(g, rbox(0.25, 0.25, 22, 0.08), pal.trim, 0, 6.75, -5);
  // barrier projector ring
  add(g, new THREE.TorusGeometry(10.5, 0.7, 12, 64), M.grey, 0, 0, 8).scale.set(1.0, 0.72, 1);
  add(g, new THREE.TorusGeometry(10.5, 0.28, 8, 64), pal.trim, 0, 0, 8.75).scale.set(1.0, 0.72, 1);
  // radial struts from inside the hull out into the projector ring (hull at z=8: radius 7.13 scaled 1.3 x 0.62;
  // ring centreline: 10.5 x 7.56)
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2 + Math.PI / 4, ca = Math.cos(a), sa = Math.sin(a);
    const dHull = 1 / Math.hypot(ca / (7.13 * 1.3), sa / (7.13 * 0.62)), dRing = 1 / Math.hypot(ca / 10.5, sa / 7.56);
    const r0 = dHull - 0.4, len = dRing - r0, mid = r0 + len / 2;
    add(g, rbox(len, 0.9, 1.6, 0.25), M.grey, ca * mid, sa * mid, 8, 0, 0, a);
  }
  // hangar pods
  mirror(g, rbox(3.4, 3.0, 16, 0.9), pal.body, 10.2, -0.6, -8);
  mirror(g, rbox(0.1, 1.2, 12, 0.04), pal.trim, 11.95, -0.6, -8);
  mirror(g, rbox(3.2, 0.5, 2.0, 0.2), M.grey, 8.2, -0.6, -4);
  mirror(g, rbox(3.2, 0.5, 2.0, 0.2), M.grey, 8.2, -0.6, -12);
  // turrets
  for (const z of [14, 2]) {
    add(g, new THREE.SphereGeometry(1.6, 20, 12, 0, Math.PI * 2, 0, Math.PI / 2), M.grey, 0, z > 5 ? 3.9 : 6.7, z);
    mirror(g, lathe([[0, 3.5], [0.25, 3.5], [0.3, -0.5], [0, -0.5]], 10), M.dark, 0.5, (z > 5 ? 4.6 : 7.4), z + 1.5);
    muzzles.push(new THREE.Vector3(0, z > 5 ? 4.6 : 7.4, z + 5));
  }
  muzzles.push(new THREE.Vector3(0, -3, 26));
  // engines
  const nac = nacelle(8, 2.0);
  for (const [x, y] of [[4.6, 2.2], [-4.6, 2.2], [4.6, -2.2], [-4.6, -2.2]]) {
    add(g, nac, M.dark, x, y, -24);
    engineFX(g, engines, x, y, -27.65, 1.7, 18, pal.exhaust); // nacelle (len 8 at z -24) ends at z -27.6
  }
  // central stern engine core between the four nacelles (nacelle inner edge at x=±2.6)
  sternGrille(g, { y: 0, rz: -27.8, w: 4.4, h: 6.6, d: 4.4, r: 0.7, housing: M.grey, vent: pal.vent, trim: pal.trim, slats: 7 });
  return { g, engines, muzzles };
}

export const PALETTES = {
  player: () => ({ body: M.white, trim: M.trimTeal, stripe: M.orangePaint, exhaust: 0x6fe8ff, vent: M.ventTeal, containers: [M.white, M.teal, M.white, M.orangePaint] }),
  trader: () => ({ body: M.cream, trim: M.trimOrange, stripe: M.ochre, exhaust: 0xffc070, vent: M.ventAmber, containers: [M.ochre, M.cream, M.teal, M.ochre, M.grey] }),
  outlaw: () => ({ body: M.gunmetal, trim: M.trimRed, stripe: M.rust, exhaust: 0xff5a3a, vent: M.ventRed, containers: [M.gunmetal, M.rust] }),
};

const BUILDERS = { wren: buildWren, mule: buildMule, kestrel: buildKestrel, bastion: buildBastion };
const templateCache = new Map();

export function buildShipTemplate(hullId, palette = 'player') {
  mats();
  const key = hullId + ':' + palette;
  if (templateCache.has(key)) return templateCache.get(key);
  const res = BUILDERS[hullId](PALETTES[palette]());
  res.g.traverse((o) => { if (o.isMesh) { o.castShadow = false; o.receiveShadow = false; } });
  const box = new THREE.Box3().setFromObject(res.g);
  res.box = box;
  templateCache.set(key, res);
  return res;
}

// Instantiate (clone) a ship with per-instance shield + exhaust materials
export function instantiateShip(tpl, shieldColor) {
  const g = tpl.g.clone(true);
  const engines = [];
  const exhaustMats = [];
  g.traverse((o) => {
    if (o.userData.isExhaust) { o.material = o.material.clone(); o.material.uniforms.uTime = globalUniforms.uTime; exhaustMats.push(o); }
    if (o.userData.isGlow) { o.material = o.material.clone(); }
  });
  // pair exhaust and glow sprites by order
  const ex = [], gl = [];
  g.traverse((o) => { if (o.userData.isExhaust) ex.push(o); if (o.userData.isGlow) gl.push(o); });
  for (let i = 0; i < ex.length; i++) engines.push({ ex: ex[i], sp: gl[i] });
  const size = new THREE.Vector3(); tpl.box.getSize(size);
  const center = new THREE.Vector3(); tpl.box.getCenter(center);
  const shield = new THREE.Mesh(new THREE.SphereGeometry(1, 40, 20), shieldMaterial(shieldColor));
  shield.scale.set(size.x * 0.62 + 1, size.y * 0.75 + 1.2, size.z * 0.6 + 1);
  shield.position.copy(center);
  shield.renderOrder = 5;
  g.add(shield);
  const radius = Math.max(size.x, size.y, size.z) * 0.5;
  return { group: g, engines, shield, radius, muzzles: tpl.muzzles.map((m) => m.clone()), size };
}

// Outlaw from GLB (normalized), returns template-compatible object
export function makeGlbTemplate(gltfScene, targetLen = 15) {
  mats();
  const root = new THREE.Group();
  const inner = gltfScene;
  const box = new THREE.Box3().setFromObject(inner);
  const size = new THREE.Vector3(); box.getSize(size);
  const c = new THREE.Vector3(); box.getCenter(c);
  const s = targetLen / Math.max(size.x, size.y, size.z);
  inner.position.sub(c.multiplyScalar(1));
  const holder = new THREE.Group(); holder.add(inner); holder.scale.setScalar(s);
  holder.rotation.y = Math.PI; // model nose faces -Z in source; flip to +Z forward
  root.add(holder);
  inner.traverse((o) => {
    if (!o.isMesh) return;
    const m = o.material;
    m.envMapIntensity = 1.3;
    if (m.emissive) { if (m.emissiveMap) m.emissiveIntensity = 2.2; else m.emissive.setRGB(0, 0, 0); }
    if (!m.metalnessMap && m.metalness > 0.8) m.metalness = 0.6;
    if (!m.roughnessMap && m.roughness > 0.8) m.roughness = 0.45;
  });
  const engines = [];
  const L = targetLen;
  engineFX(root, engines, 2.4, 0, -L * 0.5, 0.55, 6, 0xff5a3a);
  engineFX(root, engines, -2.4, 0, -L * 0.5, 0.55, 6, 0xff5a3a);
  // red running lights at the hull extremities for readability against dark space
  const tb = new THREE.Box3().setFromObject(root);
  const lightMat = new THREE.SpriteMaterial({ map: softTexture(), color: new THREE.Color(1.0, 0.18, 0.12).multiplyScalar(2.2), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true });
  for (const [x, y, z, s] of [[tb.min.x * 0.92, 0, 0, 3.2], [tb.max.x * 0.92, 0, 0, 3.2], [0, tb.max.y * 0.9, -L * 0.15, 2.6], [0, 0, tb.max.z * 0.95, 2.4]]) {
    const sp = new THREE.Sprite(lightMat); sp.position.set(x, y, z); sp.scale.setScalar(s); root.add(sp);
  }
  return { g: root, engines, muzzles: [new THREE.Vector3(0, -0.3, L * 0.5)], box: tb };
}

// ---------------- Station ----------------
export function buildStation() {
  mats();
  const g = new THREE.Group();
  const spin = new THREE.Group(); g.add(spin);
  add(g, lathe([[0, 34], [6, 33], [11, 28], [13, 20], [13, -20], [11, -28], [6, -33], [0, -34]], 40), M.whiteBig, 0, 0, 0, Math.PI / 2, 0, 0);
  add(g, new THREE.TorusGeometry(13.4, 0.6, 10, 48), M.trimTeal, 0, 14, 0, Math.PI / 2, 0, 0);
  add(g, new THREE.TorusGeometry(13.4, 0.6, 10, 48), M.trimTeal, 0, -14, 0, Math.PI / 2, 0, 0);
  // habitation ring
  const ring = new THREE.TorusGeometry(70, 6.5, 20, 96);
  add(spin, ring, M.whiteBig, 0, 0, 0, Math.PI / 2, 0, 0);
  add(spin, new THREE.TorusGeometry(70, 2.0, 10, 96), M.grey, 0, 6.2, 0, Math.PI / 2, 0, 0);
  const win = new THREE.TorusGeometry(76.4, 0.7, 6, 96);
  add(spin, win, M.trimWhite, 0, 0, 0, Math.PI / 2, 0, 0);
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    const sp = add(spin, rbox(3.2, 3.2, 58, 0.8), M.grey, Math.cos(a) * 41, 0, Math.sin(a) * 41, 0, -a + Math.PI / 2, 0);
    void sp;
    add(spin, rbox(10, 9, 14, 2.5), M.whiteBig, Math.cos(a) * 70, 0, Math.sin(a) * 70, 0, -a, 0);
  }
  // solar arrays
  for (const s of [1, -1]) {
    const arm = add(g, rbox(2, 2, 44, 0.5), M.grey, 0, s * 42, 0);
    void arm;
    for (const z of [-14, 14]) {
      add(g, rbox(40, 0.5, 12, 0.2), M.solar, 0, s * 42, z);
      add(g, rbox(40.4, 0.7, 0.5, 0.1), M.grey, 0, s * 42, z + 6);
    }
  }
  // docking spire + pads
  add(g, lathe([[0, 10], [3, 9], [4, 0], [3, -10], [0, -11]], 20), M.grey, 0, 45, 0, Math.PI / 2, 0, 0);
  const lights = [];
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2;
    const l = add(spin, new THREE.SphereGeometry(1.0, 8, 6), new THREE.MeshBasicMaterial({ color: i % 2 ? 0xff7a3a : 0x6fe8ff }), Math.cos(a) * 77, 0, Math.sin(a) * 77);
    lights.push(l);
  }
  const beacon = new THREE.Sprite(new THREE.SpriteMaterial({ map: softTexture(), color: 0x7fe8ff, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
  beacon.position.set(0, 58, 0); beacon.scale.setScalar(30); g.add(beacon);
  return { group: g, spin, lights, beacon, radius: 80 };
}

// ---------------- Jump gate ----------------
export function buildGate() {
  mats();
  const g = new THREE.Group();
  add(g, new THREE.TorusGeometry(70, 5, 16, 80), M.grey);
  add(g, new THREE.TorusGeometry(64.5, 1.2, 8, 80), M.trimTeal);
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    add(g, rbox(14, 18, 16, 2.5), M.whiteBig, Math.cos(a) * 72, Math.sin(a) * 72, 0, 0, 0, a);
    add(g, rbox(2, 10, 17, 0.5), M.trimOrange, Math.cos(a) * 80, Math.sin(a) * 80, 0, 0, 0, a);
  }
  const portal = add(g, new THREE.CircleGeometry(66, 64), portalMaterial());
  portal.renderOrder = 4;
  return { group: g, portal };
}

// ---------------- Derelict ----------------
export function buildDerelict(seed) {
  mats();
  const g = new THREE.Group();
  const r = (i) => { const x = Math.sin(seed * 0.001 + i * 12.9898) * 43758.5453; return x - Math.floor(x); };
  const hull = lathe([[0, 18], [4, 16], [6, 8], [6.5, -6], [5, -14], [0, -15]], 24, 1.1, 0.8);
  add(g, hull, M.rust, 0, 0, 0, 0.3, 0, 0.6);
  const broken = rbox(9, 6, 12, 1.2);
  add(g, broken, M.dark, 12, 4, -8, 0.8, 0.4, 0.2);
  for (let i = 0; i < 9; i++) {
    add(g, rbox(1 + r(i) * 4, 1 + r(i + 9) * 3, 2 + r(i + 18) * 8, 0.3), i % 2 ? M.rust : M.gunmetal, (r(i + 1) - 0.5) * 50, (r(i + 2) - 0.5) * 24, (r(i + 3) - 0.5) * 50, r(i + 4) * 6, r(i + 5) * 6, r(i + 6) * 6);
  }
  const lamp = add(g, new THREE.SphereGeometry(0.8, 8, 6), new THREE.MeshBasicMaterial({ color: 0xff5030 }), 0, 5, 6);
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: softTexture(), color: 0xff6040, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
  glow.position.copy(lamp.position); glow.scale.setScalar(16); g.add(glow);
  return { group: g, lamp, glow };
}

export function buildCrate() {
  mats();
  const g = new THREE.Group();
  add(g, rbox(2.2, 2.2, 2.2, 0.3), M.orangePaint);
  add(g, new THREE.BoxGeometry(2.35, 0.3, 2.35), M.trimWhite);
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: softTexture(), color: 0xffe28a, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.8 }));
  glow.scale.setScalar(9); g.add(glow);
  return g;
}

export function buildMissile() {
  mats();
  const g = new THREE.Group();
  add(g, lathe([[0, 1.4], [0.2, 1.0], [0.24, -1.0], [0.18, -1.2], [0, -1.2]], 10), M.white);
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: softTexture(), color: 0xffa060, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
  sp.position.z = -1.6; sp.scale.setScalar(5); g.add(sp);
  return g;
}
