// Guided first flight: mine a planet deposit → sell it → buy an upgrade → map + autopilot to a wreck →
// salvage it → sell the salvage → the game opens up. While it runs, the rest of the game holds its breath:
// no story comms (they're held and delivered afterwards), no chatter, raids, sector events, scans or tariffs.
// Station tabs also open one at a time, with a NEW badge, for the whole career.
import * as THREE from 'three';
import { fmt, RNG } from './rng.js';
import { COMM, MODULES, modulePrice, MODULE_ORDER } from './data.js';
import { pilotRank } from './economy.js';
import { buildDerelict } from './ships.js';
import { unlocked } from './story.js';

export const TUT_STEPS = 8;
const WRECK_SEED = 770123;
const DRILL_N = 12;

export function normalizeTutState(state) {
  // careers from before the tutorial existed: skip it and keep every station tab open
  if (!state.tut || typeof state.tut !== 'object') state.tut = { done: true, step: TUT_STEPS };
  if (!state.tut.base) state.tut.base = {};
  if (!Array.isArray(state.tut.held)) state.tut.held = [];
  if (!state.tabs || typeof state.tabs !== 'object') state.tabs = { all: true, seen: {}, told: {} };
  if (!state.tabs.seen) state.tabs.seen = {};
  if (!state.tabs.told) state.tabs.told = {};
  return state;
}

// which station tabs a pilot can see right now
export function tabOpen(s, tab) {
  if (s.tabs && s.tabs.all) return true;
  const done = !s.tut || s.tut.done, step = s.tut ? s.tut.step : 99;
  switch (tab) {
    case 'market': return true;
    case 'outfit': return done || step >= 4;
    case 'missions': return done && unlocked(s, 'contracts');
    case 'services': return done;
    case 'hangar': return done && (s.ships.length > 1 || pilotRank(s) >= 1 || s.credits >= 12000 || unlocked(s, 'fleet'));
    case 'bar': return done && (s.day >= 3 || s.stats.contracts >= 1);
    default: return true;
  }
}

export class Tutorial {
  constructor(game) { this.g = game; this.check = 0; this.said = new Set(); }
  get s() { return this.g.state; }
  get active() { const t = this.s && this.s.tut; return !!(t && !t.done); }
  get step() { return this.s.tut.step; }

  // ---- device-aware wording ----
  dev() {
    const pad = this.g.pad;
    if (pad && pad.active && pad.layout) return 'pad';
    return window.matchMedia && window.matchMedia('(pointer: coarse)').matches ? 'touch' : 'keys';
  }
  words() {
    const d = this.dev(), L = this.g.pad && this.g.pad.layout;
    if (d === 'pad') return { fly: `steer with the left stick and squeeze ${L.RT} for throttle`, hold: (w) => `hold ${L.A} to ${w}`, press: (w) => `press ${L.A} to ${w}`, cruise: `${L.Y} toggles cruise speed`, map: this.g.story.howTo('map') };
    if (d === 'touch') return { fly: 'drag on the left side of the screen to steer and push the THR slider (bottom right) up for throttle', hold: (w) => `hold the ${w.toUpperCase()} button`, press: (w) => `tap ${w.toUpperCase()}`, cruise: 'CRUISE toggles cruise speed', map: this.g.story.howTo('map') };
    return { fly: 'steer with W A S D and use R / F for throttle', hold: (w) => `hold E (or the ${w.toUpperCase()} button) to ${w}`, press: (w) => `press E (or click ${w.toUpperCase()}) to ${w}`, cruise: 'C toggles cruise speed', map: this.g.story.howTo('map') };
  }

  // ---- places ----
  deposit() {
    const W = this.g.world, st = W.station.pos;
    const list = W.deposits.filter((d) => d.amount > 0).sort((a, b) => a.pos.distanceTo(st) - b.pos.distanceTo(st));
    return list[0] || null;
  }
  wreck() { return this.g.world.derelicts.find((d) => d.tut) || null; }
  wreckLooted() { const s = this.s; return !!s.derelictLooted[`${s.tut.sys}:${WRECK_SEED}`]; }
  recommendMod() {
    const rec = this.g.activeShipRec();
    for (const k of ['mining', 'engine', 'cargo']) if (rec.mods[k] === 0) return k;
    let best = null; for (const k of MODULE_ORDER) { const l = rec.mods[k]; if (l >= 3) continue; const p = modulePrice(rec.hull, k, l + 1); if (!best || p < best.p) best = { k, p }; }
    return best ? best.k : 'mining';
  }

