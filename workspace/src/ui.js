import { unlocked, isAccordEco } from './story.js';
import { licenseNeeds, LICENSE_PRICE } from './accord.js';
import * as THREE from 'three';
import { COMMODITIES, COMM, ECONOMIES, HULLS, HULL_ORDER, MODULES, MODULE_ORDER, modulePrice, statLine, emptyMods, computeStats, DAY_LENGTH } from './data.js';
import { fmt, clamp } from './rng.js';
import { pilotRank, netWorth, RANK_NAMES } from './economy.js';
import { SLOT_COUNT, autoInfo, readSlot, writeSlot, summarize, exportText, exportName, parseImport, ago } from './save.js';
import { liveEvents, describe, eventIcon } from './events.js';
import { CHARTER_PRICE, maxOutposts, storageUsed, storageCap, builtMods } from './outposts.js';
import { MILITIA_PRICE, MILITIA_MAX } from './siege.js';
import { SKILLS, ROUTE_WAGE, maxWingmen, skillOf } from './fleet.js';
import { jumpsFrom } from './missions.js';
import { PROTOTYPES, PROTO_IDS, hasFabricator, moduleMats, matsText, haveMats, takeMats } from './craft.js';
import { LORE, TYPES, PROBE_PRICE, PROBE_MAX, FRAGMENTS_TO_UNLOCK, systemExploreStatus } from './explore.js';
import { FACTIONS, FACTION_ORDER, UNIQUES, UNIQUE_BY_FACTION, factionTier, nextFactionTier, standingWith, tierPerks, uniqueSlots } from './factions.js';
import { MAX_ACTIVE, offersFor, missionSpace, boundToShip, typeTag, modTags, destText, needText, dueText, reqMet, reqText, standingOf, standingTier, nextStanding } from './missions.js';

const $ = (id) => document.getElementById(id);
const _p = new THREE.Vector3();
const ECO_COL = { agricultural: '#7bc86c', mining: '#d9a35a', industrial: '#9aa6b8', hightech: '#3fb8c8', frontier: '#f0703c' };
const g_sys = (g, m) => g.galaxy.systems[m.dest.sys].name;

export class UI {
  constructor(game) {
    this.g = game;
    this.markers = new Map();
    this.radarT = 0;
    this.stTab = 'market';
    this.mapTab = 'system';
    this.mapSel = null;
    const st = $('stamps');
    for (let i = 0; i < 12; i++) { const s = document.createElement('i'); s.style.setProperty('--r', `${(Math.sin(i * 7.3) * 2.2).toFixed(1)}deg`); st.appendChild(s); }
    this.bindStart(); this.bindInput(); this.bindHud(); this.bindOverlays();
  }

  // ------------------------------------------------------------ start
  setLoading(f, label) {
    const n = Math.floor(clamp(f, 0, 1) * 12 + 1e-6);
    [...$('stamps').children].forEach((s, i) => s.classList.toggle('on', i < n));
    $('loadPct').textContent = `${Math.round(f * 100)}%`;
    if (label) $('loadText').textContent = label;
    $('btnStart').textContent = `LOADING ${Math.round(f * 100)}%`;
  }
  showReady(hasSave) {
    const b = $('btnStart'); b.disabled = false; b.textContent = hasSave ? 'CONTINUE' : 'LAUNCH';
    $('loadText').textContent = 'Systems online · ready';
    if (hasSave) $('btnNew').classList.remove('hidden');
    $('btnSavesStart').classList.remove('hidden');
  }
  bindStart() {
    const newCareer = () => this.g.story.chooseOrigin((id) => this.g.startGame(true, id));
    $('btnStart').addEventListener('click', () => { this.g.audio.unlock(); if (this.g.hasSave) this.g.startGame(false); else newCareer(); });
    $('btnNew').addEventListener('click', () => { this.g.audio.unlock(); newCareer(); });
    $('btnSavesStart').addEventListener('click', () => { this.g.audio.unlock(); this.openSaves('start'); });
  }
  enterPlay() {
    const s = $('start'); s.classList.add('leaving');
    setTimeout(() => s.classList.add('hidden'), 320);
    $('hud').classList.remove('hidden');
    this.onSystemChanged();
  }

  storyOk() { return $('dialog').classList.contains('hidden') && $('pause').classList.contains('hidden'); }
  modalOpen() { return !$('station').classList.contains('hidden') || !$('mapOv').classList.contains('hidden') || !$('pause').classList.contains('hidden') || !$('dialog').classList.contains('hidden'); }

