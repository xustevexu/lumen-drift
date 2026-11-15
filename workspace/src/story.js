// Story layer: who you are (origins), who you meet (the cast), how they talk to you (comms + radio chatter),
// how a new career opens up (gradual unlocks introduced by characters), and the opening intro.
import { fmt } from './rng.js';
import { COMM } from './data.js';
import { pilotRank } from './economy.js';
import { FACTIONS } from './factions.js';
import { jumpsFrom } from './missions.js';
import { normalizeArc } from './arcs.js';

const INK = '#141826';
export const ACCORD = new Set(['agricultural', 'industrial', 'hightech']);
export const isAccordEco = (eco) => ACCORD.has(eco);

// ---------------------------------------------------------------- the cast
export const CAST = {
  wick: { name: 'Wick', role: 'Ship assistant', color: '#58e8ff', p: { kind: 'ai' } },
  hale: { name: 'Commander Ines Hale', role: 'Accord Patrol', color: '#6f9fff', p: { bg: '#2b3f73', skin: '#c99a76', hair: '#2a2421', style: 'bun', outfit: '#e8ecf4', trim: '#6f9fff', acc: ['cap'] } },
  vex: { name: 'Vex Tannery', role: 'Red Wake', color: '#ff4a3a', p: { bg: '#5a1d1d', skin: '#e0b48f', hair: '#c8331f', style: 'mohawk', outfit: '#2a2a33', trim: '#ff4a3a', acc: ['scar', 'earring'] } },
  ama: { name: 'Elder Ama Oyelaran', role: 'Free Settlers', color: '#f0703c', p: { bg: '#6b3a1e', skin: '#6b4430', hair: '#f0a03c', style: 'wrap', outfit: '#8a5a3a', trim: '#f0d36b', acc: [] } },
  solak: { name: 'Dr. Imre Solak', role: 'Lumen Institute', color: '#3fb8c8', p: { bg: '#174a52', skin: '#d8b896', hair: '#9aa0a8', style: 'short', outfit: '#f2f4f2', trim: '#3fb8c8', acc: ['glasses'] } },
  kask: { name: 'Brodie Kask', role: 'Deepcore Union', color: '#d9a35a', p: { bg: '#4a3a22', skin: '#b98a66', hair: '#5a4632', style: 'bald', outfit: '#6a5a44', trim: '#d9a35a', acc: ['beard'] } },
};

