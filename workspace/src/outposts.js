// Player outposts: claim a site (asteroid field or planet deposit) with a charter, bolt modules onto a
// six-arm hub by paying credits AND hauling in materials, and collect what it produces each in-game day.
// Raids: a warning, then a short window to get back and defend; if you're not in the system when the
// raiders arrive, the outcome is resolved from your turrets vs. the raid's strength.
import * as THREE from 'three';
import { RNG, fmt } from './rng.js';
import { COMM, DAY_LENGTH } from './data.js';
import { Ship } from './entities.js';
import { buildOutpost, HUB_ARMS, HUB_ARM_R } from './outpostModels.js';
import { pilotRank } from './economy.js';
import { FACTIONS, factionTier, standingWith } from './factions.js';
import { systemData, routePath } from './missions.js';

export const CHARTER_PRICE = 15000;
export const HUB_POWER = 2, HUB_STORAGE = 60, STORAGE_PER = 120;
export const RAID_WINDOW = 0.6; // in-game days between the warning and the attack (0.6 × 240 s ≈ 2.4 real minutes)
const OUTPOST_REACH = 190, SITE_REACH = 220;

export const OUTPOST_MODULES = {
  mine: { name: 'Mining Rig', cost: 4000, mats: { ferrite: 20, parts: 5 }, power: -1, desc: "Mines the site's ore: 18 units a day (fields also turn up some Lumenite).", site: 'solid' },
  siphon: { name: 'Gas Siphon', cost: 6000, mats: { cobalt: 12, parts: 8 }, power: -1, desc: 'Pulls 14 Helion a day from a gas giant.', site: 'gas' },
  refinery: { name: 'Refinery', cost: 9000, mats: { ferrite: 25, cobalt: 10, parts: 8 }, power: -2, desc: 'Refines up to 24 stored ore a day: Ferrite→Machine Parts, Cobaltine→Data Cores, Ice→Medical Gel, Helion→Luxury Crystal.' },
  storage: { name: 'Storage Tanks', cost: 3000, mats: { ferrite: 25, ice: 10 }, power: 0, desc: `+${STORAGE_PER} storage, so production doesn't stall while you're away.` },
  solar: { name: 'Solar Array', cost: 3500, mats: { cobalt: 8, parts: 4 }, power: 3, desc: '+3 power. Modules run at reduced output without enough power.' },
  hab: { name: 'Habitat', cost: 6000, mats: { food: 15, medical: 8, parts: 6 }, power: -1, desc: 'Crew quarters: +25% to mining, siphon and refinery output.' },
  dock: { name: 'Trade Dock', cost: 7000, mats: { parts: 10, data: 3 }, power: -1, desc: 'Passing traders buy up to 12 stored units a day at 85% of the local price.' },
  turret: { name: 'Defense Turret', cost: 5000, mats: { parts: 8, cobalt: 15 }, power: -1, desc: "Shoots raiders when you're here; improves the odds when you're not." },
};
export const MODULE_IDS = Object.keys(OUTPOST_MODULES);
const RECIPES = { ferrite: ['parts', 3], cobalt: ['data', 2], ice: ['medical', 2], helion: ['luxury', 3] };

// ---------------------------------------------------------------- state helpers
export function normalizeOutpostState(state) {
  if (!Array.isArray(state.outposts)) state.outposts = [];
  if (!Number.isFinite(state.charters)) state.charters = 0;
  return state;
}
export function maxOutposts(state) { return 1 + Math.min(2, pilotRank(state)); }
export const builtMods = (o) => o.slots.filter((s) => s && s.status === 'built');
export const countBuilt = (o, id) => builtMods(o).filter((s) => s.id === id).length;
export function power(o) {
  let sup = HUB_POWER, dem = 0;
  for (const s of builtMods(o)) { const p = OUTPOST_MODULES[s.id].power; if (p > 0) sup += p; else dem -= p; }
  return { sup, dem, eff: dem ? Math.min(1, sup / dem) : 1 };
}
export const storageCap = (o) => HUB_STORAGE + STORAGE_PER * countBuilt(o, 'storage');
export const storageUsed = (o) => Object.values(o.storage).reduce((a, b) => a + b, 0);
export const upkeep = (o) => 100 + 40 * builtMods(o).length;
const siteRule = (o, id) => { const r = OUTPOST_MODULES[id].site; return !r || (r === 'gas' ? o.site.gas : !o.site.gas); };
const add = (obj, k, n) => { obj[k] = (obj[k] || 0) + n; if (obj[k] <= 0) delete obj[k]; };