  // ------------------------------------------------------------ input
  bindInput() {
    const inp = this.g.input;
    const zone = $('stickZone'), stick = $('stick'), knob = $('stickKnob');
    let sid = null, ox = 0, oy = 0;
    const R = 55;
    zone.addEventListener('pointerdown', (e) => {
      if (sid !== null) return; sid = e.pointerId; zone.setPointerCapture(e.pointerId);
      ox = e.clientX; oy = e.clientY; stick.style.left = `${ox}px`; stick.style.top = `${oy}px`; stick.classList.add('on');
      knob.style.transform = 'translate(0,0)';
    });
    zone.addEventListener('pointermove', (e) => {
      if (e.pointerId !== sid) return;
      let dx = e.clientX - ox, dy = e.clientY - oy; const d = Math.hypot(dx, dy);
      if (d > R) { dx *= R / d; dy *= R / d; }
      knob.style.transform = `translate(${dx}px,${dy}px)`;
      const curve = (v) => Math.sign(v) * Math.pow(Math.max(0, Math.abs(v) - 0.08) / 0.92, 1.3);
      inp.sx = curve(dx / R); inp.sy = curve(-dy / R);
    });
    const end = (e) => { if (e.pointerId !== sid) return; sid = null; inp.sx = 0; inp.sy = 0; stick.classList.remove('on'); };
    zone.addEventListener('pointerup', end); zone.addEventListener('pointercancel', end);

    const thr = $('throttle');
    let tid = null;
    const setThr = (e) => { const r = thr.getBoundingClientRect(); inp.throttle = clamp(1 - (e.clientY - r.top) / r.height, 0, 1); };
    thr.addEventListener('pointerdown', (e) => { tid = e.pointerId; thr.setPointerCapture(e.pointerId); setThr(e); });
    thr.addEventListener('pointermove', (e) => { if (e.pointerId === tid) setThr(e); });
    thr.addEventListener('pointerup', () => (tid = null)); thr.addEventListener('pointercancel', () => (tid = null));

    const hold = (el, key) => {
      el.addEventListener('pointerdown', (e) => { e.preventDefault(); el.setPointerCapture(e.pointerId); inp[key] = true; el.classList.add('on'); });
      const up = () => { inp[key] = false; el.classList.remove('on'); };
      el.addEventListener('pointerup', up); el.addEventListener('pointercancel', up); el.addEventListener('lostpointercapture', up);
    };
    hold($('btnFire'), 'fire'); hold($('btnBoost'), 'boost');
    $('btnMissile').addEventListener('pointerdown', (e) => { e.preventDefault(); this.g.fireMissile(); });
    $('btnTarget').addEventListener('pointerdown', (e) => { e.preventDefault(); this.g.cycleTarget(); });
    $('btnCruise').addEventListener('pointerdown', (e) => { e.preventDefault(); this.g.setCruise(!this.g.player.cruise); });
    const act = $('btnAction');
    act.addEventListener('pointerdown', (e) => {
      e.preventDefault(); act.setPointerCapture(e.pointerId);
      const a = this.g.currentAction; if (!a) return;
      if (a.hold) { inp.mine = true; act.classList.add('on'); } else { this.g.audio.play('click', { vol: 0.5 }); this.g.doAction(a); }
    });
    const actUp = () => { inp.mine = false; act.classList.remove('on'); };
    act.addEventListener('pointerup', actUp); act.addEventListener('pointercancel', actUp); act.addEventListener('lostpointercapture', actUp);

    // keyboard fallback
    const keys = new Set();
    const applyKeys = () => {
      if (sid !== null) return;
      inp.sx = (keys.has('d') || keys.has('arrowright') ? 1 : 0) - (keys.has('a') || keys.has('arrowleft') ? 1 : 0);
      inp.sy = (keys.has('w') || keys.has('arrowup') ? 1 : 0) - (keys.has('s') || keys.has('arrowdown') ? 1 : 0);
    };
    window.addEventListener('keydown', (e) => {
      const k = e.key.toLowerCase();
      if (this.g.mode !== 'play') return;
      if (k === 'escape') { this.togglePause(); return; }
      if (this.modalOpen()) return;
      if (!keys.has(k)) {
        if (k === ' ') inp.fire = true;
        if (k === 'shift') inp.boost = true;
        if (k === 'q') this.g.fireMissile();
        if (k === 't') this.g.cycleTarget();
        if (k === 'c') this.g.setCruise(!this.g.player.cruise);
        if (k === 'm') this.openMap();
        if (k === 'r') inp.throttle = clamp(inp.throttle + 0.25, 0, 1);
        if (k === 'f') inp.throttle = clamp(inp.throttle - 0.25, 0, 1);
        if (k === 'e') { const a = this.g.currentAction; if (a) { if (a.hold) inp.mine = true; else this.g.doAction(a); } }
      }
      keys.add(k); applyKeys();
      if ([' ', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright'].includes(k)) e.preventDefault();
    });
    window.addEventListener('keyup', (e) => {
      const k = e.key.toLowerCase(); keys.delete(k); applyKeys();
      if (k === ' ') inp.fire = false; if (k === 'shift') inp.boost = false; if (k === 'e') inp.mine = false;
    });
    window.addEventListener('blur', () => { keys.clear(); inp.fire = inp.boost = inp.mine = false; inp.sx = inp.sy = 0; });
  }

  bindHud() {
    $('btnMap').addEventListener('click', () => this.openMap());
    $('btnMenu').addEventListener('click', () => this.togglePause());
    window.addEventListener('resize', () => { this.layoutT = 0; });
    $('apCancel').addEventListener('click', () => { const had = this.g.autopilot; this.g.autopilot = null; this.g.player.cruise = false; if (!had) this.g.cancelCourse(); });
  }

  // ------------------------------------------------------------ toasts / fx
  toast(msg, kind = '', secs = 3) {
    const st = this.g.state;
    if (st) { // keep a history so announcements can be re-read later (pause menu → MESSAGE LOG)
      if (!Array.isArray(st.msgLog)) st.msgLog = [];
      const h = Math.floor((st.dayTime || 0) * 24), mi = Math.floor(((st.dayTime || 0) * 24 - h) * 60);
      const last = st.msgLog[0];
      if (!last || last.m !== msg) st.msgLog.unshift({ d: st.day, t: `${String(h).padStart(2, '0')}:${String(mi).padStart(2, '0')}`, m: msg, k: kind });
      if (st.msgLog.length > 80) st.msgLog.length = 80;
    }
    const box = $('toasts');
    while (box.children.length > 3) box.firstChild.remove();
    const t = document.createElement('div'); t.className = `toast ${kind}`; t.textContent = msg; box.appendChild(t);
    setTimeout(() => { t.classList.add('out'); setTimeout(() => t.remove(), 320); }, secs * 1000);
  }
  creditFlash() { const c = $('credChip'); c.classList.remove('flash'); void c.offsetWidth; c.classList.add('flash'); }
  cargoTick() { this._cargoPulse = 0.3; }
  damagePulse() { this.g.post.grade.uniforms.uDamage.value = Math.min(1, this.g.post.grade.uniforms.uDamage.value + 0.08); this.g.pad.rumble(0.2, 0.45, 90); }
  warpFlash(on) { $('warpFlash').classList.toggle('on', on); }
  onSystemChanged() {
    const s = this.g.sysInfo; if (!s) return;
    $('sysName').textContent = s.name; $('sysEco').textContent = `${isAccordEco(s.eco) ? 'ACCORD' : 'FRINGE'} · ${ECONOMIES[s.eco].name} · ${FACTIONS[s.eco].short} · risk ${Math.round(s.danger * (isAccordEco(s.eco) ? 55 : 115))}%`;
    if (this.mapView) this.resetMapView('system');
  }

  // ------------------------------------------------------------ HUD update
  update(dt) {
    const g = this.g, p = g.player, st = g.state;
    if (!p) return;
    $('hud').classList.toggle('docked', g.docked);
    $('credChip').textContent = `◈ ${fmt(st.credits)}`;
    const hours = Math.floor(st.dayTime * 24), mins = Math.floor((st.dayTime * 24 - hours) * 60);
    $('dayChip').textContent = `DAY ${st.day} · ${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
    $('barHull').style.width = `${(p.hp / p.maxHp) * 100}%`;
    $('barShield').style.width = `${p.maxShield ? (p.shield / p.maxShield) * 100 : 0}%`;
    $('barEnergy').style.width = `${(p.energy / p.maxEnergy) * 100}%`;
    const fpct = p.stats.fuel ? p.fuel / p.stats.fuel : 0; $('barFuel').style.width = `${fpct * 100}%`; $('barFuel').classList.toggle('low', fpct <= 0.15);
    $('cargoTxt').textContent = `${p.cargoUsed()}/${p.stats.cargo}`;
    $('spdTxt').textContent = `${Math.round(p.speed)} m/s`;
    $('thrFill').style.height = `${g.input.throttle * 100}%`; $('thrKnob').style.bottom = `${g.input.throttle * 100}%`;
    const msl = $('btnMissile'); msl.classList.toggle('dim', p.stats.mslCap === 0 || p.missiles === 0); $('mslCount').textContent = p.stats.mslCap ? `${p.missiles}/${p.stats.mslCap}` : '—';
    $('btnCruise').classList.toggle('cruise-on', p.cruise);
    $('btnFire').classList.toggle('on', g.input.fire);
    // action button
    const a = g.currentAction, ab = $('btnAction');
    if (a && !g.docked && !p.dead) {
      ab.classList.remove('hidden'); ab.classList.toggle('warm', !!a.warm);
      const label = a.type === 'mine' && g.input.mine ? `${a.label} · ${Math.max(0, Math.round(a.node.amount))}` : a.label;
      if (ab.textContent !== label) ab.textContent = label;
    } else ab.classList.add('hidden');
    // autopilot
    const course = st.course;
    $('autopilot').classList.toggle('hidden', !g.autopilot && !course);
    if (g.autopilot) $('apName').textContent = `${g.autopilot.name} · ${this.dist(g.autopilot.pos.distanceTo(p.pos))}`;
    else if (course) { const h = g.courseHop(); $('apName').textContent = h ? `COURSE: ${course.name} · next jump ${g.galaxy.systems[h.next].name} (follow ▶)` : `COURSE: ${course.name}`; }
    // target panel
    const t = g.target, tp = $('targetPanel');
    if (t && !t.dead) {
      tp.classList.remove('hidden'); tp.classList.toggle('hostile', t.kind === 'outlaw');
      $('tpName').textContent = `${t.kind === 'outlaw' ? '⚠ ' : ''}${t.name}`;
      $('tpDist').textContent = this.dist(t.pos.distanceTo(p.pos));
      $('tpShield').style.width = `${t.maxShield ? (t.shield / t.maxShield) * 100 : 0}%`;
      $('tpHull').style.width = `${(t.hp / t.maxHp) * 100}%`;
      let info = t.isBase ? 'PIRATE BASE · armed fortress' : t.kind === 'outlaw' ? (t.guardOf ? 'BASE GUARD' : 'OUTLAW · hunting cargo') : t.disabled ? 'TRADER · DISABLED, broadcasting distress' : 'TRADER';
      if (p.stats.sensorLvl >= 1) {
        const c = Object.entries(t.cargo).filter(([, q]) => q > 0).map(([k, q]) => `${q} ${COMM[k].name}`).join(', ');
        info += c ? ` · ${c}` : ' · empty hold';
        if (t.kind === 'trader' && t.dest) info += ` · → ${t.dest.type === 'station' ? 'station' : this.g.galaxy.systems[t.dest.gate.to].name}`;
      } else info += ' · (Sensor Mk1 to scan cargo)';
      $('tpInfo').textContent = info;
    } else tp.classList.add('hidden');
    this.updateRaidBanner();
    this.updateMarkers();
    this.radarT -= dt;
    if (this.radarT <= 0) { this.radarT = 0.1; this.drawRadar(); }
    this.layoutT = (this.layoutT || 0) - dt;
    if (this.layoutT <= 0) { this.layoutT = 0.25; this.layoutHudLeft(); this.layoutTopStack(); }
  }

  updateRaidBanner() {
    let el = $('raidBanner');
    if (!el) {
      el = document.createElement('div'); el.id = 'raidBanner'; el.className = 'hidden';
      el.innerHTML = '<span></span><button>SET COURSE</button>';
      el.querySelector('button').addEventListener('click', () => { if (this.g.siege.urgent()) { this.g.siege.courseTo(); return; } const u = this.g.outposts.urgent(); if (u) this.g.outposts.courseTo(u.o); });
      $('topStack').insertBefore(el, $('toasts'));
    }
    const u = this.g.siege.urgent() || this.g.outposts.urgent();
    el.classList.toggle('hidden', !u);
    if (u && el.firstChild.textContent !== u.text) el.firstChild.textContent = u.text;
  }

  // The top bar wraps to more rows with long system names, big credit totals or larger phone text
  // settings, so place the radar (and, in portrait, the status panel under it) from its measured bottom.
  layoutHudLeft() {
    // keep the top bar clear of MAP / pause; chips wrap onto extra rows (and truncate) instead of sliding under them
    const tbEl = $('topbar'), tr = $('topright').getBoundingClientRect(), tb0 = tbEl.getBoundingClientRect();
    if (tr.width && tb0.width) {
      const maxW = `${Math.max(120, Math.floor(tr.left - tb0.left - 10))}px`;
      if (tbEl.style.maxWidth !== maxW) tbEl.style.maxWidth = maxW;
    }
    const bar = tbEl.getBoundingClientRect(); if (!bar.height) return;
    const radar = $('radarWrap');
    const rTop = Math.round(bar.bottom + 8);
    if (radar.style.top !== `${rTop}px`) radar.style.top = `${rTop}px`;
    const status = $('status');
    if (window.innerHeight > window.innerWidth) {
      const sTop = Math.round(radar.getBoundingClientRect().bottom + 14);
      if (status.style.top !== `${sTop}px`) status.style.top = `${sTop}px`;
    } else if (status.style.top) status.style.top = ''; // landscape: status stays anchored bottom-left
  }

  // Fit the target/autopilot/notification column into the free area of the HUD: below the top bar,
  // right of the left-side panels and left of the right-side touch controls, so it never covers a control.
  layoutTopStack() {
    const st = $('topStack'); const W = window.innerWidth, H = window.innerHeight;
    const r = (id) => { const el = $(id); if (!el || el.offsetParent === null) return null; const b = el.getBoundingClientRect(); return b.width ? b : null; };
    const portrait = H > W;
    const top = Math.max(...['topbar', 'topright'].map(r).filter(Boolean).map((b) => b.bottom)) + 10;
    // left obstacles: radar (both orientations) and, in portrait, the status panel stacked under it
    const leftObs = [r('radarWrap'), portrait ? r('status') : null].filter(Boolean);
    let left = Math.max(10, ...leftObs.map((b) => b.right + 10));
    // right obstacles: the action-button cluster and throttle
    const rightEdges = ['btnAction', 'btnFire', 'btnMissile', 'btnBoost', 'btnCruise', 'btnTarget', 'throttle'].map(r).filter(Boolean);
    let right, bottom;
    if (portrait) {
      // portrait: use the column under MAP down to the top of the touch controls
      right = W - 10;
      bottom = Math.min(H - 10, ...rightEdges.map((b) => b.top - 10));
    } else {
      right = Math.min(W - 10, ...rightEdges.map((b) => b.left - 10));
      const status = r('status');
      bottom = status && status.left < right ? status.top - 10 : H - 10;
      // landscape: centre the column within the free band, capped at a comfortable width
      const maxW = 440; if (right - left > maxW) { const mid = (left + right) / 2; left = mid - maxW / 2; right = mid + maxW / 2; }
    }
    st.classList.add('placed');
    Object.assign(st.style, { left: `${Math.round(left)}px`, top: `${Math.round(top)}px`, width: `${Math.max(140, Math.round(right - left))}px`, maxHeight: `${Math.max(60, Math.round(bottom - top))}px` });
  }
  dist(d) { return d >= 1000 ? `${(d / 1000).toFixed(1)}km` : `${Math.round(d)}m`; }
  // one entry per distinct place to fly for active contracts (merged when several share it)
  missionTargets() {
    const out = new Map();
    for (const m of this.g.state.missions) {
      const t = this.g.missionTarget(m); if (!t) continue;
      const e = out.get(t.key); if (e) e.n++; else out.set(t.key, { ...t, n: 1 });
    }
    return [...out.values()];
  }

  updateMarkers() {
    const g = this.g, W = g.world, p = g.player, cam = g.camera;
    const w = window.innerWidth, h = window.innerHeight;
    const list = [];
    list.push({ key: 'station', pos: W.station.pos, cls: 'station', name: W.station.name, edge: true });
    const hop = g.courseHop();
    W.gates.forEach((gt, i) => { const on = hop && hop.next === gt.to; list.push({ key: `gate${i}`, pos: gt.pos, cls: on ? 'gate route' : 'gate', name: on ? `▶ NEXT JUMP: ${g.galaxy.systems[gt.to].name}${g.state.course.sys !== gt.to ? ` → ${g.state.course.name}` : ''}` : `⟶ ${g.galaxy.systems[gt.to].name}`, edge: !!on }); });
    W.fields.forEach((f, i) => { if (f.surge || f.center.distanceTo(p.pos) > f.radius) list.push({ key: `field${i}`, pos: f.center, cls: f.surge ? 'field surge' : 'field', name: f.surge ? `✦ LUMENITE SURGE · ${f.name}` : `${f.name} · ${COMM[f.primary].name}`, edge: !!f.surge }); });
    for (const m of g.events.markers()) list.push({ ...m, cls: 'event' + (m.ship === g.target ? ' target' : '') });
    for (const m of g.outposts.markers()) list.push(m);
    for (const m of g.explore.markers()) list.push(m);
    for (const a of g.fleet.wings) if (!a.dead && a.pos.distanceTo(p.pos) < p.stats.sensor) list.push({ key: `s${a.uid}`, pos: a.pos, cls: 'ally', name: a.name.split(' ')[0] });
    for (const m of g.accord.markers()) list.push(m);
    for (const a of g.siege.allies) if (!a.dead && a.pos.distanceTo(p.pos) < p.stats.sensor) list.push({ key: `s${a.uid}`, pos: a.pos, cls: 'ally', name: a.name });
    W.deposits.forEach((d, i) => { if (d.pos.distanceTo(p.pos) < 5000 && d.amount > 0) list.push({ key: `dep${i}`, pos: d.pos, cls: 'deposit', name: `◆ ${COMM[d.ore].name} deposit` }); });
    W.derelicts.forEach((d, i) => { if (!d.occupied && d.pos.distanceTo(p.pos) < p.stats.sensor) list.push({ key: `der${i}`, pos: d.pos, cls: 'derelict', name: d.name }); });
    for (const t of g.traders) if (!t.dead && !(t.disabled && t.eventId) && t.pos.distanceTo(p.pos) < p.stats.sensor) list.push({ key: `s${t.uid}`, pos: t.pos, cls: 'trader' + (t === g.target ? ' target' : ''), name: t.name, edge: t === g.target });
    for (const o of g.outlaws) if (!o.dead && !o.isBase && o.pos.distanceTo(p.pos) < p.stats.sensor) list.push({ key: `s${o.uid}`, pos: o.pos, cls: 'outlaw' + (o === g.target ? ' target' : ''), name: o.name, edge: true });
    for (let i = 0; i < g.fx.crates.length; i++) { const c = g.fx.crates[i]; if (c.pos.distanceTo(p.pos) < 900) list.push({ key: `c${i}`, pos: c.pos, cls: 'crate', name: c.credits ? '◈ bounty' : 'cargo' }); }
    if (g.autopilot) list.push({ key: 'ap', pos: g.autopilot.pos, cls: 'station', name: `AP: ${g.autopilot.name}`, edge: true });
    for (const m of g.missionsAboard()) if (m.side && m.side.kind === 'detour' && !m.side.done && m.side.sys === g.state.systemId) list.push({ key: `side_${m.id}`, pos: g.landingPoint(m.side.planet), cls: 'mission', name: `SIDE REQUEST · ${m.side.name}`, edge: true });
    for (const t of this.missionTargets()) list.push({ key: `ms_${t.key}`, pos: t.pos, cls: 'mission', name: t.via ? `CONTRACT ROUTE${t.n > 1 ? ` ×${t.n}` : ''}` : `CONTRACT${t.n > 1 ? ` ×${t.n}` : ''} · ${t.name}`, edge: true });
    const seen = new Set();
    const box = $('markers');
    const placed = [];
    for (const m of list) {
      seen.add(m.key);
      let el = this.markers.get(m.key);
      if (!el) { el = document.createElement('div'); el.innerHTML = '<span class="ic"></span><span class="tx"></span>'; box.appendChild(el); this.markers.set(m.key, el); }
      _p.copy(m.pos).project(cam);
      const behind = _p.z > 1;
      let x = (_p.x * 0.5 + 0.5) * w, y = (-_p.y * 0.5 + 0.5) * h;
      const on = !behind && x > 0 && x < w && y > 0 && y < h;
      if (!on && !m.edge) { el.style.display = 'none'; continue; }
      el.style.display = '';
      let cls = `mk ${m.cls}`;
      if (!on) {
        let dx = x - w / 2, dy = y - h / 2; if (behind) { dx = -dx; dy = -dy; }
        const s = Math.min((w / 2 - 40) / Math.abs(dx || 1e-3), (h / 2 - 50) / Math.abs(dy || 1e-3));
        x = w / 2 + dx * s; y = h / 2 + dy * s; cls += ' edge';
      }
      if (el.className !== cls) el.className = cls;
      // declutter: nudge labels that would overlap an already placed one
      for (let k = 0; k < 4; k++) { const hit = placed.find((q) => Math.abs(q[0] - x) < 110 && Math.abs(q[1] - y) < 16); if (!hit) break; y = hit[1] + 17; }
      placed.push([x, y]);
      el.style.left = `${x}px`; el.style.top = `${y}px`;
      const dy = m.pos.y - p.pos.y, alt = Math.abs(dy) > 400 ? (dy > 0 ? ' ▲' : ' ▼') : '';
      const txt = `${m.name} ${this.dist(m.pos.distanceTo(p.pos))}${alt}`;
      const tx = el.lastChild; if (tx.textContent !== txt) tx.textContent = txt;
    }
    for (const [k, el] of this.markers) if (!seen.has(k)) { el.remove(); this.markers.delete(k); }
  }

  drawRadar() {
    const g = this.g, p = g.player, W = g.world;
    const c = $('radar'), x = c.getContext('2d'); const S = c.width, R = S / 2 - 6;
    x.clearRect(0, 0, S, S);
    x.save(); x.translate(S / 2, S / 2);
    x.strokeStyle = 'rgba(239,230,210,.25)'; x.lineWidth = 1.5;
    for (const r of [R, R * 0.66, R * 0.33]) { x.beginPath(); x.arc(0, 0, r, 0, Math.PI * 2); x.stroke(); }
    const range = p.stats.sensor;
    const cy = Math.cos(p.yaw), sy = Math.sin(p.yaw);
    const plot = (pos, color, size, shape = 'dot') => {
      const dx = pos.x - p.pos.x, dz = pos.z - p.pos.z;
      // rotate so ship forward is up; screen right = ship right (-X when yaw=0)
      const fx = dx * sy + dz * cy, rx = -(dx * cy - dz * sy);
      let px = (rx / range) * R, py = -(fx / range) * R;
      const d = Math.hypot(px, py); if (d > R) { if (shape !== 'edge') return; px *= R / d; py *= R / d; }
      x.fillStyle = color;
      if (shape === 'ring') { x.strokeStyle = color; x.lineWidth = 2; x.beginPath(); x.arc(px, py, size, 0, Math.PI * 2); x.stroke(); return; }
      x.beginPath(); if (shape === 'sq') x.rect(px - size, py - size, size * 2, size * 2); else x.arc(px, py, size, 0, Math.PI * 2); x.fill();
    };
    for (const f of W.fields) plot(f.center, 'rgba(232,211,164,.6)', Math.max(4, (f.radius / range) * R), 'ring');
    for (const pl of W.planets) plot(pl.pos, 'rgba(140,170,220,.55)', Math.max(3, (pl.radius / range) * R));
    plot(W.station.pos, '#9ff0ff', 5, 'edge');
    for (const gt of W.gates) plot(gt.pos, '#d6b8ff', 4, 'edge');
    for (const d of W.derelicts) plot(d.pos, '#ffb07a', 3);
    for (const cr of g.fx.crates) plot(cr.pos, '#fff3a0', 2.5);
    for (const t of g.traders) plot(t.pos, '#f2d36b', 3.5, 'sq');
    for (const o of g.outlaws) plot(o.pos, '#ff4a3a', 4.5, 'sq');
    x.fillStyle = '#efe6d2'; x.beginPath(); x.moveTo(0, -8); x.lineTo(6, 7); x.lineTo(0, 3); x.lineTo(-6, 7); x.closePath(); x.fill();
    x.restore();
  }

  // ------------------------------------------------------------ overlays
  bindOverlays() {
    $('btnUndock').addEventListener('click', () => { this.g.audio.play('click', { vol: 0.5 }); this.g.undock(); });
    $('stTabs').addEventListener('click', (e) => { const t = e.target.closest('.tab'); if (!t) return; this.stTab = t.dataset.tab; this.g.audio.play('click', { vol: 0.4 }); this.renderStation(); });
    $('stBody').addEventListener('click', (e) => { const b = e.target.closest('button[data-act]'); if (b && !b.disabled) this.stationAction(b.dataset.act, b.dataset.arg, b.dataset.n); });
    $('btnMapClose').addEventListener('click', () => this.closeMap());
    $('mapTabs').addEventListener('click', (e) => { const t = e.target.closest('.tab'); if (!t) return; this.mapTab = t.dataset.tab; this.mapSel = null; this.renderMapTabs(); this.drawMap(); });
    this.mapView = { system: { z: 1, x: 0, y: 0 }, galaxy: { z: 1, x: 0, y: 0 } };
    this.bindMapGestures();
    $('mapInfo').addEventListener('click', (e) => { const b = e.target.closest('button[data-act]'); if (b) this.mapAction(b.dataset.act); });
    $('btnResume').addEventListener('click', () => this.togglePause());
    $('btnLog').addEventListener('click', () => this.openLog());
    $('btnQuit').addEventListener('click', () => {
      this.dialog('<div class="ov-title">QUIT TO TITLE?</div><p>Your game is saved first. Press CONTINUE on the title screen to pick up where you left off.</p>', [
        { label: 'SAVE & QUIT', primary: true, fn: () => { this.g.save(); location.reload(); } }, { label: 'CANCEL', fn: () => $('pause').classList.remove('hidden') }]);
      $('pause').classList.add('hidden');
    });
    $('btnSound').addEventListener('click', () => { const s = this.g.state; s.sound = !s.sound; this.g.audio.setEnabled(s.sound); $('btnSound').textContent = `SOUND: ${s.sound ? 'ON' : 'OFF'}`; });
    $('btnQuality').addEventListener('click', () => { const s = this.g.state; this.g.applyQuality(s.quality === 'high' ? 'low' : 'high'); $('btnQuality').textContent = `QUALITY: ${s.quality.toUpperCase()}`; });
    $('btnReset').addEventListener('click', () => {
      this.dialog('<div class="ov-title">RESET CAREER?</div><p>This erases your current game and autosave and generates a new galaxy. Your save slots and exported files are kept.</p>', [
        { label: 'ERASE & RESTART', primary: true, fn: () => { this.togglePause(); this.g.startGame(true); } }, { label: 'CANCEL' }]);
    });
    $('btnSaves').addEventListener('click', () => this.openSaves('pause'));
    window.addEventListener('resize', () => { if (!$('mapOv').classList.contains('hidden')) this.drawMap(); });
  }

  openLog() {
    const L = (this.g.state.msgLog || []);
    const rows = L.map((e) => `<p class="${e.k || ''}"><small>Day ${e.d} ${e.t}</small>${e.m.replace(/</g, '&lt;')}</p>`).join('') || '<p>No messages yet.</p>';
    $('pause').classList.add('hidden');
    this.dialog(`<div class="ov-title">MESSAGE LOG</div><div class="msglog">${rows}</div>`, [{ label: 'BACK', primary: true, fn: () => $('pause').classList.remove('hidden') }]);
  }
  togglePause() {
    const el = $('pause'); const open = el.classList.contains('hidden');
    if (open && this.modalOpen()) return;
    el.classList.toggle('hidden', !open);
    this.g.paused = open;
    if (open) {
      const s = this.g.state;
      $('btnSound').textContent = `SOUND: ${s.sound ? 'ON' : 'OFF'}`; $('btnQuality').textContent = `QUALITY: ${s.quality.toUpperCase()}`;
      const r = pilotRank(s);
      const ms = s.missions.length ? `<br><b>Contracts:</b>${s.missions.map((m) => `<br><small>★ ${m.title} → ${m.dest.name}, ${g_sys(this.g, m)} · due Day ${m.deadline}${m.vip ? ' · VIP' : ''}</small>`).join('')}` : '';
      $('pauseStats').innerHTML = `Rank: <b>${RANK_NAMES[r]}</b> · Net worth ◈ ${fmt(netWorth(s))} · Fuel ${Math.floor(this.g.player.fuel)}/${this.g.player.stats.fuel}<br>Day ${s.day} · Jumps ${s.stats.jumps} · Ore mined ${s.stats.mined} · Outlaws downed ${s.stats.kills} · Contracts ${s.stats.contracts}${ms}<br><small>Keys: WASD steer · R/F throttle · Space fire · E action · Q missile · T target · C cruise · M map</small>${this.g.pad.active ? `<br><small>Controller: ${this.g.pad.helpText()}</small>` : ''}`;
      this.g.save();
    }
  }

  // ------------------------------------------------------------ save & load
  // from: 'pause' (in a running game: save + load) or 'start' (title screen: load + import only)
  openSaves(from, status = '', tone = 'info') {
    const g = this.g, inPlay = from === 'pause';
    if (inPlay) g.save(); // so the autosave row shows the current moment
    const meta = (m) => `Day ${m.day} · ◈ ${fmt(m.credits)} · ${m.ship}${m.fleet > 1 ? ` +${m.fleet - 1} ship${m.fleet > 2 ? 's' : ''}` : ''} · ${m.system}`;
    const row = (title, info, btns, empty) => `<div class="sv-row${empty ? ' empty' : ''}"><div class="sv-info"><b>${title}</b>${info}</div>${btns.join('')}</div>`;
    const auto = autoInfo();
    let rows = row('AUTOSAVE', auto ? (auto.error ? `Unreadable: ${auto.error}` : `${meta(auto)}<br><small>${ago(auto.savedAt)} · saves every 20 s, on docking and when you leave</small>`) : 'Nothing yet — starts when you play', [], !auto);
    for (let i = 1; i <= SLOT_COUNT; i++) {
      const s = readSlot(i);
      const info = !s ? 'Empty' : s.error ? `Unreadable: ${s.error}` : `${meta(s)}<br><small>saved ${ago(s.savedAt)}</small>`;
      const btns = [];
      if (inPlay) btns.push(`<button class="sbtn buy" data-sv="save" data-slot="${i}">SAVE</button>`);
      if (s && !s.error) btns.push(`<button class="sbtn sell" data-sv="load" data-slot="${i}">LOAD</button>`);
      rows += row(`SLOT ${i}`, info, btns, !s);
    }
    const canExport = inPlay || g.hasSave;
    $('dialogBox').classList.add('saves');
    // a status message replaces the explanatory note, so the screen keeps the same height on short phones
    $('dialogBox').innerHTML = `<div class="sv-head"><div class="ov-title">SAVE &amp; LOAD</div>
      ${status ? `<div class="sv-status ${tone}">${status}</div>` : '<p class="sv-note">Saves live in this browser. <b>Export</b> keeps a file copy, safe if the browser clears its data and usable on another device.</p>'}</div>
      <div class="sv-list">${rows}</div>
      <div class="sv-tools">${canExport ? '<button class="pbtn secondary" data-sv="export">EXPORT FILE</button>' : ''}<button class="pbtn secondary" data-sv="import">IMPORT FILE</button><button class="pbtn primary" data-sv="close">CLOSE</button></div>`;
    $('dialogBox').querySelectorAll('button[data-sv]').forEach((b) => b.addEventListener('click', () => {
      g.audio.play('click', { vol: 0.4 }); this.savesAction(from, b.dataset.sv, Number(b.dataset.slot));
    }));
    $('dialog').classList.remove('hidden');
  }

  savesAction(from, act, slot) {
    const g = this.g, inPlay = from === 'pause', back = (msg, tone) => this.openSaves(from, msg, tone);
    const describe = (s) => `Day ${s.day} · ◈ ${fmt(s.credits)} · ${s.ship} · ${s.system}`;
    const confirmLoad = (state, label) => this.dialog(`<div class="ov-title">LOAD ${label.toUpperCase()}?</div><p><b>${describe(summarize(state))}</b></p>
      <p>${inPlay ? 'Your current game will be replaced. Save it to a slot first if you want to keep it.' : 'This replaces your current autosave.'}</p>`,
      [{ label: 'LOAD', primary: true, fn: () => this.applyLoad(from, state, label) }, { label: 'CANCEL', fn: () => back() }]);
    if (act === 'close') { $('dialog').classList.add('hidden'); return; }
    if (act === 'save') {
      const existing = readSlot(slot);
      const doSave = () => {
        if (!g.save()) { back('Could not save — browser storage is full or disabled. Try EXPORT FILE instead.', 'bad'); return; }
        try { writeSlot(slot, g.state); back(`✓ Saved to slot ${slot}`, 'good'); }
        catch (err) { back(`Could not save to slot ${slot}: ${err.message}. Try EXPORT FILE instead.`, 'bad'); }
      };
      if (existing) this.dialog(`<div class="ov-title">OVERWRITE SLOT ${slot}?</div><p>${existing.error ? 'This slot is unreadable.' : `It holds <b>${describe(existing)}</b>, saved ${ago(existing.savedAt)}.`}</p><p>It will be replaced with your current game.</p>`,
        [{ label: 'OVERWRITE', primary: true, fn: doSave }, { label: 'CANCEL', fn: () => back() }]);
      else doSave();
    } else if (act === 'load') {
      const s = readSlot(slot);
      if (!s || s.error) { back(`Slot ${slot} can't be loaded${s ? `: ${s.error}` : ''}`, 'bad'); return; }
      confirmLoad(s.state, `slot ${slot}`);
    } else if (act === 'export') {
      if (inPlay) g.save();
      const name = exportName(g.state);
      const url = URL.createObjectURL(new Blob([exportText(g.state)], { type: 'application/json' }));
      const a = document.createElement('a'); a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 10000);
      back(`✓ Exported <b>${name}</b> to Downloads (iPhone: Files app)`, 'good');
    } else if (act === 'import') {
      const input = document.createElement('input'); input.type = 'file'; input.accept = '.json,application/json';
      input.addEventListener('change', () => {
        const f = input.files && input.files[0]; if (!f) return;
        f.text().then((text) => confirmLoad(parseImport(text), 'imported file'))
          .catch((err) => back(`Import failed: ${err.message}`, 'bad'));
      });
      input.click();
    }
  }

