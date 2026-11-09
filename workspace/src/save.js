// Save storage: one rolling autosave + numbered manual slots in localStorage, plus export/import as a
// file so progress survives the browser clearing site data and can move between devices.
import { HULLS } from './data.js';
import { generateGalaxy } from './galaxy.js';
import { validateMissions } from './missions.js';

const AUTO_KEY = 'lumen_drift_save_v1';           // unchanged key so existing autosaves keep loading
const CORRUPT_KEY = 'lumen_drift_save_corrupt';    // unreadable autosave is moved here instead of being lost
const slotKey = (i) => `lumen_drift_slot_${i}`;
export const SLOT_COUNT = 3;

// Throws an Error describing the first problem; returns the state when it is usable.
export function validateState(s) {
  const fail = (msg) => { throw new Error(msg); };
  if (!s || typeof s !== 'object') fail('the save is empty');
  if (s.v !== 1) fail(`unsupported save version (${s.v})`);
  if (!Number.isFinite(s.seed)) fail('the galaxy seed is missing');
  if (!Number.isFinite(s.credits)) fail('credits are missing');
  if (!Number.isInteger(s.day) || s.day < 1) fail('the day counter is invalid');
  if (!Array.isArray(s.ships) || !s.ships.length) fail('no ships are recorded');
  for (const sh of s.ships) {
    if (!HULLS[sh.hull]) fail(`unknown ship type "${sh.hull}"`);
    if (!sh.mods || typeof sh.mods !== 'object' || !sh.cargo || typeof sh.cargo !== 'object') fail('a ship record is incomplete');
  }
  if (!s.ships.some((sh) => sh.uid === s.active)) fail('the active ship is missing');
  if (s.systemId != null && !(Number.isInteger(s.systemId) && s.systemId >= 0 && s.systemId < generateGalaxy(s.seed).systems.length)) fail('the current star system is invalid');
  if (!s.market || typeof s.market !== 'object' || !s.stats || !s.tutorial) fail('market or pilot records are missing');
  validateMissions(s);
  return s;
}

export function summarize(s) {
  const ship = s.ships.find((sh) => sh.uid === s.active);
  const gal = generateGalaxy(s.seed);
  const sys = gal.systems[s.systemId != null ? s.systemId : gal.startId];
  return { day: s.day, credits: Math.round(s.credits), ship: HULLS[ship.hull].name, fleet: s.ships.length, system: sys ? sys.name : '?' };
}

const parse = (raw) => validateState(JSON.parse(raw));

// ---- autosave ----
export function readAuto() {
  const raw = localStorage.getItem(AUTO_KEY);
  if (raw == null) return null;
  try { return parse(raw); } catch (err) {
    console.warn('Autosave unreadable, kept a copy under', CORRUPT_KEY, err.message);
    localStorage.setItem(CORRUPT_KEY, raw); localStorage.removeItem(AUTO_KEY);
    return null;
  }
}
export function writeAuto(state) {
  try { localStorage.setItem(AUTO_KEY, JSON.stringify(state)); return true; } catch (err) {
    console.warn('Autosave failed:', err.name, err.message); return false;
  }
}
export function clearAuto() { localStorage.removeItem(AUTO_KEY); }
export function autoInfo() {
  const raw = localStorage.getItem(AUTO_KEY); if (raw == null) return null;
  try { const s = parse(raw); return { ...summarize(s), savedAt: s.savedAt || null }; } catch (err) { return { error: err.message }; }
}

// ---- manual slots ----
export function readSlot(i) {
  const raw = localStorage.getItem(slotKey(i)); if (raw == null) return null;
  try { const w = JSON.parse(raw); const s = validateState(w.state); return { state: s, savedAt: w.savedAt, ...summarize(s) }; }
  catch (err) { return { error: err.message }; }
}
// throws when the browser refuses to store (e.g. storage full or disabled)
export function writeSlot(i, state) { localStorage.setItem(slotKey(i), JSON.stringify({ savedAt: Date.now(), state })); }
export function deleteSlot(i) { localStorage.removeItem(slotKey(i)); }

// ---- export / import ----
export function exportText(state) { return JSON.stringify({ game: 'lumen-drift', format: 1, savedAt: Date.now(), state }, null, 1); }
export function exportName(state) {
  const d = new Date(); const pad = (n) => String(n).padStart(2, '0');
  return `lumen-drift-day${state.day}-${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}-${pad(d.getHours())}${pad(d.getMinutes())}.json`;
}
export function parseImport(text) {
  let obj;
  try { obj = JSON.parse(text); } catch (err) { throw new Error('this file is not a Lumen Drift save (it is not readable save data)'); }
  const state = obj && obj.game === 'lumen-drift' ? obj.state : obj; // also accept a raw state object
  try { return validateState(state); } catch (err) { throw new Error(`this file can't be loaded: ${err.message}`); }
}

// Ask the browser not to evict our data under storage pressure (granted at the browser's discretion).
export function requestPersistence() {
  if (!navigator.storage || !navigator.storage.persist) return;
  navigator.storage.persist().then((granted) => console.info('Persistent storage', granted ? 'granted' : 'not granted'))
    .catch((err) => console.warn('Persistent storage request failed:', err.message));
}

export function ago(ts) {
  if (!ts) return 'time unknown';
  const m = Math.round((Date.now() - ts) / 60000);
  if (m < 1) return 'just now'; if (m < 60) return `${m} min ago`;
  const h = Math.round(m / 60); if (h < 24) return `${h} h ago`;
  return new Date(ts).toLocaleDateString();
}
