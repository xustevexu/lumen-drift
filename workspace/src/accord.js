// The Accord vs the Fringe. Accord space (Agricultural, Industrial, High-Tech systems) is patrolled and
// safer, but it taxes unlicensed pilots at the dock and scans cargo for contraband. The Fringe (Mining,
// Frontier) is cash-driven and dangerous. Independents can earn an Accord Pilot License.
import * as THREE from 'three';
import { Ship } from './entities.js';
import { buildShipTemplate } from './ships.js';
import { dogfight } from './ai.js';
import { COMM } from './data.js';
import { pilotRank } from './economy.js';
import { factionTier, standingWith, FACTIONS } from './factions.js';
import { isAccordEco, ACCORD } from './story.js';
import { fmt } from './rng.js';
import { arcEnding } from './arcs.js';

const _v = new THREE.Vector3(), _v2 = new THREE.Vector3(), _v3 = new THREE.Vector3();
const UP = new THREE.Vector3(0, 1, 0);
export const LICENSE_PRICE = 25000;
export const TARIFF_RATE = 0.04, TARIFF_MIN = 50;
export const ACCORD_RAID = 0.55, FRINGE_RAID = 1.15;
const CALLS = ['Aegis', 'Bastion', 'Warden', 'Lantern', 'Vigil', 'Sentry', 'Halberd', 'Beacon'];

export function licenseNeeds(state) {
  const deserter = state.story && state.story.origin === 'deserter';
  const friendly = [...ACCORD].filter((f) => standingWith(state, f) >= 10).length;
  const need = deserter ? 3 : 2;
  const barred = arcEnding(state) === 'fringe';
  return { need, friendly, deserter, barred, ok: !barred && friendly >= need && state.credits >= LICENSE_PRICE };
}

export class AccordManager {
  constructor(game) { this.g = game; this.patrol = []; this.chatT = 30; }
  get state() { return this.g.state; }
  get accordHere() { return isAccordEco(this.g.sysInfo.eco); }

  // --------------------------------------------------------- patrol ships
  onEnterSystem() {
    this.despawn();
    const g = this.g, s = this.state;
    if (!this.accordHere && !(arcEnding(s) === 'open' && g.sysInfo.eco === 'frontier')) return;
    const SA = s.siege.active; if (SA && SA.phase === 'live' && SA.target.sys === s.systemId) return; // militia own the sky today
    const rank = pilotRank(s), n = 2, home = g.world.station.pos;
    for (let i = 0; i < n; i++) {
      const stats = { speed: 92 + rank * 3, turn: 1.7, cargo: 0, shield: 90 + rank * 35, shieldRegen: 9, hull: 180 + rank * 60, dps: 11 + rank * 3, beamRange: 290, hard: 1, mslCap: 2, mslDmg: 55, energy: 150, energyRegen: 22, sensor: 3200 };
      const call = CALLS[(s.systemId * 3 + i) % CALLS.length];
      const a = new Ship(g, { kind: 'ally', hullId: 'kestrel', palette: 'player', tpl: buildShipTemplate('kestrel', 'player'), stats, name: `Patrol ${call}` });
      const ang = i * Math.PI + s.systemId;
      a.pos.copy(home).add(_v.set(Math.cos(ang) * 900, 40 + i * 30, Math.sin(ang) * 900));
      a.beam = g.fx.makeBeam(0x6f9fff); a.orbitDir = i ? 1 : -1; a.missiles = 2; a.mslCd = 6 + i; a.isPatrol = true; a.speed = 40;
      this.patrol.push(a);
    }
  }
  despawn() { for (const a of this.patrol) { if (a.beam) this.g.scene.remove(a.beam); if (!a.dead) a.remove(); } this.patrol = []; }

