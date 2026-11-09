import * as THREE from 'three';
import { buildShipTemplate, instantiateShip, buildMissile, buildCrate } from './ships.js';
import { beamMaterial, softTexture, globalUniforms } from './shaders.js';
import { clamp, damp, wrapAngle } from './rng.js';
import { COMM } from './data.js';

const _v = new THREE.Vector3(), _v2 = new THREE.Vector3(), _q = new THREE.Quaternion(), _e = new THREE.Euler();
const FWD = new THREE.Vector3(0, 0, 1);

let SHIP_UID = 1;

export class Ship {
  constructor(game, { kind, hullId = 'wren', palette = 'player', tpl = null, stats, name }) {
    this.game = game; this.kind = kind; this.hullId = hullId; this.name = name || hullId;
    this.uid = SHIP_UID++;
    const template = tpl || buildShipTemplate(hullId, palette);
    const shieldCol = kind === 'outlaw' ? new THREE.Color(1.0, 0.35, 0.25) : kind === 'trader' ? new THREE.Color(1.0, 0.8, 0.4) : new THREE.Color(0.35, 0.9, 1.0);
    const inst = instantiateShip(template, shieldCol);
    this.obj = inst.group; this.engines = inst.engines; this.shieldMesh = inst.shield; this.radius = inst.radius; this.muzzles = inst.muzzles; this.size = inst.size;
    game.scene.add(this.obj);
    this.pos = this.obj.position;
    this.yaw = 0; this.pitch = 0; this.roll = 0; this.yawRate = 0;
    this.speed = 0; this.throttle = 0; this.boost = false; this.cruise = false;
    this.vel = new THREE.Vector3();
    this.hitAges = [9, 9, 9, 9]; this.hitIdx = 0; this.flash = 0;
    this.lastHit = -99; this.lastAttacker = null;
    this.cargo = {};
    this.dead = false;
    this.firing = false; this.beamTarget = null;
    this.applyStats(stats, true);
  }
  applyStats(stats, fill) {
    const prevMaxHp = this.maxHp || stats.hull;
    this.stats = stats;
    this.maxHp = stats.hull; this.maxShield = stats.shield; this.maxEnergy = stats.energy;
    if (fill) { this.hp = this.maxHp; this.shield = this.maxShield; this.energy = this.maxEnergy; }
    else { this.hp = Math.min(this.maxHp, this.hp * (this.maxHp / prevMaxHp)); this.shield = Math.min(this.shield, this.maxShield); this.energy = Math.min(this.energy, this.maxEnergy); }
  }
  get forward() { return _v.copy(FWD).applyQuaternion(this.obj.quaternion); }
  forwardTo(out) { return out.copy(FWD).applyQuaternion(this.obj.quaternion); }
  // reserved = hold space taken by contract cargo / passenger cabins (set by the Game for the player ship)
  cargoUsed() { let n = this.reserved || 0; for (const k in this.cargo) n += this.cargo[k]; return n; }
  cargoValue() { let v = this.missionLure || 0; for (const k in this.cargo) v += this.cargo[k] * COMM[k].base; return v; }

  damage(amount, fromPos, attacker) {
    if (this.dead) return false;
    this.lastHit = this.game.time; this.lastAttacker = attacker || null;
    // impact direction in shield-local unit sphere
    _v2.subVectors(fromPos, this.pos).applyQuaternion(_q.copy(this.obj.quaternion).invert());
    _v2.divide(this.shieldMesh.scale).normalize();
    if (this.shield > 0) {
      const absorbed = Math.min(this.shield, amount);
      this.shield -= absorbed; amount -= absorbed;
      const u = this.shieldMesh.material.uniforms;
      if (this.game.time - (this._lastRipple || 0) > 0.12) {
        this._lastRipple = this.game.time;
        u.uHitDir.value[this.hitIdx].copy(_v2); this.hitAges[this.hitIdx] = 0; this.hitIdx = (this.hitIdx + 1) % 4;
      }
      this.flash = Math.min(1, this.flash + 0.5);
    }
    if (amount > 0) {
      this.hp -= amount;
      if (Math.random() < 0.35) this.game.fx.sparks(_v.copy(this.pos).addScaledVector(_v2.applyQuaternion(this.obj.quaternion), this.radius * 0.5), 4, 0xffb060);
    }
    if (this.hp <= 0) { this.hp = 0; return true; }
    return false;
  }