export function portraitSVG(id, size = 64) {
  if (CAST[id]) return `<img class="portrait" src="./portraits/${id}.jpg" width="${size}" height="${size}" alt="${CAST[id].name}">`;
  const c = CAST[id]; const p = c.p;
  if (p.kind === 'ai') {
    return `<svg viewBox="0 0 64 64" width="${size}" height="${size}"><rect width="64" height="64" fill="#0d1424"/><circle cx="32" cy="32" r="22" fill="none" stroke="#58e8ff" stroke-width="2" opacity=".5"/>
      <circle cx="32" cy="32" r="14" fill="#58e8ff" opacity=".18"/><path d="M32 16 C40 26 40 34 32 44 C24 34 24 26 32 16 Z" fill="#9ff0ff" stroke="${INK}" stroke-width="2"/>
      <path d="M32 26 C35 31 35 35 32 40 C29 35 29 31 32 26 Z" fill="#ffffff"/><rect x="24" y="46" width="16" height="4" fill="#58e8ff" stroke="${INK}" stroke-width="1.5"/></svg>`;
  }
  const s = 'stroke="' + INK + '" stroke-width="2"';
  let back = '', hair = '', acc = '';
  if (p.style === 'short') hair = `<path d="M20.5 26 C20 12 44 12 43.5 26 C40 19 26 18 20.5 26 Z" fill="${p.hair}" ${s}/>`;
  if (p.style === 'bun') { hair = `<path d="M20.5 26 C20 12 44 12 43.5 26 C40 18 26 18 20.5 26 Z" fill="${p.hair}" ${s}/>`; back = `<circle cx="32" cy="11" r="5" fill="${p.hair}" ${s}/>`; }
  if (p.style === 'mohawk') hair = `<path d="M28.5 15 L31 5 L34 4 L36 14 L35.5 22 L28.5 22 Z" fill="${p.hair}" ${s}/>`;
  if (p.style === 'wrap') hair = `<path d="M19.5 27 C18 9 46 9 44.5 27 C42 18 22 18 19.5 27 Z" fill="${p.hair}" ${s}/><circle cx="44" cy="16" r="4" fill="${p.hair}" ${s}/>`;
  if (p.acc.includes('cap')) hair += `<path d="M19 21 C20 11 44 11 45 21 Z" fill="${p.outfit}" ${s}/><path d="M17 21 L47 21 L44 24 L20 24 Z" fill="${p.trim}" ${s}/>`;
  if (p.acc.includes('glasses')) acc += `<circle cx="27.5" cy="28.5" r="3.6" fill="#cfefff" fill-opacity=".35" ${s}/><circle cx="36.5" cy="28.5" r="3.6" fill="#cfefff" fill-opacity=".35" ${s}/><path d="M31 28.5 L33 28.5" ${s}/>`;
  if (p.acc.includes('scar')) acc += `<path d="M38 24 L41 33" stroke="#ff6b6b" stroke-width="2"/>`;
  if (p.acc.includes('earring')) acc += `<circle cx="43" cy="32" r="1.6" fill="#f2c94c" ${s}/>`;
  if (p.acc.includes('beard')) acc += `<path d="M21.5 30 C22 42 27 45 32 45 C37 45 42 42 42.5 30 C40 37 36 38 32 38 C28 38 24 37 21.5 30 Z" fill="${p.hair}" ${s}/>`;
  return `<svg viewBox="0 0 64 64" width="${size}" height="${size}"><rect width="64" height="64" fill="${p.bg}"/><circle cx="32" cy="30" r="25" fill="#ffffff" opacity=".08"/>
    ${back}<path d="M7 64 C9 49 20 45 32 45 C44 45 55 49 57 64 Z" fill="${p.outfit}" ${s}/><path d="M24 46.5 L32 55 L40 46.5" stroke="${p.trim}" stroke-width="3" fill="none"/>
    <rect x="27" y="36" width="10" height="10" fill="${p.skin}" ${s}/><ellipse cx="32" cy="27.5" rx="11.5" ry="13" fill="${p.skin}" ${s}/>
    ${hair}<ellipse cx="27.5" cy="28.5" rx="1.6" ry="1.9" fill="${INK}"/><ellipse cx="36.5" cy="28.5" rx="1.6" ry="1.9" fill="${INK}"/>
    <path d="M25 24.5 L30 24" stroke="${INK}" stroke-width="1.6"/><path d="M34 24 L39 24.5" stroke="${INK}" stroke-width="1.6"/>
    <path d="M28.5 35 Q32 37 35.5 35" stroke="${INK}" stroke-width="1.6" fill="none"/>${acc}</svg>`;
}