  update(dt) {
    const g = this.g, p = g.player, home = g.world.station.pos;
    for (let i = this.patrol.length - 1; i >= 0; i--) {
      const a = this.patrol[i];
      if (a.dead) { this.patrol.splice(i, 1); continue; }
      a.retarget = (a.retarget || 0) - dt;
      if (a.retarget <= 0 || !a.tgt || a.tgt.dead) {
        a.retarget = 2; a.tgt = null; let bd = 3000;
        // the Patrol hunts the Red Wake; it does not fight Accord enforcers
        for (const o of g.outlaws) { if (o.dead || o.isBase || o.static || o.isRival || (o.faction && ACCORD.has(o.faction))) continue; const d = Math.min(o.pos.distanceTo(a.pos), o.pos.distanceTo(p.pos) * 0.8); if (d < bd) { bd = d; a.tgt = o; } }
        if (a.tgt && !a.called && !a.tgt.faction) { a.called = true; g.story.chatter(a.name, pick(PATROL_ENGAGE)); }
      }
      const t = a.tgt; a.firing = false; a.boost = false;
      if (!t) { // a wide loop around the station
        _v.subVectors(a.pos, home).setY(0); if (_v.lengthSq() < 1) _v.set(1, 0, 0); _v.normalize(); _v2.crossVectors(_v, UP).multiplyScalar(a.orbitDir);
        _v3.copy(home).addScaledVector(_v, 950).addScaledVector(_v2, 500).setY(home.y + 60 * a.orbitDir); a.steerTo(_v3, dt, 0.5); a.throttle = 0.45;
        a.called = false;
      } else dogfight(g, a, t, dt);
      if (!a.firing && a.beam) a.beam.visible = false;
      a.updateMotion(dt, g.world); a.updateVisual(dt);
    }
    if (!p.dead && !g.warp) this.checkScan();
  }
  markers() {
    const p = this.g.player;
    return this.patrol.filter((a) => !a.dead && a.pos.distanceTo(p.pos) < p.stats.sensor).map((a) => ({ key: `s${a.uid}`, pos: a.pos, cls: 'ally', name: a.name }));
  }

  // --------------------------------------------------------- cargo scans
  hotAboard() { return this.g.missionsAboard().filter((m) => m.hot); }
  checkScan() {
    const g = this.g, s = this.state, p = g.player;
    if (s.accord.licensed || g.ui.modalOpen() || g.docked) return;
    if (s.accord.scanKey === `${s.systemId}:${s.day}`) return;
    const near = this.patrol.find((a) => !a.dead && !a.tgt && a.pos.distanceTo(p.pos) < 600);
    if (!near) return;
    s.accord.scanKey = `${s.systemId}:${s.day}`;
    const hot = this.hotAboard();
    if (!hot.length) { g.story.chatter(near.name, pick(PATROL_CLEAN)); return; }
    const value = hot.reduce((a, m) => a + m.reward, 0), fine = Math.round((300 + value * 0.15) / 10) * 10, bribe = Math.round((value * 0.35) / 10) * 10;
    const fid = g.sysInfo.eco, F = FACTIONS[fid];
    g.audio.play('alarm', { vol: 0.5 });
    g.story.log(near.name, `Cargo scan flagged contraband: ${hot.map((m) => m.cargoName).join(', ')}.`, 'warn');
    g.ui.dialog(`<div class="ov-title">ACCORD CARGO SCAN</div><p><b>${near.name}:</b> "Pilot, hold your heading. Our scan shows <b>${hot.map((m) => m.cargoName).join(', ')}</b> in your hold. That's restricted in Accord space."</p>
      <p>Surrender it and pay the fine, and the contract${hot.length > 1 ? 's fail' : ' fails'}. Or make the paperwork disappear: the Patrol keeps quiet, but word reaches the ${F.name}.</p>`, [
      { label: `SURRENDER CARGO · PAY ◈${fmt(fine)}`, primary: true, fn: () => {
        s.credits -= Math.min(s.credits, fine);
        for (const m of hot) g.failMission(m, 'seized by the Accord Patrol');
        g.factionChange(fid, 1, true); g.save();
        g.story.chatter(near.name, 'Cargo logged and seized. Fine paid. You are free to go. Fly straight, pilot.');
      } },
      { label: `BRIBE · ◈${fmt(bribe)} (${F.short} −4)`, fn: () => {
        if (s.credits < bribe) { g.ui.toast('Not enough credits for that kind of favour. The cargo is seized.', 'warn', 4); s.credits -= Math.min(s.credits, fine); for (const m of hot) g.failMission(m, 'seized by the Accord Patrol'); return; }
        s.credits -= bribe; g.factionChange(fid, -4); g.save();
        g.story.chatter(near.name, "...Scanner glitch. Happens. Move along before I change my mind.");
      } },
    ]);
  }

  // --------------------------------------------------------- docking tariff
  onDock() {
    const g = this.g, s = this.state;
    if (!this.accordHere || s.accord.licensed) return;
    const cargo = g.player.cargo; let v = 0;
    for (const k in cargo) v += (cargo[k] || 0) * COMM[k].base;
    const half = arcEnding(s) === 'open' ? 0.5 : 1;
    const fee = Math.round(Math.max(TARIFF_MIN, Math.round(v * TARIFF_RATE / 10) * 10) * half);
    s.credits -= Math.min(s.credits, fee);
    g.ui.toast(`Accord docking tariff: ◈${fmt(fee)} (unlicensed pilot${v ? `, ${Math.round(TARIFF_RATE * 100)}% of declared cargo` : ''})`, 'info', 4);
    if (!s.story.said['tariff']) { s.story.said['tariff'] = 1; setTimeout(() => g.story.comm('wick', "That's the Accord tariff: every unlicensed pilot pays it on docking. An Accord Pilot License ends it, and the cargo scans too. Details in Services.", {}), 1500); }
  }
  buyLicense() {
    const g = this.g, s = this.state, n = licenseNeeds(s);
    if (!n.ok || s.accord.licensed) return false;
    s.credits -= LICENSE_PRICE; s.accord.licensed = true;
    g.p3.headline(`${s.p3.callsign} granted an Accord Pilot License.`);
    for (const f of ACCORD) g.factionChange(f, 3, true);
    g.story.comm('hale', s.story.origin === 'deserter'
      ? "Well. The board approved your license, against my advice. I'll admit you earned it. Welcome back to Accord space, pilot. Don't make me regret it."
      : 'Accord Pilot License approved. No tariffs, no routine scans, and the Patrol answers when you call. Welcome to the core worlds, pilot.', { kind: 'good' });
    g.save();
    return true;
  }