  steerTo(target, dt, turnMul = 1) {
    _v.subVectors(target, this.pos);
    const horiz = Math.hypot(_v.x, _v.z);
    const dy = Math.atan2(_v.x, _v.z), dp = -Math.atan2(_v.y, horiz);
    const tr = this.stats.turn * turnMul * dt;
    const yd = wrapAngle(dy - this.yaw);
    const ystep = clamp(yd, -tr, tr);
    this.yaw = wrapAngle(this.yaw + ystep);
    this.yawRate = ystep / Math.max(dt, 1e-4);
    this.pitch += clamp(dp - this.pitch, -tr * 0.7, tr * 0.7);
    this.pitch = clamp(this.pitch, -1.2, 1.2);
    return Math.abs(yd) + Math.abs(dp - this.pitch);
  }

  updateMotion(dt, world) {
    const s = this.stats;
    let top = s.speed * this.throttle;
    if (this.boost && this.energy > 1) { top = s.speed * 1.75; this.energy -= 14 * dt; }
    if (this.cruise) top = s.speed * 5.5;
    const k = this.cruise ? 0.9 : top > this.speed ? 1.6 : 2.2;
    this.speed = damp(this.speed, top, k, dt);
    this.roll = damp(this.roll, clamp(this.yawRate * 0.45, -0.9, 0.9), 4, dt);
    this.obj.quaternion.setFromEuler(_e.set(this.pitch, this.yaw, this.roll, 'YXZ'));
    this.forwardTo(this.vel).multiplyScalar(this.speed);
    this.pos.addScaledVector(this.vel, dt);
    if (world && world.collide(this.pos, this.radius * 0.6, this.vel)) { this.speed *= 0.96; }
    // regen
    if (this.game.time - this.lastHit > 3) this.shield = Math.min(this.maxShield, this.shield + s.shieldRegen * dt);
    if (!this.firing && !this.boost) this.energy = Math.min(this.maxEnergy, this.energy + s.energyRegen * dt);
    else this.energy = Math.min(this.maxEnergy, this.energy + s.energyRegen * 0.25 * dt);
  }

  updateVisual(dt) {
    const u = this.shieldMesh.material.uniforms;
    for (let i = 0; i < 4; i++) { this.hitAges[i] += dt; u.uHitAge.value[i] = this.hitAges[i]; }
    this.flash = Math.max(0, this.flash - dt * 1.6);
    u.uFlash.value = this.flash;
    u.uStrength.value = this.maxShield > 0 ? this.shield / this.maxShield : 0;
    const pw = this.cruise ? 1.6 : clamp(this.speed / (this.stats.speed || 1), 0.12, 1.75);
    for (const e of this.engines) {
      e.ex.scale.z = e.ex.userData.baseLen * (0.25 + pw * 0.9) * (0.92 + Math.random() * 0.16);
      e.ex.material.uniforms.uPower.value = 0.35 + pw * 0.5;
      if (e.sp) e.sp.scale.setScalar(e.sp.userData.baseScale * (0.7 + pw * 0.45));
    }
  }

  remove() { this.dead = true; this.game.scene.remove(this.obj); this.obj.traverse((o) => { if (o.material && o.material.isShaderMaterial && o !== null) { /* per-instance */ } }); this.shieldMesh.material.dispose(); }
}

