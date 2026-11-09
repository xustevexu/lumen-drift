// ---------------- Commodities ----------------
export const COMMODITIES = [
  { id: 'ferrite', name: 'Ferrite Ore', base: 16, kind: 'ore', color: '#b9a48a' },
  { id: 'ice', name: 'Silicate Ice', base: 22, kind: 'ore', color: '#9fd8ea' },
  { id: 'cobalt', name: 'Cobaltine', base: 48, kind: 'ore', color: '#5a7fe0' },
  { id: 'helion', name: 'Helion Gas', base: 62, kind: 'ore', color: '#f2b85a' },
  { id: 'lumenite', name: 'Lumenite', base: 150, kind: 'ore', color: '#c8f56a' },
  { id: 'food', name: 'Food Packs', base: 28, kind: 'good', color: '#e8c070' },
  { id: 'medical', name: 'Medical Gel', base: 80, kind: 'good', color: '#ef8a8a' },
  { id: 'parts', name: 'Machine Parts', base: 105, kind: 'good', color: '#b0b8c4' },
  { id: 'data', name: 'Data Cores', base: 180, kind: 'good', color: '#7fd6ff' },
  { id: 'luxury', name: 'Luxury Crystal', base: 300, kind: 'good', color: '#e7a6ff' },
];
export const COMM = Object.fromEntries(COMMODITIES.map((c) => [c.id, c]));

// <1 = produced here (cheap, in stock), >1 = in demand
export const ECONOMIES = {
  agricultural: { name: 'Agricultural', danger: 0.10, mult: { ferrite: 1.05, ice: 1.4, cobalt: 1.0, helion: 1.05, lumenite: 1.1, food: 0.55, medical: 0.85, parts: 1.3, data: 1.15, luxury: 1.0 } },
  mining: { name: 'Mining', danger: 0.11, mult: { ferrite: 0.7, ice: 0.85, cobalt: 0.72, helion: 0.95, lumenite: 0.9, food: 1.35, medical: 1.3, parts: 1.2, data: 1.1, luxury: 1.2 } },
  industrial: { name: 'Industrial', danger: 0.11, mult: { ferrite: 1.35, ice: 1.1, cobalt: 1.4, helion: 1.25, lumenite: 1.2, food: 1.2, medical: 1.05, parts: 0.62, data: 1.0, luxury: 1.1 } },
  hightech: { name: 'High-Tech', danger: 0.12, mult: { ferrite: 1.1, ice: 1.05, cobalt: 1.3, helion: 1.4, lumenite: 1.5, food: 1.15, medical: 0.7, parts: 1.1, data: 0.6, luxury: 0.9 } },
  frontier: { name: 'Frontier', danger: 0.15, mult: { ferrite: 0.9, ice: 1.0, cobalt: 0.95, helion: 0.8, lumenite: 1.0, food: 1.4, medical: 1.5, parts: 1.35, data: 1.25, luxury: 1.45 } },
};

// ---------------- Hulls ----------------
export const HULLS = {
  wren: { name: 'Wren', cls: 'Shuttle', price: 0, hull: 110, shield: 1.0, cargo: 24, speed: 72, turn: 1.7, hard: 1, energy: 1.0, msl: 0, priceMul: 1.0, len: 9, cam: 22,
    desc: 'Nimble starter shuttle. Small hold, light frame.' },
  mule: { name: 'Mule', cls: 'Freighter', price: 14000, hull: 260, shield: 1.3, cargo: 90, speed: 58, turn: 1.05, hard: 1, energy: 1.2, msl: 0, priceMul: 1.5, len: 22, cam: 42,
    desc: 'Container hauler. Nearly 4× the hold of a Wren. Slow to turn.' },
  kestrel: { name: 'Kestrel', cls: 'Striker', price: 28000, hull: 220, shield: 1.9, cargo: 32, speed: 88, turn: 2.1, hard: 2, energy: 1.4, msl: 2, priceMul: 1.8, len: 15, cam: 30,
    desc: 'Twin beam hardpoints, extra missile bays, fast barrier. Built to hunt outlaws.' },
  bastion: { name: 'Bastion', cls: 'Capital Warden', price: 110000, hull: 950, shield: 3.6, cargo: 220, speed: 50, turn: 0.75, hard: 3, energy: 2.2, msl: 4, priceMul: 3.2, len: 54, cam: 82,
    desc: 'Capital-class warden. Triple beam arrays, massive barrier and hold.' },
};
export const HULL_ORDER = ['wren', 'mule', 'kestrel', 'bastion'];