  // --------------------------------------------------------- radio chatter
  updateChatter(dt) {
    const g = this.g, p = g.player;
    this.chatT -= dt; if (this.chatT > 0) return;
    this.chatT = 45 + Math.random() * 50;
    if (g.docked || g.warp) return;
    const near = (list) => list.filter((x) => !x.dead && x.pos.distanceTo(p.pos) < p.stats.sensor);
    const opts = [];
    const tr = near(g.traders).filter((t) => !t.disabled);
    if (tr.length) opts.push(() => g.story.chatter(tr[0].name, pick(this.accordHere ? TRADER_ACCORD : TRADER_FRINGE)));
    if (this.patrol.length && !this.state.accord.licensed) opts.push(() => g.story.chatter(this.patrol[0].name, pick(PATROL_IDLE)));
    if (this.patrol.length && this.state.accord.licensed) opts.push(() => g.story.chatter(this.patrol[0].name, 'Licensed pilot on scope. Good to have you out here.'));
    if (g.fleet.wings.length) opts.push(() => g.story.chatter(g.fleet.wings[0].name.split(' ')[0], pick(WINGMAN)));
    if (!this.accordHere) opts.push(() => g.story.chatter(pick(['Open channel', 'Unknown hauler', 'Settler relay']), pick(FRINGE_OPEN)));
    if (opts.length) pick(opts)();
  }
  outlawTaunt(name, faction) {
    if (faction && ACCORD.has(faction)) { this.g.story.chatter(name, pick(ENFORCER)); return; }
    const debtor = this.state.story.origin === 'debtor' && this.state.story.debt > 0;
    this.g.story.chatter(name, debtor && Math.random() < 0.35 ? "Vex says hi. And that you're late." : pick(PIRATE_TAUNT));
  }
}

function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
const PATROL_ENGAGE = ['Red Wake contact. Patrol engaging, keep clear of our fire.', 'Hostiles on scope. Moving to intercept.', "Outlaws in Accord space? Not on my watch."];
const PATROL_CLEAN = ['Routine cargo scan complete. You\'re clean, pilot. Fly safe.', 'Scan complete, nothing flagged. Enjoy your stay in Accord space.', 'Hold checks out. Carry on.'];
const PATROL_IDLE = ['All ships: Patrol sweep in progress. Keep transponders on.', 'Reminder: unlicensed pilots pay the tariff on docking. Have a pleasant day.', "Traffic's light today. That's how we like it."];
const TRADER_ACCORD = ['Nice quiet lane today. Love it when the Patrol is out.', 'Docking queue is backed up again. Tariffs, paperwork, the usual.', 'Grain prices are holding. Good season on the farms.', 'Heard the Institute is buying anything with a Lantern stamp on it.'];
const TRADER_FRINGE = ['Keep your shields up out here, friend. No Patrol past the core.', "If you see red hulls, run. Don't play hero.", 'Fuel is cheap in the mining belts, everything else costs blood.', 'Deepcore pays cash, no questions. That\'s the Fringe for you.'];
const FRINGE_OPEN = ['...anybody copy? Lost a hauler near the belt, red hulls everywhere...', 'Settlers\' market opens at dawn. Bring water filters if you have them.', "Union strike's over. Ore's moving again.", 'Somebody tell the Accord we can protect ourselves just fine.'];
const WINGMAN = ['Formation holding. Your six is clear.', 'Quiet out here. I don\'t trust quiet.', 'Say the word and we\'ll light them up.'];
const PIRATE_TAUNT = ['Nice ship. Shame about the pilot.', 'Drop your cargo and we might let you limp home.', 'The Red Wake says hello.', "You're a long way from the Patrol, little hauler."];
const ENFORCER = ['You know why we\'re here.', 'Accord enforcement. Power down and prepare to be boarded.', 'Your name is on our list, pilot.'];
