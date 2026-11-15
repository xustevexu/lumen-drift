// Light faction layer: five lawful factions (one per economy type) plus the Red Wake pirates.
// Pure data + helpers; the Game applies standing changes and the UI renders them.
import { ECONOMIES } from './data.js';

export const FACTIONS = {
  agricultural: { name: 'Verdant Cooperative', short: 'Cooperative', color: '#7bc86c', rival: 'industrial',
    blurb: 'Farm worlds feeding the sector. Value reliable haulers and relief work.' },
  mining: { name: 'Deepcore Union', short: 'Union', color: '#d9a35a', rival: 'hightech',
    blurb: 'Miners and refiners. Respect pilots who work the rocks.' },
  industrial: { name: 'Forge Combine', short: 'Combine', color: '#9aa6b8', rival: 'agricultural',
    blurb: 'Shipyards and foundries. Pay well, hold grudges.' },
  hightech: { name: 'Lumen Institute', short: 'Institute', color: '#3fb8c8', rival: 'mining',
    blurb: 'Labs and data vaults. Discreet, demanding, generous.' },
  frontier: { name: 'Free Settlers', short: 'Settlers', color: '#f0703c', rival: 'pirate',
    blurb: 'Hardscrabble colonies on the edge. Loyal to those who protect them.' },
  pirate: { name: 'Red Wake', short: 'Red Wake', color: '#ff4a3a', rival: null, pirate: true,
    blurb: 'The outlaw syndicate behind the raids. Their goodwill means fewer knives in the dark.' },
};
export const FACTION_ORDER = ['agricultural', 'mining', 'industrial', 'hightech', 'frontier', 'pirate'];
export const LAWFUL = FACTION_ORDER.filter((f) => f !== 'pirate');

// buy/sell: price change at that faction's stations; repair: repair cost change; raid: pirate raid multiplier (Red Wake only)
export const FACTION_TIERS = [
  { min: -Infinity, name: 'Hostile', level: -2, buy: 0.12, sell: -0.12, repair: 0.25, raid: 1.6 },
  { min: -24, name: 'Unfriendly', level: -1, buy: 0.05, sell: -0.05, repair: 0.1, raid: 1.25 },
  { min: -7, name: 'Neutral', level: 0, buy: 0, sell: 0, repair: 0, raid: 1 },
  { min: 10, name: 'Friendly', level: 1, buy: -0.03, sell: 0.03, repair: -0.1, raid: 0.75 },
  { min: 25, name: 'Honored', level: 2, buy: -0.06, sell: 0.06, repair: -0.2, raid: 0.5 },
  { min: 50, name: 'Allied', level: 3, buy: -0.1, sell: 0.1, repair: -0.3, raid: 0.3 },
];
export function factionTier(pts) { let t = FACTION_TIERS[0]; for (const x of FACTION_TIERS) if (pts >= x.min) t = x; return t; }
export function nextFactionTier(pts) { return FACTION_TIERS.find((x) => x.min > pts) || null; }
export function standingWith(state, fid) { return (state.factions && state.factions[fid]) || 0; }
export function factionOfSystem(galaxy, sysId) { return galaxy.systems[sysId].eco; }
export function tierHere(state, galaxy, sysId) { return factionTier(standingWith(state, factionOfSystem(galaxy, sysId))); }

export function tierPerks(fid, t) {
  if (fid === 'pirate') {
    const r = Math.round((t.raid - 1) * 100);
    return r === 0 ? 'Normal raid frequency' : `Pirate raids ${r > 0 ? '+' : ''}${r}%${t.level <= -1 ? ' · they hunt you' : ''}${t.level >= 2 ? ' · Ghost Transponder for sale at Frontier stations' : ''}`;
  }
  const bits = [];
  if (t.buy || t.sell) bits.push(`prices ${t.sell > 0 ? 'better' : 'worse'} by ${Math.round(Math.abs(t.sell) * 100)}%`);
  if (t.repair) bits.push(`repairs ${t.repair > 0 ? '+' : ''}${Math.round(t.repair * 100)}%`);
  if (t.level >= 1) bits.push('exclusive contracts');
  if (t.level >= 2) bits.push(`${UNIQUE_BY_FACTION[fid].name} for sale`);
  if (t.level <= -1) bits.push(`${FACTIONS[fid].short} enforcers hunt you in their space`);
  return bits.join(' · ');
}

