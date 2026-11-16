// Station defenses: every station mounts point-defense turrets that fire on outlaws who come too close.
// A station is a refuge: fly into its defense zone and raiders chasing you get shot.
// Accord stations hit harder; Fringe stations make do. Lawful enforcers and Kade's duels are left alone.
// During a Red Wake siege of this station the armada jams most of the batteries, so sieges stay a real fight.
import * as THREE from 'three';

const _v = new THREE.Vector3();
export const DEFENSE_RANGE = 1150;
const DPS = { hightech: 30, industrial: 28, agricultural: 22, mining: 18, frontier: 16 }; // per turret
const MOUNTS = [[0, 34, 0], [0, -34, 0], [30, 8, 0], [-30, -8, 0]]; // station-local hardpoints

export class StationDefense {
  constructor(game) { this.g = game; this.turrets = []; this.warned = false; }

  onEnterSystem() {
    for (const t of this.turrets) t.beam.visible = false;
    if (!this.turrets.length) this.turrets = MOUNTS.map((m) => ({ local: new THREE.Vector3(...m), beam: this.g.fx.makeBeam(0x9ff0ff), tgt: null, k: Math.random() * 0.5 }));
    this.warned = false;
  }
  dps() {
    const g = this.g, s = g.state, base = DPS[g.sysInfo.eco] ?? 18;
    const SA = s.siege && s.siege.active;
    const jammed = SA && SA.phase === 'live' && SA.target.sys === s.systemId;
    return base * (jammed ? 0.3 : 1);
  }
  eligible(o, st) {
    if (o.dead || o.isBase || o.static || o.isRival || o.faction || o.isSiegeProxy) return false; // not lawful enforcers, not duels
    return o.pos.distanceTo(st) < DEFENSE_RANGE;
  }
  update(dt) {
    const g = this.g, station = g.world && g.world.station;
    if (!station || g.warp) { for (const t of this.turrets) t.beam.visible = false; return; }
    const st = station.pos, dps = this.dps();
    let firing = false;
    for (const t of this.turrets) {
      t.k -= dt;
      if (t.k <= 0 || !t.tgt || !this.eligible(t.tgt, st)) {
        t.k = 0.5; t.tgt = null; let bd = Infinity;
        for (const o of g.outlaws) { if (!this.eligible(o, st)) continue; const d = o.pos.distanceTo(st); if (d < bd) { bd = d; t.tgt = o; } }
      }
      if (!t.tgt) { t.beam.visible = false; continue; }
      _v.copy(t.local); station.group.localToWorld(_v);
      g.fx.showBeam(t.beam, _v, t.tgt.pos, 1.6);
      const killed = t.tgt.damage(dps * dt, _v, null);
      g.onShipHit(t.tgt, null, killed);
      firing = true;
    }
    if (firing && !this.warned) {
      this.warned = true;
      g.ui.toast(`🛡 ${station.name} defenses engaged: outlaws inside the station zone are under fire`, 'info', 4);
      if (!g.state.story.said['tip-refuge']) { g.state.story.said['tip-refuge'] = 1; setTimeout(() => g.story.comm('wick', 'Station turrets are firing on the raiders. If a fight goes badly, run for the station: anything that follows us in gets shot.'), 1200); }
    }
  }
}