// One in-game day of production for an outpost. Returns report lines.
export function tickOutpost(o, game, day) {
  const s = game.state, lines = [];
  for (const sl of o.slots) if (sl && sl.status === 'constructing' && day >= sl.ready) { sl.status = 'built'; lines.push(`${OUTPOST_MODULES[sl.id].name} came online`); }
  const up = upkeep(o);
  if (s.credits < up) { lines.push(`Upkeep ◈${fmt(up)} unpaid: outpost idle`); return lines; }
  s.credits -= up; o.upkeepPaid = (o.upkeepPaid || 0) + up;
  const { eff } = power(o), crew = countBuilt(o, 'hab') ? 1.25 : 1, mul = eff * crew;
  const rng = new RNG((s.seed ^ (day * 131)) + o.id.length * 977 + o.sys);
  const made = {};
  for (let i = 0; i < countBuilt(o, 'mine'); i++) {
    let n = Math.round(18 * mul);
    if (o.site.kind === 'field') { const lum = Math.round(n * 0.05 + rng.next()); add(made, 'lumenite', lum); n -= lum; }
    add(made, o.site.ore, n);
  }
  for (let i = 0; i < countBuilt(o, 'siphon'); i++) add(made, 'helion', Math.round(14 * mul));
  for (const k in made) add(o.storage, k, made[k]);
  // refinery: ore → goods
  let refined = 0;
  for (let i = 0; i < countBuilt(o, 'refinery'); i++) {
    let budget = Math.floor(24 * mul);
    for (const ore of ['cobalt', 'helion', 'ice', 'ferrite']) {
      const [good, ratio] = RECIPES[ore];
      const have = o.storage[ore] || 0, batches = Math.min(Math.floor(have / ratio), Math.floor(budget / ratio));
      if (batches <= 0) continue;
      add(o.storage, ore, -batches * ratio); add(o.storage, good, batches); budget -= batches * ratio; refined += batches;
    }
  }
  // trade dock: sells refined goods first, then ore
  let sold = 0, earned = 0;
  for (let i = 0; i < countBuilt(o, 'dock'); i++) {
    let left = 12;
    const order = Object.keys(o.storage).sort((a, b) => COMM[b].base - COMM[a].base);
    for (const k of order) {
      if (left <= 0) break;
      const n = Math.min(left, o.storage[k]);
      const price = Math.round(game.economy.sellPrice(o.sys, k) * 0.85);
      add(o.storage, k, -n); o.credits += n * price; earned += n * price; sold += n; left -= n;
    }
  }
  // storage cap: overflow is lost
  let over = storageUsed(o) - storageCap(o), lost = 0;
  if (over > 0) {
    for (const k of Object.keys(o.storage).sort((a, b) => COMM[a].base - COMM[b].base)) { const n = Math.min(over, o.storage[k]); add(o.storage, k, -n); over -= n; lost += n; if (over <= 0) break; }
  }
  const madeTxt = Object.entries(made).map(([k, n]) => `${n} ${COMM[k].name}`).join(', ');
  if (madeTxt) lines.push(`Produced ${madeTxt}`);
  if (refined) lines.push(`Refined ${refined} batch${refined > 1 ? 'es' : ''} of goods`);
  if (sold) lines.push(`Trade dock sold ${sold} units for ◈${fmt(earned)}`);
  if (lost) lines.push(`Storage full: ${lost} units lost`);
  if (eff < 1) lines.push(`Power ${Math.round(eff * 100)}%: build Solar Arrays`);
  lines.push(`Upkeep ◈${fmt(up)}`);
  // locals on the payroll: slow faction goodwill
  if (builtMods(o).length >= 2 && day % 3 === 0) game.factionChange(game.galaxy.systems[o.sys].eco, 1, true);
  return lines;
}

// ---------------------------------------------------------------- runtime manager
const _v = new THREE.Vector3(), _v2 = new THREE.Vector3();
const absT = (s) => s.day + s.dayTime;

export class OutpostManager {
  constructor(game) { this.g = game; this.rt = new Map(); this.panel = null; this.beamPool = new Map(); }
  get state() { return this.g.state; }
  list() { return this.state.outposts; }
  here() { return this.list().filter((o) => o.sys === this.state.systemId); }
  find(id) { return this.list().find((o) => o.id === id); }