// ---- unique faction modules (one slot per ship, two on a Bastion) ----
export const UNIQUES = {
  bioweave: { faction: 'agricultural', name: 'Bio-Weave Plating', desc: 'Living hull lattice. Repairs 1.5% of hull per second after 5 s out of combat.', price: 26000 },
  drillhead: { faction: 'mining', name: 'Deepcore Drill Head', desc: 'Mining rate +40%, rare-find chance +5 points.', price: 24000 },
  overcharger: { faction: 'industrial', name: 'Forge Overcharger', desc: 'Beam damage +25%.', price: 30000 },
  lattice: { faction: 'hightech', name: 'Lumen Lattice', desc: 'Barrier capacity +35%, regeneration +25%.', price: 30000 },
  driftengine: { faction: 'frontier', name: 'Drift Engine', desc: 'Top speed +15%. Cruise can no longer be disrupted by nearby hostiles or interdiction.', price: 28000 },
  heart: { faction: 'artifact', name: 'Lumen Heart', desc: 'The seed crystal of the Lantern Fleet. Energy pool and recharge +35%, barrier +20%. One of a kind.', price: 0 },
  p_capacitor: { faction: 'proto', name: 'Phase Capacitor', desc: 'Prototype. Beam damage +20%, energy recharge +20%.', price: 9000 },
  p_hold: { faction: 'proto', name: 'Graviton Hold', desc: 'Prototype. Cargo capacity +30%.', price: 8000 },
  p_afterburner: { faction: 'proto', name: 'Afterburner Coils', desc: 'Prototype. Top speed +10%, turning +20%.', price: 8500 },
  p_warheads: { faction: 'proto', name: 'Seeker Warheads', desc: 'Prototype. Missile damage +40%, +2 missile capacity.', price: 9500 },
  p_resonator: { faction: 'proto', name: 'Ore Resonator', desc: 'Prototype. Mining rate +20%, rare-find chance +6 points.', price: 7500 },
  ghost: { faction: 'pirate', name: 'Ghost Transponder', desc: 'Masks your signature. Pirate raid chance halved. Sold quietly at Frontier stations.', price: 22000 },
};
export const UNIQUE_BY_FACTION = Object.fromEntries(Object.entries(UNIQUES).map(([id, u]) => [u.faction, { id, ...u }]));
export function uniqueSlots(hullId) { return hullId === 'bastion' ? 2 : 1; }
export function applyUniques(stats, uniques) {
  if (!uniques || !uniques.length) return stats;
  const s = { ...stats };
  for (const u of uniques) {
    if (u === 'bioweave') s.hullRegen = 0.015;
    if (u === 'drillhead') { s.mineRate *= 1.4; s.rare += 0.05; }
    if (u === 'overcharger') s.dps *= 1.25;
    if (u === 'lattice') { s.shield = Math.round(s.shield * 1.35); s.shieldRegen *= 1.25; }
    if (u === 'driftengine') { s.speed *= 1.15; s.noInterdict = true; }
    if (u === 'ghost') s.ghost = true;
    if (u === 'p_capacitor') { s.dps *= 1.2; s.energyRegen *= 1.2; }
    if (u === 'p_hold') s.cargo = Math.round(s.cargo * 1.3);
    if (u === 'p_afterburner') { s.speed *= 1.1; s.turn *= 1.2; }
    if (u === 'p_warheads') { s.mslDmg = Math.round(s.mslDmg * 1.4); if (s.mslCap > 0) s.mslCap += 2; }
    if (u === 'p_resonator') { s.mineRate *= 1.2; s.rare += 0.06; }
    if (u === 'heart') { s.energy = Math.round(s.energy * 1.35); s.energyRegen *= 1.35; s.shield = Math.round(s.shield * 1.2); }
  }
  return s;
}

// ---- state ----
export function normalizeFactionState(state) {
  if (!state.factions || typeof state.factions !== 'object') {
    state.factions = Object.fromEntries(FACTION_ORDER.map((f) => [f, 0]));
    // migrate the earlier single "sector reputation" score into lawful factions
    if (Number.isFinite(state.rep) && state.rep !== 0) for (const f of LAWFUL) state.factions[f] = Math.round(state.rep / 2);
  }
  for (const f of FACTION_ORDER) if (!Number.isFinite(state.factions[f])) state.factions[f] = 0;
  state.rep = 0;
  if (!state.sales || typeof state.sales !== 'object') state.sales = { day: 0, by: {} };
  for (const sh of state.ships) if (!Array.isArray(sh.uniques)) sh.uniques = [];
  return state;
}

export const ecoName = (fid) => (ECONOMIES[fid] ? ECONOMIES[fid].name : 'Outlaw');
