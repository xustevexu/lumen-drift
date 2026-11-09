import * as THREE from 'three';
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
import { RNG } from './rng.js';
import { COMM } from './data.js';
import { planetMaterial, atmosphereMaterial, ringMaterial, starMaterial, skyMaterial, rockMaterial, softTexture, rayTexture, globalUniforms, NOISE } from './shaders.js';
import { buildStation, buildGate, buildDerelict, getMats } from './ships.js';

// ---- JS value noise for rock displacement ----
function hash3(x, y, z) { const s = Math.sin(x * 127.1 + y * 311.7 + z * 74.7) * 43758.5453; return s - Math.floor(s); }
function vnoise(x, y, z) {
  const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z);
  const xf = x - xi, yf = y - yi, zf = z - zi;
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf), w = zf * zf * (3 - 2 * zf);
  let r = 0;
  for (let dx = 0; dx < 2; dx++) for (let dy = 0; dy < 2; dy++) for (let dz = 0; dz < 2; dz++) {
    r += hash3(xi + dx, yi + dy, zi + dz) * (dx ? u : 1 - u) * (dy ? v : 1 - v) * (dz ? w : 1 - w);
  }
  return r * 2 - 1;
}
function makeRockGeo(seed, detail = 4) {
  let g = new THREE.IcosahedronGeometry(1, detail);
  g.deleteAttribute('normal'); g.deleteAttribute('uv');
  g = mergeVertices(g);
  const p = g.attributes.position; const v = new THREE.Vector3();
  const sx = 0.8 + hash3(seed, 1, 2) * 0.6, sy = 0.6 + hash3(seed, 3, 4) * 0.5, sz = 0.8 + hash3(seed, 5, 6) * 0.6;
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    let n = 0, a = 0.5, f = 1.3;
    for (let o = 0; o < 4; o++) { n += a * vnoise(v.x * f + seed, v.y * f + seed * 0.7, v.z * f - seed); f *= 2.1; a *= 0.5; }
    const crater = Math.max(0, vnoise(v.x * 2.5 + seed * 3, v.y * 2.5, v.z * 2.5) - 0.45) * 0.6;
    v.multiplyScalar(1 + n * 0.42 - crater);
    v.x *= sx; v.y *= sy; v.z *= sz;
    p.setXYZ(i, v.x, v.y, v.z);
  }
  g.computeVertexNormals();
  return g;
}
let ROCK_GEOS = null;
function rockGeos() { if (!ROCK_GEOS) ROCK_GEOS = [makeRockGeo(3.1), makeRockGeo(7.7), makeRockGeo(12.4, 3)]; return ROCK_GEOS; }

const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _s = new THREE.Vector3(), _v = new THREE.Vector3();

export class World {
  constructor(game) {
    this.game = game;
    this.root = new THREE.Group();
    game.scene.add(this.root);
    this.sunUniform = { value: new THREE.Vector3(0, 0, 0) };
    this.rockMat = rockMaterial();
    // dust motes around camera (speed reference / volumetric dust)
    this.dust = this.makeDust();
    game.scene.add(this.dust);
  }

  makeDust() {
    const N = 900, box = 600;
    const pos = new Float32Array(N * 3), sz = new Float32Array(N);
    for (let i = 0; i < N; i++) { pos[i * 3] = Math.random() * box; pos[i * 3 + 1] = Math.random() * box; pos[i * 3 + 2] = Math.random() * box; sz[i] = 0.5 + Math.random() * 1.5; }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('aSize', new THREE.BufferAttribute(sz, 1));
    const m = new THREE.ShaderMaterial({
      uniforms: { uCam: { value: new THREE.Vector3() }, uBox: { value: box }, uColor: { value: new THREE.Color(0.7, 0.85, 1.0) }, uMap: { value: softTexture() }, uPx: { value: 1 } },
      vertexShader: `uniform vec3 uCam; uniform float uBox, uPx; attribute float aSize; varying float vA;
        void main(){ vec3 p = mod(position - uCam, uBox) - uBox*0.5 + uCam; vec4 mv = modelViewMatrix*vec4(p,1.0);
          float d = length(mv.xyz); vA = smoothstep(uBox*0.5, uBox*0.15, d)*smoothstep(4.0, 30.0, d);
          gl_PointSize = aSize*uPx*260.0/max(d,1.0); gl_Position = projectionMatrix*mv; }`,
      fragmentShader: `uniform vec3 uColor; uniform sampler2D uMap; varying float vA; void main(){ float t = texture2D(uMap, gl_PointCoord).a; gl_FragColor = vec4(uColor*t*vA*0.55, t*vA); }`,
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    });
    const p = new THREE.Points(g, m); p.frustumCulled = false; p.renderOrder = 2;
    return p;
  }