// ---------------- Modules ----------------
export const MODULES = {
  engine: { name: 'Ion Engine', desc: 'Top speed & handling', v: [0, 0.18, 0.36, 0.6], price: [0, 1200, 3800, 9500] },
  cargo: { name: 'Cargo Pods', desc: 'Hold capacity', v: [0, 0.3, 0.65, 1.1], price: [0, 1500, 4500, 11000] },
  barrier: { name: 'Energy Barrier', desc: 'Shield capacity & regen', cap: [40, 80, 135, 210], regen: [6, 10, 15, 22], price: [0, 1400, 4200, 10500] },
  beam: { name: 'Beam Array', desc: 'Beam damage & range', dps: [10, 17, 27, 40], range: [230, 270, 310, 360], price: [0, 1600, 4800, 12000] },
  missile: { name: 'Missile Rack', desc: 'Homing missiles (restock at stations)', cap: [0, 4, 6, 8], dmg: [0, 70, 95, 130], price: [0, 2000, 5200, 12500] },
  mining: { name: 'Mining Laser', desc: 'Extraction rate, reach, rare finds', rate: [1.2, 2.0, 3.0, 4.4], range: [80, 95, 115, 135], rare: [0, 0.02, 0.08, 0.15], price: [0, 1000, 3200, 8000] },
  sensors: { name: 'Sensor Suite', desc: 'Radar range, cargo scans, early warning', range: [1400, 2000, 2800, 3800], price: [0, 900, 2800, 7000] },
  hull: { name: 'Hull Plating', desc: 'Structural integrity', mul: [1, 1.35, 1.75, 2.25], price: [0, 1300, 4000, 10000] },
  reactor: { name: 'Reactor Core', desc: 'Energy pool & recharge', cap: [100, 140, 190, 260], regen: [12, 16, 21, 28], price: [0, 1100, 3500, 8800] },
};
export const MODULE_ORDER = ['engine', 'cargo', 'barrier', 'beam', 'missile', 'mining', 'sensors', 'hull', 'reactor'];

export function emptyMods() { const m = {}; for (const k of MODULE_ORDER) m[k] = 0; return m; }

export function computeStats(hullId, mods) {
  const H = HULLS[hullId], M = MODULES;
  const e = M.engine.v[mods.engine];
  return {
    speed: H.speed * (1 + e),
    turn: H.turn * (1 + 0.55 * e),
    cargo: Math.round(H.cargo * (1 + M.cargo.v[mods.cargo])),
    shield: Math.round(M.barrier.cap[mods.barrier] * H.shield),
    shieldRegen: M.barrier.regen[mods.barrier] * H.shield,
    hull: Math.round(H.hull * M.hull.mul[mods.hull]),
    dps: M.beam.dps[mods.beam] * H.hard,
    beamRange: M.beam.range[mods.beam],
    hard: H.hard,
    mslCap: mods.missile > 0 ? M.missile.cap[mods.missile] + H.msl : 0,
    mslDmg: M.missile.dmg[mods.missile],
    mineRate: M.mining.rate[mods.mining] * (hullId === 'mule' ? 1.25 : hullId === 'bastion' ? 1.5 : 1),
    mineRange: M.mining.range[mods.mining] + H.len * 0.6,
    rare: M.mining.rare[mods.mining],
    sensor: M.sensors.range[mods.sensors],
    sensorLvl: mods.sensors,
    energy: Math.round(M.reactor.cap[mods.reactor] * H.energy),
    energyRegen: M.reactor.regen[mods.reactor] * H.energy,
  };
}

export function modulePrice(hullId, mod, level) {
  return Math.round(MODULES[mod].price[level] * HULLS[hullId].priceMul / 10) * 10;
}

export function statLine(mod, lvl, hullId) {
  const s = computeStats(hullId, { ...emptyMods(), [mod]: lvl });
  switch (mod) {
    case 'engine': return `${Math.round(s.speed)} m/s`;
    case 'cargo': return `${s.cargo} units`;
    case 'barrier': return `${s.shield} cap · ${s.shieldRegen.toFixed(0)}/s`;
    case 'beam': return `${s.dps} dps · ${s.beamRange}m`;
    case 'missile': return lvl === 0 ? 'none' : `${s.mslCap} × ${s.mslDmg} dmg`;
    case 'mining': return `${s.mineRate.toFixed(1)} u/s${s.rare ? ` · ${Math.round(s.rare * 100)}% rare` : ''}`;
    case 'sensors': return `${s.sensor}m${lvl >= 1 ? ' · scan' : ''}${lvl >= 2 ? ' · warn' : ''}`;
    case 'hull': return `${s.hull} hp`;
    case 'reactor': return `${s.energy} · ${s.energyRegen.toFixed(0)}/s`;
  }
  return '';
}

export const SYSTEM_NAMES = ['Haven', 'Corvane', 'Ishtar Reach', 'Meridian', 'Tollan', 'Vesper Gate', 'Kairo', 'Ostara', 'Halcyon Drift', 'Novaline', 'Pellucid', 'Ashfall', 'Lyra Shoal', 'Brightwater'];
export const STATION_NAMES = ['Anchor', 'Lantern', 'Hearth', 'Keystone', 'Beacon', 'Quay', 'Harbor', 'Waypoint', 'Spindle', 'Cradle', 'Bastille', 'Atrium'];
export const TRADER_NAMES = ['Patient Ox', 'Silver Wake', 'Long Haul', 'Morning Rain', 'Quiet Dividend', 'Saffron Sky', 'Iron Lullaby', 'Kind Margin', 'Far Errand', 'Tin Lantern'];
export const OUTLAW_NAMES = ['Red Jackal', 'Ash Viper', 'Grim Tally', 'Black Ledger', 'Rust Fang', 'Hollow Spur', 'Cinder Kite'];

export const DAY_LENGTH = 240; // seconds per in-game day
