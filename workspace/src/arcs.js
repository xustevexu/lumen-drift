// Story arcs: one storyline per origin, ~6 chapters, no timers. Chapters start through normal play
// (days passing, rank, travel) and end in choices. The final choice is permanent and changes the sector.
import * as THREE from 'three';
import { fmt } from './rng.js';
import { pilotRank } from './economy.js';
import { jumpsFrom } from './missions.js';
import { isAccordEco, ACCORD, portraitSVG } from './story.js';
import { DebtorArc, DEBTOR_INFO, DEBTOR_ENDINGS } from './arcs_debtor.js';
import { HeirArc, HEIR_INFO, HEIR_ENDINGS, heirFuelMult } from './arcs_heir.js';

const _v = new THREE.Vector3();

export const ARC_INFO = {
  deserter: { title: 'The Cipher Key', chapters: ['Old Colors', 'Static', 'Deniable', 'The Middle Man', 'The Hearing', 'Coming Home'] },
  debtor: DEBTOR_INFO,
  heir: HEIR_INFO,
};
export const ENDINGS = {
  accord: { name: 'Reinstated', title: 'Commander (Reinstated)', line: 'You gave the evidence to Hale. Mercer was arrested, you were pardoned and given an Accord Pilot License, and the Accord treats you with respect.' },
  fringe: { name: 'Hero of the Fringe', title: 'Hero of the Fringe', line: "You gave the evidence to the Free Settlers. The Fringe will never forget it; the Accord will never forgive it." },
  open: { name: 'The Whistleblower', title: 'The Whistleblower', line: 'You broadcast everything. The Accord was forced to reform: tariffs halved, Patrols now fly the frontier too, and the Red Wake lost its friends in high places.' },
  bought: { name: 'Paid Off', title: 'Mercenary', line: "You took Mercer's money and burned the evidence. You're rich. Nobody on either side quite trusts you any more." },
  ...DEBTOR_ENDINGS,
  ...HEIR_ENDINGS,
};

export function normalizeArc(state) {
  const st = state.story;
  if (st.origin && ARC_INFO[st.origin] && (!st.arc || typeof st.arc !== 'object')) st.arc = { ch: 1, stage: 'wait', at: 3, target: null, flags: {}, ending: null, done: false };
  return state;
}
// permanent effects of an ending, used across the game
export function arcEnding(state) { return state.story && state.story.arc && state.story.arc.ending; }
export function fuelMult(state, eco) { return heirFuelMult(arcEnding(state), eco); }
export function raidMult(state, eco, galaxy) {
  const e = arcEnding(state);
  if (e === 'rest' && galaxy && state.systemId === galaxy.hiddenId) return 0;
  if (e === 'open') return 0.85;
  if (e === 'fringe' && !isAccordEco(eco)) return 0.8;
  if (e === 'partner' || e === 'enforcer') return 0.85;
  return 1;
}

export class ArcManager {
  constructor(game) { this.g = game; this.debtor = new DebtorArc(this); this.heir = new HeirArc(this); }
  pic(id) { return portraitSVG(id, 72); }
  newDay() { const a = this.arc; if (a && this.origin === 'debtor') this.debtor.newDay(); }
  get state() { return this.g.state; }
  get arc() { return this.state.story && this.state.story.arc; }
  get origin() { return this.state.story && this.state.story.origin; }

  nearest(pred) {
    const g = this.g, dist = jumpsFrom(g.galaxy, this.state.systemId);
    const list = g.galaxy.systems.filter((s) => !s.hidden && pred(s) && dist[s.id] != null).sort((a, b) => dist[a.id] - dist[b.id]);
    return list[0] ? list[0].id : null;
  }
  sysName(id) { return this.g.galaxy.systems[id].name; }
  comm(id, text, kind) { this.g.story.comm(id, text, { kind }); }
  setGoal(text, target) { const a = this.arc; a.goal = text; a.target = target; this.g.save(); }