  applyLoad(from, state, label) {
    const g = this.g;
    $('dialog').classList.add('hidden');
    g.loadGame(state); g.hasSave = true;
    if (from === 'pause') { if (!$('pause').classList.contains('hidden')) this.togglePause(); }
    else g.startGame(false);
    this.toast(`✓ Loaded ${label} — Day ${state.day}`, 'good', 3);
  }

  dialog(html, buttons) {
    const box = $('dialogBox'); box.classList.remove('saves', 'outpostBox', 'originBox', 'introBox'); $('dialog').classList.remove('introOv'); if (this.g.outposts) this.g.outposts.panel = null; box.innerHTML = html;
    for (const b of buttons) {
      const el = document.createElement('button'); el.className = `pbtn ${b.primary ? 'primary' : 'secondary'}`; el.textContent = b.label;
      el.addEventListener('click', () => { $('dialog').classList.add('hidden'); this.g.audio.play('click', { vol: 0.4 }); b.fn && b.fn(); });
      box.appendChild(el);
    }
    $('dialog').classList.remove('hidden');
  }

  // ------------------------------------------------------------ station
  openStation() { $('station').classList.remove('hidden'); this.stTab = 'market'; this.renderStation(); }
  closeStation() { $('station').classList.add('hidden'); }

  renderStation() {
    const g = this.g, s = g.state, sid = s.systemId, sys = g.sysInfo, p = g.player;
    $('stTitle').textContent = g.world.station.name.toUpperCase();
    $('stSub').textContent = `${sys.name} · ${FACTIONS[sys.eco].name} (${factionTier(standingWith(s, sys.eco)).name}) · Day ${s.day} · ${HULLS[p.hullId].name} (${HULLS[p.hullId].cls})`;
    $('stCred').textContent = `◈ ${fmt(s.credits)}`;
    [...$('stTabs').children].forEach((t) => t.classList.toggle('on', t.dataset.tab === this.stTab));
    const body = $('stBody');
    const scroll = body.scrollTop;
    if (this.stTab === 'market') body.innerHTML = this.marketHTML();
    else if (this.stTab === 'outfit') body.innerHTML = this.outfitHTML();
    else if (this.stTab === 'hangar') body.innerHTML = this.hangarHTML();
    else if (this.stTab === 'missions') body.innerHTML = this.missionsHTML();
    else if (this.stTab === 'bar') body.innerHTML = this.g.p3.barHTML();
    else body.innerHTML = this.servicesHTML();
    body.scrollTop = scroll;
  }

  bestKnown(cid) {
    const g = this.g; let best = null;
    for (const [id, it] of Object.entries(g.state.intel)) {
      if (Number(id) === g.state.systemId) continue;
      const v = it.prices[cid].s; if (!best || v > best.v) best = { v, name: g.galaxy.systems[id].name, age: g.state.day - it.day };
    }
    return best;
  }

  marketHTML() {
    const g = this.g, E = g.economy, sid = g.state.systemId, p = g.player;
    const used = p.cargoUsed(), cap = p.stats.cargo;
    let h = `<div class="row head" style="grid-template-columns:1fr auto"><span>HOLD ${used}/${cap} · ${HULLS[p.hullId].name}${p.reserved ? ` <small>(${p.reserved} contract)</small>` : ''}</span><span class="btns"><button class="sbtn sell" data-act="sellore" ${Object.keys(p.cargo).some((k) => COMM[k].kind === 'ore' && p.cargo[k] > 0) ? '' : 'disabled'}>SELL ALL ORE</button><button class="sbtn sell" data-act="sellall" ${used ? '' : 'disabled'}>SELL ALL</button></span></div>`;
    h += `<div class="row head"><span>COMMODITY</span><span>WE PAY</span><span>WE SELL</span><span>HOLD</span><span>ACTIONS</span></div>`;
    for (const c of COMMODITIES) {
      const sp = E.sellPrice(sid, c.id), canBuy = E.canBuy(sid, c.id) && E.stock(sid, c.id) > 0, bp = canBuy ? E.buyPrice(sid, c.id) : null;
      const have = p.cargo[c.id] || 0;
      const m = E.mult(sid, c.id);
      const em = E.eventMult(sid, c.id);
      const tag = (em > 1.04 ? `<span class="tag up">NEWS ▲${Math.round((em - 1) * 100)}%</span>` : em < 0.96 ? `<span class="tag dn">NEWS ▼${Math.round((1 - em) * 100)}%</span>` : '')
        + (m >= 1.25 ? '<span class="tag up">HIGH DEMAND</span>' : m <= 0.75 ? '<span class="tag dn">LOCAL GOOD</span>' : '');
      const best = this.bestKnown(c.id);
      const bestTxt = best ? `<br><small style="opacity:.7">best seen ◈${best.v} @ ${best.name}${best.age ? ` (${best.age}d)` : ''}</small>` : '';
      const maxBuy = canBuy ? Math.max(0, Math.min(E.stock(sid, c.id), cap - used, Math.floor(g.state.credits / bp))) : 0;
      h += `<div class="row"><span class="nm"><i class="dot" style="background:${c.color}"></i><span>${c.name} ${tag}${bestTxt}</span></span>
        <span class="${m >= 1.15 ? 'price-good' : ''}">◈ ${sp}</span>
        <span class="${m <= 0.8 ? 'price-good' : ''}">${canBuy ? `◈ ${bp} <small>(${E.stock(sid, c.id)})</small>` : '—'}</span>
        <span><b>${have}</b></span>
        <span class="btns">
          <button class="sbtn sell" data-act="sell" data-arg="${c.id}" data-n="1" ${have ? '' : 'disabled'}>SELL</button>
          <button class="sbtn sell" data-act="sell" data-arg="${c.id}" data-n="${have}" ${have ? '' : 'disabled'}>ALL</button>
          <button class="sbtn buy" data-act="buy" data-arg="${c.id}" data-n="1" ${maxBuy ? '' : 'disabled'}>BUY</button>
          <button class="sbtn buy" data-act="buy" data-arg="${c.id}" data-n="${maxBuy}" ${maxBuy ? '' : 'disabled'}>MAX</button>
        </span></div>`;
    }
    h += `<p style="font:600 12px var(--font);opacity:.75;margin:8px 4px">Tip: “WE SELL” goods are produced here and cheap. Check the GALAXY chart for systems with HIGH DEMAND. Selling many units lowers the price until markets recover the next day.</p>`;
    return h;
  }