// ---------------------------------------------------------------------------
// Particles (single Points draw call)
// ---------------------------------------------------------------------------
export class Particles {
  constructor(scene, max = 1600) {
    this.max = max; this.n = 0;
    this.pos = new Float32Array(max * 3); this.vel = new Float32Array(max * 3); this.col = new Float32Array(max * 3);
    this.life = new Float32Array(max); this.maxLife = new Float32Array(max); this.size = new Float32Array(max); this.alpha = new Float32Array(max);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('color', new THREE.BufferAttribute(this.col, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aSize', new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aAlpha', new THREE.BufferAttribute(this.alpha, 1).setUsage(THREE.DynamicDrawUsage));
    const m = new THREE.ShaderMaterial({
      uniforms: { uMap: { value: softTexture() }, uPx: { value: 1 } },
      vertexShader: `attribute float aSize; attribute float aAlpha; attribute vec3 color; uniform float uPx; varying vec3 vC; varying float vA;
        void main(){ vC=color; vA=aAlpha; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize = aSize*uPx*600.0/max(-mv.z,1.0); gl_Position=projectionMatrix*mv; }`,
      fragmentShader: `uniform sampler2D uMap; varying vec3 vC; varying float vA; void main(){ float t=texture2D(uMap, gl_PointCoord).a; gl_FragColor=vec4(vC*t*vA*2.0, t*vA); }`,
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    });
    this.points = new THREE.Points(g, m); this.points.frustumCulled = false; this.points.renderOrder = 6;
    this.geo = g; scene.add(this.points);
  }
  emit(p, v, color, size, life) {
    if (this.n >= this.max) return;
    const i = this.n++;
    this.pos.set([p.x, p.y, p.z], i * 3); this.vel.set([v.x, v.y, v.z], i * 3);
    const c = color.isColor ? color : new THREE.Color(color);
    this.col.set([c.r, c.g, c.b], i * 3); this.size[i] = size; this.life[i] = life; this.maxLife[i] = life; this.alpha[i] = 1;
  }
  burst(p, count, speed, color, size, life) {
    const c = new THREE.Color(color);
    for (let k = 0; k < count; k++) {
      _v2.set(Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1).normalize().multiplyScalar(speed * (0.3 + Math.random() * 0.7));
      this.emit(p, _v2, c, size * (0.5 + Math.random()), life * (0.5 + Math.random() * 0.8));
    }
  }
  sparks(p, count, color) { this.burst(p, count, 30, color, 1.2, 0.5); }
  update(dt) {
    let i = 0;
    while (i < this.n) {
      this.life[i] -= dt;
      if (this.life[i] <= 0) {
        const j = --this.n;
        if (i !== j) {
          for (let k = 0; k < 3; k++) { this.pos[i * 3 + k] = this.pos[j * 3 + k]; this.vel[i * 3 + k] = this.vel[j * 3 + k]; this.col[i * 3 + k] = this.col[j * 3 + k]; }
          this.life[i] = this.life[j]; this.maxLife[i] = this.maxLife[j]; this.size[i] = this.size[j];
        }
        continue;
      }
      const f = Math.exp(-1.2 * dt);
      for (let k = 0; k < 3; k++) { this.vel[i * 3 + k] *= f; this.pos[i * 3 + k] += this.vel[i * 3 + k] * dt; }
      const t = this.life[i] / this.maxLife[i];
      this.alpha[i] = t * t;
      i++;
    }
    this.geo.setDrawRange(0, this.n);
    for (const n of ['position', 'color', 'aSize', 'aAlpha']) this.geo.attributes[n].needsUpdate = true;
  }
}

// ---------------------------------------------------------------------------
// Effects: beams, explosions, shockwaves, missiles, crates
// ---------------------------------------------------------------------------
function beamGeometry() {
  const a = new THREE.PlaneGeometry(1, 1); a.rotateY(-Math.PI / 2); a.translate(0, 0, 0.5);
  const b = a.clone(); b.rotateZ(Math.PI / 2);
  const g = new THREE.BufferGeometry();
  const pa = a.attributes.position.array, pb = b.attributes.position.array;
  const ua = a.attributes.uv.array, ub = b.attributes.uv.array;
  const pos = new Float32Array(pa.length + pb.length); pos.set(pa); pos.set(pb, pa.length);
  const uv = new Float32Array(ua.length + ub.length); uv.set(ua); uv.set(ub, ua.length);
  const ia = Array.from(a.index.array); const ib = Array.from(b.index.array).map((x) => x + a.attributes.position.count);
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.BufferAttribute(uv, 2)); g.setIndex(ia.concat(ib));
  // uv.x must run along length (z): plane width (x) became z
  return g;
}

