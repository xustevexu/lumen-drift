(() => { const g = __game, W = g.world, V = g.player.pos.constructor; g.paused = true; g.ui.toast = () => {};
  const res = [];
  for (const pl of W.planets) {
    const p = g.player; const up = new V(0,1,0);
    const u = new V().crossVectors(pl.pos, up).setY(0).normalize();
    const start = pl.pos.clone().addScaledVector(u, pl.radius + 1500); start.y = pl.pos.y;
    const end = pl.pos.clone().addScaledVector(u, -(pl.radius + 1500)); end.y = pl.pos.y;
    p.pos.copy(start); const d0 = end.clone().sub(start); p.yaw = Math.atan2(d0.x, d0.z); p.pitch = 0; p.speed = 0; p.cruise = false; p.hp = p.maxHp;
    g.input.sx = 0; g.input.sy = 0; g.input.throttle = 0.35;
    g.setAutopilot(end, 'test', 200);
    let minClear = 1e9, bumps = 0, arrivedAt = -1, t = 0;
    for (let i = 0; i < 6000 && g.autopilot; i++) { g.simulate(0.033); t += 0.033;
      const c = p.pos.distanceTo(pl.pos) - pl.radius; minClear = Math.min(minClear, c); if (c < p.radius + 12) bumps++; }
    if (!g.autopilot) arrivedAt = +t.toFixed(1);
    for (let i = 0; i < 120; i++) g.simulate(0.033);
    res.push({ planetR: Math.round(pl.radius), minClearance: Math.round(minClear), framesScrapingPlanet: bumps, arrivedAfterS: arrivedAt,
      distFromTarget4sLater: Math.round(p.pos.distanceTo(end)), speed4sLater: Math.round(p.speed) });
  }
  return JSON.stringify(res);
})()