  fabricationHTML(rec, fab) {
    const g = this.g, s = g.state, bps = s.craft.blueprints;
    const slots = uniqueSlots(rec.hull), used = rec.uniques.length;
    let h = `<div class="ms-head"><span>FABRICATION${fab ? '' : ' · NO FABRICATOR HERE'}</span><small>${fab ? 'Build module upgrades from refined goods for about half the credits, and craft prototypes from blueprints. Materials come from your hold.' : 'Fabricators are found at Industrial and High-Tech stations. Blueprints you hold are listed below.'}</small></div><div class="cards">`;
    for (const id of PROTO_IDS) {
      const P = PROTOTYPES[id], known = bps.includes(id), installed = rec.uniques.includes(id);
      if (!known) { h += `<div class="card locked"><h3>${P.name}<span class="cls">BLUEPRINT NEEDED</span></h3><p>${P.desc}</p><p><small>Blueprints turn up in sentinel caches, rift readings, pirate bases and Dreadnought wrecks.</small></p></div>`; continue; }
      const ok = fab && !installed && used < slots && s.credits >= P.credits && haveMats(g.player.cargo, P.mats);
      const why = installed ? 'INSTALLED' : !fab ? 'NEEDS A FABRICATOR' : used >= slots ? 'NO FREE UNIQUE SLOT' : '';
      h += `<div class="card${installed ? ' active' : ''}"><h3>${P.name}<span class="cls" style="color:#e7a6ff">PROTOTYPE</span></h3><p>${P.desc}</p><p><small>◈ ${fmt(P.credits)} + ${matsText(P.mats)}</small></p>
        <button class="pbtn ${ok ? 'primary' : 'secondary'}" style="font-size:13px;padding:8px" data-act="fabproto" data-arg="${id}" ${ok ? '' : 'disabled'}>${why || 'FABRICATE & INSTALL'}</button></div>`;
    }
    return h + '</div><div class="ms-head" style="margin-top:12px"><span>STANDARD MODULES</span></div>';
  }
  uniquePrice(id, hull) { return Math.round(UNIQUES[id].price * Math.sqrt(HULLS[hull].priceMul) / 100) * 100; }
  factionTechHTML(rec) {
    const g = this.g, s = g.state, fid = g.sysInfo.eco;
    const offers = [UNIQUE_BY_FACTION[fid]];
    if (fid === 'frontier') offers.push(UNIQUE_BY_FACTION.pirate); // the Red Wake sells quietly on the frontier
    const slots = uniqueSlots(rec.hull), used = rec.uniques.length;
    let h = `<div class="ms-head"><span>FACTION TECH · ${used}/${slots} SLOT${slots > 1 ? 'S' : ''} USED</span><small>Unique modules need Honored standing with their faction</small></div><div class="cards">`;
    for (const id of rec.uniques) {
      const u = UNIQUES[id];
      h += `<div class="card active"><h3>${u.name}<span class="cls">INSTALLED</span></h3><p>${u.desc}</p><button class="pbtn secondary" style="font-size:13px;padding:8px" data-act="rmunique" data-arg="${id}">REMOVE · refund ◈ ${fmt(Math.round(this.uniquePrice(id, rec.hull) / 2))}</button></div>`;
    }
    if (s.explore.heart && !s.explore.heartGiven && !s.ships.some((x) => x.uniques.includes('heart'))) {
      h += `<div class="card"><h3>Lumen Heart<span class="cls" style="color:#c8f56a">ARTIFACT</span></h3><p>${UNIQUES.heart.desc}</p><button class="pbtn ${used < slots ? 'primary' : 'secondary'}" style="font-size:13px;padding:8px" data-act="heart" ${used < slots ? '' : 'disabled'}>${used < slots ? 'INSTALL (FREE)' : 'NO FREE SLOT'}</button></div>`;
    }
    for (const u of offers) {
      if (rec.uniques.includes(u.id)) continue;
      const t = factionTier(standingWith(s, u.faction)), price = this.uniquePrice(u.id, rec.hull);
      const why = t.level < 2 ? `REQUIRES HONORED WITH ${FACTIONS[u.faction].short.toUpperCase()} (${standingWith(s, u.faction)}/25)` : used >= slots ? 'NO FREE SLOT' : s.credits < price ? `◈ ${fmt(price)}` : '';
      h += `<div class="card${t.level < 2 ? ' locked' : ''}"><h3>${u.name}<span class="cls" style="color:${FACTIONS[u.faction].color}">${FACTIONS[u.faction].short.toUpperCase()}</span></h3><p>${u.desc}</p>
        <button class="pbtn ${why ? 'secondary' : 'primary'}" style="font-size:13px;padding:8px" data-act="buyunique" data-arg="${u.id}" ${why ? 'disabled' : ''}>${why || `INSTALL · ◈ ${fmt(price)}`}</button></div>`;
    }
    return h + '</div>';
  }
  outfitHTML() {
    const g = this.g, rec = g.activeShipRec(), fab = hasFabricator(g.sysInfo.eco), U = (k) => unlocked(g.state, k);
    let h = `<p style="margin:2px 4px 10px;font:700 13px var(--font)">Upgrading: <b>${HULLS[rec.hull].name}</b> (${HULLS[rec.hull].cls}) — each ship keeps its own modules.</p><div class="cards">`;
    h = (U('factions') ? this.factionTechHTML(rec) : '') + (U('fabrication') ? this.fabricationHTML(rec, fab) : '') + h;
    for (const k of MODULE_ORDER) {
      const M = MODULES[k], lvl = rec.mods[k];
      const next = lvl < 3 ? lvl + 1 : null;
      const price = next ? modulePrice(rec.hull, k, next) : 0;
      const stamps = [1, 2, 3].map((i) => `<i class="${i <= lvl ? 'on' : ''}"></i>`).join('');
      h += `<div class="card"><h3>${M.name}<span class="lvl">${stamps}</span></h3><p>${M.desc}</p>
        <div class="delta">${statLine(k, lvl, rec.hull)}${next ? ` → <b>${statLine(k, next, rec.hull)}</b>` : ' · MAX'}</div>
        ${next ? `<button class="pbtn ${g.state.credits >= price ? 'primary' : 'secondary'}" style="font-size:14px;padding:9px" data-act="upgrade" data-arg="${k}" ${g.state.credits >= price ? '' : 'disabled'}>INSTALL MK${next} · ◈ ${fmt(price)}</button>` : '<button class="pbtn secondary" disabled>FULLY UPGRADED</button>'}
        ${next && fab && U('fabrication') ? (() => { const mats = moduleMats(next), fc = Math.round(price * 0.45 / 10) * 10, ok = haveMats(g.player.cargo, mats) && g.state.credits >= fc; return `<button class="pbtn secondary" style="font-size:12px;padding:7px" data-act="fabmod" data-arg="${k}" ${ok ? '' : 'disabled'}>FABRICATE · ◈ ${fmt(fc)} + ${matsText(mats)}</button>`; })() : ''}
      </div>`;
    }
    return h + '</div>';
  }

  hangarHTML() {
    const g = this.g, s = g.state;
    let h = `<p style="margin:2px 4px 10px;font:700 13px var(--font)">Your fleet is ferried between stations. Each ship keeps its own hold and upgrades.</p><div class="cards">`;
    for (const hid of HULL_ORDER) {
      const H = HULLS[hid]; const owned = s.ships.filter((x) => x.hull === hid);
      const st = computeStats(hid, emptyMods());
      const stats = `<div class="stats"><span>Hull ${st.hull}</span><span>Hold ${st.cargo}</span><span>Speed ${Math.round(st.speed)}</span><span>Beams ×${H.hard}</span><span>Barrier ×${H.shield}</span><span>Missiles +${H.msl}</span></div>`;
      let btns = '';
      for (const o of owned) {
        const used = Object.values(o.cargo).reduce((a, b) => a + b, 0);
        if (o.uid === s.active) btns += `<button class="pbtn secondary" disabled>ACTIVE${used ? ` · hold ${used}` : ''}</button>`;
        else if (o.route) {
          const R = o.route, A = g.galaxy.systems[R.a].name, B = g.galaxy.systems[R.b].name;
          btns += `<div class="route-box"><b>⛴ ROUTE ${A} ⇄ ${B}</b><br><small>${R.leg === 0 ? `→ ${B}` : `→ ${A}`} · day ${R.progress + 1}/${R.legDays} · ${R.trips} round trip${R.trips === 1 ? '' : 's'} · net ◈${fmt(R.earned)}${R.last ? `<br>Last: ${R.last}` : ''}</small><br><button class="sbtn" data-act="recall" data-arg="${o.uid}">RECALL TO HANGAR</button></div>`;
        } else btns += `<button class="pbtn secondary" data-act="switch" data-arg="${o.uid}">FLY THIS ${H.name.toUpperCase()}${used ? ` · hold ${used}` : ''}</button>${unlocked(s, 'fleet') ? `<button class="pbtn secondary" style="font-size:13px;padding:8px" data-act="route" data-arg="${o.uid}">ASSIGN TRADE ROUTE FROM HERE</button>` : ''}`;
      }
      if (H.price > 0) btns += `<button class="pbtn ${s.credits >= H.price ? 'primary' : 'secondary'}" style="font-size:14px;padding:9px" data-act="buyship" data-arg="${hid}" ${s.credits >= H.price ? '' : 'disabled'}>BUY · ◈ ${fmt(H.price)}</button>`;
      h += `<div class="card ${owned.some((o) => o.uid === s.active) ? 'active' : ''}"><h3>${H.name}<span class="cls">${H.cls.toUpperCase()}</span></h3><p>${H.desc}</p>${stats}${btns}</div>`;
    }
    return (unlocked(s, 'fleet') ? this.wingmenHTML() : '') + h + '</div>';
  }