  // ---- sites in the current system ----
  sites() {
    const W = this.g.world, out = [];
    W.fields.forEach((f, i) => {
      const dir = _v.copy(f.center).setY(0).normalize();
      out.push({ kind: 'field', index: i, pos: f.center.clone().addScaledVector(dir, f.radius + 230).setY(f.center.y + 40), name: f.name, ore: f.primary, gas: false });
    });
    W.deposits.forEach((d, i) => {
      const pl = d.planet, dir = d.pos.clone().sub(pl.pos).normalize();
      out.push({ kind: 'deposit', index: i, pos: pl.pos.clone().addScaledVector(dir, pl.radius + 240), name: pl.data.name, ore: d.ore, gas: pl.data.type === 'gas' });
    });
    return out;
  }
  claimed(site) { return this.list().some((o) => o.sys === this.state.systemId && o.site.kind === site.kind && o.site.index === site.index); }
  posOf(o) { const s = this.sites().find((x) => x.kind === o.site.kind && x.index === o.site.index); return s ? s.pos : null; }

  // ---- lifecycle ----
  onEnterSystem() {
    this.clearRuntime();
    // a live raid elsewhere resolves automatically when you leave
    for (const o of this.list()) if (o.raid && o.raid.phase === 'live' && o.sys !== this.state.systemId) this.autoResolve(o, 'You left before the fight was over.');
    for (const o of this.here()) {
      // raiders don't survive a reload/jump: a raid that was mid-fight here starts over right away
      if (o.raid && o.raid.phase === 'live') { o.raid.phase = 'warned'; o.raid.due = absT(this.state) + 5 / DAY_LENGTH; }
      this.materialize(o);
    }
  }
  clearRuntime() {
    for (const r of this.rt.values()) this.dispose(r);
    this.rt.clear();
  }
  dispose(r) {
    this.g.scene.remove(r.model.group);
    if (r.proxy && !r.proxy.dead) r.proxy.remove();
    for (const t of r.turrets) t.beam.visible = false;
  }
  materialize(o) {
    const pos = this.posOf(o); if (!pos) return;
    const ids = o.slots.map((s) => (!s ? '' : s.status === 'built' ? s.id : 'scaffold'));
    const model = buildOutpost(ids);
    model.group.position.copy(pos);
    model.group.rotation.y = Math.atan2(pos.x, pos.z);
    this.g.scene.add(model.group);
    // invisible stand-in Ship so raiders have something to shoot at (and the outpost gets a barrier bubble)
    let proxy = null;
    const old = this.rt.get(o.id);
    if (old && old.proxy && !old.proxy.dead) proxy = old.proxy;
    else {
      const tpl = { g: new THREE.Group(), box: new THREE.Box3(new THREE.Vector3(-34, -20, -34), new THREE.Vector3(34, 22, 34)), muzzles: [new THREE.Vector3()] };
      const stats = { speed: 0, turn: 0, cargo: 0, shield: 300 + 60 * countBuilt(o, 'turret'), shieldRegen: 6, hull: 900, dps: 0, beamRange: 0, hard: 0, mslCap: 0, mslDmg: 0, energy: 1, energyRegen: 0, sensor: 0 };
      proxy = new Ship(this.g, { kind: 'outpost', tpl, stats, name: o.name });
      proxy.isOutpost = true; proxy.outpostId = o.id; proxy.pos.copy(pos);
      proxy.hp = proxy.maxHp * (o.hp ?? 1);
      proxy.shieldMesh.material.uniforms.uStrength.value = 0;
    }
    if (old) this.g.scene.remove(old.model.group);
    const turrets = model.parts.filter((p) => p.id === 'turret').map((p, i) => {
      const key = `${o.id}:${i}`; // beams are pooled so rebuilding a model doesn't leak them
      if (!this.beamPool.has(key)) this.beamPool.set(key, this.g.fx.makeBeam(0x58e8ff));
      return { head: p.head, muzzles: p.muzzles, beam: this.beamPool.get(key), tgt: null, k: 0 };
    });
    this.rt.set(o.id, { model, proxy, turrets, pos, o });
  }
  rebuild(o) { if (o.sys === this.state.systemId) this.materialize(o); }

