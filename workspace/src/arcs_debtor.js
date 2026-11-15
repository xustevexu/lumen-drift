// The Debtor's arc: "The Marker". Vex sells your marker... or loses it. Red Wake politics, a stolen
// ledger, and four permanent endings. Driven by ArcManager (arcs.js), which owns the shared plumbing.
import { fmt } from './rng.js';
import { pilotRank } from './economy.js';
import { isAccordEco, ACCORD } from './story.js';

const LAWFUL = ['agricultural', 'mining', 'industrial', 'hightech', 'frontier'];

export const DEBTOR_INFO = { title: 'The Marker', chapters: ['Collection Day', 'Sold', 'The Gilded Hook', 'Two Offers', 'The Reckoning', 'Settling Up'] };
export const DEBTOR_ENDINGS = {
  partner: { name: "Vex's Partner", title: "Vex's Partner", line: 'You stood with Vex. Marrow is gone, Vex runs the Red Wake, and her crews wave you through. The Accord has noticed the company you keep.' },
  enforcer: { name: 'Wake Enforcer', title: 'Wake Enforcer', line: "You sold Vex to Marrow. Your marker burned, the Wake leaves you alone, and every honest station knows exactly what you did." },
  witness: { name: 'Accord Witness', title: 'Accord Witness', line: "You gave Marrow's ledger to the Patrol. Dozens of officials fell, your debt was voided, and the Red Wake will hunt you for the rest of your life." },
  collector: { name: 'The Collector', title: 'The Collector', line: 'You kept the book. Every marker in the Fringe is yours now, including your own. Credits roll in daily. Nobody likes a collector.' },
};

export class DebtorArc {
  constructor(m) { this.m = m; }
  get g() { return this.m.g; }
  get s() { return this.m.state; }
  get a() { return this.m.arc; }
  get st() { return this.s.story; }

  // knock credits off the marker, or pay cash once it's settled
  relief(n) {
    const st = this.st;
    if (st.debt > 0) { const d = Math.min(st.debt, n); st.debt -= d; if (st.debt <= 0) st.debt = 0; this.g.ui.toast(`Marker reduced by ◈${fmt(d)}${st.debt ? ` · ◈${fmt(st.debt)} left` : ' · PAID OFF'}`, 'good', 4); if (n > d) this.g.addCredits(n - d); }
    else this.g.addCredits(n);
  }
  burnMarker(bonus) {
    const st = this.st, had = st.debt;
    st.debt = 0;
    if (!had) this.g.addCredits(10000); // already paid off: the burned marker is worth this much back
    if (bonus) this.g.addCredits(bonus);
    return had ? `Marker burned (◈${fmt(had)} forgiven)` : 'Marker already paid: +◈10,000 instead';
  }

  update() {
    const a = this.a, s = this.s, g = this.g, m = this.m;
    if (a.stage === 'wait') {
      if (s.day < (a.at || 0)) return;
      if (a.ch === 5 && pilotRank(s) < 2) { if (!a.flags.rankHint) { a.flags.rankHint = 1; m.comm('vex', "Marrow only respects weight. Get yourself some: Prospector rank, ships, money in the bank. Then we make our move."); } return; }
      if (g.docked || g.warp) return;
      this.start();
      return;
    }
    if (a.ch === 3 && a.stage === 'go' && a.flags.spawned && g.outlaws.filter((o) => o.storyOf && !o.dead).length === 0) this.ch3Done();
  }