// ---------------------------------------------------------------- origins
export const ORIGINS = {
  deserter: {
    name: 'The Deserter', tag: 'Ex-Accord Patrol pilot', speaker: 'hale',
    blurb: "You flew for the Accord Patrol until the night you didn't. You walked out with a Patrol cipher key and nothing else. The core worlds remember.",
    perks: 'Starts in the Fringe · Beam Mk1 + Missile rack Mk1 · Accord factions start Unfriendly · Free Settlers warm to you',
    intro: [
      'The Accord keeps the core worlds lit, fed and safe.',
      'You were one of the pilots who kept it that way, until you saw what the order costs the Fringe.',
      'You left without a word, and with a Patrol cipher key in your pocket.',
      'Now you fly a borrowed Wren on the edge of charted space, where nobody asks where you came from.',
      'The Accord will come asking eventually.',
    ],
  },
  debtor: {
    name: 'The Debtor', tag: 'Fringe hauler in hock', speaker: 'vex',
    blurb: "Your ship was paid for with Red Wake money. Twenty thousand credits of it. Vex Tannery holds your marker, and Vex always collects.",
    perks: 'Starts in the Fringe · Mining laser Mk1 + Cargo Mk1 · ◈3,500 in hand · owes the Red Wake ◈20,000',
    intro: [
      'Out in the Fringe, nobody gives you a ship. You buy one, or you borrow.',
      'You borrowed. From the Red Wake.',
      'Twenty thousand credits bought a used Wren, a full tank and a little hope.',
      'Vex Tannery holds your marker. Vex is patient. Vex is also not kind.',
      'Mine, haul, trade. Pay it off, before it pays you a visit.',
    ],
  },
  heir: {
    name: 'The Heir', tag: 'Descendant of the Lantern Fleet', speaker: 'ama',
    blurb: "Your grandmother left you a ship, a debt of curiosity, and an Exodus Log nobody else has seen. Everyone wants what it points to.",
    perks: 'Starts at the core · Sensors Mk1 · 2 scanner probes · already holds 1 Exodus Log',
    intro: [
      'Three hundred years ago the Lantern Fleet fled a dying sun and lit these lanes.',
      'Your grandmother swore she was descended from its engineers. Nobody believed her.',
      'When she died she left you her Wren, and a log core that plays a voice from the Fleet.',
      'The old songs say the logs wake something. The Institute would love to know what.',
      'So would the Red Wake.',
    ],
  },
};
export const ORIGIN_IDS = Object.keys(ORIGINS);

function nearestSystem(galaxy, from, pred) {
  const dist = jumpsFrom(galaxy, from);
  return galaxy.systems.filter((s) => !s.hidden && pred(s)).sort((a, b) => dist[a.id] - dist[b.id])[0];
}
// apply an origin to a freshly created state (called before the first system is entered)
export function applyOrigin(state, galaxy, id) {
  const rec = state.ships[0];
  state.story.origin = id;
  if (id === 'deserter') {
    const sys = nearestSystem(galaxy, galaxy.startId, (s) => s.eco === 'mining') || nearestSystem(galaxy, galaxy.startId, (s) => !isAccordEco(s.eco));
    state.systemId = sys.id;
    for (const f of ACCORD) state.factions[f] = -12;
    state.factions.frontier = 6;
    rec.mods.beam = 1; rec.mods.missile = 1; rec.missiles = 4; state.unlocks.factions = true;
    state.credits = 1500;
  } else if (id === 'debtor') {
    const sys = nearestSystem(galaxy, galaxy.startId, (s) => s.eco === 'frontier') || nearestSystem(galaxy, galaxy.startId, (s) => !isAccordEco(s.eco));
    state.systemId = sys.id;
    rec.mods.mining = 1; rec.mods.cargo = 1;
    state.credits = 3500;
    state.story.debt = 20000; state.story.debtWeekPaid = 0; state.story.debtCheck = 7;
    state.factions.pirate = 4;
  } else if (id === 'heir') {
    state.systemId = galaxy.startId;
    rec.mods.sensors = 1;
    state.explore.probes = 2; state.explore.lore = 1; state.unlocks.exploration = true;
    state.credits = 2000;
  }
  normalizeArc(state);
}

// ---------------------------------------------------------------- state
export const UNLOCK_KEYS = ['contracts', 'events', 'factions', 'exploration', 'outposts', 'fabrication', 'fleet', 'sieges'];
export function normalizeStoryState(state) {
  if (!state.story || typeof state.story !== 'object') state.story = { origin: null, said: {} };
  if (!state.story.said) state.story.said = {};
  // older careers had everything from the start: keep it that way
  if (!state.unlocks || typeof state.unlocks !== 'object') state.unlocks = Object.fromEntries(UNLOCK_KEYS.map((k) => [k, true]));
  for (const k of UNLOCK_KEYS) if (typeof state.unlocks[k] !== 'boolean') state.unlocks[k] = true;
  if (!state.accord || typeof state.accord !== 'object') state.accord = { licensed: false, lastScanDay: -9 };
  return normalizeArc(state);
}
export function lockAll(state) { state.unlocks = Object.fromEntries(UNLOCK_KEYS.map((k) => [k, false])); }
export const unlocked = (state, k) => !state.unlocks || state.unlocks[k] !== false;

