import { RNG } from './rng.js';
import { ECONOMIES, SYSTEM_NAMES, STATION_NAMES } from './data.js';

const STAR_TYPES = [
  { name: 'Yellow dwarf', color: [1.0, 0.86, 0.6], glow: [1.0, 0.7, 0.35], radius: [480, 600] },
  { name: 'Orange dwarf', color: [1.0, 0.62, 0.32], glow: [1.0, 0.45, 0.2], radius: [420, 540] },
  { name: 'Blue-white', color: [0.75, 0.86, 1.0], glow: [0.45, 0.65, 1.0], radius: [560, 700] },
  { name: 'Red dwarf', color: [1.0, 0.42, 0.3], glow: [1.0, 0.28, 0.18], radius: [360, 460] },
];
const NEBULAS = [
  [[0.10, 0.22, 0.45], [0.55, 0.20, 0.45]],
  [[0.06, 0.30, 0.38], [0.60, 0.35, 0.18]],
  [[0.22, 0.10, 0.40], [0.12, 0.40, 0.55]],
  [[0.30, 0.12, 0.16], [0.20, 0.25, 0.55]],
  [[0.08, 0.18, 0.30], [0.35, 0.55, 0.50]],
];
const PLANET_PALETTES = {
  rocky: [[[0.36, 0.30, 0.26], [0.55, 0.47, 0.38], [0.75, 0.70, 0.62]], [[0.42, 0.22, 0.16], [0.62, 0.36, 0.24], [0.82, 0.62, 0.45]]],
  desert: [[[0.62, 0.42, 0.24], [0.80, 0.60, 0.36], [0.92, 0.82, 0.62]]],
  ice: [[[0.55, 0.68, 0.80], [0.78, 0.88, 0.95], [0.97, 0.98, 1.0]]],
  ocean: [[[0.05, 0.20, 0.42], [0.22, 0.42, 0.22], [0.55, 0.50, 0.36]], [[0.04, 0.24, 0.38], [0.30, 0.50, 0.30], [0.80, 0.80, 0.78]]],
  gas: [[[0.82, 0.62, 0.40], [0.62, 0.40, 0.28], [0.95, 0.86, 0.72]], [[0.40, 0.55, 0.78], [0.22, 0.32, 0.60], [0.85, 0.90, 0.98]], [[0.70, 0.52, 0.70], [0.40, 0.30, 0.55], [0.92, 0.80, 0.86]]],
};
const ATMO = { rocky: [0.55, 0.7, 1.0], desert: [1.0, 0.7, 0.45], ice: [0.6, 0.85, 1.0], ocean: [0.35, 0.65, 1.0], gas: [0.9, 0.75, 0.6] };
const DEPOSIT_ORE = { rocky: 'cobalt', desert: 'ferrite', ice: 'ice', ocean: 'cobalt', gas: 'helion' };

export function generateGalaxy(seed) {
  const rng = new RNG(seed);
  const N = 9;
  const pts = [];
  let guard = 0;
  while (pts.length < N && guard++ < 5000) {
    const p = { x: rng.range(60, 940), y: rng.range(60, 560) };
    if (pts.every((q) => Math.hypot(p.x - q.x, p.y - q.y) > 175)) pts.push(p);
  }
  const names = rng.shuffle(SYSTEM_NAMES.slice());
  const stNames = rng.shuffle(STATION_NAMES.slice());
  // start = closest to center
  let start = 0, best = 1e9;
  pts.forEach((p, i) => { const d = Math.hypot(p.x - 500, p.y - 310); if (d < best) { best = d; start = i; } });
  const ecoPool = rng.shuffle(['mining', 'industrial', 'hightech', 'frontier', 'mining', 'industrial', 'hightech', 'frontier']);
  const systems = pts.map((p, i) => {
    const eco = i === start ? 'agricultural' : ecoPool.pop() || 'frontier';
    return {
      id: i, name: i === start ? 'Haven' : names.filter((n) => n !== 'Haven')[i], x: p.x, y: p.y, eco,
      danger: ECONOMIES[eco].danger + (eco === 'frontier' ? 0 : rng.range(0, 0.02)),
      seed: rng.int(1, 2 ** 30), links: [], station: stNames[i % stNames.length],
    };
  });
  // MST (Prim)
  const inTree = new Set([0]);
  const link = (a, b) => { if (!systems[a].links.includes(b)) { systems[a].links.push(b); systems[b].links.push(a); } };
  const d = (a, b) => Math.hypot(systems[a].x - systems[b].x, systems[a].y - systems[b].y);
  while (inTree.size < N) {
    let bd = 1e9, ba = -1, bb = -1;
    for (const a of inTree) for (let b = 0; b < N; b++) if (!inTree.has(b) && d(a, b) < bd) { bd = d(a, b); ba = a; bb = b; }
    link(ba, bb); inTree.add(bb);
  }
  // extra links for loops
  for (let a = 0; a < N; a++) {
    const near = [...Array(N).keys()].filter((b) => b !== a).sort((x, y) => d(a, x) - d(a, y));
    for (const b of near.slice(0, 3)) {
      if (systems[a].links.length >= 3 || systems[b].links.length >= 4) continue;
      if (!systems[a].links.includes(b) && d(a, b) < 330 && rng.chance(0.55)) link(a, b);
    }
  }
  // second agricultural world (food supply) away from Haven; Haven's neighbours keep contrasting economies
  const counts = {};
  systems.forEach((s) => (counts[s.eco] = (counts[s.eco] || 0) + 1));
  const dup = systems.find((s) => s.id !== start && !systems[start].links.includes(s.id) && counts[s.eco] > 1 && s.eco !== 'frontier');
  if (dup) { dup.eco = 'agricultural'; dup.danger = ECONOMIES.agricultural.danger + rng.range(0, 0.02); }
  return { seed, systems, startId: start };
}