  newDay(day) {
    const totals = { lines: 0, earned: 0, up: 0 }, reports = [];
    for (const o of this.list()) {
      const credBefore = o.credits, upBefore = o.upkeepPaid || 0;
      const lines = tickOutpost(o, this.g, day);
      o.log = [{ day, lines }, ...(o.log || [])].slice(0, 6);
      totals.earned += o.credits - credBefore; totals.up += (o.upkeepPaid || 0) - upBefore;
      reports.push(o);
      this.rollRaid(o, day);
      this.rebuild(o);
    }
    if (reports.length && this.g.mode === 'play') {
      this.g.ui.toast(`⌂ Outpost report, Day ${day}: ${reports.map((o) => `${o.name} ${storageUsed(o)}/${storageCap(o)} stored`).join(' · ')}${totals.earned ? ` · trade +◈${fmt(totals.earned)}` : ''} · upkeep ◈${fmt(totals.up)}`, 'info', 6);
    }
  }

  // ---- raids ----
  rollRaid(o, day) {
    if (o.raid) return;
    const s = this.state, n = builtMods(o).length;
    const rw = factionTier(standingWith(s, 'pirate')).raid;
    const fac = this.g.galaxy.systems[o.sys].eco, ft = factionTier(standingWith(s, fac));
    let source = null;
    if (Math.random() < (0.04 + 0.012 * n) * rw) source = 'pirate';
    else if (ft.level <= -1 && Math.random() < 0.08) source = fac;
    if (new URLSearchParams(location.search).get('outpostraid') === '1' && !this._forced) { this._forced = true; source = 'pirate'; }
    if (!source) return;
    const rank = pilotRank(s);
    const at = day + 0.1 + Math.random() * 0.55;
    o.raid = { source, at, due: at + RAID_WINDOW, n: Math.min(5, 1 + Math.floor(rank / 2) + Math.floor(n / 3)), phase: 'pending' };
  }
  forceRaid(o, inSec = 20) { const T = absT(this.state); o.raid = { source: 'pirate', at: T, due: T + inSec / DAY_LENGTH, n: 2, phase: 'pending' }; }
  raidLabel(o) { return o.raid.source === 'pirate' ? 'Red Wake raiders' : `${FACTIONS[o.raid.source].short} enforcers`; }