export class FX {
  constructor(game) {
    this.game = game; this.scene = game.scene;
    this.particles = new Particles(game.scene);
    this.beamGeo = beamGeometry();
    this.beams = [];
    this.missiles = [];
    this.crates = [];
    this.waves = [];
    this.flashLight = new THREE.PointLight(0xffa060, 0, 600, 1.5);
    game.scene.add(this.flashLight);
    this.missileTpl = buildMissile();
    this.crateTpl = buildCrate();
  }
  sparks(p, n, c) { this.particles.sparks(p, n, c); }

  makeBeam(color) {
    const m = new THREE.Mesh(this.beamGeo, beamMaterial(color));
    m.material.uniforms.uTime = globalUniforms.uTime;
    m.frustumCulled = false; m.visible = false; m.renderOrder = 7;
    this.scene.add(m);
    return m;
  }
  showBeam(beam, from, to, width) {
    beam.visible = true; beam.position.copy(from); beam.lookAt(to);
    const len = from.distanceTo(to); beam.scale.set(width, width, len);
    beam.material.uniforms.uLen.value = len;
  }

  explosion(pos, scale = 1, color = 0xffa050) {
    const P = this.particles;
    P.burst(pos, Math.round(40 * Math.min(scale, 3)), 70 * scale, color, 6 * scale, 1.1);
    P.burst(pos, Math.round(30 * Math.min(scale, 3)), 140 * scale, 0xfff0c0, 2.2 * scale, 0.7);
    P.burst(pos, 16, 30 * scale, 0x6a6f7a, 9 * scale, 2.2);
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: softTexture(), color: new THREE.Color(color).multiplyScalar(2), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
    sp.position.copy(pos); sp.scale.setScalar(10 * scale); this.scene.add(sp);
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.8, 1, 48), new THREE.MeshBasicMaterial({ color: new THREE.Color(0.6, 0.85, 1).multiplyScalar(2), transparent: true, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false }));
    ring.position.copy(pos); ring.lookAt(this.game.camera.position); this.scene.add(ring);
    this.waves.push({ sp, ring, t: 0, scale });
    this.flashLight.position.copy(pos); this.flashLight.intensity = 60 * scale; this.flashLight.distance = 400 * scale;
    this.game.audio.play('explosion', { pos, vol: Math.min(1, 0.5 + scale * 0.3) });
    const pl = this.game.player;
    if (pl) { const k = 1 - pos.distanceTo(pl.pos) / 700; if (k > 0) this.game.pad.rumble(k * Math.min(1, 0.35 + scale * 0.25), k * 0.7, 180 + scale * 120); }
  }

  launchMissile(owner, target, dmg) {
    const obj = this.missileTpl.clone(true);
    const f = owner.forwardTo(new THREE.Vector3());
    obj.position.copy(owner.pos).addScaledVector(f, owner.radius * 0.6).add(new THREE.Vector3(0, -1.5, 0));
    obj.lookAt(_v.copy(obj.position).add(f));
    this.scene.add(obj);
    this.missiles.push({ obj, pos: obj.position, vel: f.clone().multiplyScalar(Math.max(owner.speed, 40) + 40), target, owner, dmg, life: 7 });
    this.game.audio.play('missile', { pos: owner.pos, vol: 0.7 });
  }

  dropCrate(pos, cargo, credits = 0) {
    const obj = this.crateTpl.clone(true);
    obj.position.copy(pos).add(new THREE.Vector3((Math.random() - 0.5) * 16, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 16));
    this.scene.add(obj);
    this.crates.push({ obj, pos: obj.position, cargo, credits, life: 240, spin: new THREE.Vector3(Math.random(), Math.random(), Math.random()) });
  }

  clearAll() {
    for (const m of this.missiles) this.scene.remove(m.obj);
    for (const c of this.crates) this.scene.remove(c.obj);
    for (const w of this.waves) { this.scene.remove(w.sp); this.scene.remove(w.ring); }
    this.missiles = []; this.crates = []; this.waves = [];
  }

  update(dt) {
    this.particles.update(dt);
    this.flashLight.intensity *= Math.exp(-dt * 7);
    for (let i = this.waves.length - 1; i >= 0; i--) {
      const w = this.waves[i]; w.t += dt;
      const k = w.t / 0.9;
      w.sp.scale.setScalar(10 * w.scale * (1 + k * 3)); w.sp.material.opacity = Math.max(0, 1 - k);
      w.ring.scale.setScalar(4 + 70 * w.scale * k); w.ring.material.opacity = Math.max(0, 1 - k);
      if (k >= 1) { this.scene.remove(w.sp); this.scene.remove(w.ring); w.sp.material.dispose(); w.ring.material.dispose(); w.ring.geometry.dispose(); this.waves.splice(i, 1); }
    }
    for (let i = this.missiles.length - 1; i >= 0; i--) {
      const m = this.missiles[i]; m.life -= dt;
      const t = m.target;
      if (t && !t.dead) {
        _v.subVectors(t.pos, m.pos);
        const d = _v.length();
        _v.normalize().multiplyScalar(300);
        m.vel.lerp(_v, 1 - Math.exp(-dt * 3.2));
        if (d < t.radius + 6) {
          const killed = t.damage(m.dmg, m.pos, m.owner);
          if (t === this.game.player) this.game.pad.rumble(0.75, 0.6, 260);
          this.particles.burst(m.pos, 24, 60, 0xffc080, 3, 0.6);
          this.game.audio.play('explosion', { pos: m.pos, vol: 0.45 });
          this.game.onShipHit(t, m.owner, killed);
          m.life = 0;
        }
      } else m.vel.multiplyScalar(1 + dt * 0.5);
      m.pos.addScaledVector(m.vel, dt);
      m.obj.lookAt(_v2.copy(m.pos).add(m.vel));
      if (Math.random() < 0.8) this.particles.emit(m.pos, _v2.set(0, 0, 0), new THREE.Color(0.9, 0.85, 0.8), 2.2, 0.8);
      if (m.life <= 0) { this.scene.remove(m.obj); this.missiles.splice(i, 1); }
    }
    const player = this.game.player;
    for (let i = this.crates.length - 1; i >= 0; i--) {
      const c = this.crates[i]; c.life -= dt;
      c.obj.rotation.x += c.spin.x * dt; c.obj.rotation.y += c.spin.y * dt;
      let gone = c.life <= 0;
      // collectors: player and outlaws
      if (!gone && player && !player.dead && !this.game.docked) {
        const d = c.pos.distanceTo(player.pos);
        if (d < 90 + player.radius) { c.pos.lerp(player.pos, 1 - Math.exp(-dt * 3)); }
        if (d < player.radius + 6) gone = this.game.collectCrate(c);
      }
      if (!gone) for (const o of this.game.outlaws) { if (!o.dead && c.pos.distanceTo(o.pos) < o.radius + 12) { for (const k in c.cargo) o.cargo[k] = (o.cargo[k] || 0) + c.cargo[k]; gone = true; break; } }
      if (gone) { this.scene.remove(c.obj); this.crates.splice(i, 1); }
    }
  }
}