// ---------------------------------------------------------------- manager
export class Story {
  constructor(game) { this.g = game; this.queue = []; this.cur = null; this.t = 0; this.check = 0; }
  get state() { return this.g.state; }

  // ---- comms panel ----
  comm(id, text, opts = {}) {
    const s = this.state;
    if (opts.once) { if (s.story.said[opts.once]) return; s.story.said[opts.once] = 1; }
    this.queue.push({ id, text, chatter: false });
    this.log(CAST[id].name, text, opts.kind || 'info');
  }
  chatter(name, text) {
    if (this.queue.filter((q) => q.chatter).length >= 2) return; // never let chatter pile up
    this.queue.push({ id: null, name, text, chatter: true });
    this.log(`📻 ${name}`, text, '');
  }
  log(name, text, kind) {
    const st = this.state; if (!st) return;
    if (!Array.isArray(st.msgLog)) st.msgLog = [];
    const h = Math.floor((st.dayTime || 0) * 24), mi = Math.floor(((st.dayTime || 0) * 24 - h) * 60);
    st.msgLog.unshift({ d: st.day, t: `${String(h).padStart(2, '0')}:${String(mi).padStart(2, '0')}`, m: `${name}: ${text}`, k: kind });
    if (st.msgLog.length > 80) st.msgLog.length = 80;
  }
  el() {
    let el = document.getElementById('comm');
    if (!el) {
      el = document.createElement('div'); el.id = 'comm'; el.className = 'hidden';
      el.innerHTML = '<div class="comm-pic"></div><div class="comm-body"><div class="comm-name"></div><div class="comm-text"></div></div>';
      el.addEventListener('click', () => { this.t = 0; });
      document.body.appendChild(el);
    }
    return el;
  }
  updateComms(dt) {
    const el = this.el();
    if (this.cur) {
      this.cur.shown = Math.min(this.cur.text.length, this.cur.shown + dt * 55); // typewriter
      el.querySelector('.comm-text').textContent = this.cur.text.slice(0, Math.floor(this.cur.shown));
      this.t -= dt;
      if (this.t <= 0) { this.cur = null; el.classList.add('hidden'); }
      return;
    }
    if (!this.queue.length || this.g.mode !== 'play') return;
    const q = this.queue.shift(); this.cur = { ...q, shown: 0 };
    this.t = Math.min(14, 3.5 + q.text.length / (q.chatter ? 22 : 16));
    el.classList.toggle('chatter', q.chatter);
    const c = q.id ? CAST[q.id] : null;
    el.querySelector('.comm-pic').innerHTML = c ? portraitSVG(q.id) : '<div class="radio">📻</div>';
    el.querySelector('.comm-name').innerHTML = c ? `${c.name} <span style="background:${c.color}">${c.role.toUpperCase()}</span>` : q.name;
    el.querySelector('.comm-text').textContent = '';
    el.classList.remove('hidden');
    this.g.audio.play('click', { vol: q.chatter ? 0.25 : 0.4, rate: q.chatter ? 1.6 : 1.2 });
  }