  wingmenHTML() {
    const g = this.g, s = g.state, max = maxWingmen(s);
    const mine = s.wingmen.map((w) => { const k = skillOf(w), nx = SKILLS[k + 1];
      return `<div class="card"><h3>${w.call}<span class="cls">${SKILLS[k].name.toUpperCase()}</span></h3><p>${w.name} · ${w.kills} kill${w.kills === 1 ? '' : 's'}${nx ? ` (${nx.name} at ${nx.kills})` : ''} · wage ◈${w.wage}/day</p><p><b>${w.status === 'active' ? 'On duty: flies with you' : `Recovering: back Day ${w.back}`}</b></p><button class="pbtn secondary" style="font-size:13px;padding:8px" data-act="dismiss" data-arg="${w.id}">DISMISS</button></div>`; }).join('');
    const full = s.wingmen.length >= max;
    const recruits = g.fleet.recruits().map((r) => `<div class="card"><h3>${r.call}<span class="cls">${SKILLS[r.base].name.toUpperCase()}</span></h3><p>${r.name} · wage ◈${r.wage}/day</p>
      <button class="pbtn ${!full && s.credits >= r.fee ? 'primary' : 'secondary'}" style="font-size:13px;padding:8px" data-act="hire" data-arg="${r.id}" ${!full && s.credits >= r.fee ? '' : 'disabled'}>${full ? `MAX ${max} AT YOUR RANK` : `HIRE · ◈ ${fmt(r.fee)}`}</button></div>`).join('');
    return `<div class="ms-head"><span>WINGMEN ${s.wingmen.length}/${max}</span><small>Escorts fly in formation, follow you through jumps and fight what threatens you. Their kills pay you half a bounty and earn them promotions.</small></div>
      <div class="cards">${mine}${recruits || '<p class="ms-empty">No pilots looking for work here today.</p>'}</div>
      <div class="ms-head" style="margin-top:12px"><span>SHIPS · TRADE ROUTES</span><small>Spare ships can run a trade route from this station: they buy low, sell high and earn while you're away (crew ◈${ROUTE_WAGE}/day plus 25% of profits). Raids are a risk on dangerous lanes; tougher hulls shrug them off.</small></div>`;
  }
  openRoutePicker(uid) {
    const g = this.g, s = g.state, rec = s.ships.find((x) => x.uid === uid); if (!rec) return;
    const cap = computeStats(rec.hull, rec.mods).cargo, dist = jumpsFrom(g.galaxy, s.systemId);
    const opts = g.galaxy.systems.filter((x) => x.id !== s.systemId && dist[x.id] <= 3).map((x) => {
      const known = !!s.intel[x.id], est = g.fleet.estimate(s.systemId, x.id, cap), risk = Math.round((g.fleet.legRisk(rec, s.systemId, x.id) + g.fleet.legRisk(rec, x.id, s.systemId)) / 2 * 100);
      const days = Math.max(1, dist[x.id]);
      return { x, known, est, risk, days, perDay: known ? Math.round((est.perTrip - ROUTE_WAGE * days * 2) / (days * 2)) : null };
    }).sort((a, b) => (b.perDay ?? -1e9) - (a.perDay ?? -1e9));
    const rows = opts.map((o) => `<p style="margin:2px 0"><b>${o.x.name}</b> <small>(${ECONOMIES[o.x.eco].name}, ${o.days} day${o.days > 1 ? 's' : ''} each way, raid risk ~${o.risk}% per leg)</small><br><small>${o.known ? `Est. ${o.est.out ? `${COMM[o.est.out.cid].name} out` : 'empty out'}, ${o.est.back ? `${COMM[o.est.back.cid].name} back` : 'empty back'} · <b>◈${fmt(o.perDay)}/day</b> after wages` : 'No market intel yet: profit unknown'}</small></p>`).join('');
    this.dialog(`<div class="ov-title">TRADE ROUTE · ${HULLS[rec.hull].name.toUpperCase()}</div><p>From <b>${g.sysInfo.name}</b>, hold ${cap}. Estimates use today's prices; markets move as your ship trades.</p>${rows}`,
      [...opts.slice(0, 5).map((o) => ({ label: `${o.x.name}${o.perDay != null ? ` · ◈${fmt(o.perDay)}/day` : ' · ?'}`, primary: o === opts[0], fn: () => {
        const err = g.fleet.assign(uid, o.x.id);
        this.toast(err || `${HULLS[rec.hull].name} now trading ${g.sysInfo.name} ⇄ ${o.x.name}`, err ? 'warn' : 'good', 3.5); g.save(); this.renderStation();
      } })), { label: 'CANCEL' }]);
  }
  repairCost() { const p = this.g.player; return Math.ceil(Math.ceil(p.maxHp - p.hp) * 1.5 * HULLS[p.hullId].priceMul * (1 + factionTier(standingWith(this.g.state, this.g.sysInfo.eco)).repair)); }
  accordHTML() {
    const g = this.g, s = g.state, here = isAccordEco(g.sysInfo.eco);
    if (s.accord.licensed) return `<div class="card news"><div><h3>🛡 Accord Pilot License</h3><p><b>Licensed.</b> No docking tariffs or routine cargo scans in Accord space${here ? ', and the Patrol here flies for you too' : ''}.</p></div></div>`;
    if (!unlocked(s, 'factions') && !here) return '';
    const n = licenseNeeds(s), ok = n.ok && here;
    const why = n.barred ? 'THE ACCORD WILL NEVER LICENSE YOU' : !here ? 'APPLY AT AN ACCORD STATION' : n.friendly < n.need ? `NEEDS FRIENDLY WITH ${n.need} ACCORD FACTIONS (${n.friendly}/${n.need})` : s.credits < LICENSE_PRICE ? `◈ ${fmt(LICENSE_PRICE)}` : '';
    return `<div class="card news"><div><h3>🛡 Accord Pilot License</h3><p>${here ? 'This is Accord space: patrolled, safer, and taxed. Unlicensed pilots pay a docking tariff (4% of cargo, min ◈50) and face cargo scans; hot cargo counts as contraband.' : 'The Accord core (Agricultural, Industrial and High-Tech systems) is patrolled and safer, but taxes unlicensed pilots.'} A license ends the tariff and the scans.</p>
      <p>Requires ◈${fmt(LICENSE_PRICE)} and <b>Friendly</b> standing with ${n.need === 3 ? 'all three' : 'two of the three'} Accord factions (Institute, Combine, Cooperative)${n.deserter ? '. The Patrol has a long memory: deserters need all three.' : '.'}</p>
      <p><button class="sbtn buy" data-act="license" ${ok ? '' : 'disabled'}>${why || `BUY LICENSE · ◈ ${fmt(LICENSE_PRICE)}`}</button></p></div></div>`;
  }
  siegeHTML() {
    const g = this.g, A = g.state.siege.active; if (!A || A.phase === 'done') return '';
    const here = A.target.type === 'station' && A.target.sys === g.state.systemId;
    const hire = here && A.phase === 'announced' ? `<p>Militia hired: <b>${A.funded}/${MILITIA_MAX}</b> · defenders on the day: <b>${g.siege.defenders()}</b> (station garrison 2 + militia + faction standing) <button class="sbtn buy" data-act="militia" ${A.funded < MILITIA_MAX && g.state.credits >= MILITIA_PRICE ? '' : 'disabled'}>HIRE MILITIA · ◈ ${fmt(MILITIA_PRICE)}</button></p>` : '';
    return `<div class="card news siege"><div><h3>⚔ Siege Warning</h3><p>${g.siege.newsLine()}</p>${hire}<p><small>Be in the system when the armada arrives to fight alongside the defenders: break all ${A.waves.length} waves for a ◈${fmt(g.siege.reward())} faction reward plus the Dreadnought's loot. Stay away and it's decided by the odds above.</small></p>${!here ? '<button class="sbtn" data-act="siegecourse">SET COURSE</button>' : ''}</div></div>`;
  }
  newsHTML() {
    const g = this.g, s = g.state, evs = liveEvents(s);
    if (!evs.length) return '<div class="card news"><div><h3>Sector News</h3><p>Quiet across the sector today.</p></div></div>';
    const here = (e) => e.sys === s.systemId ? ' <small>(this system)</small>' : '';
    return `<div class="card news"><div><h3>Sector News · Day ${s.day}</h3>${evs.map((e) => { const d = describe(e, g.galaxy, s, g.player.stats.sensorLvl); return `<p><b style="color:${d.col}">${d.ch}</b> <b>${d.title}</b>${here(e)}: ${d.line}</p>`; }).join('')}</div></div>`;
  }
  exploreHTML() {
    const g = this.g, ex = g.state.explore, n = ex.lore;
    const logs = LORE.slice(0, n).map((L, i) => `<details><summary><b>Log ${i + 1}: ${L.title}</b></summary><p style="font-style:italic">${L.text}</p></details>`).join('')
      + (ex.heart ? `<details><summary><b>Log ${LORE.length}: ${LORE[LORE.length - 1].title}</b></summary><p style="font-style:italic">${LORE[LORE.length - 1].text}</p></details>` : '');
    const gate = ex.unlocked ? `<p>✧ The dormant gate in <b>${g.galaxy.systems[g.galaxy.hostId].name}</b> is open: Lumen's Rest is on your chart.</p>` : `<p>Recover <b>${FRAGMENTS_TO_UNLOCK}</b> logs to wake the dormant gate (${n}/${FRAGMENTS_TO_UNLOCK}).</p>`;
    return `<div class="card news"><div><h3>Exploration</h3><p>Every system hides anomalies: wrecks, crystal pockets, beacons, rifts, guarded caches. Your sensors pick them up at close range; a scanner probe charts a whole system at once (launch from the MAP).</p>
      <p>Probes: <b>${ex.probes}/${PROBE_MAX}</b> <button class="sbtn buy" data-act="probe" ${ex.probes < PROBE_MAX && g.state.credits >= PROBE_PRICE ? '' : 'disabled'}>BUY PROBE · ◈ ${PROBE_PRICE}</button></p>
      <h3 style="margin-top:6px">📜 Exodus Logs</h3>${gate}${logs || '<p><small>No logs recovered yet. Look for Lantern Fleet wrecks.</small></p>'}</div></div>`;
  }
  outpostsHTML() {
    const g = this.g, s = g.state, max = maxOutposts(s), ft = factionTier(standingWith(s, g.sysInfo.eco));
    const why = s.credits < CHARTER_PRICE ? `◈ ${fmt(CHARTER_PRICE)}` : ft.level < 0 ? `NEEDS NEUTRAL WITH ${FACTIONS[g.sysInfo.eco].short.toUpperCase()}` : s.outposts.length + s.charters >= max ? `LIMIT ${max} AT YOUR RANK` : '';
    const list = s.outposts.map((o) => `<p>⌂ <b>${o.name}</b> · ${g.galaxy.systems[o.sys].name} · ${builtMods(o).length} modules · storage ${storageUsed(o)}/${storageCap(o)}${o.credits ? ` · ◈${fmt(o.credits)} waiting` : ''}${o.raid && o.raid.phase !== 'pending' ? ' · <b style="color:#ff8a5c">⚠ RAID</b>' : ''} <button class="sbtn" data-act="opcourse" data-arg="${o.id}">SET COURSE</button></p>`).join('');
    return `<div class="card news"><div><h3>Outposts</h3><p>Buy a charter, fly to an asteroid field or planet deposit, and press ESTABLISH OUTPOST. Modules cost credits plus materials you haul in. Production runs every day, even while you're away. Up to ${max} at your rank.</p>
      ${list}<p>Charters held: <b>${s.charters}</b> <button class="sbtn buy" data-act="charter" ${why ? 'disabled' : ''}>${why || `BUY CHARTER · ◈ ${fmt(CHARTER_PRICE)}`}</button></p></div></div>`;
  }
  factionsHTML() {
    const g = this.g, s = g.state, here = g.sysInfo.eco;
    const rows = FACTION_ORDER.map((f) => {
      const F = FACTIONS[f], pts = standingWith(s, f), t = factionTier(pts), nx = nextFactionTier(pts);
      const lo = t.min === -Infinity ? -50 : t.min, hi = nx ? nx.min : lo + 25;
      const pct = Math.max(0, Math.min(100, ((pts - lo) / (hi - lo)) * 100));
      return `<div class="fac${f === here ? ' here' : ''}"><div class="fac-top"><i style="background:${F.color}"></i><b>${F.name}</b>${f === here ? ' <small>(this station)</small>' : ''}<span class="fac-tier t${t.level}">${t.name.toUpperCase()}</span><small>${pts}</small></div>
        <div class="fac-bar"><span style="width:${pct}%;background:${F.color}"></span></div>
        <small>${tierPerks(f, t) || '—'}${nx ? ` · next: ${nx.name} at ${nx.min}` : ''}</small></div>`;
    }).join('');
    return `<div class="card factions"><div><h3>Factions</h3><p style="opacity:.75;font-size:12px">Contracts, trade, outlaw kills and rescues raise standing with a station's faction; attacking its traders lowers it. Rivals: Cooperative ↔ Combine, Union ↔ Institute. The Red Wake likes piracy and hates outlaw-hunters.</p>${rows}</div></div>`;
  }
  servicesHTML() {
    const g = this.g, p = g.player, s = g.state;
    const missing = Math.ceil(p.maxHp - p.hp);
    const repair = this.repairCost();
    const expiring = liveEvents(s).filter((e) => e.end === s.day && e.type !== 'market');
    const restNote = expiring.length ? `<br><b style="color:#ff8a5c">Ends if you rest:</b> ${expiring.map((e) => `${describe(e, g.galaxy, s).title} in ${g.galaxy.systems[e.sys].name}`).join(', ')}` : '';
    const mslNeed = p.stats.mslCap - p.missiles; const mslCost = mslNeed * 60;
    const r = pilotRank(s), U = (k) => unlocked(s, k);
    return `<div class="svc">
      <div class="card"><div><h3>Hull Repair</h3><p>${missing > 0 ? `${missing} damage to patch` : 'Hull is pristine'}</p></div><button class="sbtn buy" data-act="repair" ${missing > 0 && s.credits >= repair ? '' : 'disabled'}>◈ ${fmt(repair)}</button></div>
      <div class="card"><div><h3>Refuel</h3><p>${Math.floor(p.fuel)}/${p.stats.fuel} in the tank · ◈${g.fuelPrice()} a unit here (fuel is cheapest in Mining systems)</p></div><button class="sbtn buy" data-act="refuel" ${p.fuel < p.stats.fuel && s.credits >= g.fuelPrice() ? '' : 'disabled'}>◈ ${fmt(Math.ceil(p.stats.fuel - p.fuel) * g.fuelPrice())}</button></div>
      <div class="card"><div><h3>Missile Restock</h3><p>${p.stats.mslCap ? `${p.missiles}/${p.stats.mslCap} loaded · ◈60 each` : 'No missile rack installed'}</p></div><button class="sbtn buy" data-act="missiles" ${mslNeed > 0 && s.credits >= mslCost ? '' : 'disabled'}>◈ ${fmt(mslCost)}</button></div>
      ${g.arcs.cardHTML()}
      ${g.story.debtHTML()}
      ${this.accordHTML()}
      ${this.siegeHTML()}
      ${U('events') ? this.newsHTML() : ''}
      ${g.p3.headlinesHTML()}
      ${U('exploration') ? this.exploreHTML() : ''}
      ${U('outposts') ? this.outpostsHTML() : ''}
      ${U('factions') ? this.factionsHTML() : ''}
      <div class="card"><div><h3>Rest Until Tomorrow</h3><p>Skip to Day ${s.day + 1}. Prices recover, rocks and deposits regrow, new events may appear.${restNote}</p></div><button class="sbtn" data-act="rest">REST</button></div>
      <div class="card"><div><h3>Pilot Record</h3><p><b>${s.p3.callsign}</b>${s.story.title ? ` · <i>${s.story.title}</i>` : ''} <button class="sbtn" data-act="p3rename">RENAME</button><br>Rank <b>${RANK_NAMES[r]}</b> · Net worth ◈ ${fmt(netWorth(s))}<br>Mined ${s.stats.mined} · Trades ${s.stats.trades} · Contracts ${s.stats.contracts} · Outlaws downed ${s.stats.kills} · Jumps ${s.stats.jumps}${s.p3.rival.met ? `<br>Duels with Kade Rourke: won ${s.p3.rival.losses}, lost ${s.p3.rival.wins}` : ''}</p></div></div>
      <p style="font:600 12px var(--font);opacity:.75">Outlaw raids grow from lone raiders to packs of 2–4 as your rank rises. Barriers and beams are your best insurance.</p>
    </div>`;
  }

  missionsHTML() {
    const g = this.g, s = g.state, p = g.player;
    if (!unlocked(s, 'contracts')) return '<p class="ms-empty">No contracts for an unknown pilot yet. Sell some cargo to get your name on the board.</p>';
    const offers = offersFor(s, g.galaxy, s.systemId, pilotRank(s));
    const pts = standingOf(s, s.systemId), tier = standingTier(pts), nx = nextStanding(pts);
    let h = `<div class="standing"><b>Standing at ${g.world.station.name}:</b> <span class="st-tier st-${tier.level}">${tier.name.toUpperCase()}</span> <small>(${pts} pts)</small>${tier.perks ? `<br><small>${tier.perks}</small>` : ''}${nx ? `<br><small style="opacity:.75">Next: ${nx.name} at ${nx.min} pts. Completing this station's contracts earns standing (special jobs count double); failing loses it.</small>` : ''}</div>`;
    h += `<div class="ms-head"><span>ACTIVE CONTRACTS ${s.missions.length}/${MAX_ACTIVE}</span><small>Free hold ${g.cargoFree()}/${p.stats.cargo}</small></div>`;
    h += s.missions.length ? `<div class="cards">${s.missions.map((m) => this.missionCard(m, true)).join('')}</div>` : '<p class="ms-empty">No active contracts — pick one from the board below.</p>';
    h += `<div class="ms-head" style="margin-top:14px"><span>CONTRACT BOARD · ${g.world.station.name.toUpperCase()}</span><small>New offers each day</small></div>`;
    h += offers.length ? `<div class="cards">${offers.map((o) => this.missionCard(o, false)).join('')}</div>` : '<p class="ms-empty">The board is empty. Check back tomorrow.</p>';
    h += '<p style="font:600 12px var(--font);opacity:.75;margin:10px 4px">Passengers and courier crates ride in your hold until delivered. Station drop-offs complete when you dock; planet colonies need you in low orbit above the colony — press DROP OFF / DELIVER. Outlaws love a ship carrying a VIP.</p>';
    return h;
  }
  acceptBlock(m) {
    const g = this.g, s = g.state;
    if (s.missions.length >= MAX_ACTIVE) return 'CONTRACT LIMIT';
    if (missionSpace(m) > g.cargoFree()) return `NEEDS ${missionSpace(m)} FREE HOLD`;
    if (m.deposit > s.credits) return `NEEDS ◈ ${fmt(m.deposit)}`;
    if (!reqMet(m, g.activeShipRec())) return m.req.hull ? `NEEDS ${m.req.hull === 'kestrel' ? 'KESTREL' : HULLS[m.req.hull].name.toUpperCase()}` : `NEEDS ${MODULES[m.req.mod].name.toUpperCase()} MK${m.req.lvl}`;
    return '';
  }
  missionCard(m, taken) {
    const g = this.g, s = g.state, t = typeTag(m);
    const late = taken && m.deadline <= s.day;
    let status = '', btns;
    if (taken) {
      if (m.type === 'supply') status = `<br>In hold: <b>${g.player.cargo[m.commodity] || 0}/${m.qty}</b>${m.ore ? ` · ${COMM[m.ore].name} mined <b>${m.oreMined || 0}/${m.oreQty}</b>` : ''}`;
      else if (boundToShip(m)) status = `<br>Aboard: <b>${HULLS[g.activeShipRec().hull].name}</b>`;
      btns = `<button class="pbtn primary" data-act="mcourse" data-arg="${m.id}">SET COURSE</button><button class="pbtn secondary" data-act="abandon" data-arg="${m.id}">ABANDON</button>`;
    } else {
      const why = this.acceptBlock(m);
      btns = `<button class="pbtn ${why ? 'secondary' : 'primary'}" data-act="accept" data-arg="${m.id}" ${why ? 'disabled' : ''}>${why || 'ACCEPT'}</button>`;
    }
    return `<div class="card ms${taken ? ' taken' : ''}${late ? ' late' : ''}"><h3><span>${m.title}</span><span class="pay">◈ ${fmt(m.reward)}</span></h3>
      <div><span class="mtag ${t.cls}">${t.label}</span> ${modTags(m).map((x) => `<span class="mtag ${x.cls}">${x.label}</span>`).join(' ')} <small>${m.client}</small></div>
      <div class="meta">To <b>${destText(m, g.galaxy, s.systemId)}</b><br>${needText(m)}<br>${dueText(m, s.day)}${m.deposit ? `<br>Deposit ◈ ${fmt(m.deposit)} — refunded on delivery` : ''}${status}</div>
      <div class="btns">${btns}</div></div>`;
  }