  // ---- lifecycle ----
  begin() {
    const s = this.s; this.said.clear(); this._st = s;
    s.tut = { done: false, step: 0, base: {}, held: [], sys: s.systemId };
    this.onEnterSystem();
    // face the first deposit so the marker is right there
    const d = this.deposit(), p = this.g.player;
    if (d && p) { const dir = d.pos.clone().sub(p.pos); p.yaw = Math.atan2(dir.x, dir.z); p.pitch = 0; p.obj.quaternion.setFromEuler(new THREE.Euler(0, p.yaw, 0, 'YXZ')); this.g.camInit = false; }
    this.enter(0);
  }
  skip() {
    const s = this.s; if (!this.active) return;
    s.tut.skipped = true; this.graduate(true);
  }
  // the training wreck lives near the home station until the tutorial ends
  onEnterSystem() {
    const g = this.g, s = this.s;
    if (!this.active || s.systemId !== s.tut.sys || this.wreck()) return;
    const W = g.world, st = W.station.pos, rng = new RNG(WRECK_SEED + s.seed % 1000);
    let pos = null;
    for (let i = 0; i < 40 && !pos; i++) {
      const a = rng.range(0, Math.PI * 2), r = 1500 + i * 30;
      const c = new THREE.Vector3(Math.cos(a) * r, rng.range(-60, 60), Math.sin(a) * r).add(st);
      const ok = W.planets.every((pl) => c.distanceTo(pl.pos) > pl.radius + 450) && c.length() > 2500
        && W.gates.every((gt) => c.distanceTo(gt.pos) > 600) && W.fields.every((f) => c.distanceTo(f.center) > f.radius + 200);
      if (ok) pos = c;
    }
    if (!pos) pos = st.clone().add(new THREE.Vector3(1500, 0, 0));
    const D = buildDerelict(WRECK_SEED);
    D.group.position.copy(pos); D.group.rotation.set(0.4, 1.2, 0.2);
    W.root.add(D.group);
    W.derelicts.push({ ...D, pos: D.group.position, name: 'Drifting Hauler', seed: WRECK_SEED, kind: 'derelict', tut: true });
  }

  enter(step) {
    const s = this.s, g = this.g, t = s.tut, W = this.words();
    t.step = step; t.base = { mined: s.stats.mined, trades: s.stats.trades, upgrades: s.stats.upgrades || 0 };
    const say = (text) => { if (this.said.has(`${step}`)) return; this.said.add(`${step}`); g.story.comm('wick', text, { tut: true }); };
    const dep = this.deposit(), st = g.world.station.name;
    if (step === 0) say(`Systems online. I'm Wick, your ship's assistant. First, the basics: we mine ore and sell it. The flashing marker is an ore deposit on ${dep ? dep.planet.data.name : 'that planet'}. To fly, ${W.fly}. Long trip? ${W.cruise}.`);
    if (step === 1) say(`In range. Now ${W.hold('drill')} and fill up with ${DRILL_N} units of ore.`);
    if (step === 2) say(`That's a load. Ore is only worth credits at a station, so fly back to ${st} and ${W.press('dock')}.`);
    if (step === 3) say(`Welcome to ${st}. This is the Market. Sell your ore with SELL ALL ORE.`);
    if (step === 4) { const k = this.recommendMod(); this.ensureCredits(k); say(`◈${fmt(s.credits)} in the bank. Credits buy upgrades, and better gear means bigger hauls. A new tab just opened: UPGRADES. Install the ${MODULES[k].name} Mk1.`); }
    if (step === 5) say(`Better already. Now the map: sensors show a drifting wreck nearby, and wrecks carry salvage. UNDOCK, then ${W.map}. Pick the Drifting Hauler and choose AUTOPILOT.`);
    if (step === 6) say(`Autopilot will fly us there. When we arrive, ${W.hold('salvage')}.`);
    if (step === 7) say(`Salvage aboard, and a few credits on top. Those Machine Parts sell well. Head back to ${st}, by map or by hand, and sell them.`);
    if (g.docked && g.ui.stTab != null) g.ui.renderStation(); // new tab or highlight
    g.save();
  }
  // a fresh pilot always has enough for one Mk1 module
  ensureCredits(k) {
    const s = this.s, rec = this.g.activeShipRec(), price = modulePrice(rec.hull, k, rec.mods[k] + 1);
    if (s.credits < price) { const add = price - s.credits; this.g.addCredits(add); this.g.ui.toast(`Pilots' Guild starter grant: ◈${fmt(add)}`, 'good', 4); }
  }

  graduate(skipped = false) {
    const g = this.g, s = this.s, t = s.tut;
    t.done = true; t.step = TUT_STEPS; t.gradDay = s.day; // new-feature messages wait until tomorrow
    if (s.story.debt > 0) s.story.debtCheck = s.day + 7; // the marker's clock starts now
    document.body.classList.remove('tut-calm');
    this.hide();
    g.story.lastOpen = performance.now() / 1000; // space out the first unlock messages
    if (!skipped) {
      // one wrap-up from Wick (loop + where messages and goals live); the map was already covered in training
      s.story.said['tip-map'] = 1; s.story.said['tip-log'] = 1;
      g.story.comm('wick', `That's the whole loop: mine or salvage, sell, upgrade, fly further. You're on your own now, pilot. Every message is saved: to read them again, ${g.story.howTo('log')}. The JOURNAL in that same menu has ideas when you're not sure what to do next.`, { tut: true });
      g.audio.play('coins', { vol: 0.6 });
    }
    // the story was waiting politely: deliver what it wanted to say
    for (const [id, text, opts] of t.held) g.story.comm(id, text, { ...opts, once: null, tut: true });
    t.held = [];
    g.save();
    if (g.docked) g.ui.renderStation();
  }