  // ---- new career: pick an origin, then the intro ----
  chooseOrigin(onPick) {
    const ui = this.g.ui;
    const cards = ORIGIN_IDS.map((id) => { const o = ORIGINS[id]; return `<div class="origin"><div class="origin-pic"><img src="./portraits/${id}.jpg" alt="${o.name}"></div><div><b>${o.name}</b> <small>${o.tag}</small><p>${o.blurb}</p><p class="origin-perks">${o.perks}</p></div></div>`; }).join('');
    ui.dialog(`<div class="ov-title">WHO ARE YOU?</div><p>Your past decides where you start, who already knows your name, and the story that follows you.</p>${cards}`,
      [...ORIGIN_IDS.map((id) => ({ label: ORIGINS[id].name.toUpperCase(), primary: id === 'heir', fn: () => this.intro(id, onPick) })), { label: 'BACK' }]);
    document.getElementById('dialogBox').classList.add('originBox');
  }
  intro(id, onPick) {
    const o = ORIGINS[id];
    const lines = o.intro.map((l, i) => `<p class="intro-line" style="animation-delay:${0.4 + i * 1.6}s">${l}</p>`).join('');
    this.g.ui.dialog(`<img class="intro-pic" src="./portraits/${id}.jpg" alt=""><div class="intro-title">${o.name.toUpperCase()}</div>${lines}`, [{ label: 'BEGIN', primary: true, fn: () => onPick(id) }]);
    const box = document.getElementById('dialogBox'); box.classList.remove('originBox'); box.classList.add('introBox');
    document.getElementById('dialog').classList.add('introOv');
  }
  // first moments of a new career
  opening() {
    const s = this.state, o = s.story.origin;
    document.getElementById('dialog').classList.remove('introOv');
    setTimeout(() => this.comm('wick', "Systems online. I'm Wick, your ship's assistant. Let's keep it simple to start: mine that asteroid field, or dock at the station and trade. I'll walk you through the rest when it matters.", { once: 'wick-hello' }), 1500);
    if (o === 'deserter') setTimeout(() => this.comm('hale', "Pilot. You left the Patrol without a word, and with a Patrol cipher key. Bring it back and we can talk. Until then, don't expect a warm welcome in Accord space.", { once: 'hale-1', kind: 'warn' }), 26000);
    if (o === 'debtor') setTimeout(() => this.comm('vex', "Morning, sunshine. Twenty thousand, remember? Pay me at any Fringe station. I check in every week. Don't make me come find you.", { once: 'vex-1', kind: 'warn' }), 26000);
    if (o === 'heir') setTimeout(() => this.comm('ama', "Child of the Lantern line. Your grandmother's log came to me through the old channels. The songs say the logs wake something out past the charts. Find the wrecks, and listen.", { once: 'ama-1' }), 26000);
  }

  // ---- gradual unlocks: checked every second ----
  update(dt) {
    this.updateComms(dt);
    this.check -= dt; if (this.check > 0 || this.g.mode !== 'play') return;
    this.check = 1;
    const s = this.state, U = s.unlocks, g = this.g, rank = pilotRank(s), eco = g.sysInfo.eco;
    const open = (k, id, text) => { if (U[k]) return; U[k] = true; this.comm(id, text, { kind: 'good' }); g.save(); };
    if (!U.events && s.day >= 2) open('events', 'wick', 'Heads up: the sector is waking up. Distress beacons, ore surges and market shocks will pop up from today. Check Sector News in station Services, and the galaxy map for icons.');
    if (!U.contracts && (s.stats.trades >= 1 || s.day >= 2)) open('contracts', isAccordEco(eco) ? 'hale' : 'kask', isAccordEco(eco) ? 'Station boards post contracts: cargo runs, passengers, supply orders. Honest work for an independent. The Contracts tab is open at every station.' : "Want steady coin? Stations post contracts: haul it, fly 'em, supply it. Check the Contracts tab next time you dock. Pays better than rocks.");
    if (!U.factions && s.stats.contracts >= 1) open('factions', 'wick', 'First contract done. Stations belong to factions, and they remember who helps them. The Accord (Institute, Combine, Cooperative) runs the patrolled core; the Fringe (Union, Settlers) fends for itself. Standing is in Services → Factions.');
    if (!U.exploration && (Object.keys(s.explore.seen).length || s.day >= 4)) open('exploration', 'solak', "Fascinating readings around here. Every system hides anomalies: old wrecks, rifts, crystal pockets. Your sensors pick them up when you're close; a scanner probe (sold in Services) maps a whole system. Send me anything interesting.");
    if (!U.outposts && rank >= 1) open('outposts', 'ama', "You're making a name. Out here, people who build stay. Buy an Outpost Charter at any station and set down at an asteroid field or a planet deposit. It'll mine while you fly.");
    if (!U.fabrication && rank >= 1 && (eco === 'industrial' || eco === 'hightech') && g.docked) open('fabrication', 'wick', 'This station has a fabricator. Upgrades → Fabrication builds module upgrades from refined goods for about half the credits, and prototypes from any blueprints you find.');
    if (!U.fleet && rank >= 2) open('fleet', 'wick', "Your rank opens doors: pilots will fly as your wingmen, and spare ships can run trade routes on their own. Both live in the Shipyard tab.");
    if (!U.sieges && U.factions && s.day >= 8) open('sieges', isAccordEco(eco) ? 'hale' : 'kask', isAccordEco(eco) ? 'Patrol intelligence: the Red Wake is massing armadas. When one is announced, stations hire militia. Independent pilots who help will be remembered.' : "Word from the deep mines: the Wake's been gathering big. When they hit a station they come in waves. Hire militia if you can, and bring friends.");
    this.updateDebt();
    this.g.arcs.update();
  }