  update(dt) {
    const s = this.state, T = absT(s), g = this.g;
    for (const o of this.list()) {
      const r = o.raid; if (!r) continue;
      if (r.phase === 'pending' && T >= r.at) {
        r.phase = 'warned';
        const sys = g.galaxy.systems[o.sys].name;
        g.ui.toast(`⚠ ${this.raidLabel(o)} are moving on ${o.name} (${sys})! They hit in about ${Math.round((r.due - T) * DAY_LENGTH)}s. Get there to defend it.`, 'warn', 8);
        g.audio.play('alarm', { vol: 0.8 });
      }
      if (r.phase === 'warned' && T >= r.due) {
        if (o.sys === s.systemId && !g.docked) this.startLiveRaid(o);
        else if (o.sys !== s.systemId) this.autoResolve(o, "You weren't there.");
        // docked in the outpost's system: they wait until you undock
      }
      if (r.phase === 'live') this.checkLiveRaid(o);
    }
    // per-frame visuals, proxy upkeep, turrets
    const t = g.time;
    for (const rr of this.rt.values()) {
      const { model, proxy } = rr;
      if (model.beacon) model.beacon.material.opacity = 0.55 + 0.45 * Math.sin(t * 2);
      for (const p of model.parts) {
        if (p.bit) p.bit.rotation.x += dt * 4;
        if (p.wing) p.wing.rotation.x = Math.sin(t * 0.05) * 0.4;
        if (p.blink) p.blink.visible = Math.sin(t * 6) > 0;
      }
      if (proxy && !proxy.dead) { proxy.updateMotion(dt, null); proxy.updateVisual(dt); }
      this.updateTurrets(rr, dt);
    }
  }
  updateTurrets(rr, dt) {
    const g = this.g, eff = power(rr.o).eff;
    for (const tu of rr.turrets) {
      tu.k -= dt;
      if (tu.k <= 0 || !tu.tgt || tu.tgt.dead) {
        tu.k = 0.5; tu.tgt = null; let bd = 560;
        tu.head.getWorldPosition(_v);
        for (const ob of g.outlaws) { if (ob.dead) continue; const d = ob.pos.distanceTo(_v); if (d < bd) { bd = d; tu.tgt = ob; } }
      }
      if (!tu.tgt || eff <= 0) { tu.beam.visible = false; continue; }
      tu.head.lookAt(tu.tgt.pos); tu.head.rotateY(-Math.PI / 2);
      const m = tu.muzzles[Math.floor(g.time * 4) % tu.muzzles.length];
      _v2.copy(m); tu.head.localToWorld(_v2);
      g.fx.showBeam(tu.beam, _v2, tu.tgt.pos, 1.3);
      const killed = tu.tgt.damage(14 * eff * dt, _v2, rr.proxy);
      g.onShipHit(tu.tgt, rr.proxy, killed);
    }
  }
  startLiveRaid(o) {
    const rr = this.rt.get(o.id); if (!rr) { this.autoResolve(o, ''); return; }
    o.raid.phase = 'live';
    const dir = _v.copy(rr.pos).setY(0).normalize().negate();
    const entry = rr.pos.clone().addScaledVector(dir, 950).add(_v2.set(0, 60, 0));
    const enf = o.raid.source !== 'pirate';
    this.g.spawnOutlaws({ n: o.raid.n, entry, name: enf ? `${FACTIONS[o.raid.source].short} Enforcer` : 'Red Wake Raider', faction: enf ? o.raid.source : null, raidOf: o.id,
      toast: `⚠ ${this.raidLabel(o)} have arrived at ${o.name}! Defend it!` });
  }
  raidTarget(o) { const rr = this.rt.get(o.raidOf); return rr && rr.proxy && !rr.proxy.dead ? rr.proxy : null; }
  checkLiveRaid(o) {
    const left = this.g.outlaws.filter((x) => !x.dead && x.raidOf === o.id);
    if (left.length) return;
    const rr = this.rt.get(o.id);
    if (rr && rr.proxy && !rr.proxy.dead) {
      o.raid = null; o.hp = rr.proxy.hp / rr.proxy.maxHp;
      const fac = this.g.galaxy.systems[o.sys].eco;
      this.g.factionChange(fac, 2);
      this.g.ui.toast(`✓ Raid on ${o.name} repelled! ${FACTIONS[fac].short} +2`, 'good', 5);
      this.g.audio.play('coins', { vol: 0.6 });
    }
  }
  onProxyDestroyed(proxy) {
    const o = this.find(proxy.outpostId); if (!o) return;
    this.g.fx.explosion(proxy.pos.clone(), 3, 0xffa050);
    if (this.g.siege && this.g.siege.isTargetOutpost(o.id)) { // the armada, not a regular raid
      const rr0 = this.rt.get(o.id); if (rr0) rr0.proxy = null; o.hp = 1;
      this.g.siege.defeat('The armada broke through the outpost barrier.');
      setTimeout(() => this.rebuild(o), 3000); return;
    }
    this.raidLost(o, 'The raiders broke through the barrier.');
    for (const x of this.g.outlaws) if (x.raidOf === o.id) x.state = 'flee';
    o.hp = 1;
    const rr = this.rt.get(o.id); if (rr) rr.proxy = null;
    setTimeout(() => this.rebuild(o), 3000); // barrier comes back up
  }
  autoResolve(o, why) {
    const s = this.state, r = o.raid;
    const tur = countBuilt(o, 'turret'), eff = power(o).eff;
    const def = 15 + tur * 35 * eff, att = r.n * (22 + pilotRank(s) * 6);
    const p = def / (def + att), label = this.raidLabel(o);
    for (const x of this.g.outlaws) if (x.raidOf === o.id) x.state = 'flee';
    if (Math.random() < p) {
      o.raid = null;
      this.g.ui.toast(`✓ ${o.name}: ${tur ? `turrets drove off the ${label}` : `the ${label} lost interest`} (${Math.round(p * 100)}% odds). ${why}`, 'good', 6);
      (o.log = o.log || []).unshift({ day: s.day, lines: [`Raid repelled automatically (${Math.round(p * 100)}% odds)`] });
    } else this.raidLost(o, `${why} Defense odds were ${Math.round(p * 100)}%.`);
  }
  raidLost(o, why) {
    let lost = 0;
    for (const k of Object.keys(o.storage)) { const n = Math.ceil(o.storage[k] * 0.5); add(o.storage, k, -n); lost += n; }
    const cr = Math.round(o.credits * 0.5); o.credits -= cr;
    o.raid = null;
    this.g.ui.toast(`✗ ${o.name} was raided: ${lost} stored units${cr ? ` and ◈${fmt(cr)}` : ''} taken. ${why}`, 'warn', 7);
    (o.log = o.log || []).unshift({ day: this.state.day, lines: [`Raided: lost ${lost} units${cr ? `, ◈${fmt(cr)}` : ''}`] });
  }
  persist() { for (const rr of this.rt.values()) if (rr.proxy && !rr.proxy.dead) rr.o.hp = rr.proxy.hp / rr.proxy.maxHp; }

