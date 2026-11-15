// The Heir's arc: "The Lantern Song". Built on the exploration layer: Exodus Logs, the dormant gate,
// Lumen's Rest and the Heart. Driven by ArcManager (arcs.js).
import { fmt } from './rng.js';
import { isAccordEco, ACCORD } from './story.js';
import { FRAGMENTS_TO_UNLOCK } from './explore.js';

const LAWFUL = ['agricultural', 'mining', 'industrial', 'hightech', 'frontier'];
const LOGS_CH2 = 3;

export const HEIR_INFO = { title: 'The Lantern Song', chapters: ['Inheritance', 'Breadcrumbs', "The Professor's Price", 'Scavengers', 'The Dormant Gate', 'What the Heart Is For', 'Homecoming'] };
export const HEIR_ENDINGS = {
  keep: { name: 'Lantern Captain', title: 'Lantern Captain', line: "You kept the Heart, as Captain Varga wished. It lights your engines: fuel costs you almost nothing, anywhere." },
  settlers: { name: 'Gift to the Fringe', title: 'Friend of the Fringe', line: "You gave the Heart to Elder Ama's people. Fringe stations grow Lumenite of their own now, and their fuel costs half." },
  institute: { name: 'The Institute Bargain', title: 'Institute Benefactor', line: 'You sold the Heart to the Lumen Institute. You are very rich, the core worlds love you, and the Fringe calls it theft.' },
  rest: { name: 'Keeper of the Lantern', title: 'Keeper of the Lantern', line: "You returned the Heart to Lumen's Rest. The crystals sing again, the system is a sanctuary no raider will enter, and everyone respects you a little more." },
};
export function heirFuelMult(ending, eco) {
  if (ending === 'keep') return 0.15;
  if (ending === 'settlers' && !isAccordEco(eco)) return 0.5;
  return 1;
}

export class HeirArc {
  constructor(m) { this.m = m; }
  get g() { return this.m.g; }
  get s() { return this.m.state; }
  get a() { return this.m.arc; }
  get ex() { return this.s.explore; }

  update() {
    const a = this.a, s = this.s, g = this.g, m = this.m;
    if (a.stage === 'wait') {
      if (s.day < (a.at || 0) || g.docked || g.warp) return;
      this.start();
      return;
    }
    // progress-based chapters: they finish through ordinary exploration
    if (a.ch === 2 && this.ex.lore >= LOGS_CH2) {
      m.comm('ama', `${this.ex.lore} logs. Do you hear how they hum together now? The more you carry, the louder the others answer. And the louder you are, the more people notice, child. Be careful who you tell.`, 'good');
      m.next(3, 1);
    } else if (a.ch === 4 && a.flags.spawned && g.outlaws.filter((o) => o.storyOf && !o.dead).length === 0) {
      a.flags.armed = false; g.addCredits(2500);
      m.comm('vex', "Huh. You actually beat them. Nothing personal, Heir: the Wake has followed the Lantern trail for three hundred years. You've got a head start now. Use it.");
      m.next(5, 1);
    } else if (a.ch === 5) {
      if (this.ex.unlocked && !a.flags.gateSaid) { a.flags.gateSaid = 1; m.comm('solak', "The gate is awake! Lumen's Rest is on your chart. Whatever is at the end of that lane, pilot, please... take notes.", 'good'); }
      if (this.ex.unlocked && !this.ex.heart && a.target !== this.g.galaxy.hiddenId) m.setGoal("Fly through the woken gate to Lumen's Rest and find what the Halcyon left behind: the Heart Spire.", this.g.galaxy.hiddenId);
      if (this.ex.heart) {
        m.comm('ama', "You found the Heart. Captain Varga's words... 'for whoever kept going'. Now everyone will want it. Come and talk to us before you decide anything.", 'good');
        m.next(6, 0);
      }
    }
  }