  stationAction(act, arg, n) {
    const g = this.g, E = g.economy, s = g.state, sid = s.systemId, p = g.player; n = Number(n);
    if (act.startsWith('p3')) { if (act === 'p3rename') { const v = window.prompt('Your callsign:', s.p3.callsign); if (v && v.trim()) s.p3.callsign = v.trim().replace(/[<>&"]/g, '').slice(0, 20); g.save(); } else g.p3.act(act, arg); if (act === 'p3course') return; this.renderStation(); return; }
    const sell = (cid, q) => { if (q <= 0) return 0; const v = E.sell(sid, cid, q); p.cargo[cid] -= q; if (!p.cargo[cid]) delete p.cargo[cid]; return v; };
    if (act === 'sell') { const v = sell(arg, Math.min(n, p.cargo[arg] || 0)); g.addCredits(v); g.onSale(v); s.stats.trades++; g.audio.play('coins', { vol: 0.7 }); }
    else if (act === 'sellore' || act === 'sellall') {
      let v = 0; for (const k of Object.keys(p.cargo)) if (act === 'sellall' || COMM[k].kind === 'ore') v += sell(k, p.cargo[k]);
      g.addCredits(v); g.onSale(v); s.stats.trades++; g.audio.play('coins', { vol: 0.8 }); this.toast(`Sold for ◈ ${fmt(v)}`, 'good', 2);
    } else if (act === 'buy') {
      let q = Math.min(n, E.stock(sid, arg), p.stats.cargo - p.cargoUsed());
      while (q > 0 && E.quoteBuy(sid, arg, q) > s.credits) q--;
      if (q > 0) { const cost = E.buy(sid, arg, q); s.credits -= cost; p.cargo[arg] = (p.cargo[arg] || 0) + q; s.stats.trades++; g.audio.play('click', { vol: 0.6 }); }
      else this.toast('Not enough credits or cargo space', 'warn', 2);
    } else if (act === 'refuel') { g.refuel(false);
    } else if (act === 'paydebt') {
      const n = g.story.payDebt(Number(arg)); if (n) { g.audio.play('coins', { vol: 0.7 }); this.toast(`Marker payment ◈${fmt(n)}`, 'good', 2.5); g.save(); }
    } else if (act === 'arccourse') { g.arcs.courseTo(); return;
    } else if (act === 'license') {
      if (g.accord.buyLicense()) { g.audio.play('coins', { vol: 0.8 }); this.toast('✓ Accord Pilot License granted', 'good', 4); }
    } else if (act === 'probe') {
      if (g.state.explore.probes < PROBE_MAX && s.credits >= PROBE_PRICE) { s.credits -= PROBE_PRICE; g.state.explore.probes++; g.audio.play('click', { vol: 0.6 }); }
    } else if (act === 'hire') {
      if (g.fleet.hire(arg)) { g.audio.play('coins', { vol: 0.7 }); this.toast('Wingman hired: they launch with you when you undock', 'good', 3); }
    } else if (act === 'dismiss') { g.fleet.dismiss(arg);
    } else if (act === 'route') { this.openRoutePicker(Number(arg)); return;
    } else if (act === 'recall') { g.fleet.recall(Number(arg)); this.toast('Ship recalled to your hangar', 'info', 2.5);
    } else if (act === 'militia') {
      if (g.siege.hire()) { g.audio.play('coins', { vol: 0.7 }); this.toast('Militia pilot hired for the siege', 'good', 2.5); }
    } else if (act === 'siegecourse') { g.siege.courseTo(); return;
    } else if (act === 'charter') {
      if (s.credits >= CHARTER_PRICE && s.outposts.length + s.charters < maxOutposts(s)) { s.credits -= CHARTER_PRICE; s.charters++; g.audio.play('coins', { vol: 0.8 }); this.toast('Outpost Charter purchased: find a site and press ESTABLISH OUTPOST', 'good', 4); }
    } else if (act === 'opcourse') {
      const o = s.outposts.find((x) => x.id === arg); if (o) { g.outposts.courseTo(o); return; }
    } else if (act === 'buyunique') {
      const rec = g.activeShipRec(), price = this.uniquePrice(arg, rec.hull);
      if (s.credits >= price && rec.uniques.length < uniqueSlots(rec.hull) && factionTier(standingWith(s, UNIQUES[arg].faction)).level >= 2) {
        s.credits -= price; rec.uniques.push(arg); g.refreshPlayerStats(); p.shield = Math.min(p.shield, p.maxShield);
        g.audio.play('coins', { vol: 0.9 }); this.toast(`${UNIQUES[arg].name} installed`, 'good', 3);
      }
    } else if (act === 'fabmod') {
      const rec = g.activeShipRec(), lvl = rec.mods[arg] + 1, price = modulePrice(rec.hull, arg, lvl), fc = Math.round(price * 0.45 / 10) * 10, mats = moduleMats(lvl);
      if (lvl <= 3 && hasFabricator(g.sysInfo.eco) && s.credits >= fc && haveMats(p.cargo, mats)) {
        s.credits -= fc; takeMats(p.cargo, mats); rec.mods[arg] = lvl; g.refreshPlayerStats(); s.craft.made++;
        if (arg === 'missile') p.missiles = p.stats.mslCap;
        if (arg === 'barrier') p.shield = p.maxShield;
        g.audio.play('coins', { vol: 0.7 }); this.toast(`Fabricated ${MODULES[arg].name} Mk${lvl}: saved ◈ ${fmt(price - fc)}`, 'good', 3);
      }
    } else if (act === 'fabproto') {
      const rec = g.activeShipRec(), P = PROTOTYPES[arg];
      if (P && s.craft.blueprints.includes(arg) && hasFabricator(g.sysInfo.eco) && !rec.uniques.includes(arg) && rec.uniques.length < uniqueSlots(rec.hull) && s.credits >= P.credits && haveMats(p.cargo, P.mats)) {
        s.credits -= P.credits; takeMats(p.cargo, P.mats); rec.uniques.push(arg); g.refreshPlayerStats(); s.craft.made++;
        g.audio.play('warp', { vol: 0.5, rate: 1.2 }); this.toast(`${P.name} fabricated and installed`, 'good', 3.5);
      }
    } else if (act === 'heart') {
      const rec = g.activeShipRec();
      if (s.explore.heart && !s.explore.heartGiven && rec.uniques.length < uniqueSlots(rec.hull) && !s.ships.some((x) => x.uniques.includes('heart'))) { rec.uniques.push('heart'); g.refreshPlayerStats(); g.audio.play('warp', { vol: 0.6 }); this.toast('The Lumen Heart hums to life in your ship', 'good', 4); }
    } else if (act === 'rmunique') {
      const rec = g.activeShipRec();
      if (rec.uniques.includes(arg)) { rec.uniques = rec.uniques.filter((x) => x !== arg); g.addCredits(Math.round(this.uniquePrice(arg, rec.hull) / 2)); g.refreshPlayerStats(); this.toast(`${UNIQUES[arg].name} removed`, 'info', 2.5); }
    } else if (act === 'upgrade') {
      const rec = g.activeShipRec(); const lvl = rec.mods[arg] + 1; const price = modulePrice(rec.hull, arg, lvl);
      if (s.credits >= price && lvl <= 3) {
        s.credits -= price; rec.mods[arg] = lvl; g.refreshPlayerStats();
        if (arg === 'missile') p.missiles = p.stats.mslCap;
        if (arg === 'barrier') p.shield = p.maxShield;
        g.audio.play('coins', { vol: 0.7 }); this.toast(`${MODULES[arg].name} Mk${lvl} installed`, 'good', 2.5);
      }
    } else if (act === 'buyship') {
      const H = HULLS[arg];
      if (s.credits >= H.price) {
        s.credits -= H.price;
        const uid = s.nextUid++; s.ships.push({ uid, hull: arg, mods: emptyMods(), hp: null, missiles: 0, cargo: {}, uniques: [] });
        g.audio.play('coins', { vol: 0.9 });
        if (g.switchShip(uid)) this.toast(`${H.name} ${H.cls} purchased and ready!`, 'good', 3);
        else this.toast(`${H.name} ${H.cls} purchased — it waits in your hangar until your contracts are done`, 'good', 4);
      }
    } else if (act === 'switch') { if (g.switchShip(Number(arg))) this.toast(`Now flying the ${HULLS[g.player.hullId].name}`, 'info', 2); }
    else if (act === 'accept') {
      const offer = offersFor(s, g.galaxy, sid, pilotRank(s)).find((o) => o.id === arg);
      if (offer) {
        const err = g.acceptMission(offer);
        if (err) this.toast(err, 'warn', 3);
        else this.toast(`Contract accepted: ${offer.title}${offer.deposit ? ` · deposit ◈ ${fmt(offer.deposit)} paid` : ''}`, 'good', 3);
      }
    } else if (act === 'mcourse') {
      const m = s.missions.find((x) => x.id === arg);
      if (m && g.missionCourse(m)) { this.toast(`Course set for ${m.dest.name}`, 'info', 2.5); return; }
    } else if (act === 'abandon') {
      const m = s.missions.find((x) => x.id === arg);
      if (m) {
        this.dialog(`<div class="ov-title">ABANDON CONTRACT?</div><p>${m.title} for ${m.client}.${m.deposit ? ` Your ◈ ${fmt(m.deposit)} deposit is forfeited.` : ''}${m.type === 'passenger' ? ' Passengers disembark here.' : ''}</p>`, [
          { label: 'ABANDON', primary: true, fn: () => { g.failMission(m, 'abandoned'); g.save(); this.renderStation(); } }, { label: 'KEEP IT' }]);
        return;
      }
    }
    else if (act === 'repair') {
      const cost = this.repairCost();
      if (s.credits >= cost) { s.credits -= cost; p.hp = p.maxHp; p.shield = p.maxShield; g.audio.play('click', { vol: 0.6 }); }
    } else if (act === 'missiles') {
      const need = p.stats.mslCap - p.missiles; const cost = need * 60;
      if (s.credits >= cost) { s.credits -= cost; p.missiles = p.stats.mslCap; g.audio.play('click', { vol: 0.6 }); }
    } else if (act === 'rest') { g.restUntilTomorrow(); p.shield = p.maxShield; p.energy = p.maxEnergy; this.toast(`Rested. Day ${s.day} begins.`, 'info', 2); }
    g.save();
    this.renderStation();
  }

  // ------------------------------------------------------------ trader hail
  openTraderDialog(t) {
    const g = this.g, E = g.economy, sid = g.state.systemId, p = g.player;
    const render = () => {
      const goods = Object.entries(t.cargo).filter(([, q]) => q > 0);
      const rows = goods.map(([k, q]) => {
        const price = Math.round(E.buyPrice(t.origin, k) * 1.18);
        const max = Math.max(0, Math.min(q, p.stats.cargo - p.cargoUsed(), Math.floor(g.state.credits / price)));
        return `<div class="row" style="grid-template-columns:1.4fr .8fr .5fr auto"><span class="nm"><i class="dot" style="background:${COMM[k].color}"></i>${COMM[k].name}</span><span>◈ ${price}</span><span>${q}</span><span class="btns"><button class="sbtn buy" data-k="${k}" data-n="1" ${max ? '' : 'disabled'}>BUY</button><button class="sbtn buy" data-k="${k}" data-n="${max}" ${max ? '' : 'disabled'}>MAX</button></span></div>`;
      }).join('') || '<p>Hold is empty.</p>';
      const ore = Object.entries(p.cargo).filter(([k, q]) => q > 0 && COMM[k].kind === 'ore');
      const oreVal = ore.reduce((a, [k, q]) => a + Math.round(E.sellPrice(sid, k) * 0.9) * q, 0);
      const box = $('dialogBox');
      box.innerHTML = `<div class="ov-title">TRADER ${t.name.toUpperCase()}</div><p>“Hauling from ${g.galaxy.systems[t.origin].name}. Fair prices, no questions.”</p>${rows}
        <p style="margin-top:6px">They'll also buy your raw ore at 90% of the local station rate${ore.length ? `: <b>◈ ${fmt(oreVal)}</b>` : ''}.</p>`;
      const sellBtn = document.createElement('button'); sellBtn.className = 'pbtn secondary'; sellBtn.textContent = 'SELL ORE TO TRADER'; sellBtn.disabled = !ore.length;
      sellBtn.addEventListener('click', () => { for (const [k, q] of ore) { t.cargo[k] = (t.cargo[k] || 0) + q; delete p.cargo[k]; } g.addCredits(oreVal); g.state.stats.trades++; g.audio.play('coins', { vol: 0.7 }); render(); });
      const close = document.createElement('button'); close.className = 'pbtn primary'; close.textContent = 'CLOSE CHANNEL';
      close.addEventListener('click', () => $('dialog').classList.add('hidden'));
      box.appendChild(sellBtn); box.appendChild(close);
      box.querySelectorAll('button[data-k]').forEach((b) => b.addEventListener('click', () => {
        const k = b.dataset.k, n = Number(b.dataset.n); const price = Math.round(E.buyPrice(t.origin, k) * 1.18);
        const q = Math.min(n, t.cargo[k] || 0, p.stats.cargo - p.cargoUsed()); if (q <= 0 || g.state.credits < price * q) return;
        g.state.credits -= price * q; t.cargo[k] -= q; p.cargo[k] = (p.cargo[k] || 0) + q; g.state.stats.trades++; g.audio.play('click', { vol: 0.6 }); render();
      }));
    };
    render();
    $('dialog').classList.remove('hidden');
  }

  // ------------------------------------------------------------ map
  openMap() { if (this.modalOpen()) return; $('mapOv').classList.remove('hidden'); this.mapSel = null; this.renderMapTabs(); requestAnimationFrame(() => this.drawMap()); }
  closeMap() { $('mapOv').classList.add('hidden'); }
  renderMapTabs() {
    [...$('mapTabs').children].forEach((t) => t.classList.toggle('on', t.dataset.tab === this.mapTab));
    let pb = $('btnProbe');
    if (!pb) {
      pb = document.createElement('button'); pb.id = 'btnProbe'; pb.className = 'pbtn secondary';
      pb.addEventListener('click', () => { if (this.g.explore.probe()) { this.drawMap(); this.renderMapTabs(); } });
      $('btnMapClose').parentNode.insertBefore(pb, $('btnMapClose'));
    }
    pb.textContent = `LAUNCH PROBE (${this.g.state.explore.probes})${this.g.pad.active ? ` [${this.g.pad.layout.X}]` : ''}`;
    pb.disabled = !this.g.state.explore.probes; pb.style.display = this.mapTab === 'system' ? '' : 'none';
    $('mapSub').textContent = this.mapTab === 'system' ? `${this.g.sysInfo.name} system · tap a destination for autopilot` : 'Galaxy chart · tap a system for market intel & routes';
    this.renderMapInfo();
  }

  mapGeom() {
    const c = $('mapCanvas'); const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const W = c.clientWidth, H = c.clientHeight;
    if (c.width !== Math.round(W * dpr) || c.height !== Math.round(H * dpr)) { c.width = Math.round(W * dpr); c.height = Math.round(H * dpr); }
    return { c, ctx: c.getContext('2d'), W, H, dpr };
  }
  systemItems() {
    const g = this.g, Wd = g.world, items = [];
    items.push({ kind: 'station', pos: Wd.station.pos, name: Wd.station.name, color: '#9ff0ff', r: 7, arrive: 200, ignore: Wd.station });
    Wd.gates.forEach((gt) => items.push({ kind: 'gate', pos: gt.pos, name: `Gate → ${g.galaxy.systems[gt.to].name}`, color: '#d6b8ff', r: 6, arrive: 250, gate: gt }));
    Wd.fields.forEach((f) => items.push({ kind: 'field', pos: f.center, name: f.name, color: '#e8d3a4', r: 6, ring: f.radius, arrive: f.radius + 40, field: f, ignore: f }));
    Wd.planets.forEach((pl, i) => {
      const dep = Wd.deposits[i];
      // fly to a low-orbit hover point above the surface deposit, not into the planet's centre
      const dest = dep.pos.clone().sub(pl.pos).normalize().multiplyScalar(100).add(dep.pos);
      items.push({ kind: 'planet', pos: pl.pos, dest, name: pl.data.name, color: `rgb(${pl.data.pal[1].map((x) => Math.round(x * 255)).join(',')})`, r: 4, ring: pl.radius, arrive: 45, deposit: dep });
    });
    Wd.derelicts.forEach((d) => { if (!d.occupied) items.push({ kind: 'derelict', pos: d.pos, name: d.name, color: '#ffb07a', r: 5, arrive: 120 }); });
    items.push(...g.events.mapItems());
    items.push(...g.outposts.mapItems());
    items.push(...g.explore.mapItems());
    return items;
  }
  drawMap() {
    const { ctx, W, H, dpr } = this.mapGeom();
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    // print-style background grid
    ctx.fillStyle = '#0b1020'; ctx.fillRect(0, 0, W, H);
    ctx.strokeStyle = 'rgba(63,184,200,.08)'; ctx.lineWidth = 1;
    for (let x = 0; x < W; x += 40) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
    for (let y = 0; y < H; y += 40) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
    if (this.mapTab === 'system') this.drawSystemMap(ctx, W, H); else this.drawGalaxyMap(ctx, W, H);
  }
  sysProj(W, H) {
    const infoW = this.mapInfoReserve(W);
    const cx = (W - infoW) / 2, cy = H / 2; const s = Math.min((W - infoW) / 2, H / 2) / 9400;
    const v = this.mapView.system, z = v.z;
    return (p) => [cx + p.x * s * z + v.x, cy + p.z * s * z + v.y, s * z];
  }
  drawSystemMap(ctx, W, H) {
    const g = this.g, P = this.sysProj(W, H);
    const [sx, sy, s] = P(new THREE.Vector3());
    const st = g.sysData.star;
    const glowR = Math.min(st.radius * s * 4, Math.max(40, st.radius * s * 1.6));
    const grd = ctx.createRadialGradient(sx, sy, 0, sx, sy, glowR);
    grd.addColorStop(0, `rgb(${st.color.map((c) => Math.round(c * 255)).join(',')})`); grd.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = grd; ctx.beginPath(); ctx.arc(sx, sy, glowR, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = 'rgba(239,230,210,.12)';
    for (const pl of g.world.planets) { const d = Math.hypot(pl.pos.x, pl.pos.z) * s; ctx.beginPath(); ctx.arc(sx, sy, d, 0, Math.PI * 2); ctx.stroke(); }
    const PRI = { anomaly: 3, outpost: 7, site: 0, event: 6, station: 5, gate: 4, planet: 3, field: 2, derelict: 1 };
    const labels = [];
    for (const it of this.systemItems()) {
      const [x, y] = P(it.pos);
      const rad = Math.max(it.r, (it.ring || 0) * s);
      if (it.kind === 'field' && it.field.surge) { ctx.fillStyle = 'rgba(200,245,106,.18)'; ctx.beginPath(); ctx.arc(x, y, rad, 0, Math.PI * 2); ctx.fill(); }
      if (it.ring) { ctx.strokeStyle = it.kind === 'field' && it.field.surge ? '#c8f56a' : it.color; ctx.globalAlpha = it.kind === 'field' && !it.field.surge ? 0.55 : 1; ctx.lineWidth = 2; ctx.setLineDash(it.kind === 'field' ? [3, 3] : []); ctx.beginPath(); ctx.arc(x, y, rad, 0, Math.PI * 2); if (it.kind === 'planet') { ctx.fillStyle = it.color; ctx.fill(); } ctx.stroke(); ctx.setLineDash([]); ctx.globalAlpha = 1; }
      else { ctx.fillStyle = it.color; ctx.strokeStyle = '#141826'; ctx.lineWidth = 2; ctx.beginPath(); if (it.kind === 'gate') ctx.arc(x, y, it.r, 0, Math.PI * 2); else ctx.rect(x - it.r, y - it.r, it.r * 2, it.r * 2); ctx.fill(); ctx.stroke(); }
      const sel = this.mapSel && this.mapSel.name === it.name;
      if (sel) { ctx.strokeStyle = '#f0703c'; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(x, y, rad + 7, 0, Math.PI * 2); ctx.stroke(); }
      const ir = Math.min(rad, 12);
      const dyy = it.pos.y - g.player.pos.y, altTxt = Math.abs(dyy) > 400 ? `${dyy > 0 ? '▲ above' : '▼ below'} ${this.dist(Math.abs(dyy))}` : null;
      labels.push({ x, y, gap: Math.min(rad, 40) + 5, font2: '700 10px system-ui, sans-serif', color2: 'rgba(239,230,210,.7)', short: [it.kind === 'field' && it.field.surge ? `✦ ${it.name}` : it.name], lines: [it.kind === 'field' && it.field.surge ? `✦ ${it.name}` : it.kind === 'event' ? `${eventIcon(it.ev).ch} ${it.name}` : it.name, ...(altTxt ? [altTxt] : [])], font: '700 12px system-ui, sans-serif', lh: 14, color: sel ? '#f0703c' : '#efe6d2', pri: sel ? 99 : PRI[it.kind], force: sel,
        blocks: [{ x: x - ir, y: y - ir, w: ir * 2, h: ir * 2 }] });
    }
    for (const t of g.traders) { const [x, y] = P(t.pos); ctx.fillStyle = '#f2d36b'; ctx.fillRect(x - 3, y - 3, 6, 6); }
    for (const o of g.outlaws) if (o.pos.distanceTo(g.player.pos) < g.player.stats.sensor) { const [x, y] = P(o.pos); ctx.fillStyle = '#ff4a3a'; ctx.fillRect(x - 4, y - 4, 8, 8); }
    // player
    const p = g.player; const [px, py] = P(p.pos);
    ctx.save(); ctx.translate(px, py); ctx.rotate(-p.yaw + Math.PI); ctx.fillStyle = '#f0703c'; ctx.strokeStyle = '#141826'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(0, -10); ctx.lineTo(7, 8); ctx.lineTo(0, 4); ctx.lineTo(-7, 8); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
    ctx.strokeStyle = 'rgba(63,184,200,.35)'; ctx.beginPath(); ctx.arc(px, py, p.stats.sensor * s, 0, Math.PI * 2); ctx.stroke();
    if (g.autopilot) { const [ax, ay] = P(g.autopilot.pos); ctx.strokeStyle = '#3fb8c8'; ctx.setLineDash([6, 5]); ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(ax, ay); ctx.stroke(); ctx.setLineDash([]); }
    labels.push({ x: px, y: py, gap: 12, lines: ['YOU'], font: '900 11px system-ui, sans-serif', color: '#f0703c', pri: 98, force: true, blocks: [{ x: px - 9, y: py - 10, w: 18, h: 20 }] });
    // gold stars on contract drop-offs / next gates
    ctx.font = '900 18px system-ui, sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    for (const t of this.missionTargets()) {
      const [x, y] = P(t.pos); const sx2 = x + 11, sy2 = y - 11;
      ctx.lineWidth = 3; ctx.strokeStyle = '#141826'; ctx.strokeText('★', sx2, sy2); ctx.fillStyle = '#ffd34a'; ctx.fillText('★', sx2, sy2);
      labels.push({ x: sx2, y: sy2, gap: 0, lines: [], pri: 0, blocks: [{ x: sx2 - 8, y: sy2 - 8, w: 16, h: 16 }] });
    }
    ctx.textBaseline = 'alphabetic';
    this.drawLabels(ctx, labels, W, H);
  }
  galProj(W, H) {
    const infoW = this.mapInfoReserve(W);
    const s = Math.min((W - infoW - 30) / 1000, (H - 40) / 620);
    const ox = 15 + ((W - infoW - 30) - 1000 * s) / 2, oy = 20 + ((H - 40) - 620 * s) / 2;
    const cx = (W - infoW) / 2, cy = H / 2; const v = this.mapView.galaxy, z = v.z;
    return (sys) => [cx + (ox + sys.x * s - cx) * z + v.x, cy + (oy + sys.y * s - cy) * z + v.y];
  }

  // ---- map camera: drag to pan, pinch / wheel / buttons to zoom ----
  mapInfoReserve(W) { return window.innerHeight > window.innerWidth ? 0 : Math.min(300, W * 0.44); }
  mapCenter() { const c = $('mapCanvas'); const W = c.clientWidth; return [(W - this.mapInfoReserve(W)) / 2, c.clientHeight / 2]; }
  mapZoomAt(mx, my, factor) {
    const v = this.mapView[this.mapTab]; const max = this.mapTab === 'system' ? 14 : 4;
    const nz = clamp(v.z * factor, 1, max); const k = nz / v.z; const [cx, cy] = this.mapCenter();
    v.x = mx - cx - (mx - cx - v.x) * k; v.y = my - cy - (my - cy - v.y) * k; v.z = nz;
    this.mapClampPan(); this.drawMap();
  }
  mapClampPan() {
    const c = $('mapCanvas'); const v = this.mapView[this.mapTab];
    const lx = c.clientWidth * 0.5 * v.z, ly = c.clientHeight * 0.5 * v.z;
    v.x = clamp(v.x, -lx, lx); v.y = clamp(v.y, -ly, ly);
  }
  resetMapView(tab = this.mapTab) { this.mapView[tab] = { z: 1, x: 0, y: 0 }; }
  bindMapGestures() {
    const c = $('mapCanvas'); const pts = new Map(); let drag = null, pinch = null;
    const local = (e) => { const r = c.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
    c.addEventListener('pointerdown', (e) => {
      // capture keeps the gesture when a finger slides off the canvas; it throws if the pointer already lifted
      try { c.setPointerCapture(e.pointerId); } catch (err) { if (err.name !== 'NotFoundError' && err.name !== 'InvalidPointerId') throw err; }
      pts.set(e.pointerId, local(e));
      if (pts.size === 1) { const [x, y] = local(e); drag = { x, y, moved: false }; pinch = null; }
      else if (pts.size === 2) { const [a, b] = [...pts.values()]; pinch = { d: Math.hypot(a[0] - b[0], a[1] - b[1]), mx: (a[0] + b[0]) / 2, my: (a[1] + b[1]) / 2 }; if (drag) drag.moved = true; }
    });
    c.addEventListener('pointermove', (e) => {
      if (!pts.has(e.pointerId)) return;
      const prev = pts.get(e.pointerId); const cur = local(e); pts.set(e.pointerId, cur);
      const v = this.mapView[this.mapTab];
      if (pts.size >= 2 && pinch) {
        const [a, b] = [...pts.values()]; const d = Math.hypot(a[0] - b[0], a[1] - b[1]); const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2;
        v.x += mx - pinch.mx; v.y += my - pinch.my;
        this.mapZoomAt(mx, my, d / Math.max(1, pinch.d));
        pinch = { d, mx, my };
      } else if (drag) {
        if (!drag.moved && Math.hypot(cur[0] - drag.x, cur[1] - drag.y) < 8) return;
        drag.moved = true; v.x += cur[0] - prev[0]; v.y += cur[1] - prev[1]; this.mapClampPan(); this.drawMap();
      }
    });
    const up = (e) => {
      if (!pts.has(e.pointerId)) return;
      const wasTap = pts.size === 1 && drag && !drag.moved;
      pts.delete(e.pointerId);
      if (wasTap) this.mapTap(e);
      if (pts.size === 0) { drag = null; pinch = null; }
      else if (pts.size === 1) { const [p] = [...pts.values()]; drag = { x: p[0], y: p[1], moved: true }; pinch = null; }
    };
    c.addEventListener('pointerup', up); c.addEventListener('pointercancel', (e) => { pts.delete(e.pointerId); if (!pts.size) { drag = null; pinch = null; } });
    c.addEventListener('wheel', (e) => { e.preventDefault(); const [x, y] = local(e); this.mapZoomAt(x, y, Math.exp(-e.deltaY * 0.0015)); }, { passive: false });
    $('mapZoom').addEventListener('click', (e) => {
      const b = e.target.closest('button[data-z]'); if (!b) return; let [cx, cy] = this.mapCenter();
      const cv = $('mapCanvas'), sel = this.mapSel;
      if (sel && this.mapTab === 'system' && sel.pos) [cx, cy] = this.sysProj(cv.clientWidth, cv.clientHeight)(sel.pos);
      else if (sel && this.mapTab === 'galaxy') [cx, cy] = this.galProj(cv.clientWidth, cv.clientHeight)(this.g.galaxy.systems[sel.sys]);
      if (b.dataset.z === 'reset') { this.resetMapView(); this.drawMap(); } else this.mapZoomAt(cx, cy, b.dataset.z === 'in' ? 1.6 : 1 / 1.6);
    });
  }

  // Draw labels in priority order, trying several anchor positions; skip ones that would overlap.
  drawLabels(ctx, labels, W, H) {
    const placed = [];
    // keep labels clear of the zoom buttons (bottom-left corner of the map)
    const zb = $('mapZoom').getBoundingClientRect(), cb = $('mapCanvas').getBoundingClientRect();
    if (zb.width) placed.push({ x: zb.left - cb.left - 6, y: zb.top - cb.top - 6, w: zb.width + 12, h: zb.height + 12 });
    const hit = (r) => placed.some((q) => r.x < q.x + q.w && r.x + r.w > q.x && r.y < q.y + q.h && r.y + r.h > q.y);
    labels.sort((a, b) => b.pri - a.pri);
    for (const L of labels) placed.push(...(L.blocks || []));
    for (const L of labels) {
      if (!L.lines.length) continue; // block-only entry (keeps other labels off an icon)
      const lh = L.lh || 13;
      const variants = L.short ? [L.lines, L.short] : [L.lines];
      let spot = null, lines = null, w = 0, h = 0;
      for (const ls of variants) {
        ctx.font = L.font;
        w = Math.max(...ls.map((t) => ctx.measureText(t).width)) + 6; h = lh * ls.length + 2;
        const cands = [];
        for (const k of [1, 1.9]) {
          const g = L.gap * k;
          cands.push([L.x - w / 2, L.y + g], [L.x - w / 2, L.y - g - h], [L.x + g, L.y - h / 2], [L.x - g - w, L.y - h / 2],
            [L.x + g * 0.7, L.y + g * 0.7], [L.x - g * 0.7 - w, L.y + g * 0.7], [L.x + g * 0.7, L.y - g * 0.7 - h], [L.x - g * 0.7 - w, L.y - g * 0.7 - h]);
        }
        for (const [x, y] of cands) { const r = { x, y, w, h }; if (x >= 0 && y >= 0 && x + w <= W && y + h <= H && !hit(r)) { spot = r; break; } }
        if (spot) { lines = ls; break; }
      }
      if (!spot && L.force) { lines = L.lines; ctx.font = L.font; w = Math.max(...lines.map((t) => ctx.measureText(t).width)) + 6; h = lh * lines.length + 2; spot = { x: L.x - w / 2, y: L.y + L.gap, w, h }; }
      if (!spot) continue;
      placed.push(spot);
      ctx.fillStyle = 'rgba(11,16,32,.72)'; ctx.fillRect(spot.x, spot.y, w, h);
      ctx.textAlign = 'center'; ctx.textBaseline = 'top';
      lines.forEach((t, i) => { ctx.fillStyle = i === 0 ? L.color : (L.color2 || L.color); if (i > 0 && L.font2) ctx.font = L.font2; ctx.fillText(t, spot.x + w / 2, spot.y + 1 + i * lh); });
      ctx.textBaseline = 'alphabetic';
    }
  }
  drawGalaxyMap(ctx, W, H) {
    const g = this.g, P = this.galProj(W, H), S = g.galaxy.systems, cur = g.state.systemId;
    ctx.lineWidth = 3;
    const visible = (s) => !s.hidden || s.links.length;
    for (const s of S) for (const l of s.links) if (l > s.id && visible(s) && visible(S[l])) {
      const [x1, y1] = P(s), [x2, y2] = P(S[l]);
      ctx.strokeStyle = (s.id === cur || l === cur) ? 'rgba(63,184,200,.9)' : 'rgba(239,230,210,.28)';
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
    }
    const crs = g.state.course, cpath = crs ? this.route(cur, crs.sys) : null;
    if (cpath) {
      ctx.save(); ctx.strokeStyle = '#f0703c'; ctx.lineWidth = 5; ctx.setLineDash([10, 6]);
      for (let i = 0; i < cpath.length - 1; i++) { const [x1, y1] = P(S[cpath[i]]), [x2, y2] = P(S[cpath[i + 1]]); ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke(); }
      const [dx, dy] = P(S[crs.sys]); ctx.setLineDash([]); ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(dx, dy, 26, 0, Math.PI * 2); ctx.stroke(); ctx.restore();
    }
    const labels = [];
    for (const s of S) {
      if (!visible(s)) continue;
      const [x, y] = P(s);
      const known = g.state.intel[s.id];
      ctx.fillStyle = ECO_COL[s.eco]; ctx.strokeStyle = '#141826'; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.arc(x, y, s.id === cur ? 13 : 10, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      if (s.id === cur) { ctx.strokeStyle = '#efe6d2'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(x, y, 19, 0, Math.PI * 2); ctx.stroke(); }
      const sel = this.mapSel && this.mapSel.sys === s.id;
      if (sel) { ctx.strokeStyle = '#f0703c'; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(x, y, 22, 0, Math.PI * 2); ctx.stroke(); }
      const br = s.id === cur ? 20 : sel ? 23 : 12;
      labels.push({ x, y, gap: br + 2, lines: [`${g.state.story.arc && g.state.story.arc.target === s.id ? '📖 ' : ''}${s.name}`, `${isAccordEco(s.eco) ? '🛡 ' : ''}${ECONOMIES[s.eco].name}${known ? '' : ' · ?'}`], short: [s.name], font: '900 13px "Arial Black", system-ui', font2: '700 10px system-ui', lh: 15,
        color: sel ? '#f0703c' : '#efe6d2', color2: known ? 'rgba(239,230,210,.85)' : 'rgba(239,230,210,.5)', pri: sel ? 99 : s.id === cur ? 50 : 10, force: sel || s.id === cur,
        blocks: [{ x: x - br, y: y - br, w: br * 2, h: br * 2 }] });
    }
    // sector event icons under each system
    const evBy = new Map();
    for (const e of liveEvents(g.state)) { if (!evBy.has(e.sys)) evBy.set(e.sys, []); evBy.get(e.sys).push(e); }
    ctx.font = '900 15px system-ui, sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    for (const [id, evs] of evBy) {
      const [x, y] = P(S[id]);
      evs.forEach((e, k) => {
        const ic = eventIcon(e), ex = x - 14 - k * 16, ey = y + 15;
        ctx.lineWidth = 3; ctx.strokeStyle = '#141826'; ctx.strokeText(ic.ch, ex, ey); ctx.fillStyle = ic.col; ctx.fillText(ic.ch, ex, ey);
        labels.push({ x: ex, y: ey, gap: 0, lines: [], pri: 0, blocks: [{ x: ex - 8, y: ey - 8, w: 16, h: 16 }] });
      });
    }
    // siege target: ⚔ to the right of the system
    const SA = g.state.siege.active;
    if (SA && SA.phase !== 'done') {
      const [x, y] = P(S[SA.target.sys]); const ex = x + 18, ey = y + 14;
      ctx.font = '900 16px system-ui, sans-serif'; ctx.lineWidth = 3; ctx.strokeStyle = '#141826'; ctx.strokeText('⚔', ex, ey); ctx.fillStyle = '#ff4a3a'; ctx.fillText('⚔', ex, ey);
      labels.push({ x: ex, y: ey, gap: 0, lines: [], pri: 0, blocks: [{ x: ex - 9, y: ey - 9, w: 18, h: 18 }] });
    }
    // outposts: ⌂ above-left of the system (red while a raid is incoming)
    ctx.font = '900 15px system-ui, sans-serif';
    for (const o of g.state.outposts) {
      const [x, y] = P(S[o.sys]); const ex = x - 16, ey = y - 15, hot = o.raid && o.raid.phase !== 'pending';
      ctx.lineWidth = 3; ctx.strokeStyle = '#141826'; ctx.strokeText('⌂', ex, ey); ctx.fillStyle = hot ? '#ff4a3a' : '#9ff0ff'; ctx.fillText('⌂', ex, ey);
      labels.push({ x: ex, y: ey, gap: 0, lines: [], pri: 0, blocks: [{ x: ex - 8, y: ey - 8, w: 16, h: 16 }] });
    }
    // gold stars on systems with contract drop-offs
    const dests = new Set(g.state.missions.map((m) => m.dest.sys));
    ctx.font = '900 18px system-ui, sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    for (const id of dests) {
      const [x, y] = P(S[id]); const sx2 = x + 14, sy2 = y - 14;
      ctx.lineWidth = 3; ctx.strokeStyle = '#141826'; ctx.strokeText('★', sx2, sy2); ctx.fillStyle = '#ffd34a'; ctx.fillText('★', sx2, sy2);
      labels.push({ x: sx2, y: sy2, gap: 0, lines: [], pri: 0, blocks: [{ x: sx2 - 8, y: sy2 - 8, w: 16, h: 16 }] });
    }
    ctx.textBaseline = 'alphabetic';
    this.drawLabels(ctx, labels, W, H);
  }
  mapTap(e) {
    const c = $('mapCanvas'); const r = c.getBoundingClientRect(); const mx = e.clientX - r.left, my = e.clientY - r.top;
    const W = c.clientWidth, H = c.clientHeight;
    let best = null, bd = 34;
    if (this.mapTab === 'system') {
      const P = this.sysProj(W, H);
      for (const it of this.systemItems()) { const [x, y, s] = P(it.pos); const d = Math.hypot(x - mx, y - my) - (it.ring ? Math.min(it.ring * s, 30) : 0); if (d < bd) { bd = d; best = it; } }
    } else {
      const P = this.galProj(W, H);
      for (const s of this.g.galaxy.systems) { if (s.hidden && !s.links.length) continue; const [x, y] = P(s); const d = Math.hypot(x - mx, y - my); if (d < bd) { bd = d; best = { sys: s.id, name: s.name }; } }
    }
    this.mapSel = best; this.g.audio.play('click', { vol: 0.3 });
    this.renderMapInfo(); this.drawMap();
  }
  route(from, to) {
    const S = this.g.galaxy.systems; const prev = { [from]: -1 }; const q = [from];
    while (q.length) { const c = q.shift(); if (c === to) break; for (const l of S[c].links) if (!(l in prev)) { prev[l] = c; q.push(l); } }
    if (!(to in prev)) return null;
    const path = []; let c = to; while (c !== -1) { path.unshift(c); c = prev[c]; } return path;
  }
  renderMapInfo() {
    const box = $('mapInfo'), g = this.g, sel = this.mapSel;
    if (!sel) { box.innerHTML = ''; return; }
    if (this.mapTab === 'system') {
      let extra = '';
      if (sel.kind === 'gate') { const to = g.galaxy.systems[sel.gate.to]; extra = `<p>Leads to <b>${to.name}</b> (${ECONOMIES[to.eco].name}). Fly close and press JUMP.</p>`; }
      if (sel.kind === 'field') extra = `<p>Asteroids rich in <b>${COMM[sel.field.primary].name}</b> and ${COMM[sel.field.data.secondary].name}. Rare Lumenite veins.</p>`;
      if (sel.kind === 'planet' && sel.deposit) extra = `<p>Surface deposit: <b>${COMM[sel.deposit.ore].name}</b> (${Math.round(sel.deposit.amount)} units). Autopilot parks you in low orbit above it, ready to drill.</p>`;
      if (sel.kind === 'station') extra = '<p>Safe harbor: market, upgrades, shipyard, repairs.</p>';
      if (sel.kind === 'derelict') extra = '<p>Abandoned hulk. Hold SALVAGE nearby for credits & parts. Restocks every 3 days.</p>';
      if (sel.kind === 'field' && sel.field.surge) extra += '<p style="color:#4f7a10"><b>✦ Lumenite surge today:</b> far higher chance of Lumenite from every rock here.</p>';
      if (sel.kind === 'anomaly') { const a = sel.anomaly; extra = a.type === 'dormant' ? `<p>A cold, uncharted jump gate. Exodus Logs: <b>${g.state.explore.lore}/${FRAGMENTS_TO_UNLOCK}</b> to wake it.</p>` : g.state.explore.seen[a.key] === 2 || a.type === 'spire' ? `<p>${TYPES[a.type].desc} Fly close and hold INVESTIGATE.</p>` : '<p>An unidentified signal. Fly close and hold INVESTIGATE, or launch a probe to identify it.</p>'; }
      if (sel.kind === 'outpost') { const o = sel.outpost; extra = `<p>Your outpost: ${builtMods(o).length} modules · storage ${storageUsed(o)}/${storageCap(o)}${o.credits ? ` · ◈${fmt(o.credits)} to collect` : ''}${o.raid && o.raid.phase !== 'pending' ? ' · <b style="color:#ff8a5c">⚠ RAID INCOMING</b>' : ''}</p>`; }
      if (sel.kind === 'site') extra = `<p>Unclaimed outpost site. Ore: <b>${COMM[sel.site.ore].name}</b>${sel.site.gas ? ' (gas giant)' : ''}. Fly here and press ESTABLISH OUTPOST.</p>`;
      if (sel.kind === 'event') { const d = describe(sel.ev, g.galaxy, g.state, g.player.stats.sensorLvl); extra = `<p>${d.line}</p>${sel.ev.type === 'distress' ? '<p>Fly alongside and hold ASSIST to patch the ship up.</p>' : sel.ev.type === 'wreck' ? '<p>Fly close and hold SALVAGE.</p>' : '<p>Approach and the base launches its guards. Destroy the base itself for the loot.</p>'}`; }
      const d = (sel.dest || sel.pos).distanceTo(g.player.pos);
      const here = g.state.missions.filter((m) => m.dest.sys === g.state.systemId && ((sel.kind === 'station' && m.dest.kind === 'station') || (sel.kind === 'planet' && m.dest.kind === 'planet' && g.world.deposits[m.dest.planet] === sel.deposit)));
      const ms = here.length ? `<p style="color:#9a6a00"><b>★ Contract drop-off:</b> ${here.map((m) => m.title).join('; ')}</p>` : '';
      box.innerHTML = `<h4>${sel.name}</h4>${extra}${ms}<p>Distance ${this.dist(d)}</p><button class="pbtn primary" data-act="autopilot">AUTOPILOT</button>`;
    } else {
      const s = g.galaxy.systems[sel.sys]; const intel = g.state.intel[s.id];
      const path = this.route(g.state.systemId, s.id);
      let rows = '';
      if (intel) {
        rows = '<table><tr><td></td><td><b>pay</b></td><td><b>sell</b></td></tr>' + COMMODITIES.map((c) => `<tr><td>${c.name}</td><td>${intel.prices[c.id].s}</td><td>${intel.prices[c.id].b ?? '—'}</td></tr>`).join('') + `</table><small>Intel from day ${intel.day}</small>`;
      } else {
        const m = ECONOMIES[s.eco].mult;
        const hi = Object.entries(m).filter(([, v]) => v >= 1.25).map(([k]) => COMM[k].name).join(', ');
        const lo = Object.entries(m).filter(([, v]) => v <= 0.75).map(([k]) => COMM[k].name).join(', ');
        rows = `<p>No market intel yet.<br>Typical demand: <b>${hi || '—'}</b><br>Typical exports: <b>${lo || '—'}</b></p>`;
      }
      const jumps = path ? path.length - 1 : 0;
      const btn = s.id === g.state.systemId ? '<p><b>You are here.</b></p>' : `<button class="pbtn primary" data-act="route">PLOT ROUTE · ${jumps} JUMP${jumps > 1 ? 'S' : ''}</button>`;
      const there = g.state.missions.filter((m) => m.dest.sys === s.id);
      const ms = there.length ? `<p style="color:#9a6a00"><b>★ Contracts here:</b> ${there.map((m) => `${m.title} → ${m.dest.name} (due Day ${m.deadline})`).join('; ')}</p>` : '';
      const evs = liveEvents(g.state).filter((e) => e.sys === s.id).map((e) => { const d = describe(e, g.galaxy, g.state, g.player.stats.sensorLvl); return `<p><b style="color:${d.col}">${d.ch}</b> <b>${d.title}:</b> ${d.line}</p>`; }).join('');
      const ft = factionTier(standingWith(g.state, s.eco));
      const es = systemExploreStatus(g.state, g.galaxy, s.id), exploreTxt = `<p><small>Anomalies: ${es.seen} of ${es.total} found, ${es.done} investigated</small></p>`;
      const SA = g.state.siege.active, siegeTxt = SA && SA.phase !== 'done' && SA.target.sys === s.id ? `<p style="color:#ff8a5c"><b>⚔ Siege:</b> ${g.siege.newsLine()}</p>` : '';
      box.innerHTML = `<h4>${s.name}</h4><p><b>${isAccordEco(s.eco) ? '🛡 ACCORD SPACE' : 'THE FRINGE'}</b> · ${ECONOMIES[s.eco].name} · outlaw risk ${Math.round(s.danger * (isAccordEco(s.eco) ? 55 : 115))}%/day</p><p><b style="color:${FACTIONS[s.eco].color}">${FACTIONS[s.eco].name}</b> · you are <b>${ft.name}</b>${ft.level <= -1 ? ' <span style="color:#ff6b4a">(enforcers may hunt you)</span>' : ''}</p>${siegeTxt}${exploreTxt}${evs}${ms}${rows}${btn}`;
    }
  }
  mapAction(act) {
    const g = this.g, sel = this.mapSel; if (!sel) return;
    if (act === 'autopilot') { g.setAutopilot(sel.dest || sel.pos, sel.name, sel.arrive || 200, sel.ignore || null); this.closeMap(); }
    if (act === 'route') {
      if (g.setCourse(sel.sys, { type: 'station' })) this.closeMap();
    }
  }
}