  // ---- interactions ----
  interaction(p) {
    for (const rr of this.rt.values()) if (rr.pos.distanceTo(p.pos) < OUTPOST_REACH) return { type: 'outpost', label: `OUTPOST · ${rr.o.name}`, warm: true, outpost: rr.o };
    if (this.state.charters > 0) for (const st of this.sites()) if (!this.claimed(st) && st.pos.distanceTo(p.pos) < SITE_REACH) return { type: 'establish', label: 'ESTABLISH OUTPOST', warm: true, site: st };
    return null;
  }
  establish(site) {
    const s = this.state;
    if (s.charters <= 0) return;
    if (this.list().length >= maxOutposts(s)) { this.g.ui.toast(`You can run ${maxOutposts(s)} outpost${maxOutposts(s) > 1 ? 's' : ''} at your rank`, 'warn', 3); return; }
    s.charters--;
    this.g.p3.headline(`New independent outpost founded in ${this.g.sysInfo.name} by ${s.p3.callsign}.`);
    const o = { id: `op${Date.now() % 1e9}`, sys: s.systemId, site: { kind: site.kind, index: site.index, ore: site.ore, gas: site.gas, name: site.name }, name: `${site.name} Outpost`,
      founded: s.day, slots: Array(HUB_ARMS).fill(null), storage: {}, credits: 0, log: [], raid: null, hp: 1 };
    s.outposts.push(o);
    this.materialize(o);
    this.g.audio.play('warp', { vol: 0.6, rate: 0.8 });
    this.g.ui.toast(`⌂ ${o.name} established! Open it to plan your first modules.`, 'good', 5);
    this.g.save();
    this.openPanel(o);
  }