  start() {
    const a = this.a, m = this.m; a.stage = 'go';
    if (a.ch === 1) {
      const t = m.nearest((x) => x.eco === 'frontier');
      m.comm('ama', `Your grandmother wrote to me before she died. There is something you must hear, and not over an open channel. Come to ${m.sysName(t)}.`);
      m.setGoal(`Meet Elder Ama at ${m.sysName(t)} station (Free Settlers).`, t);
    } else if (a.ch === 2) {
      m.setGoal(`Recover Exodus Logs from Lantern Fleet wrecks: ${this.ex.lore}/${LOGS_CH2}. Scavengers have stripped many wrecks, so keep searching. Probes chart a whole system's anomalies.`, null);
    } else if (a.ch === 3) {
      const t = m.nearest((x) => x.eco === 'hightech');
      m.comm('solak', `Three Exodus Logs! The Institute has scanned those wreck fields for fifty years and found nothing but scrap. Your grandmother's log makes them answer. Do you understand what you're carrying? Please come to the Institute at ${m.sysName(t)}.`);
      m.setGoal(`Visit Dr. Solak at ${m.sysName(t)} station (Lumen Institute).`, t);
    } else if (a.ch === 4) {
      m.setGoal("Someone has been tracking your log recoveries. Expect company in the next system you enter.", null);
      a.flags.armed = true;
    } else if (a.ch === 5) {
      const n = this.ex.lore;
      m.comm('wick', `Logs aboard: ${n}. Log 7 said it: gather enough of them and the sensors will hear where the dormant gate sleeps. We need ${FRAGMENTS_TO_UNLOCK}.`);
      m.setGoal(`Recover Exodus Logs until the dormant gate wakes: ${n}/${FRAGMENTS_TO_UNLOCK}.`, null);
    }
  }
  goalText() {
    const a = this.a;
    if (a.ch === 2 && a.stage === 'go') return `Recover Exodus Logs from Lantern Fleet wrecks: ${this.ex.lore}/${LOGS_CH2}. Scavengers have stripped many wrecks, so keep searching. Probes chart a whole system's anomalies.`;
    if (a.ch === 5 && a.stage === 'go' && !this.ex.unlocked) return `Recover Exodus Logs until the dormant gate wakes: ${this.ex.lore}/${FRAGMENTS_TO_UNLOCK}.`;
    return null;
  }

  onEnterSystem(initial) {
    const a = this.a;
    if (a.ch === 4 && a.stage === 'go') {
      a.flags.spawned = false;
      if (!initial && a.flags.armed) setTimeout(() => this.m.spawnSquad({ n: 3, name: 'Wake Scavenger', tough: 1.1, color: 0xff6a4a,
        toast: '⚠ Red Wake scavengers dropped out of warp, right on your log trail.',
        speaker: 'wick', line: "Red Wake scavengers. They've been shadowing our log recoveries: they've picked these wrecks for generations and never heard one answer. We have. Old Lantern salvage on their hulls, too: these people have been at this for generations." }), 2500);
    }
  }