  start() {
    const a = this.a, m = this.m; a.stage = 'go';
    if (a.ch === 1) {
      const t = m.nearest((x) => !isAccordEco(x.eco) && x.id !== this.s.systemId) ?? m.nearest((x) => !isAccordEco(x.eco));
      m.comm('vex', `Want to knock some credits off that marker? I've got a sealed crate needs to reach ${m.sysName(t)}. Don't open it, and stay out of Accord space: it won't survive a cargo scan. Worth ◈3,000 off your marker.`);
      m.setGoal(`Deliver Vex's sealed crate to ${m.sysName(t)} station (Fringe).`, t);
    } else if (a.ch === 2) {
      const t = m.nearest((x) => x.eco === 'mining');
      this.st.debtRate = 0.08;
      m.comm('vex', `Bad news, sunshine. Silas Marrow bought my book. Every marker I hold, yours included. Meet me at ${m.sysName(t)}, where Marrow's people don't drink.`, 'warn');
      setTimeout(() => m.comm('marrow', this.st.debt > 0 ? 'Your marker belongs to me now, pilot. Same weekly payments, but my interest is 8%. And I collect in person.' : "You paid Vex off. Admirable. I'm keeping an eye on you anyway, pilot.", 'warn'), 900);
      m.setGoal(`Meet Vex at ${m.sysName(t)} station (Deepcore Union).`, t);
    } else if (a.ch === 3) {
      m.setGoal("Marrow's courier, the Gilded Hook, carries his ledger. It will cross your path in the next system you enter. Take it down.", null);
      a.flags.armed = true;
    } else if (a.ch === 4) {
      m.comm('marrow', "You have something of mine. Bring it to me with Vex's location and your marker burns. Refuse, and I'll take it from your wreck.", 'warn');
      setTimeout(() => m.comm('vex', "Don't you dare. Come and find me at any Fringe station. We need to talk about what's in that ledger."), 900);
      const t = m.nearest((x) => !isAccordEco(x.eco));
      m.setGoal(`Meet Vex at any Fringe station (nearest: ${m.sysName(t)}).`, t);
    } else if (a.ch === 5) {
      m.comm('vex', "It's time. Marrow knows we have the ledger. Whatever you do next, there's no undoing it. Dock anywhere and decide.");
      setTimeout(() => m.comm('hale', "Pilot. We've heard you're holding a Red Wake ledger. Bring it to the Patrol and your debt to those people is void. You'd be protected. Mostly.", 'info'), 900);
      m.setGoal('The ledger decides everything. Dock at any station to make your choice. This choice is permanent.', null);
    }
  }

  onEnterSystem(initial) {
    const a = this.a;
    if (a.ch === 3 && a.stage === 'go') {
      a.flags.spawned = false;
      if (!initial && a.flags.armed) setTimeout(() => this.m.spawnSquad({ n: 3, name: 'Gilded Hook', tough: 1.2, color: 0xffc040,
        toast: "⚠ The Gilded Hook and its escorts dropped out of warp. Marrow's ledger is aboard.",
        speaker: 'wick', line: "That's the Hook. Three hulls, Red Wake gold trim. The ledger's on the lead ship, but its escorts won't let you leave. Take them all." }), 2500);
    }
  }
  ch3Done() {
    const a = this.a; a.flags.armed = false;
    this.g.addCredits(2500);
    this.m.comm('wick', "Ledger recovered, plus ◈2,500 of salvage. It's encrypted, but the index alone is something: every marker in the Fringe, and a list of Accord officials on Marrow's payroll.", 'good');
    this.m.next(4, 1);
  }