  // ---- per-frame ----
  update(dt) {
    if (this.g.mode !== 'play' || !this.s) { this.hide(); return; }
    if (this._st !== this.s) { this._st = this.s; this.said.clear(); } // another career was loaded
    if (!this.active || !this.g.player) { this.hide(); document.body.classList.remove('tut-calm'); return; }
    document.body.classList.add('tut-calm');
    const g = this.g, s = this.s, t = s.tut, b = t.base, act = g.currentAction;
    if (!this.said.has(`${t.step}`) && g.mode === 'play') this.enter(t.step); // resumed career: repeat the current line once
    switch (t.step) {
      case 0: if (act && act.type === 'mine' && act.node.kind === 'deposit') this.enter(1); break;
      case 1: if (s.stats.mined - b.mined >= DRILL_N || (s.stats.mined > b.mined && g.cargoFree() <= 0)) this.enter(2); break;
      case 2: if (g.docked) this.enter(3); break;
      case 3: if (s.stats.trades > b.trades) this.enter(4); break;
      case 4: if ((s.stats.upgrades || 0) > b.upgrades) this.enter(5); break;
      case 5: { const w = this.wreck(); if (w && !g.docked && ((g.autopilot && g.autopilot.pos.distanceTo(w.pos) < 30) || g.player.pos.distanceTo(w.pos) < 200)) this.enter(6); if (this.wreckLooted()) this.enter(7); break; }
      case 6: if (this.wreckLooted()) this.enter(7); break;
      case 7: if (g.docked && s.stats.trades > b.trades) this.graduate(); break;
    }
    if (this.active) this.render();
  }
  target() {
    const g = this.g, t = this.s.tut;
    if (g.docked) return null;
    if (t.step <= 1) { const d = this.deposit(); return d ? { pos: d.pos, name: `${COMM[d.ore].name} deposit` } : null; }
    if (t.step === 2 || t.step === 3 || t.step === 4 || t.step === 7) return { pos: g.world.station.pos, name: g.world.station.name };
    const w = this.wreck(); return w ? { pos: w.pos, name: w.name } : null;
  }
  objective() {
    const g = this.g, s = this.s, t = s.tut, st = g.world.station.name, d = this.deposit();
    switch (t.step) {
      case 0: return g.docked ? 'UNDOCK, then fly to the flashing ore deposit' : `Fly to the flashing ${d ? COMM[d.ore].name : 'ore'} deposit${d ? ` on ${d.planet.data.name}` : ''}`;
      case 1: return `Hold DRILL to mine · ${Math.min(DRILL_N, s.stats.mined - t.base.mined)}/${DRILL_N}`;
      case 2: return `Fly back to ${st} and DOCK`;
      case 3: return g.docked ? 'Sell your ore: press SELL ALL ORE' : `Dock at ${st} and sell your ore`;
      case 4: return g.docked ? `Open UPGRADES · install the ${MODULES[this.recommendMod()].name} Mk1` : `Dock at ${st} to install an upgrade`;
      case 5: return g.docked ? 'Press UNDOCK' : 'Open the MAP · pick the Drifting Hauler · AUTOPILOT';
      case 6: return 'Hold SALVAGE at the Drifting Hauler';
      case 7: return g.docked ? 'Sell the Machine Parts in the Market' : `Return to ${st} and DOCK`;
    }
    return '';
  }
  el() {
    let el = document.getElementById('objective');
    if (!el) {
      el = document.createElement('div'); el.id = 'objective';
      el.innerHTML = '<span class="ob-step"></span><span class="ob-text"></span>';
      document.body.appendChild(el);
    }
    return el;
  }
  render() {
    const el = this.el(), t = this.s.tut;
    el.classList.remove('hidden'); el.classList.toggle('docked', this.g.docked);
    const step = `TRAINING ${Math.min(TUT_STEPS, t.step + 1)}/${TUT_STEPS}`, txt = this.objective();
    if (el.firstChild.textContent !== step) el.firstChild.textContent = step;
    if (el.lastChild.textContent !== txt) el.lastChild.textContent = txt;
  }
  hide() { const el = document.getElementById('objective'); if (el) el.classList.add('hidden'); }

  // salvage from the training wreck is always the same: something to sell
  salvageLoot(d) { return d.tut ? { credits: 250, good: 'parts', q: 6 } : null; }

  // ---- after the tutorial: new tabs get a short introduction ----
  updateTabs() {
    const g = this.g, s = this.s; if (this.active || !s.tabs || s.tabs.all) return;
    const intro = {
      hangar: "Shipyard's open to you now: bigger hulls with more hold, more guns, or both. Every ship keeps its own upgrades.",
      bar: "The station Cantina is worth a look now. Pilots talk, and the Pilot Record shows what the sector thinks of you.",
    };
    for (const k in intro) if (!s.tabs.told[k] && tabOpen(s, k)) { s.tabs.told[k] = 1; g.story.comm('wick', intro[k]); return; }
  }
}