  onDock() {
    const a = this.a, g = this.g, m = this.m, sid = this.s.systemId;
    if (a.ch === 1 && sid === a.target) {
      g.ui.dialog(m.scene('ama', 'Inheritance', `<p>Elder Ama takes both your hands. Her grip is stronger than you expected.</p>
        <p>"The Fleet's chief engineer was an Oyelaran: my ancestor. She built the gate that hid the Halcyon. And the Halcyon's captain was <b>Ilse Varga</b>. Your grandmother's grandmother, many times over."</p>
        <p>"The logs are the key to that gate, and to each other. Without one aboard, a Lantern wreck reads as scrap to any sensor. People have hunted them for three hundred years and found nothing. You already hold one, so the others will answer you."</p>
        <p>"The Red Wake has been picking over the Fleet's trail just as long. Some wrecks will be stripped before you reach them. Keep looking."</p>
        <p>She presses two scanner probes into your hands. "These were my mother's. Use them well."</p>`),
      [{ label: "I'LL FOLLOW THE BREADCRUMBS", primary: true, fn: () => { this.ex.probes = Math.min(5, this.ex.probes + 2); g.factionChange('frontier', 3); m.next(2, 0); } }]);
    } else if (a.ch === 3 && sid === a.target) {
      g.ui.dialog(m.scene('solak', "The Professor's Price", `<p>Dr. Solak has cleared an entire lab bench for you. There's a cake. It says "WELCOME LANTERN HEIR" in slightly wonky icing.</p>
        <p>"The Heart, pilot, if it exists, is the seed crystal every Lumenite vein grew from. Understanding it would change everything: drives, medicine, power for every world."</p>
        <p>"The Institute would like to sponsor your expedition. Funding now; first look at anything you find later. No obligations. Well, very few."</p>`),
      [
        { label: 'ACCEPT SPONSORSHIP (+◈5,000, Institute +5)', fn: () => { g.addCredits(5000); g.factionChange('hightech', 5); a.flags.sponsored = 1; m.comm('solak', 'Splendid! Splendid. I will be insufferable about this at the faculty dinner.'); m.next(4, 1); } },
        { label: 'POLITELY DECLINE (Settlers +5)', primary: true, fn: () => { g.factionChange('frontier', 5); m.comm('solak', "Of course. Of course. The offer stands, should you change your mind. And please, take some cake."); m.next(4, 1); } },
      ]);
    } else if (a.ch === 6) this.choice();
    else if (a.ch === 7 && sid === a.target) this.epilogue();
  }

