// Phase 3: a living sector around the player.
//  - a pilot callsign the galaxy uses
//  - headlines: the Sector News reports what you (and your rival) do
//  - the station cantina: bartender, paid rumors built from real game data, one patron encounter a day
//  - a recurring rival pilot, Kade Rourke, who challenges you to wagered duels and makes news of his own
import * as THREE from 'three';
import { RNG, fmt } from './rng.js';
import { COMMODITIES, COMM } from './data.js';
import { pilotRank, RANK_NAMES } from './economy.js';
import { jumpsFrom } from './missions.js';
import { liveEvents, describe } from './events.js';
import { systemExploreStatus } from './explore.js';
import { isAccordEco, unlocked, CAST, portraitSVG } from './story.js';
import { FACTIONS } from './factions.js';

const _v = new THREE.Vector3();
const FIRST = ['Ash', 'Blue', 'Cinder', 'Dusty', 'Echo', 'Flint', 'Grey', 'Halo', 'Iron', 'Jinx', 'Kestrel', 'Lucky', 'Moth', 'Nova', 'Onyx', 'Pike', 'Quill', 'Rook', 'Sable', 'Tinder', 'Umber', 'Vane', 'Wren', 'Zephyr'];
const LAST = ['Calloway', 'Drift', 'Okafor', 'Marsh', 'Novak', 'Reyes', 'Sato', 'Teller', 'Voss', 'Whitlock', 'Yarrow', 'Quint', 'Hale-less', 'Brann', 'Ferro', 'Lindqvist'];
export function randomCallsign() { const r = Math.random; return `${FIRST[Math.floor(r() * FIRST.length)]} ${LAST[Math.floor(r() * LAST.length)].replace('Hale-less', 'Harlow')}`; }

export const RIVAL = { name: 'Kade Rourke' };
const BARKEEPS = ['Old Tomas', 'Mira', 'Big Lou', 'Sunny', 'Dez', 'Grandma Pell', 'Ivo', 'Rosa', 'Quinn', 'Hob'];

export function normalizeP3(state) {
  if (!state.p3 || typeof state.p3 !== 'object') state.p3 = {};
  const p = state.p3;
  if (typeof p.callsign !== 'string' || !p.callsign) p.callsign = randomCallsign();
  if (!Array.isArray(p.news)) p.news = [];
  if (!p.rival || typeof p.rival !== 'object') p.rival = { level: 0, wins: 0, losses: 0, declined: 0, next: Math.max(6, (state.day || 1) + 3), met: false, weak: false };
  if (!p.bar || typeof p.bar !== 'object') p.bar = { day: -1, revealed: {}, done: {} };
  if (!Number.isFinite(p.lastRank)) p.lastRank = pilotRank(state);
  if (!Number.isFinite(p.killMark)) p.killMark = state.stats ? state.stats.kills || 0 : 0;
  return state;
}

export class Phase3 {
  constructor(game) { this.g = game; this.duel = null; this.check = 0; }
  get s() { return this.g.state; }
  get p() { return this.s.p3; }
  get cs() { return this.p.callsign; }

  // ------------------------------------------------------------ headlines
  headline(text, kind = 'you') {
    const s = this.s; if (!s || !s.p3) return;
    this.p.news.unshift({ d: s.day, t: text, k: kind });
    if (this.p.news.length > 30) this.p.news.length = 30;
    if (kind === 'you') setTimeout(() => this.g.ui.toast(`📰 ${text}`, 'info', 6), 1200);
  }
  endingNews(key) {
    const N = {
      accord: 'PATROL SCANDAL: Capt. Doran Mercer arrested. Deserter {cs} pardoned and reinstated.',
      fringe: 'Fringe colonies learn the Patrol sold them to the Red Wake. {cs} hailed a hero; Accord furious.',
      open: 'SECTOR-WIDE LEAK: {cs} broadcasts Patrol corruption files. Accord promises reform.',
      bought: 'Rumors swirl that deserter {cs} took a payoff. Nobody can prove a thing.',
      partner: 'RED WAKE SHAKE-UP: Silas Marrow dead, Vex Tannery takes the Wake. {cs} seen at her side.',
      enforcer: 'Vex Tannery vanishes. Silas Marrow tightens his grip on the Red Wake. {cs} named as his new enforcer.',
      witness: 'FORTY OFFICIALS ARRESTED after {cs} hands a Red Wake ledger to the Patrol.',
      collector: 'Every marker in the Fringe now belongs to one pilot: {cs}. Debtors are nervous.',
      keep: "The Lantern Fleet's Heart is real, and it flies with {cs}.",
      settlers: "{cs} gives the Lantern Fleet's Heart to the Free Settlers. Fringe stations begin growing their own Lumenite.",
      institute: 'Lumen Institute acquires the legendary Lantern Heart from {cs} for an undisclosed sum.',
      rest: "{cs} returns the Lantern Heart to Lumen's Rest. Pilots across the sector report hearing \"singing\" on open channels.",
    };
    if (N[key]) this.headline(N[key].replace('{cs}', this.cs));
  }
  fame() { return this.p.news.filter((n) => n.k === 'you').length; }
  headlinesHTML() {
    const list = this.p.news.slice(0, 6);
    if (!list.length) return '';
    return `<div class="card news headlines"><div><h3>📰 Headlines</h3>${list.map((n) => `<p><small>Day ${n.d}</small> ${n.k === 'rival' ? '<b style="color:#d9622b">◆</b>' : '<b>◆</b>'} ${n.t}</p>`).join('')}</div></div>`;
  }