  // checked every second from Story.update
  update() {
    const a = this.arc; if (!a || a.done) return;
    if (this.origin === 'debtor') { this.debtor.update(); return; }
    if (this.origin === 'heir') { this.heir.update(); return; }
    if (this.origin !== 'deserter') return;
    const g = this.g, s = this.state;
    if (a.stage === 'wait') {
      if (s.day < (a.at || 0)) return;
      if (a.ch === 5 && pilotRank(s) < 2) { if (!a.flags.rankHint) { a.flags.rankHint = 1; this.comm('hale', "Mercer has friends. To be heard you'll need a name people respect. Make some money, build something. When you're a Prospector-rank pilot, come talk to us.", 'info'); } return; }
      if (g.docked || g.warp) return;
      this.startChapter();
      return;
    }
    if (a.ch === 3 && a.stage === 'go' && a.flags.spawned) {
      const left = g.outlaws.filter((o) => o.storyOf && !o.dead).length;
      if (left === 0) this.completeCh3();
    }
  }

  startChapter() {
    const a = this.arc, s = this.state; a.stage = 'go';
    if (a.ch === 1) {
      const t = this.nearest((x) => x.eco === 'frontier');
      this.comm('hale', "Pilot. The Accord is willing to forget the desertion. Return the cipher key and your record is cleared. That's the best offer you'll ever get.", 'warn');
      setTimeout(() => this.comm('ama', `Don't hand it back yet. That key opens Patrol orders, and my people want to know why our colonies keep burning. Come and see me at ${this.sysName(t)}.`), 900);
      this.setGoal(`Meet Elder Ama at ${this.sysName(t)} station (Free Settlers).`, t);
    } else if (a.ch === 2) {
      const t = this.nearest((x) => x.eco === 'hightech');
      this.comm('solak', `Elder Ama tells me you have something interesting. Patrol ciphers are beyond Ama's people, but not beyond mine. Bring the key to the Institute relay at ${this.sysName(t)}. Discreetly, if you can manage it.`);
      if (s.factions.hightech < -7) setTimeout(() => this.comm('wick', "Reminder: the Institute is Accord. They still don't like you. Expect a docking tariff, and maybe enforcers.", 'warn'), 900);
      this.setGoal(`Bring the cipher key to Dr. Solak at ${this.sysName(t)} station (Lumen Institute).`, t);
    } else if (a.ch === 3) {
      this.setGoal('Someone is coming for the key. Watch your back in the next system you enter.', null);
      a.flags.armed = true;
    } else if (a.ch === 4) {
      const t = this.nearest((x) => !isAccordEco(x.eco));
      this.comm('vex', "Heard you had a little trouble. Unmarked ships, Accord drives, nobody to blame. I know who signs those flight orders. Come see me at any Fringe station. Bring credits.");
      this.setGoal(`Meet Vex Tannery at any Fringe station (nearest: ${this.sysName(t)}).`, t);
    } else if (a.ch === 5) {
      this.comm('hale', "We've seen what Solak decoded. I'm not happy with how I found out, but I won't protect Mercer. Bring me the evidence and you come home.", 'info');
      setTimeout(() => this.comm('mercer', "I hear you've been asking about me, pilot. Let's be adults about this. Everyone has a price. Name yours before you do something you can't take back.", 'warn'), 2000);
      setTimeout(() => this.comm('ama', "The Accord will bury this. Give it to us and every Fringe colony will know who sold them to the Wake. Your choice, pilot. Choose with your heart."), 900);
      this.setGoal('Everyone wants the evidence. Dock at any station to decide where it goes. This choice is permanent.', null);
    }
  }

  onEnterSystem(initial) {
    const a = this.arc; if (!a || a.done) return;
    if (this.origin === 'debtor') { this.debtor.onEnterSystem(initial); return; }
    if (this.origin === 'heir') { this.heir.onEnterSystem(initial); return; }
    if (this.origin !== 'deserter') return;
    if (a.ch === 3 && a.stage === 'go') { a.flags.spawned = false; if (!initial && a.flags.armed) setTimeout(() => this.spawnSquad({ n: 3, name: 'Unmarked', tough: 1.15, color: 0x6f9fff, toast: '⚠ Three unmarked ships dropped out of warp. They are here for you.', taunt: ['unmarked', 'Transmit the cipher key and power down. Nobody needs to find your wreck.'], speaker: 'wick', line: 'No transponders, but those are Accord-pattern drives. Patrol hardware flying as pirates. Take them down and we can pull their logs.' }), 2500); }
  }
  spawnSquad(o) {
    const g = this.g, a = this.arc; if (!a || !a.flags.armed || a.flags.spawned || g.docked) return;
    a.flags.spawned = true;
    const p = g.player, dir = _v.set(Math.sin(p.yaw), 0, Math.cos(p.yaw)).multiplyScalar(1900);
    const rank = pilotRank(this.state);
    g.spawnOutlaws({ n: o.n, entry: p.pos.clone().add(dir), name: o.name, tough: o.tough + rank * 0.08, burstColor: o.color, toast: o.toast });
    for (const x of g.outlaws) if (x.name.startsWith(o.name)) x.storyOf = 'arc';
    if (o.taunt) setTimeout(() => this.comm(o.taunt[0], o.taunt[1], 'warn'), 600);
    setTimeout(() => this.comm(o.speaker, o.line, 'warn'), 1200);
  }
  completeCh3() {
    const a = this.arc, g = this.g; a.flags.armed = false;
    g.addCredits(2500);
    this.comm('wick', "Got their logs. Flight orders, signed with a Patrol logistics code. Whoever sent them doesn't want that key decoded. We recovered ◈2,500 of salvage, too.", 'good');
    this.next(4, 1);
  }