  // ---- the Debtor's marker ----
  updateDebt() {
    const s = this.state, st = s.story;
    if (!st.debt || st.debt <= 0 || s.day < (st.debtCheck || 7)) return;
    st.debtCheck = s.day + 7;
    if ((st.debtWeekPaid || 0) <= 0) {
      const add = Math.round(st.debt * 0.05); st.debt += add; this.g.factionChange('pirate', -2, true);
      this.comm('vex', `Week's up and I didn't see a credit. Interest is ◈${fmt(add)}; you owe ◈${fmt(st.debt)} now. Pay at any Fringe station.`, { kind: 'warn' });
    } else this.comm('vex', `◈${fmt(st.debtWeekPaid)} this week. Good. ◈${fmt(st.debt)} to go. Keep it up and we stay friends.`);
    st.debtWeekPaid = 0;
  }
  payDebt(amount) {
    const s = this.state, st = s.story, n = Math.min(amount, st.debt, s.credits);
    if (n <= 0) return 0;
    s.credits -= n; st.debt -= n; st.debtWeekPaid = (st.debtWeekPaid || 0) + n;
    if (st.debt <= 0) { st.debt = 0; this.g.factionChange('pirate', 6); this.comm('vex', "Paid in full. Huh. Didn't think you had it in you. Your marker's burned. If you ever want real work, you know where the Wake drinks.", { kind: 'good' }); }
    return n;
  }
  debtHTML() {
    const g = this.g, st = this.state.story;
    if (!st.debt || st.debt <= 0) return '';
    const fringe = !isAccordEco(g.sysInfo.eco), s = this.state;
    const btn = (n, label) => `<button class="sbtn buy" data-act="paydebt" data-arg="${n}" ${fringe && s.credits >= Math.min(n, st.debt) ? '' : 'disabled'}>${label}</button>`;
    return `<div class="card news"><div><h3>Red Wake Marker</h3><p>You owe Vex Tannery <b>◈${fmt(st.debt)}</b>. Paid this week: ◈${fmt(st.debtWeekPaid || 0)}. ${fringe ? 'Vex has people at this station.' : 'Vex only collects at Fringe stations (Mining and Frontier systems).'} Miss a week and 5% interest is added.</p><p>${btn(1000, 'PAY ◈1,000')} ${btn(5000, 'PAY ◈5,000')} ${btn(st.debt, `PAY ALL ◈${fmt(st.debt)}`)}</p></div></div>`;
  }
}
export { COMM, FACTIONS };