  clear() {
    const keep = new Set();
    this.root.traverse((o) => {
      if (o.geometry && !ROCK_GEOS?.includes(o.geometry) && !o.userData.sharedGeo) o.geometry.dispose?.();
      if (o.material && !keep.has(o.material) && o.material.userData?.disposable) o.material.dispose();
    });
    this.root.clear();
    if (this.envRT) { this.envRT.dispose(); this.envRT = null; }
  }

  build(sys, day) {
    this.clear();
    this.sys = sys;
    const rng = new RNG(sys.id * 7919 + 13);
    const scene = this.game.scene;
    // --- Sky ---
    const sky = new THREE.Mesh(new THREE.SphereGeometry(1000, 48, 24), skyMaterial(sys.nebula[0], sys.nebula[1], sys.id * 3.7));
    sky.frustumCulled = false; sky.renderOrder = -100;
    this.sky = sky; this.root.add(sky);
    // --- Env map from sky ---
    const envScene = new THREE.Scene();
    const envSky = new THREE.Mesh(new THREE.SphereGeometry(50, 32, 16), skyMaterial(sys.nebula[0].map((c) => c * 2.2), sys.nebula[1].map((c) => c * 2.2), sys.id * 3.7));
    envScene.add(envSky);
    const sunDisc = new THREE.Mesh(new THREE.SphereGeometry(3, 16, 8), new THREE.MeshBasicMaterial({ color: new THREE.Color(...sys.star.color).multiplyScalar(14) }));
    sunDisc.position.set(30, 18, 20); envScene.add(sunDisc);
    const pm = new THREE.PMREMGenerator(this.game.renderer);
    this.envRT = pm.fromScene(envScene, 0.02, 0.1, 200);
    pm.dispose();
    envSky.geometry.dispose(); envSky.material.dispose();
    scene.environment = this.envRT.texture;
    scene.environmentIntensity = 0.9;
    // fog + lights tinted per system
    const nebA = new THREE.Color(...sys.nebula[0]);
    scene.fog = new THREE.FogExp2(nebA.clone().multiplyScalar(0.35), 0.000045);
    this.game.fogDensity = 0.000045;
    this.game.keyLight.color.setRGB(...sys.star.color);
    this.game.hemi.color.copy(new THREE.Color(...sys.nebula[0]).lerp(new THREE.Color(0.7, 0.8, 1.0), 0.6));
    this.game.hemi.groundColor.copy(new THREE.Color(...sys.nebula[1]).multiplyScalar(0.5));
    this.dust.material.uniforms.uColor.value.copy(new THREE.Color(...sys.nebula[1]).lerp(new THREE.Color(0.85, 0.9, 1), 0.6));

    // --- Star ---
    const st = sys.star;
    const star = new THREE.Group();
    star.add(new THREE.Mesh(new THREE.SphereGeometry(st.radius, 64, 32), starMaterial(st.color, st.glow)));
    const corona = new THREE.Sprite(new THREE.SpriteMaterial({ map: softTexture(), color: new THREE.Color(...st.glow).multiplyScalar(1.6), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, fog: false }));
    corona.scale.setScalar(st.radius * 3.4); star.add(corona);
    const corona2 = new THREE.Sprite(new THREE.SpriteMaterial({ map: softTexture(), color: new THREE.Color(...st.color).multiplyScalar(0.6), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, fog: false, opacity: 0.45 }));
    corona2.scale.setScalar(st.radius * 7); star.add(corona2);
    const rays = new THREE.Sprite(new THREE.SpriteMaterial({ map: rayTexture(), color: new THREE.Color(...st.color), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.35, fog: false }));
    rays.scale.setScalar(st.radius * 6.5); star.add(rays);
    const rays2 = rays.clone(); rays2.material = rays.material.clone(); rays2.material.opacity = 0.2; rays2.scale.setScalar(st.radius * 9); star.add(rays2);
    this.starRays = [rays, rays2];
    this.root.add(star);
    this.star = star;

    // --- Planets ---
    this.planets = sys.planets.map((p) => {
      const grp = new THREE.Group(); grp.position.set(...p.pos);
      const mesh = new THREE.Mesh(new THREE.SphereGeometry(p.radius, 96, 48), planetMaterial(p));
      mesh.material.uniforms.uSun = this.sunUniform;
      mesh.material.uniforms.uSunCol.value.setRGB(...st.color).lerp(new THREE.Color(1, 1, 1), 0.5);
      mesh.rotation.z = rng.range(-0.3, 0.3);
      grp.add(mesh);
      const atmo = new THREE.Mesh(new THREE.SphereGeometry(p.radius * 1.06, 64, 32), atmosphereMaterial(p.atmo, this.sunUniform));
      grp.add(atmo);
      if (p.ring) {
        const rg = new THREE.RingGeometry(p.radius * 1.45, p.radius * 2.3, 128, 1);
        const ring = new THREE.Mesh(rg, ringMaterial(p.pal[0], p.pal[2]));
        ring.rotation.x = -Math.PI / 2 + 0.35; ring.rotation.y = 0.2; grp.add(ring);
      }
      this.root.add(grp);
      return { data: p, group: grp, mesh, pos: grp.position, radius: p.radius };
    });

    // --- Deposits on planet surfaces ---
    this.deposits = [];
    const dm = getMats();
    this.planets.forEach((pl, i) => {
      const a = rng.range(0, Math.PI * 2);
      const dir = new THREE.Vector3(Math.cos(a), rng.range(-0.12, 0.12), Math.sin(a)).normalize();
      const pos = pl.pos.clone().addScaledVector(dir, pl.radius - 2);
      const ore = pl.data.depositOre;
      const col = new THREE.Color(COMM[ore].color);
      const g = new THREE.Group(); g.position.copy(pos); g.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
      const cm = new THREE.MeshStandardMaterial({ color: col.clone().multiplyScalar(0.5), emissive: col, emissiveIntensity: 1.8, roughness: 0.2, metalness: 0.3 });
      for (let k = 0; k < 9; k++) {
        const c = new THREE.Mesh(new THREE.OctahedronGeometry(1, 0), cm);
        const h = rng.range(8, 22);
        c.scale.set(rng.range(2, 4), h, rng.range(2, 4));
        c.position.set(rng.range(-14, 14), h * 0.5, rng.range(-14, 14));
        c.rotation.set(rng.range(-0.4, 0.4), rng.range(0, 3), rng.range(-0.4, 0.4));
        g.add(c);
      }
      const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: softTexture(), color: col, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.8 }));
      glow.position.y = 14; glow.scale.setScalar(90); g.add(glow);
      const ringM = new THREE.Mesh(new THREE.RingGeometry(36, 40, 48), new THREE.MeshBasicMaterial({ color: col.clone().multiplyScalar(2), transparent: true, opacity: 0.6, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false }));
      ringM.rotation.x = -Math.PI / 2; ringM.position.y = 3; g.add(ringM);
      this.root.add(g);
      this.deposits.push({ planet: pl, pos, ore, max: 90, amount: 90, group: g, glow, ring: ringM, radius: 20, name: `${pl.data.name} deposit`, kind: 'deposit', regenDay: day });
    });

    // --- Station ---
    const S = buildStation();
    S.group.position.set(...sys.station.pos);
    S.group.rotation.y = rng.range(0, Math.PI * 2);
    this.root.add(S.group);
    this.station = { ...S, pos: S.group.position, name: sys.station.name };

    // --- Gates ---
    this.gates = sys.gates.map((gd) => {
      const G = buildGate();
      G.group.position.set(...gd.pos);
      G.group.lookAt(0, gd.pos[1], 0);
      this.root.add(G.group);
      return { ...G, pos: G.group.position, to: gd.to, name: gd.name };
    });

    // --- Asteroid fields ---
    this.fields = sys.fields.map((f) => this.buildField(f, day));

    // --- Derelicts ---
    this.derelicts = sys.derelicts.map((d) => {
      const D = buildDerelict(d.seed);
      D.group.position.set(...d.pos);
      D.group.rotation.set(rng.range(0, 3), rng.range(0, 3), rng.range(0, 3));
      this.root.add(D.group);
      return { ...D, pos: D.group.position, name: d.name, seed: d.seed, kind: 'derelict' };
    });
  }

  buildField(f, day) {
    const rng = new RNG(f.seed);
    const center = new THREE.Vector3(...f.pos);
    const geos = rockGeos();
    const per = [0, 0, 0];
    const rocks = [];
    for (let i = 0; i < f.count; i++) {
      const v = rng.int(0, 2); per[v]++;
      const r = Math.pow(rng.next(), 0.6) * f.radius;
      const a = rng.range(0, Math.PI * 2);
      const pos = new THREE.Vector3(Math.cos(a) * r, rng.range(-1, 1) * f.radius * 0.28 * (1 - r / f.radius * 0.5), Math.sin(a) * r).add(center);
      const big = rng.chance(0.08);
      const scale = big ? rng.range(22, 38) : rng.range(4, 14);
      const ore = rng.chance(0.72) ? f.primary : f.secondary;
      const amt = Math.round(scale * (big ? 2.2 : 1.4));
      rocks.push({ v, idx: -1, pos, scale, base: scale, quat: new THREE.Quaternion().setFromEuler(new THREE.Euler(rng.range(0, 6), rng.range(0, 6), rng.range(0, 6))), axis: new THREE.Vector3(rng.range(-1, 1), rng.range(-1, 1), rng.range(-1, 1)).normalize(), spin: rng.range(0.02, 0.15), ore, amount: amt, max: amt, alive: true, respawnDay: 0, radius: scale * 1.05, kind: 'rock', field: null });
    }
    const meshes = geos.map((geo, v) => {
      const g = geo.clone();
      const n = per[v];
      const aOre = new THREE.InstancedBufferAttribute(new Float32Array(n * 3), 3);
      const aDepl = new THREE.InstancedBufferAttribute(new Float32Array(n), 1);
      g.setAttribute('aOre', aOre); g.setAttribute('aDepl', aDepl);
      const im = new THREE.InstancedMesh(g, this.rockMat, n);
      im.frustumCulled = false;
      this.root.add(im);
      return { im, aOre, aDepl, n: 0 };
    });
    const field = { data: f, center, radius: f.radius, rocks, meshes, name: f.name, primary: f.primary };
    const c = new THREE.Color();
    for (const r of rocks) {
      const M = meshes[r.v]; r.idx = M.n++; r.field = field;
      c.set(COMM[r.ore].color);
      M.aOre.setXYZ(r.idx, c.r, c.g, c.b);
      M.aDepl.setX(r.idx, 0);
      this.writeRock(r);
    }
    meshes.forEach((M) => { M.aOre.needsUpdate = true; M.im.instanceMatrix.needsUpdate = true; });
    // haze sprites (layered volumetric dust approximation)
    const hazeCol = new THREE.Color(...this.sys.nebula[1]).lerp(new THREE.Color(COMM[f.primary].color), 0.4);
    field.haze = [];
    for (let i = 0; i < 10; i++) {
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: softTexture(), color: hazeCol, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.09, fog: false }));
      sp.position.set(rng.range(-1, 1) * f.radius * 0.7, rng.range(-0.25, 0.25) * f.radius, rng.range(-1, 1) * f.radius * 0.7).add(center);
      sp.scale.setScalar(f.radius * rng.range(0.7, 1.3));
      this.root.add(sp); field.haze.push(sp);
    }
    return field;
  }

  writeRock(r) {
    const M = r.field.meshes[r.v];
    const s = r.alive ? r.scale : 0.0001;
    _m.compose(r.pos, r.quat, _s.set(s, s, s));
    M.im.setMatrixAt(r.idx, _m);
  }

  depleteRock(r) {
    const M = r.field.meshes[r.v];
    M.aDepl.setX(r.idx, 1 - r.amount / r.max); M.aDepl.needsUpdate = true;
    r.scale = r.base * (0.55 + 0.45 * (r.amount / r.max));
    r.radius = r.scale * 1.05;
    if (r.amount <= 0) { r.alive = false; r.respawnDay = this.game.state.day + 1; }
    this.writeRock(r); M.im.instanceMatrix.needsUpdate = true;
  }

  onNewDay(day) {
    for (const f of this.fields) {
      let dirty = false;
      for (const r of f.rocks) if (!r.alive && day >= r.respawnDay) { r.alive = true; r.amount = r.max; r.scale = r.base; r.radius = r.scale * 1.05; const M = f.meshes[r.v]; M.aDepl.setX(r.idx, 0); M.aDepl.needsUpdate = true; this.writeRock(r); dirty = true; }
      if (dirty) f.meshes.forEach((M) => (M.im.instanceMatrix.needsUpdate = true));
    }
    for (const d of this.deposits) { d.amount = Math.min(d.max, d.amount + 45); }
  }

  update(dt, camPos, playerPos) {
    const t = globalUniforms.uTime.value;
    this.sky.position.copy(camPos);
    this.dust.material.uniforms.uCam.value.copy(camPos);
    this.starRays[0].material.rotation = t * 0.01;
    this.starRays[1].material.rotation = -t * 0.006;
    for (const p of this.planets) p.mesh.rotation.y += p.data.spin * dt;
    this.station.spin.rotation.y += dt * 0.05;
    this.station.lights.forEach((l, i) => (l.visible = Math.sin(t * 3 + i * 0.8) > -0.2));
    this.station.beacon.material.opacity = 0.6 + 0.4 * Math.sin(t * 2.0);
    for (const g of this.gates) { g.group.rotation.z += dt * 0.03; g.portal.rotation.z -= dt * 0.1; }
    for (const d of this.deposits) { d.ring.scale.setScalar(1 + 0.15 * Math.sin(t * 2)); d.glow.material.opacity = 0.35 + 0.65 * (d.amount / d.max); }
    for (const d of this.derelicts) { const f = Math.sin(t * 13 + d.seed) > 0.2 ? 1 : 0.15; d.glow.material.opacity = f; d.lamp.visible = f > 0.5; }
    // rock spin for nearby fields
    for (const f of this.fields) {
      if (f.center.distanceTo(playerPos) > f.radius + 1600) continue;
      for (const r of f.rocks) {
        if (!r.alive) continue;
        _q.setFromAxisAngle(r.axis, r.spin * dt); r.quat.premultiply(_q);
        this.writeRock(r);
      }
      f.meshes.forEach((M) => (M.im.instanceMatrix.needsUpdate = true));
    }
  }

  // nearest mineable (rock or deposit) to position within reach
  findMineable(pos, reach) {
    let best = null, bd = Infinity;
    for (const f of this.fields) {
      if (f.center.distanceTo(pos) > f.radius + reach + 60) continue;
      for (const r of f.rocks) {
        if (!r.alive) continue;
        const d = r.pos.distanceTo(pos) - r.radius;
        if (d < reach && d < bd) { bd = d; best = r; }
      }
    }
    for (const d of this.deposits) {
      if (d.amount <= 0) continue;
      const dd = d.pos.distanceTo(pos) - d.radius;
      if (dd < reach + 40 && dd < bd) { bd = dd; best = d; }
    }
    return best;
  }

  // simple collision push-out against planets, star, station hub, rocks
  collide(pos, radius, vel) {
    const push = (center, r) => {
      _v.subVectors(pos, center); const d = _v.length(); const min = r + radius;
      if (d < min && d > 0.001) { _v.multiplyScalar(1 / d); pos.addScaledVector(_v, min - d); if (vel) { const vn = vel.dot(_v); if (vn < 0) vel.addScaledVector(_v, -vn * 1.2); } return true; }
      return false;
    };
    let hit = false;
    for (const p of this.planets) hit = push(p.pos, p.radius + 6) || hit;
    push(this.star.position, this.sys.star.radius + 40);
    if (this.station.pos.distanceTo(pos) < 160) push(this.station.pos, 22);
    for (const f of this.fields) {
      if (f.center.distanceTo(pos) > f.radius + 60) continue;
      for (const r of f.rocks) if (r.alive && Math.abs(r.pos.x - pos.x) < r.radius + radius && Math.abs(r.pos.z - pos.z) < r.radius + radius) hit = push(r.pos, r.radius * 0.85) || hit;
    }
    return hit;
  }
}
void NOISE;