  choice() {
    const pick = (e) => () => this.confirm(e);
    this.g.ui.dialog(this.m.scene('ama', 'What the Heart Is For', `<p>The Heart pulses in its cradle, slow as breathing. Your comm has been busy.</p>
      <p><b>Ama:</b> "Give it to the Fringe. Our worlds starve for Lumenite while the core grows fat on it. The Heart could seed every Fringe station."</p>
      <p><b>Solak:</b> "The Institute will pay ◈${fmt(this.institutePrice())}. In our labs it could power a thousand worlds, eventually."</p>
      <p><b>Captain Varga's last log:</b> "It was always meant for whoever kept going."</p>
      <p>Or take it home: back to Lumen's Rest, where the crystals grew wild.</p>
      <p><b style="color:#ff8a5c">Whatever you choose is permanent.</b></p>`),
    [
      { label: 'KEEP THE HEART', fn: pick('keep') },
      { label: 'GIVE IT TO THE FRINGE', fn: pick('settlers') },
      { label: 'SELL IT TO THE INSTITUTE', fn: pick('institute') },
      { label: "RETURN IT TO LUMEN'S REST", fn: pick('rest') },
      { label: 'NOT YET' },
    ]);
  }
  institutePrice() { return this.a.flags.sponsored ? 75000 : 60000; }
  confirm(e) {
    const what = {
      keep: 'The Heart stays in your ship, and it lights your engines: fuel costs you 85% less, everywhere. Nobody else gets it.',
      settlers: 'The Heart leaves your ship. Free Settlers +30, Deepcore +15, fuel at Fringe stations costs half. The Institute is disappointed (−10).',
      institute: `The Heart leaves your ship. +◈${fmt(this.institutePrice())}, Institute +25, Accord +10. The Fringe calls it theft (−15).`,
      rest: "The Heart leaves your ship. Lumen's Rest becomes a sanctuary no raider enters, its Lumenite fields stay rich, and every lawful faction +8.",
    }[e];
    this.g.ui.dialog(`<div class="ov-title">${HEIR_ENDINGS[e].name.toUpperCase()}?</div><p>${what}</p><p><b>This cannot be undone.</b></p>`,
      [{ label: 'CONFIRM', primary: true, fn: () => this.choose(e) }, { label: 'BACK', fn: () => setTimeout(() => this.choice(), 50) }]);
  }
  choose(e) {
    const a = this.a, m = this.m, gx = this.g.galaxy; a.ending = e;
    if (e === 'keep') { this.epilogue(); return; }
    const t = e === 'settlers' ? m.nearest((x) => x.eco === 'frontier') : e === 'institute' ? m.nearest((x) => x.eco === 'hightech' && !x.hidden) : gx.hiddenId;
    a.ch = 7; a.stage = 'go';
    const who = { settlers: ['ama', `Bless you, child. Bring it to ${m.sysName(t)}. Everyone will want to see it.`], institute: ['solak', `Wonderful! Bring it to the Institute at ${m.sysName(t)}. I'll have the paperwork ready. Lots of paperwork.`], rest: ['ama', "Home. Yes. The old songs would approve. Take it back to the Halcyon Ark. We'll be listening."] }[e];
    m.comm(who[0], who[1], 'good');
    m.setGoal(`Homecoming: bring the Heart to ${m.sysName(t)} station.`, t);
  }
  removeHeart() {
    const s = this.s;
    s.explore.heartGiven = true;
    for (const sh of s.ships) sh.uniques = sh.uniques.filter((u) => u !== 'heart');
    this.g.refreshPlayerStats();
  }
  epilogue() {
    const g = this.g, s = this.s, a = this.a, e = a.ending, E = HEIR_ENDINGS[e];
    const speaker = { keep: 'varga', settlers: 'ama', institute: 'solak', rest: 'varga' }[e];
    let reward;
    if (e === 'keep') { g.addCredits(10000); reward = "Fuel 85% cheaper everywhere · +◈10,000 from Varga's private vault"; }
    else if (e === 'settlers') { this.removeHeart(); g.factionChange('frontier', 30); g.factionChange('mining', 15); g.factionChange('hightech', -10, true); g.addCredits(10000); reward = 'Settlers +30 · Deepcore +15 · Fringe fuel half price · +◈10,000'; }
    else if (e === 'institute') { this.removeHeart(); const p = this.institutePrice(); g.addCredits(p); g.factionChange('hightech', 25); for (const f of ACCORD) if (f !== 'hightech') g.factionChange(f, 10, true); g.factionChange('frontier', -15); g.factionChange('mining', -15, true); reward = `+◈${fmt(p)} · Institute +25 · Accord +10 · Fringe −15`; }
    else { this.removeHeart(); for (const f of LAWFUL) g.factionChange(f, 8, true); g.addCredits(10000); reward = "Lumen's Rest is a sanctuary · all lawful factions +8 · +◈10,000"; }
    a.done = true; a.stage = 'done'; a.goal = null; a.target = null; s.story.title = E.title; g.p3.endingNews(e);
    const text = {
      keep: "<p>You sit in the cockpit with the Heart humming behind you. Wick has gone quiet, which is new.</p><p>\"Captain Varga's engines ran on this for three hundred years,\" Wick says at last. \"I think it likes us.\"</p>",
      settlers: '<p>The whole station comes out to see it. Children press their faces to the glass. By morning, the first Fringe refinery is growing Lumenite of its own.</p><p>Ama, quietly: "Your grandmother would be so proud. So would mine."</p>',
      institute: '<p>The paperwork is, as promised, extensive. Solak signs the last page with a flourish and immediately starts taking notes on the Heart.</p><p>"History will remember this, pilot. Possibly fondly."</p>',
      rest: "<p>You set the Heart back in its cradle aboard the Halcyon Ark. All through the system the crystal fields brighten, one after another, like a city switching on its lights.</p><p>Across every channel in the sector, for one long moment, you can hear them singing.</p>",
    }[e];
    g.ui.dialog(`<img class="ending-art" src="./endings/${e}.jpg" alt=""><div class="arc-head">${this.m.pic(speaker)}<div><small>THE LANTERN SONG · EPILOGUE</small><div class="ov-title">${E.name.toUpperCase()}</div></div></div>${text}<p><i>${E.line}</i></p><p><b>${reward}</b><br>Title earned: <b>${E.title}</b></p>`,
      [{ label: 'CONTINUE YOUR CAREER', primary: true }]);
    g.save();
  }
}
