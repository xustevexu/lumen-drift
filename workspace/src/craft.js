// Fabrication: turn refined goods into ship progress.
//  - Module upgrades can be fabricated instead of bought: ~45% of the credits plus materials.
//  - Prototype blueprints (from caches, rifts, bases, the Dreadnought, rarely wrecks) unlock craftable
//    prototype modules that use a unique-module slot.
// Fabricators exist only at Industrial and High-Tech stations.
import { COMM, MODULES } from './data.js';

export const PROTOTYPES = {
  p_capacitor: { name: 'Phase Capacitor', desc: 'Beam damage +20%, energy recharge +20%.', credits: 9000, mats: { parts: 10, data: 6, lumenite: 4 } },
  p_hold: { name: 'Graviton Hold', desc: 'Cargo capacity +30%.', credits: 8000, mats: { parts: 14, data: 4, cobalt: 10 } },
  p_afterburner: { name: 'Afterburner Coils', desc: 'Top speed +10%, turning +20%.', credits: 8500, mats: { parts: 12, helion: 10, data: 3 } },
  p_warheads: { name: 'Seeker Warheads', desc: 'Missile damage +40% and +2 missile capacity (needs a missile rack).', credits: 9500, mats: { parts: 10, data: 5, luxury: 3 } },
  p_resonator: { name: 'Ore Resonator', desc: 'Mining rate +20%, rare-find chance +6 points.', credits: 7500, mats: { parts: 8, lumenite: 8, medical: 4 } },
};
export const PROTO_IDS = Object.keys(PROTOTYPES);

export function normalizeCraftState(state) {
  if (!state.craft || typeof state.craft !== 'object') state.craft = {};
  if (!Array.isArray(state.craft.blueprints)) state.craft.blueprints = [];
  if (!Number.isFinite(state.craft.made)) state.craft.made = 0;
  return state;
}
export const hasFabricator = (eco) => eco === 'industrial' || eco === 'hightech';

// materials for fabricating module level L (1..3)
export function moduleMats(level) {
  return level === 1 ? { parts: 4 } : level === 2 ? { parts: 8, data: 3 } : { parts: 12, data: 6, lumenite: 4 };
}
export const matsText = (m) => Object.entries(m).map(([k, n]) => `${n} ${COMM[k].name}`).join(', ');
export function haveMats(cargo, m) { return Object.entries(m).every(([k, n]) => (cargo[k] || 0) >= n); }
export function takeMats(cargo, m) { for (const [k, n] of Object.entries(m)) { cargo[k] -= n; if (!cargo[k]) delete cargo[k]; } }

// roll for a blueprint drop; returns the new blueprint id or null
export function blueprintDrop(game, chance, source) {
  const s = game.state, left = PROTO_IDS.filter((id) => !s.craft.blueprints.includes(id));
  if (!left.length || Math.random() >= chance) return null;
  const id = left[Math.floor(Math.random() * left.length)];
  s.craft.blueprints.push(id);
  setTimeout(() => game.ui.toast(`📐 Blueprint recovered from the ${source}: ${PROTOTYPES[id].name}. Fabricate it at an Industrial or High-Tech station.`, 'good', 7), 1800);
  return id;
}
export { MODULES };