function far(p, list, minD) { return list.every((q) => Math.hypot(p[0] - q.pos[0], p[2] - q.pos[2]) > minD + (q.r || 0)); }

export function generateSystem(sys, galaxy) {
  const rng = new RNG(sys.seed);
  const st = rng.pick(STAR_TYPES);
  const star = { type: st.name, color: st.color, glow: st.glow, radius: rng.range(...st.radius) };
  const nebula = rng.pick(NEBULAS);
  const occupied = [{ pos: [0, 0, 0], r: star.radius + 900 }];

  // planets
  const nPl = rng.int(2, 4);
  const planets = [];
  let orbit = 2000;
  for (let i = 0; i < nPl; i++) {
    orbit += rng.range(900, 1600);
    const type = rng.weighted(i === 0 ? { rocky: 3, desert: 3, ocean: 1 } : { rocky: 2, desert: 1, ice: 2, ocean: 2, gas: 3 });
    const radius = type === 'gas' ? rng.range(560, 820) : rng.range(220, 420);
    const a = rng.range(0, Math.PI * 2);
    const pos = [Math.cos(a) * orbit, rng.range(-120, 120), Math.sin(a) * orbit];
    const pal = rng.pick(PLANET_PALETTES[type]);
    planets.push({
      type, radius, pos, pal, atmo: ATMO[type], seed: rng.range(0, 100), spin: rng.range(0.004, 0.012) * (rng.chance(0.5) ? 1 : -1),
      cloud: type === 'gas' ? 0 : type === 'ocean' ? 0.75 : type === 'desert' ? 0.12 : rng.range(0.2, 0.5),
      ring: type === 'gas' && rng.chance(0.6),
      name: `${sys.name} ${['I', 'II', 'III', 'IV', 'V'][i]}`,
      depositOre: DEPOSIT_ORE[type],
    });
    occupied.push({ pos, r: radius + 500 });
  }

  // station near-ish first or second planet orbit
  const host = planets[Math.min(1, planets.length - 1)];
  let station = null;
  for (let t = 0; t < 60 && !station; t++) {
    const a = rng.range(0, Math.PI * 2), r = host.radius + rng.range(700, 1100);
    const p = [host.pos[0] + Math.cos(a) * r, rng.range(-40, 40), host.pos[2] + Math.sin(a) * r];
    if (far(p, occupied, 300)) station = { pos: p, name: `${sys.station} Station` };
  }
  if (!station) station = { pos: [host.pos[0] + host.radius + 900, 0, host.pos[2]], name: `${sys.station} Station` };
  occupied.push({ pos: station.pos, r: 400 });

  // gates toward linked systems
  const gates = sys.links.map((lid) => {
    const o = galaxy.systems[lid];
    const dx = o.x - sys.x, dz = o.y - sys.y; const L = Math.hypot(dx, dz) || 1;
    const r = 8200 + rng.range(-300, 300);
    const pos = [(dx / L) * r, rng.range(-100, 100), (dz / L) * r];
    occupied.push({ pos, r: 400 });
    return { to: lid, pos, name: `Gate → ${o.name}` };
  });

  // asteroid fields
  const nF = sys.eco === 'mining' ? 3 : rng.int(1, 2);
  const fields = [];
  const orePrimary = { mining: { ferrite: 3, cobalt: 3, ice: 1 }, industrial: { ferrite: 3, ice: 1 }, agricultural: { ice: 3, ferrite: 2 }, hightech: { cobalt: 2, ice: 2, ferrite: 1 }, frontier: { ferrite: 2, cobalt: 2, ice: 1 } }[sys.eco];
  for (let i = 0, t = 0; i < nF && t < 300; t++) {
    const a = rng.range(0, Math.PI * 2), r = rng.range(2400, 7200);
    const p = [Math.cos(a) * r, rng.range(-80, 80), Math.sin(a) * r];
    const radius = rng.range(380, 560);
    if (!far(p, occupied, radius + 300)) continue;
    const primary = rng.weighted(orePrimary);
    const secondary = rng.pick(['ferrite', 'ice', 'cobalt'].filter((o) => o !== primary));
    fields.push({ pos: p, radius, count: rng.int(110, 160), primary, secondary, lumenite: sys.eco === 'mining' || sys.eco === 'frontier' ? 0.06 : 0.03, seed: rng.int(1, 1e9), name: `${['Kessel', 'Drift', 'Tumble', 'Scree', 'Gravel', 'Shard'][rng.int(0, 5)]} Field` });
    occupied.push({ pos: p, r: radius });
    i++;
  }

  // derelicts
  const nD = rng.int(1, 2);
  const derelicts = [];
  for (let i = 0, t = 0; i < nD && t < 200; t++) {
    const a = rng.range(0, Math.PI * 2), r = rng.range(2600, 7600);
    const p = [Math.cos(a) * r, rng.range(-120, 120), Math.sin(a) * r];
    if (!far(p, occupied, 300)) continue;
    derelicts.push({ pos: p, seed: rng.int(1, 1e9), name: rng.pick(['Wreck of the Calloway', 'Hulk “Marigold”', 'Derelict Ore Barge', 'Abandoned Survey Probe', 'Gutted Courier', 'Old Relay Hulk']) });
    occupied.push({ pos: p, r: 200 });
    i++;
  }

  return { id: sys.id, name: sys.name, eco: sys.eco, star, nebula, planets, station, gates, fields, derelicts };
}