  onDock() {
    const a = this.arc; if (!a || a.done || a.stage !== 'go') return;
    if (this.origin === 'debtor') { this.debtor.onDock(); return; }
    if (this.origin === 'heir') { this.heir.onDock(); return; }
    if (this.origin !== 'deserter') return;
    const g = this.g, s = this.state, sid = s.systemId, eco = g.sysInfo.eco, ui = g.ui;
    if (a.ch === 1 && sid === a.target) {
      ui.dialog(this.scene('ama', 'Old Colors', `<p>Elder Ama meets you in the station's market, between crates of seedlings and water filters.</p>
        <p>"Three colonies this year. Each time the Wake hit us, the Patrol was 'repositioning'. Each time, it was a colony that refused Accord tariffs."</p>
        <p>"I don't ask you to trust me. I ask you to find out. Dr. Solak at the Institute can read that key. He's a strange man, but he's an honest one."</p>`),
      [{ label: "I'LL FIND OUT", primary: true, fn: () => { g.factionChange('frontier', 3); this.next(2, 1); } }]);
    } else if (a.ch === 2 && sid === a.target) {
      ui.dialog(this.scene('solak', 'Static', `<p>Dr. Solak's lab smells of solder and cold tea. He plugs the key into a relay older than both of you.</p>
        <p>"Ah. Oh dear. These are Patrol standing orders. Repositioning windows, and every one matches a Red Wake raid on a Fringe colony. Somebody inside the Patrol is telling the Wake when the sky is empty."</p>
        <p>"There's no name, only a logistics code. And, pilot? The moment I opened this, it pinged something. Somebody knows."</p>`),
      [{ label: 'THEN WE MOVE FAST', primary: true, fn: () => { g.addCredits(1500); g.ui.toast('Dr. Solak pays for a copy of the data: +◈1,500', 'good', 3); this.next(3, 0); } }]);
    } else if (a.ch === 4 && !isAccordEco(eco)) {
      this.vexScene();
    } else if (a.ch === 5) {
      this.hearing();
    } else if (a.ch === 6 && sid === a.target) {
      this.epilogue();
    }
  }
  scene(id, title, body) {
    return `<div class="arc-head">${this.pic(id)}<div><small>${ARC_INFO[this.origin].title.toUpperCase()} · CHAPTER ${this.arc.ch}</small><div class="ov-title">${title.toUpperCase()}</div></div></div>${body}`;
  }
  vexScene() {
    const g = this.g, s = this.state, price = 6000;
    const can = s.credits >= price;
    g.ui.dialog(this.scene('vex', 'The Middle Man', `<p>Vex is waiting in the back room of a Fringe bar, boots up on the table.</p>
      <p>"The code on those orders belongs to <b>Captain Doran Mercer</b>, Patrol Logistics. He sells empty skies to the Wake. Half my old crew got rich off him. Me, I just like knowing things."</p>
      <p>"A name like that isn't free. Pay me, owe me a favour, or..." She grins. "Or try something stupid."</p>`),
    [
      { label: can ? `PAY HER · ◈${fmt(price)}` : `PAY HER · ◈${fmt(price)} (NOT ENOUGH)`, primary: can, fn: () => {
        if (!can) { setTimeout(() => this.vexScene(), 50); return; }
        s.credits -= price; g.factionChange('pirate', 4, true); this.arc.flags.vex = 'paid';
        this.comm('vex', "Pleasure doing business. Mercer, Patrol Logistics. Don't say I never gave you anything."); this.next(5, 2);
      } },
      { label: 'OWE HER A FAVOUR (Red Wake +8, Accord −3)', fn: () => {
        g.factionChange('pirate', 8); for (const f of ACCORD) g.factionChange(f, -3, true); this.arc.flags.vex = 'favour';
        this.comm('vex', "A favour from a Patrol deserter. I'll treasure it. Mercer's your man. I'll be in touch, someday."); this.next(5, 2);
      } },
      { label: 'TURN HER IN (Accord +5, Red Wake −20)', fn: () => {
        for (const f of ACCORD) g.factionChange(f, 5, true); g.factionChange('pirate', -20); this.arc.flags.vex = 'betrayed';
        this.comm('vex', "You called the Patrol on me? Cute. I'm out the back door already, and I won't forget it. Neither will the Wake.", 'warn'); this.next(5, 2);
      } },
    ]);
  }
  hearing() {
    const g = this.g, s = this.state;
    const pick = (end) => () => this.confirmEnding(end);
    g.ui.dialog(this.scene('hale', 'The Hearing', `<p>Your comm lights up with three channels at once.</p>
      <p><b>Hale:</b> "Bring it to me. Mercer goes to trial, you get a pardon and a license. The Accord gets better from the inside."</p>
      <p><b>Ama:</b> "Bring it to us. The Fringe deserves to know, and to stop asking the Accord for protection."</p>
      <p><b>Mercer:</b> " ◈30,000 says you lose that data. Think about it."</p>
      <p>Or you could broadcast everything to the whole sector and let the chips fall.</p>
      <p><b style="color:#ff8a5c">Whatever you choose is permanent.</b></p>`),
    [
      { label: 'GIVE IT TO HALE (Accord)', fn: pick('accord') },
      { label: 'GIVE IT TO AMA (Fringe)', fn: pick('fringe') },
      { label: 'BROADCAST EVERYTHING', fn: pick('open') },
      { label: "TAKE MERCER'S MONEY", fn: pick('bought') },
      { label: 'NOT YET' },
    ]);
  }
  confirmEnding(end) {
    const E = ENDINGS[end];
    const what = {
      accord: 'Pardon + free Accord Pilot License + Honored with all three Accord factions. The Free Settlers feel betrayed (−10).',
      fringe: 'Free Settlers +30 and Deepcore Union +15; Fringe raids drop by 20%. The Accord turns on you (−15) and will never license you.',
      open: 'Tariffs halved for everyone, Patrols fly Frontier systems too, raids drop 15% everywhere, everyone lawful +8. The Red Wake (−20) and Hale (cold) remember.',
      bought: '+◈30,000, but every lawful faction −10 and the story is buried.',
    }[end];
    this.g.ui.dialog(`<div class="ov-title">${E.name.toUpperCase()}?</div><p>${what}</p><p><b>This cannot be undone.</b></p>`,
      [{ label: 'CONFIRM', primary: true, fn: () => this.chooseEnding(end) }, { label: 'BACK', fn: () => setTimeout(() => this.hearing(), 50) }]);
  }
  chooseEnding(end) {
    const a = this.arc; a.ending = end;
    if (end === 'bought') { this.epilogue(); return; }
    const t = end === 'accord' ? this.nearest((x) => x.eco === 'hightech') : end === 'fringe' ? this.nearest((x) => x.eco === 'frontier') : this.nearest((x) => x.eco === 'mining');
    a.ch = 6; a.stage = 'go';
    const who = { accord: ['hale', `Good. Bring it to the Patrol office at ${this.sysName(t)}. I'll be waiting.`], fringe: ['ama', `Thank you, pilot. We gather at ${this.sysName(t)}. Come home to us.`], open: ['kask', `You want the whole sector to hear it? The Union's big transmitter at ${this.sysName(t)} reaches every relay in the lanes. Bring it here.`] }[end];
    this.comm(who[0], who[1], 'good');
    this.setGoal(`Coming Home: deliver the evidence at ${this.sysName(t)} station.`, t);
  }
  epilogue() {
    const g = this.g, s = this.state, a = this.arc, end = a.ending, E = ENDINGS[end];
    const speaker = { accord: 'hale', fringe: 'ama', open: 'kask', bought: 'mercer' }[end];
    let reward = '';
    if (end === 'accord') {
      s.accord.licensed = true; for (const f of ACCORD) s.factions[f] = Math.max(s.factions[f] || 0, 25); g.factionChange('frontier', -10); g.addCredits(15000);
      reward = 'Accord Pilot License · Honored with the Accord · +◈15,000';
    } else if (end === 'fringe') {
      g.factionChange('frontier', 30); g.factionChange('mining', 15); for (const f of ACCORD) g.factionChange(f, -15, true); g.addCredits(15000);
      reward = 'Free Settlers +30 · Deepcore +15 · Fringe raids −20% · +◈15,000';
    } else if (end === 'open') {
      for (const f of ['agricultural', 'mining', 'industrial', 'hightech', 'frontier']) g.factionChange(f, 8, true); g.factionChange('pirate', -20); g.addCredits(10000);
      reward = 'Tariffs halved · Patrols on the frontier · raids −15% · all lawful factions +8 · +◈10,000';
    } else {
      g.addCredits(30000); for (const f of ['agricultural', 'mining', 'industrial', 'hightech', 'frontier']) g.factionChange(f, -10, true);
      reward = '+◈30,000 · all lawful factions −10';
    }
    a.done = true; a.stage = 'done'; a.goal = null; a.target = null; s.story.title = E.title; g.p3.endingNews(end);
    const text = {
      accord: '<p>Mercer is led out of the Patrol office in restraints. Hale hands you a license, and an old Patrol pin.</p><p>"You should have come to me first. But you came. Welcome home, Commander."</p>',
      fringe: "<p>The whole station turns out. Someone's playing music; someone's crying. Ama presses a woven band into your hand.</p><p>\"Out here you're family now. The Accord can keep its licenses.\"</p>",
      open: `<p>Kask flips the switch and the evidence goes out on every relay in the lanes. Within the hour the news feeds catch fire.</p><p>"Well," Kask says, "you've upset everybody equally. That's the closest thing to justice we get out here."</p>`,
      bought: '<p>The credits arrive. The evidence goes into a star. Later, Mercer sends you one line:</p><p>"Pleasure doing business. Welcome to the real world, pilot."</p>',
    }[end];
    g.ui.dialog(`<img class="ending-art" src="./endings/${end}.jpg" alt=""><div class="arc-head">${this.pic(speaker)}<div><small>THE CIPHER KEY · EPILOGUE</small><div class="ov-title">${E.name.toUpperCase()}</div></div></div>${text}<p><i>${E.line}</i></p><p><b>${reward}</b><br>Title earned: <b>${E.title}</b></p>`,
      [{ label: 'CONTINUE YOUR CAREER', primary: true }]);
    g.save();
  }
  next(ch, days) { const a = this.arc; a.ch = ch; a.stage = 'wait'; a.at = this.state.day + days; a.goal = null; a.target = null; this.g.save(); }