  // called every second from Story.update, and daily from Game.newDay
  update(dt) {
    this.check -= dt; if (this.check > 0) return; this.check = 1;
    const s = this.s, g = this.g, p = this.p;
    const r = pilotRank(s);
    if (r > p.lastRank) { p.lastRank = r; this.headline(`Pilots' Guild names ${this.cs} a ${RANK_NAMES[r]}.`); }
    const marks = [10, 25, 50, 100, 200];
    for (const m of marks) if (p.killMark < m && s.stats.kills >= m) { p.killMark = m; this.headline(`${this.cs} passes ${m} outlaw kills. Red Wake crews reportedly avoid the lanes ${this.cs} flies.`); }
    this.updateRival();
  }
  newDay() {
    const s = this.s, p = this.p, rv = p.rival;
    if (!unlocked(s, 'rival') || !rv.met) return;
    if (Math.random() < 0.4) this.rivalNews();
  }

  // ------------------------------------------------------------ rival
  rivalTough() { return 1.25 + this.p.rival.level * 0.22 - (this.p.rival.weak ? 0.25 : 0); }
  // Kade only takes an interest once you've genuinely made a name: Prospector rank, at least two headlines about you, Day 10+
  rivalReady() { const s = this.s, deeds = this.p.news.filter((n) => n.k === 'you' && !n.t.startsWith("Pilots' Guild")).length; return s.day >= 10 && pilotRank(s) >= 2 && this.fame() >= 2 && deeds >= 1; }
  wager() { return 500 + this.p.rival.level * 400; }
  updateRival() {
    const g = this.g, s = this.s, rv = this.p.rival;
    if (this.duel) {
      const o = this.duel.ship;
      if (!o || o.dead || !g.outlaws.includes(o)) { if (!this.duel.over) this.rivalLeft(); }
      return;
    }
    if (!unlocked(s, 'rival') || s.day < rv.next || !this.rivalReady()) return;
    if (g.docked || g.warp || g.player.dead || g.ui.modalOpen() || g.time - (this.enteredAt || 0) < 25) return;
    if (g.outlaws.some((o) => !o.dead)) return; // not in the middle of someone else's fight
    rv.next = s.day + 2; // if declined/ignored, try again later
    this.offerDuel();
  }
  offerDuel() {
    const g = this.g, rv = this.p.rival, w = this.wager();
    const first = !rv.met;
    const intro = first
      ? `<p>A sleek ship drops out of warp alongside you, all chrome and orange striping. The pilot grins on your screen.</p><p>"<b>Kade Rourke</b>. Bounty hunter, trader, best pilot in the lanes, ask anyone. ${(() => { const n = this.p.news.find((x) => x.k === 'you'); return n ? `I read about you: <i>${n.t.replace(/\.$/, '')}</i>. ` : ''; })()}Every few months somebody new gets their name in the feeds and thinks they're the best out here. I like to check, personally. Nothing personal, <b>${this.cs}</b>. Just reputation."</p>`
      : `<p>Orange stripes on your scope. Of course.</p><p>Kade: "${rv.losses > rv.wins ? "I've been tuning my ship since our last dance. Rematch?" : rv.wins > rv.losses ? 'Back for another lesson?' : 'Tie-breaker, friend?'}"</p>`;
    rv.met = true;
    g.ui.dialog(`<div class="arc-head">${this.pic()}<div><small>RIVAL · DUEL ${rv.wins + rv.losses + 1}</small><div class="ov-title">KADE ROURKE</div></div></div>${intro}
      <p>Duel to retreat: knock his hull down to a quarter and he yields. Winner takes <b>◈${fmt(w)}</b>. Leaving the system or losing your ship forfeits the wager.${rv.weak ? ' <i>(You know about his overheating drive coil.)</i>' : ''}</p>`,
    [
      { label: `ACCEPT · ◈${fmt(w)} WAGER`, primary: true, fn: () => this.startDuel() },
      { label: 'DECLINE', fn: () => this.declineDuel() },
    ]);
  }
  pic() { return portraitSVG('rival', 72); }
  declineDuel() {
    const rv = this.p.rival; rv.declined++; rv.next = this.s.day + 3;
    this.g.story.comm('rival', ['Suit yourself. I\'ll tell everyone you were busy.', 'Another time, then. Try not to get rusty.', "Scared? That's fine. Smart, even."][rv.declined % 3]);
    if (rv.declined % 2 === 1) this.headline(`${this.cs} turns down a duel with ace pilot Kade Rourke. "Wise," says Rourke.`);
  }
  startDuel() {
    const g = this.g, pl = g.player, rv = this.p.rival;
    const entry = pl.pos.clone().add(_v.set(Math.sin(pl.yaw), 0.05, Math.cos(pl.yaw)).multiplyScalar(1400));
    g.spawnOutlaws({ n: 1, entry, name: RIVAL.name, tough: this.rivalTough(), burstColor: 0xff8a3a, toast: '⚔ Duel! Kade Rourke is coming in hot.', quiet: true });
    const o = g.outlaws[g.outlaws.length - 1];
    o.isRival = true; o.missiles = Math.min(4, 2 + rv.level); o.stats.speed *= 1.08;
    this.duel = { ship: o, wager: this.wager(), over: false };
    setTimeout(() => g.story.comm('rival', ['Try to keep up!', 'Let\'s dance.', "Don't hold back on my account."][rv.level % 3]), 900);
  }
  // returns true when the hit was handled (Kade yields instead of dying)
  onRivalHit(ship, killed) {
    if (!this.duel || this.duel.ship !== ship || this.duel.over) return false;
    const frac = (ship.hp + (ship.shield || 0)) / (ship.maxHp + (ship.maxShield || 0));
    if (!killed && ship.hp > ship.maxHp * 0.25) return false;
    void frac;
    this.duel.over = true;
    const g = this.g, rv = this.p.rival, w = this.duel.wager;
    g.fx.particles.burst(ship.pos.clone(), 60, 90, 0xff8a3a, 6, 1.2);
    if (ship.beam) g.scene.remove(ship.beam);
    ship.remove(); g.outlaws = g.outlaws.filter((x) => x !== ship); if (g.target === ship) g.target = null;
    g.addCredits(w); g.audio.play('coins', { vol: 1 });
    rv.losses++; rv.level++; rv.weak = false; rv.next = this.s.day + 4 + Math.floor(Math.random() * 3);
    g.ui.toast(`⚔ Kade Rourke yields! You win the ◈${fmt(w)} wager.`, 'good', 5);
    g.story.comm('rival', ['Okay, okay! I yield! Credits are on their way. Next time I won\'t go easy.', 'Lucky shot. Two lucky shots. Fine, you win this one.', "Hah! Now THAT is flying. I'm going to need a better ship."][Math.min(2, rv.losses - 1)]);
    this.headline(`${this.cs} beats ace pilot Kade Rourke in a wagered duel (${rv.losses}–${rv.wins} overall).`);
    this.duel = null; g.save();
    return true;
  }
  rivalLeft() { this.duelLost('You left the duel.'); }
  onPlayerDestroyed() { if (this.duel && !this.duel.over) this.duelLost('Your ship went down.'); }
  onEnterSystem() {
    this.enteredAt = this.g.time;
    if (this.duel && !this.duel.over) this.duelLost('You jumped out of the duel.');
  }
  duelLost(why) {
    const g = this.g, s = this.s, rv = this.p.rival, w = this.duel.wager;
    this.duel.over = true; this.duel = null;
    s.credits -= Math.min(s.credits, w); rv.wins++; rv.next = s.day + 4 + Math.floor(Math.random() * 3);
    g.ui.toast(`⚔ ${why} Kade Rourke takes the ◈${fmt(w)} wager.`, 'warn', 5);
    setTimeout(() => g.story.comm('rival', ['Pleasure doing business. Keep practising.', "Don't feel bad. Everyone loses to me eventually.", 'That one\'s going on my wall.'][rv.wins % 3]), 1500);
    this.headline(`Ace pilot Kade Rourke defeats ${this.cs} in a wagered duel (${rv.losses}–${rv.wins} overall).`, 'you');
    g.save();
  }
  rivalNews() {
    const g = this.g, s = this.s, sys = g.galaxy.systems.filter((x) => !x.hidden), pick = (a) => a[Math.floor(Math.random() * a.length)];
    const sy = pick(sys), rv = this.p.rival;
    const c = pick(COMMODITIES.filter((x) => x.kind !== 'ore'));
    const opts = [
      () => `Kade Rourke collects the bounty on a Red Wake raider pack near ${sy.name}.`,
      () => { const m = s.market[sy.id]; if (m) m.pressure[c.id] = (m.pressure[c.id] || 0) + 0.6; return `Kade Rourke dumps a hold of ${c.name} at ${sy.name}. Prices there have dropped.`; },
      () => `Kade Rourke wins a cargo-racing purse at ${sy.name} and buys a round for the whole cantina.`,
      () => `Kade Rourke escorts a Free Settlers convoy through ${sy.name}. "Just good business," he says.`,
    ];
    if (rv.wins > rv.losses) opts.push(() => `Kade Rourke spotted at the ${sy.name} cantina, telling anyone who'll listen how he beat ${this.cs}.`);
    if (rv.losses > rv.wins) opts.push(() => `Kade Rourke has ordered a new drive refit at ${sy.name}. Sources say he is "very motivated" after losing to ${this.cs}.`);
    this.headline(pick(opts)(), 'rival');
  }

