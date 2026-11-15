// Shared dogfighting behaviour for friendly NPC ships (siege militia, wingmen):
// chase at range, strafe-orbit up close, fire the beam when lined up, loose missiles occasionally.
import * as THREE from 'three';

const _v = new THREE.Vector3(), _v2 = new THREE.Vector3(), _v3 = new THREE.Vector3();
const UP = new THREE.Vector3(0, 1, 0);

export function dogfight(g, a, t, dt) {
  const d = a.pos.distanceTo(t.pos);
  if (d > 320) { _v.copy(t.vel).multiplyScalar(d / 300).add(t.pos); a.steerTo(_v, dt); a.throttle = 1; a.boost = d > 800 && a.energy > 40; }
  else {
    _v.subVectors(a.pos, t.pos).normalize(); _v2.crossVectors(_v, UP).multiplyScalar(a.orbitDir || 1);
    _v3.copy(t.pos).addScaledVector(_v, 170).addScaledVector(_v2, 150);
    if (g.angleTo(a, t.pos) > 0.5) a.steerTo(_v3, dt); else a.steerTo(t.pos, dt, 0.9);
    a.throttle = 0.7;
  }
  const aim = g.angleTo(a, t.pos);
  if (d < a.stats.beamRange && aim < 0.3 && a.energy > 5) {
    a.firing = true; a.energy -= 8 * dt;
    g.fx.showBeam(a.beam, g.muzzleWorld(a, 0, _v3), t.pos, 1.4);
    const killed = t.damage(a.stats.dps * dt, a.pos, a);
    g.onShipHit(t, a, killed);
  }
  a.mslCd = (a.mslCd ?? 6) - dt;
  if (a.missiles > 0 && a.mslCd <= 0 && d < 800 && aim < 0.6) { a.missiles--; a.mslCd = 10; g.fx.launchMissile(a, t, a.stats.mslDmg); }
}