  // ---------------------------------------------------------- UI helpers
  courseTo() {
    const g = this.g, a = this.arc, s = this.state; if (!a || a.target == null) return;
    const t = a.target;
    if (g.docked) g.undock();
    if (t === s.systemId) { g.setAutopilot(g.world.station.pos, g.world.station.name, 200, g.world.station); return; }
    g.missionCourse({ dest: { sys: t, kind: 'station', name: this.sysName(t) } });
  }
  cardHTML() {
    const a = this.arc, s = this.state; if (!a || !ARC_INFO[this.origin]) return '';
    const info = ARC_INFO[this.origin];
    if (a.done) return `<div class="card news story"><div><h3>📖 ${info.title} · Complete</h3><p>Ending: <b>${ENDINGS[a.ending].name}</b>. ${ENDINGS[a.ending].line}</p></div></div>`;
    const live = this.origin === 'heir' ? this.heir.goalText() : null;
    const goal = live || (a.stage === 'go' && a.goal ? a.goal : 'The next chapter begins as you keep flying.');
    const btn = a.stage === 'go' && a.target != null && a.target !== s.systemId ? '<button class="sbtn" data-act="arccourse">SET COURSE</button>' : '';
    return `<div class="card news story"><div><h3>📖 ${info.title} · Chapter ${a.ch}: ${info.chapters[a.ch - 1]}</h3><p>${goal}</p>${btn}</div></div>`;
  }
}