  onDock() {
    const a = this.a, g = this.g, s = this.s, m = this.m, sid = s.systemId, eco = g.sysInfo.eco;
    if (a.ch === 1 && sid === a.target) {
      g.ui.dialog(m.scene('vex', 'Collection Day', `<p>A dockhand with shaking hands takes the crate before you've finished docking. He doesn't look at you.</p>
        <p>Vex, over the comm: "Good. No questions, no scans, no trouble. That's how you get out of debt in the Fringe."</p>
        <p>Painted on the crate's underside, half scraped off: a gold hook. Not Vex's mark.</p>`),
      [{ label: 'TAKE THE CREDIT', primary: true, fn: () => { this.relief(3000); m.next(2, 2); } }]);
    } else if (a.ch === 2 && sid === a.target) {
      g.ui.dialog(m.scene('vex', 'Sold', `<p>Vex is sitting with her back to the wall, which is new.</p>
        <p>"Marrow runs the Wake now. He wants an army, not a business: sieges, colonies, all of it. He bought my book to own the pilots who owe me. Including you."</p>
        <p>"He keeps every marker in one ledger, aboard his courier, the <b>Gilded Hook</b>. Take that ship down, bring me the ledger, and I'll tear your marker up myself."</p>`),
      [{ label: 'DEAL', primary: true, fn: () => m.next(3, 1) }]);
    } else if (a.ch === 4 && !isAccordEco(eco)) {
      g.ui.dialog(m.scene('vex', 'Two Offers', `<p>Vex reads the ledger index over your shoulder and goes quiet.</p>
        <p>"Forty Accord officials. Patrol, customs, two station governors. This is how Marrow plans to win: he doesn't fight the Accord, he owns it."</p>
        <p>"Marrow wants it back. The Patrol would kill for it. And me? I want my book back. Think hard about who you trust."</p>`),
      [
        { label: 'CALL IN A FEW SMALL DEBTS (+◈4,000, Red Wake −3)', fn: () => { g.addCredits(4000); g.factionChange('pirate', -3, true); a.flags.peek = 1; m.comm('vex', 'Already spending it? Careful. That book changes people.'); m.next(5, 2); } },
        { label: 'LEAVE IT SEALED', primary: true, fn: () => { a.flags.sealed = 1; m.comm('vex', "Good. You're not like Marrow. Neither am I, whatever people say."); m.next(5, 2); } },
      ]);
    } else if (a.ch === 5) this.reckoning();
    else if (a.ch === 6 && sid === a.target) this.epilogue();
  }