  // ------------------------------------------------------------ cantina
  barState() { const b = this.p.bar; if (b.day !== this.s.day) { b.day = this.s.day; b.revealed = {}; b.done = {}; } return b; }
  rumors(sid) {
    const g = this.g, s = this.s, rng = new RNG(s.seed + sid * 97 + s.day * 13 + 5), out = [];
    const dist = jumpsFrom(g.galaxy, sid);
    const near = g.galaxy.systems.filter((x) => !x.hidden && x.id !== sid && dist[x.id] != null && dist[x.id] <= 3);
    // a real price tip: the best place nearby to sell something
    if (near.length) {
      const c = COMMODITIES[rng.int(0, COMMODITIES.length - 1)];
      const best = near.map((x) => ({ x, p: g.economy.sellPrice(x.id, c.id) })).sort((a, b) => b.p - a.p)[0];
      out.push({ text: `A freighter captain swears ${best.x.name} is paying <b>◈${best.p}</b> for ${c.name} right now. ${dist[best.x.id]} jump${dist[best.x.id] > 1 ? 's' : ''} from here.`, sys: best.x.id });
    }
    // a live sector event somewhere else
    const evs = liveEvents(s).filter((e) => e.sys !== sid);
    if (evs.length) { const e = evs[rng.int(0, evs.length - 1)], d = describe(e, g.galaxy, s); out.push({ text: `Dockhands are talking about ${g.galaxy.systems[e.sys].name}: <b>${d.title}</b>. ${d.line}`, sys: e.sys }); }
    // somewhere with uncharted anomalies
    if (unlocked(s, 'exploration')) {
      const cand = near.filter((x) => { const st = systemExploreStatus(s, g.galaxy, x.id); return st.seen < st.total; });
      if (cand.length) { const x = cand[rng.int(0, cand.length - 1)]; out.push({ text: `An old prospector leans in: "There's something out in <b>${x.name}</b> nobody's charted. Strange readings. Wrecks, maybe. Lantern wrecks, if you're lucky."`, sys: x.id }); }
    }
    const A = s.siege.active;
    if (A && A.phase === 'announced') out.push({ text: `Militia recruiters are drinking hard tonight. The Red Wake armada is aimed at <b>${A.target.name}</b>, and they need pilots.`, sys: A.target.sys });
    if (this.p.rival.met && unlocked(s, 'rival')) out.push({ text: `A mechanic who works on Kade Rourke's ship lets slip that his drive coil overheats in long dogfights. "Don't tell him I said so."`, weak: true });
    const accord = isAccordEco(g.sysInfo.eco);
    out.push({ text: accord ? 'Two Accord clerks complain that tariff revenue is up and Patrol budgets are down. "Somebody\'s skimming," one says, then shuts up fast.' : 'A miner mutters that the Red Wake has been recruiting in every Fringe bar this month. "Good money," he says. "Bad funerals."' });
    // shuffle deterministically, keep three
    for (let i = out.length - 1; i > 0; i--) { const j = rng.int(0, i); [out[i], out[j]] = [out[j], out[i]]; }
    return out.slice(0, 3);
  }
  roundPrice() { return 40 + 25 * pilotRank(this.s); }
  patron(sid) {
    const s = this.s, rng = new RNG(s.seed + sid * 31 + s.day * 7 + 11), accord = isAccordEco(this.g.sysInfo.eco), eco = this.g.sysInfo.eco;
    const pool = ['cards', 'map', 'stranded', 'veteran'];
    if (!accord) pool.push('collection', 'recruiter'); else pool.push('informant');
    if (eco === 'hightech' && unlocked(s, 'exploration')) pool.push('student');
    return pool[rng.int(0, pool.length - 1)];
  }
  patronHTML(type) {
    const P = {
      cards: ['A grinning trader shuffles a worn deck', '"Friendly game? Stakes are whatever you can stand to lose."', [['p3bet', '200', 'BET ◈200'], ['p3bet', '1000', 'BET ◈1,000'], ['p3pass', '', 'WALK AWAY']]],
      map: ['A miner who has had a few too many', '"Got a claim map. Rich vein, nobody knows. ◈400 and it\'s yours. Probably real."', [['p3map', '', 'BUY THE MAP · ◈400'], ['p3pass', '', 'NO THANKS']]],
      stranded: ['A stranded pilot with an empty tank', '"Engines dry, credits gone. ◈300 would get me home. I\'ll tell everyone you helped."', [['p3help', '', 'HELP · ◈300'], ['p3pass', '', 'NOT MY PROBLEM']]],
      veteran: ['A grizzled veteran nursing a drink', '"Forty years in the lanes. Buy me one and I\'ll tell you something useful."', [['p3vet', '', `BUY HIM A DRINK · ◈${this.roundPrice()}`], ['p3pass', '', 'LEAVE HIM BE']]],
      collection: ['Free Settlers collecting donations', '"A Red Wake raid burned one of our colonies. Anything helps."', [['p3give', '', 'DONATE ◈500'], ['p3pass', '', 'NOT TODAY']]],
      recruiter: ['A Red Wake recruiter in a too-nice coat', '"Easy job. Carry a little package, ask no questions. ◈1,500."', [['p3wake', '', 'TAKE THE JOB'], ['p3pass', '', 'REFUSE']]],
      informant: ['An off-duty Patrol officer', '"You fly the Fringe. Seen any smugglers? Names, ships. The Patrol pays for good information."', [['p3inform', '', 'TALK (+◈600)'], ['p3pass', '', 'KEEP QUIET']]],
      student: ['An Institute grad student with a toolkit', '"I\'m testing a new probe design. Want one at cost? ◈150."', [['p3probe', '', 'BUY A PROBE · ◈150'], ['p3pass', '', 'NO THANKS']]],
    }[type];
    return P;
  }
  barHTML() {
    const g = this.g, s = this.s, sid = s.systemId, b = this.barState(), name = BARKEEPS[(s.seed + sid * 7) % BARKEEPS.length];
    const fame = this.fame(), me = this.p.news.find((n) => n.k === 'you');
    const greet = fame >= 3 ? `"Well, if it isn't ${this.cs}! ${me ? `Saw you in the news: ${me.t.replace(/\.$/, '')}.` : ''} First one's on the house."`
      : fame >= 1 ? `"${this.cs}, right? Heard your name around. What'll it be?"` : isAccordEco(g.sysInfo.eco) ? '"Welcome, pilot. Keep it civil and keep your tariff receipt handy."' : '"New face. Pay up front, keep your blaster holstered, and we\'ll get along fine."';
    const price = this.roundPrice();
    const rum = this.rumors(sid).map((r, i) => {
      const key = `${sid}:${i}`, open = i === 0 || b.revealed[key];
      return `<div class="rumor">${open ? `<p>🍺 ${r.text}</p>${r.sys != null && r.sys !== sid ? `<button class="sbtn" data-act="p3course" data-arg="${r.sys}">SET COURSE</button>` : ''}` : `<p class="hidden-rumor">🍺 Someone at the end of the bar knows something...</p><button class="sbtn buy" data-act="p3round" data-arg="${i}" ${s.credits >= price ? '' : 'disabled'}>BUY A ROUND · ◈${price}</button>`}</div>`;
    }).join('');
    const type = this.patron(sid), done = b.done[sid], P = this.patronHTML(type);
    const pat = done ? `<p class="ms-empty">${done}</p>` : `<p><b>${P[0]}</b></p><p>${P[1]}</p><p>${P[2].map(([a, arg, l]) => `<button class="sbtn${a === 'p3pass' ? '' : ' buy'}" data-act="${a}" data-arg="${arg}">${l}</button>`).join(' ')}</p>`;
    return `<div class="cantina"><div class="card news"><div><h3>🍸 The Cantina</h3><p><b>${name}</b>, behind the bar: ${greet}</p></div></div>
      <div class="ms-head"><span>RUMORS</span><small>New talk every day. The first one's free.</small></div><div class="card news"><div>${rum}</div></div>
      <div class="ms-head"><span>AT THE CORNER TABLE</span><small>One encounter per station per day</small></div><div class="card news"><div>${pat}</div></div>
      ${this.headlinesHTML() || '<div class="card news headlines"><div><h3>📰 Headlines</h3><p class="ms-empty">Nothing new. The sector hasn\'t heard of you yet.</p></div></div>'}</div>`;
  }
  act(act, arg) {
    const g = this.g, s = this.s, sid = s.systemId, b = this.barState(), fid = g.sysInfo.eco;
    const done = (msg) => { b.done[sid] = msg; g.save(); };
    const pay = (n) => { if (s.credits < n) { g.ui.toast('Not enough credits', 'warn', 2); return false; } s.credits -= n; return true; };
    if (act === 'p3round') { const price = this.roundPrice(); if (pay(price)) { b.revealed[`${sid}:${arg}`] = 1; g.audio.play('coins', { vol: 0.5 }); const r = this.rumors(sid)[Number(arg)]; if (r && r.weak) this.p.rival.weak = true; } }
    else if (act === 'p3course') { const t = Number(arg); g.missionCourse({ dest: { sys: t, kind: 'station', name: g.galaxy.systems[t].name } }); }
    else if (act === 'p3pass') done('You leave them to it.');
    else if (act === 'p3bet') { const n = Number(arg); if (!pay(n)) return; if (Math.random() < 0.45) { g.addCredits(n * 2); done(`You win the hand: +◈${fmt(n)}. The trader laughs it off.`); } else done(`You lose ◈${fmt(n)}. The trader tips an imaginary hat.`); }
    else if (act === 'p3map') { if (!pay(400)) return; if (Math.random() < 0.5) { g.addCredits(1400); done('The map is real! You sell the claim to a local outfit: +◈1,400.'); } else done('The "map" is a napkin with a drawing of a duck. ◈400 lighter, slightly wiser.'); }
    else if (act === 'p3help') { if (!pay(300)) return; g.factionChange(fid, 2, true); done(`The pilot shakes your hand. "${this.cs}. I won't forget it." ${FACTIONS[fid].short} +2.`); if (Math.random() < 0.3) this.headline(`Stranded pilot credits ${this.cs} with getting her home: "Not everyone out here is a shark."`); }
    else if (act === 'p3vet') { if (!pay(this.roundPrice())) return; this.p.rival.weak = this.p.rival.met || this.p.rival.weak; done(this.p.rival.met ? '"That Rourke fellow? His drive coil runs hot. Keep him turning and he\'ll cook himself." (Your next duel with Kade is easier.)' : '"Keep your shields charged and your fuel tank full. Simple rules, long life."'); }
    else if (act === 'p3give') { if (!pay(500)) return; g.factionChange('frontier', 3); done('"Bless you, pilot." Free Settlers +3.'); }
    else if (act === 'p3wake') { g.addCredits(1500); g.factionChange('pirate', 4); g.factionChange(fid, -3); done('You never see what was in the package. +◈1,500, Red Wake +4, and the locals look at you differently.'); }
    else if (act === 'p3inform') { g.addCredits(600); g.factionChange(fid, 2, true); g.factionChange('pirate', -4); done('The officer takes notes. +◈600. Somewhere, a smuggler has a bad week.'); }
    else if (act === 'p3probe') { if (s.explore.probes >= 5) { g.ui.toast('Probe rack full', 'warn', 2); return; } if (!pay(150)) return; s.explore.probes++; done('One experimental probe, slightly warm to the touch. Probes +1.'); }
  }
}
export { CAST };