  // ---- outpost panel (dialog) ----
  openPanel(o, view = 'main', slot = null) {
    this.panel = { id: o.id, view, slot };
    const box = document.getElementById('dialogBox');
    box.classList.remove('saves'); box.classList.add('outpostBox');
    box.innerHTML = view === 'choose' ? this.chooseHTML(o, slot) : this.mainHTML(o);
    if (!box._opBound) {
      box._opBound = true;
      box.addEventListener('click', (e) => {
        if (!this.panel) return;
        const b = e.target.closest('button[data-op]'); if (!b || b.disabled) return;
        this.panelAction(b.dataset.op, b.dataset.arg);
      });
    }
    document.getElementById('dialog').classList.remove('hidden');
  }
  closePanel() {
    this.panel = null;
    const box = document.getElementById('dialogBox'); box.classList.remove('outpostBox');
    document.getElementById('dialog').classList.add('hidden');
  }
  panelAction(op, arg) {
    const g = this.g, s = this.state, o = this.find(this.panel.id), p = g.player;
    if (!o) { this.closePanel(); return; }
    const i = Number(arg);
    if (op === 'close') { this.closePanel(); return; }
    if (op === 'build') { this.openPanel(o, 'choose', i); return; }
    if (op === 'back') { this.openPanel(o); return; }
    if (op === 'choose') {
      const [slot, id] = arg.split(':'); const M = OUTPOST_MODULES[id];
      if (s.credits >= M.cost && siteRule(o, id)) {
        s.credits -= M.cost;
        o.slots[Number(slot)] = { id, status: 'building', need: { ...M.mats }, paid: M.cost };
        g.audio.play('coins', { vol: 0.6 });
        this.rebuild(o);
      }
      this.openPanel(o); g.save(); return;
    }
    if (op === 'deliver') {
      const sl = o.slots[i]; let moved = 0;
      for (const k of Object.keys(sl.need)) {
        const n = Math.min(sl.need[k], p.cargo[k] || 0); if (n <= 0) continue;
        p.cargo[k] -= n; if (!p.cargo[k]) delete p.cargo[k]; sl.need[k] -= n; if (!sl.need[k]) delete sl.need[k]; moved += n;
      }
      if (!Object.keys(sl.need).length) { sl.status = 'constructing'; sl.ready = s.day + 1; g.ui.toast(`${OUTPOST_MODULES[sl.id].name}: all materials in. Online on Day ${sl.ready}.`, 'good', 4); }
      else if (moved) g.ui.toast(`Delivered ${moved} units`, 'info', 2);
      else g.ui.toast('You have none of the materials still needed', 'warn', 2.5);
      g.audio.play('click', { vol: 0.5 });
    }
    if (op === 'cancel') { const sl = o.slots[i]; g.addCredits(Math.round(sl.paid / 2)); o.slots[i] = null; this.rebuild(o); }
    if (op === 'scrap') { const sl = o.slots[i]; g.addCredits(Math.round(OUTPOST_MODULES[sl.id].cost / 4)); o.slots[i] = null; this.rebuild(o); }
    if (op === 'load' || op === 'loadall') {
      const keys = op === 'load' ? [arg] : Object.keys(o.storage).sort((a, b) => COMM[b].base - COMM[a].base);
      let moved = 0;
      for (const k of keys) { const n = Math.min(o.storage[k] || 0, g.cargoFree()); if (n <= 0) continue; add(o.storage, k, -n); p.cargo[k] = (p.cargo[k] || 0) + n; moved += n; }
      if (!moved) g.ui.toast('Cargo hold full', 'warn', 2);
    }
    if (op === 'unload') { // drop materials from the hold into storage (e.g. ore for the refinery)
      let room = storageCap(o) - storageUsed(o), moved = 0;
      for (const k of Object.keys(p.cargo).filter((k) => COMM[k].kind === 'ore')) { const n = Math.min(room, p.cargo[k]); if (n <= 0) continue; p.cargo[k] -= n; if (!p.cargo[k]) delete p.cargo[k]; add(o.storage, k, n); room -= n; moved += n; }
      g.ui.toast(moved ? `Stored ${moved} ore for the refinery` : 'No ore in your hold, or storage is full', moved ? 'info' : 'warn', 2.5);
    }
    if (op === 'collect' && o.credits > 0) { g.addCredits(o.credits); g.audio.play('coins', { vol: 0.8 }); o.credits = 0; }
    g.save();
    this.openPanel(o, this.panel.view, this.panel.slot);
  }
  mainHTML(o) {
    const g = this.g, s = this.state, pw = power(o), sys = g.galaxy.systems[o.sys];
    const raid = o.raid && o.raid.phase !== 'pending' ? `<p class="op-raid">⚠ ${this.raidLabel(o)} ${o.raid.phase === 'live' ? 'are attacking now!' : `arrive in ${Math.max(0, Math.round((o.raid.due - absT(s)) * DAY_LENGTH))}s`}</p>` : '';
    const slots = o.slots.map((sl, i) => {
      if (!sl) return `<div class="op-slot empty"><b>Arm ${i + 1}</b><small>Empty</small><button class="sbtn buy" data-op="build" data-arg="${i}">BUILD</button></div>`;
      const M = OUTPOST_MODULES[sl.id];
      if (sl.status === 'built') return `<div class="op-slot built"><b>${M.name}</b><small>${M.power > 0 ? `+${M.power}` : M.power} power</small><button class="sbtn" data-op="scrap" data-arg="${i}">SCRAP +◈${fmt(M.cost / 4)}</button></div>`;
      if (sl.status === 'constructing') return `<div class="op-slot building"><b>${M.name}</b><small>Assembling: online Day ${sl.ready}</small></div>`;
      const need = Object.entries(sl.need).map(([k, n]) => `${n} ${COMM[k].name} <i>(have ${g.player.cargo[k] || 0})</i>`).join('<br>');
      return `<div class="op-slot building"><b>${M.name}</b><small>Needs:<br>${need}</small><button class="sbtn buy" data-op="deliver" data-arg="${i}">DELIVER FROM HOLD</button><button class="sbtn" data-op="cancel" data-arg="${i}">CANCEL (½ refund)</button></div>`;
    }).join('');
    const stock = Object.entries(o.storage).sort((a, b) => COMM[b[0]].base - COMM[a[0]].base)
      .map(([k, n]) => `<div class="op-row"><span><i class="dot" style="background:${COMM[k].color}"></i>${COMM[k].name}</span><b>${n}</b><button class="sbtn" data-op="load" data-arg="${k}">LOAD</button></div>`).join('') || '<p><small>Nothing stored yet.</small></p>';
    const log = (o.log || []).slice(0, 3).map((l) => `<p><small><b>Day ${l.day}:</b> ${l.lines.join(' · ')}</small></p>`).join('');
    return `<div class="ov-title">⌂ ${o.name.toUpperCase()}</div>
      <p><small>${sys.name} · ${FACTIONS[sys.eco].name} space · site ore: <b>${COMM[o.site.ore].name}</b>${o.site.gas ? ' (gas giant: siphon only)' : ''}</small></p>
      <div class="op-stats"><span>Power <b class="${pw.eff < 1 ? 'bad' : ''}">${pw.sup}/${pw.dem}</b></span><span>Storage <b>${storageUsed(o)}/${storageCap(o)}</b></span><span>Upkeep <b>◈${fmt(upkeep(o))}/day</b></span><span>Hold free <b>${g.cargoFree()}</b></span></div>
      ${raid}
      <div class="op-slots">${slots}</div>
      <div class="op-head"><b>STORAGE</b><span><button class="sbtn" data-op="unload">STORE MY ORE</button> <button class="sbtn buy" data-op="loadall">LOAD ALL</button> <button class="sbtn buy" data-op="collect" ${o.credits ? '' : 'disabled'}>COLLECT ◈${fmt(o.credits)}</button></span></div>
      ${stock}
      ${log ? `<div class="op-head"><b>REPORTS</b></div>${log}` : ''}
      <button class="pbtn primary" data-op="close">CLOSE</button>`;
  }
  chooseHTML(o, slot) {
    const s = this.state;
    const cards = MODULE_IDS.map((id) => {
      const M = OUTPOST_MODULES[id], ok = siteRule(o, id), afford = s.credits >= M.cost;
      const mats = Object.entries(M.mats).map(([k, n]) => `${n} ${COMM[k].name}`).join(', ');
      const why = !ok ? (M.site === 'gas' ? 'GAS GIANT SITES ONLY' : 'NOT ON A GAS GIANT') : !afford ? `NEED ◈${fmt(M.cost)}` : '';
      return `<div class="op-mod"><div><b>${M.name}</b> <small>${M.power > 0 ? `+${M.power}` : M.power} power</small><br><small>${M.desc}</small><br><small>Cost: <b>◈${fmt(M.cost)}</b> + ${mats}</small></div>
        <button class="sbtn buy" data-op="choose" data-arg="${slot}:${id}" ${why ? 'disabled' : ''}>${why || 'BUILD'}</button></div>`;
    }).join('');
    return `<div class="ov-title">BUILD ON ARM ${slot + 1}</div><p><small>Credits are paid now. Then haul the materials here and press DELIVER; the module comes online the next day. You have ◈${fmt(s.credits)}.</small></p>${cards}
      <button class="pbtn secondary" data-op="back">BACK</button>`;
  }