  reckoning() {
    const pick = (e) => () => this.confirm(e);
    this.g.ui.dialog(this.m.scene('marrow', 'The Reckoning', `<p>Three channels open at once.</p>
      <p><b>Vex:</b> "Stand with me. We take Marrow down together, I run the Wake my way, and your marker burns."</p>
      <p><b>Marrow:</b> "Give me Vex and my ledger. Your debt disappears and nobody in the Wake ever touches you again."</p>
      <p><b>Hale:</b> "Give it to the Patrol. Forty corrupt officials go down, and your debt is void under Accord law."</p>
      <p>Or keep the ledger. Every marker in the Fringe, yours included, would belong to you.</p>
      <p><b style="color:#ff8a5c">Whatever you choose is permanent.</b></p>`),
    [
      { label: 'STAND WITH VEX', fn: pick('partner') },
      { label: 'SELL VEX TO MARROW', fn: pick('enforcer') },
      { label: 'GIVE THE LEDGER TO HALE', fn: pick('witness') },
      { label: 'KEEP THE BOOK', fn: pick('collector') },
      { label: 'NOT YET' },
    ]);
  }
  confirm(e) {
    const what = {
      partner: 'Marker burned + ◈8,000. Red Wake +30, so Wake raids become rare. The Accord frowns (−5).',
      enforcer: 'Marker burned + ◈12,000. Red Wake +20, so Wake raids become rare. Every lawful faction −10. Vex will never forgive you.',
      witness: 'Debt void + ◈10,000 + a free Accord Pilot License, Accord +15. The Red Wake becomes Hostile (−40) and will raid you far more often.',
      collector: `You hold every marker: debt gone and ◈${fmt(this.income())}+ a day in collections (grows with rank). Red Wake −25, every lawful faction −5.`,
    }[e];
    this.g.ui.dialog(`<div class="ov-title">${DEBTOR_ENDINGS[e].name.toUpperCase()}?</div><p>${what}</p><p><b>This cannot be undone.</b></p>`,
      [{ label: 'CONFIRM', primary: true, fn: () => this.choose(e) }, { label: 'BACK', fn: () => setTimeout(() => this.reckoning(), 50) }]);
  }
  income() { return 400 + 100 * pilotRank(this.s); }
  choose(e) {
    const a = this.a, m = this.m; a.ending = e;
    if (e === 'collector') { this.epilogue(); return; }
    const t = e === 'partner' ? m.nearest((x) => x.eco === 'frontier') : e === 'enforcer' ? m.nearest((x) => x.eco === 'mining') : m.nearest((x) => x.eco === 'hightech');
    a.ch = 6; a.stage = 'go';
    const who = { partner: ['vex', `Then it's war. My crews are gathering at ${m.sysName(t)}. Bring the ledger. Bring your guns.`], enforcer: ['marrow', `A sensible pilot. Bring the ledger to ${m.sysName(t)}. Vex will be... collected.`], witness: ['hale', `Good. Bring it to the Patrol office at ${m.sysName(t)}. Watch your back on the way.`] }[e];
    m.comm(who[0], who[1], e === 'enforcer' ? 'warn' : 'good');
    m.setGoal(`Settling Up: bring the ledger to ${m.sysName(t)} station.`, t);
  }
  epilogue() {
    const g = this.g, s = this.s, a = this.a, e = a.ending, E = DEBTOR_ENDINGS[e];
    const speaker = { partner: 'vex', enforcer: 'marrow', witness: 'hale', collector: 'vex' }[e];
    let reward;
    if (e === 'partner') { reward = this.burnMarker(8000); g.factionChange('pirate', 30); for (const f of ACCORD) g.factionChange(f, -5, true); reward += ' · Red Wake +30'; }
    else if (e === 'enforcer') { reward = this.burnMarker(12000); g.factionChange('pirate', 20); for (const f of LAWFUL) g.factionChange(f, -10, true); reward += ' · Red Wake +20 · lawful −10'; }
    else if (e === 'witness') { reward = this.burnMarker(10000); s.accord.licensed = true; for (const f of ACCORD) g.factionChange(f, 15, true); g.factionChange('pirate', -40); reward += ' · Accord Pilot License · Accord +15 · Red Wake −40'; }
    else { reward = this.burnMarker(0); g.factionChange('pirate', -25); for (const f of LAWFUL) g.factionChange(f, -5, true); reward += ` · ◈${fmt(this.income())}+/day in collections · Red Wake −25 · lawful −5`; }
    a.done = true; a.stage = 'done'; a.goal = null; a.target = null; s.story.title = E.title; g.p3.endingNews(e);
    const text = {
      partner: "<p>Marrow's flagship burns over the station while Vex's crews cheer on every channel. Afterwards she tears your marker in half, then in half again.</p><p>\"Partners, then. Don't get sentimental about it.\"</p>",
      enforcer: '<p>Marrow takes the ledger with two fingers, as if it might be dirty. Somewhere below, a cell door closes.</p><p>"Your marker is ash. Welcome to my Wake, pilot."</p>',
      witness: '<p>The arrests start that night: customs chiefs, Patrol captains, a governor in a bathrobe. Hale nods at you across the briefing room.</p><p>"You did the right thing. Now keep your shields up. For the rest of your life."</p>',
      collector: "<p>You crack the ledger's last cipher yourself. Every debt in the Fringe scrolls past, and at the bottom, your own. You delete it.</p><p>Vex's final message: \"Well. Look who's the shark now.\"</p>",
    }[e];
    g.ui.dialog(`<img class="ending-art" src="./endings/${e}.jpg" alt=""><div class="arc-head">${this.m.pic(speaker)}<div><small>THE MARKER · EPILOGUE</small><div class="ov-title">${E.name.toUpperCase()}</div></div></div>${text}<p><i>${E.line}</i></p><p><b>${reward}</b><br>Title earned: <b>${E.title}</b></p>`,
      [{ label: 'CONTINUE YOUR CAREER', primary: true }]);
    g.save();
  }
  newDay() {
    if (this.a.ending !== 'collector') return;
    const n = this.income(); this.g.addCredits(n);
    this.g.ui.toast(`📒 Collections from the book: +◈${fmt(n)}`, 'good', 3);
  }
}