  // ---- HUD / map helpers ----
  markers() {
    const out = [];
    for (const rr of this.rt.values()) out.push({ key: `op_${rr.o.id}`, pos: rr.pos, name: `⌂ ${rr.o.name}${rr.o.raid && rr.o.raid.phase !== 'pending' ? ' · ⚠ RAID' : ''}`, edge: true, cls: 'outpost' + (rr.o.raid && rr.o.raid.phase !== 'pending' ? ' raid' : '') });
    if (this.state.charters > 0) for (const st of this.sites()) if (!this.claimed(st) && st.pos.distanceTo(this.g.player.pos) < 6000) out.push({ key: `site_${st.kind}${st.index}`, pos: st.pos, name: `⌂ OUTPOST SITE · ${COMM[st.ore].name}`, edge: false, cls: 'site' });
    return out;
  }
  mapItems() {
    const out = [];
    for (const rr of this.rt.values()) out.push({ kind: 'outpost', outpost: rr.o, pos: rr.pos, name: rr.o.name, color: '#9ff0ff', r: 6, arrive: 120 });
    if (this.state.charters > 0) for (const st of this.sites()) if (!this.claimed(st)) out.push({ kind: 'site', site: st, pos: st.pos, name: `Site · ${st.name}`, color: '#c8f56a', r: 4, arrive: 60 });
    return out;
  }
  // the raid you most need to know about, for the HUD banner
  urgent() {
    const s = this.state;
    const r = this.list().filter((o) => o.raid && o.raid.phase !== 'pending').sort((a, b) => a.raid.due - b.raid.due)[0];
    if (!r) return null;
    const secs = Math.max(0, Math.round((r.raid.due - absT(s)) * DAY_LENGTH));
    const where = r.sys === s.systemId ? 'this system' : this.g.galaxy.systems[r.sys].name;
    return { o: r, text: r.raid.phase === 'live' ? `⚠ DEFEND ${r.name.toUpperCase()}!` : `⚠ RAID ON ${r.name.toUpperCase()} (${where}) IN ${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, '0')}` };
  }
  courseTo(o) {
    const g = this.g, s = this.state;
    if (g.docked) g.undock();
    if (o.sys === s.systemId) { const rr = this.rt.get(o.id); if (rr) g.setAutopilot(rr.pos, o.name, 150); return; }
    g.setCourse(o.sys, { type: 'outpost', id: o.id });
  }
}
export { systemData };
