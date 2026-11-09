// Gamepad / controller support (W3C "standard" button layout).
// Flight writes into the same game.input state as touch and keyboard; menus are driven by moving a
// visible focus ring between the real on-screen buttons and "pressing" them, so every menu action
// goes through exactly the same code path as a tap.
import { clamp } from './rng.js';

const $ = (id) => document.getElementById(id);
// standard mapping indices (positional: A = bottom face button, B = right, X = left, Y = top)
const B = { A: 0, B: 1, X: 2, Y: 3, LB: 4, RB: 5, LT: 6, RT: 7, BACK: 8, START: 9, UP: 12, DOWN: 13, LEFT: 14, RIGHT: 15 };
const DEAD = 0.18;

const LAYOUTS = {
  xbox: { A: 'A', B: 'B', X: 'X', Y: 'Y', LB: 'LB', RB: 'RB', LT: 'LT', RT: 'RT', BACK: 'View', START: 'Menu' },
  sony: { A: '✕', B: '○', X: '□', Y: '△', LB: 'L1', RB: 'R1', LT: 'L2', RT: 'R2', BACK: 'Share', START: 'Options' },
  nintendo: { A: 'B', B: 'A', X: 'Y', Y: 'X', LB: 'L', RB: 'R', LT: 'ZL', RT: 'ZR', BACK: '−', START: '+' },
};

export class GamepadInput {
  constructor(game) {
    this.g = game; this.ui = game.ui;
    this.index = null; this.active = false; this.prev = [];
    this.owns = { steer: false, fire: false, boost: false, mine: false };
    this.focusEl = null; this.lastRect = null; this.navKey = null; this.navT = 0;
    this.layout = LAYOUTS.xbox; this.rumbleOk = true; this.lastRumble = 0; this.lastRumbleStr = 0;
    window.addEventListener('gamepadconnected', (e) => this.connect(e.gamepad));
    window.addEventListener('gamepaddisconnected', (e) => {
      if (e.gamepad.index !== this.index) return;
      this.index = null; this.release(); this.deactivate();
      if (this.g.mode === 'play') this.ui.toast('Controller disconnected', 'warn', 3);
    });
    // touch / mouse / keyboard take over again: hide the controller focus ring and badges
    const back = () => { if (this.active) this.deactivate(); };
    window.addEventListener('pointerdown', back, { capture: true });
    window.addEventListener('keydown', back, { capture: true });
  }

  connect(pad) {
    if (this.index === null) this.index = pad.index;
    const id = pad.id.toLowerCase();
    this.layout = /xbox|xinput|045e/.test(id) ? LAYOUTS.xbox
      : /054c|dualsense|dualshock|playstation|ps4|ps5/.test(id) ? LAYOUTS.sony
      : /057e|pro controller|joy-con|nintendo/.test(id) ? LAYOUTS.nintendo : LAYOUTS.xbox;
    this.applyBadges();
  }

  pad() {
    const pads = navigator.getGamepads ? navigator.getGamepads() : [];
    if (this.index !== null && pads[this.index] && pads[this.index].connected) return pads[this.index];
    for (const p of pads) if (p && p.connected) { this.connect(p); this.index = p.index; return p; }
    return null;
  }

  activate() {
    if (this.active) return;
    this.active = true; document.body.classList.add('gamepad');
    this.applyBadges();
    if (this.g.mode === 'play') this.ui.toast(`🎮 Controller active — ${this.helpText(true)}`, 'info', 5);
    else if (this.g.mode === 'menu') $('loadText').textContent = `Controller ready · press ${this.layout.A} to start`;
  }
  deactivate() {
    this.active = false; document.body.classList.remove('gamepad');
    if (this.focusEl) this.focusEl.classList.remove('gp-focus');
  }

  applyBadges() {
    const L = this.layout;
    const set = (id, txt) => { const el = $(id); if (el) el.dataset.pad = txt; };
    set('btnAction', L.A); set('btnFire', L.X); set('btnMissile', L.B); set('btnCruise', L.Y);
    set('btnTarget', L.LB); set('btnBoost', L.RB); set('btnMap', L.BACK); set('btnMenu', L.START);
    set('throttle', `${L.LT}/${L.RT}`);
  }

  helpText(short = false) {
    const L = this.layout;
    const core = `L-stick steer · ${L.RT}/${L.LT} throttle · ${L.X} fire · ${L.A} action`;
    return short ? core : `${core} · ${L.B} missile · ${L.RB} boost · ${L.Y} cruise · ${L.LB} target · ${L.BACK} map · ${L.START} pause · menus: D-pad/stick move, ${L.A} select, ${L.B} back, ${L.LB}/${L.RB} tabs`;
  }

  rumble(strong, weak = strong, ms = 120) {
    if (!this.active || !this.rumbleOk) return;
    const p = this.pad(); const act = p && p.vibrationActuator;
    if (!act || typeof act.playEffect !== 'function') return;
    const now = performance.now();
    if (now - this.lastRumble < 80 && strong <= this.lastRumbleStr) return;
    this.lastRumble = now; this.lastRumbleStr = strong;
    act.playEffect('dual-rumble', { duration: ms, strongMagnitude: clamp(strong, 0, 1), weakMagnitude: clamp(weak, 0, 1) })
      .catch((err) => { this.rumbleOk = false; console.info('Controller rumble unavailable:', err.name); });
  }

  release() {
    const inp = this.g.input;
    if (this.owns.steer) { inp.sx = 0; inp.sy = 0; }
    if (this.owns.fire) inp.fire = false;
    if (this.owns.boost) inp.boost = false;
    if (this.owns.mine) inp.mine = false;
    this.owns = { steer: false, fire: false, boost: false, mine: false };
  }

  // ------------------------------------------------------------------ main poll (every frame)
  poll(dt) {
    const p = this.pad();
    if (!p) return;
    const btn = (i) => !!p.buttons[i] && (p.buttons[i].pressed || p.buttons[i].value > 0.5);
    const val = (i) => (p.buttons[i] ? p.buttons[i].value : 0);
    const now = p.buttons.map((_, i) => btn(i));
    const hit = (i) => now[i] && !this.prev[i];
    const ax = (i) => { const v = p.axes[i] || 0; return Math.abs(v) < DEAD ? 0 : v; };
    const lx = ax(0), ly = ax(1), rx = ax(2), ry = ax(3);
    const anyInput = now.some(Boolean) || lx || ly || rx || ry;
    if (anyInput) this.activate();
    if (!this.active) { this.prev = now; return; }
    const ctx = this.context();
    if (ctx !== 'flight') this.release();
    const S = { p, btn, val, hit, lx, ly, rx, ry, dt };
    if (ctx === 'flight') this.flight(S);
    else if (ctx === 'map') this.mapNav(S);
    else if (ctx) this.menuNav(S, ctx);
    if (ctx !== this.lastCtx && this.focusEl && ctx === 'flight') { this.focusEl.classList.remove('gp-focus'); this.focusEl = null; }
    this.lastCtx = ctx;
    this.prev = now;
  }

  context() {
    const g = this.g; const open = (id) => !$(id).classList.contains('hidden');
    if (open('dialog') && (g.mode === 'menu' || g.mode === 'play')) return 'dialog'; // dialogs sit above every screen
    if (g.mode === 'menu') return 'start';
    if (g.mode !== 'play') return null;
    if (open('pause')) return 'pause';
    if (open('mapOv')) return 'map';
    if (open('station')) return 'station';
    return 'flight';
  }

  // ------------------------------------------------------------------ flight
  flight(S) {
    const g = this.g, inp = g.input;
    // radial deadzone on the raw stick, then a gentle response curve; direction is preserved
    const rx0 = S.p.axes[0] || 0, ry0 = S.p.axes[1] || 0;
    const mag = Math.min(1, Math.hypot(rx0, ry0));
    if (mag > DEAD) {
      const k = Math.pow((mag - DEAD) / (1 - DEAD), 1.3) / mag;
      inp.sx = clamp(rx0 * k, -1, 1); inp.sy = clamp(-ry0 * k, -1, 1); this.owns.steer = true;
    } else if (this.owns.steer) { inp.sx = 0; inp.sy = 0; this.owns.steer = false; }
    // analog throttle: RT raises, LT lowers, rate scales with pressure; D-pad steps 25%
    const rt = S.val(B.RT), lt = S.val(B.LT);
    if (rt > 0.05 || lt > 0.05) inp.throttle = clamp(inp.throttle + (rt - lt) * 0.9 * S.dt, 0, 1);
    if (S.hit(B.UP)) inp.throttle = clamp(Math.round((inp.throttle + 0.25) * 4) / 4, 0, 1);
    if (S.hit(B.DOWN)) inp.throttle = clamp(Math.round((inp.throttle - 0.25) * 4) / 4, 0, 1);
    const hold = (key, i) => {
      if (S.btn(i)) { if (!inp[key]) { inp[key] = true; this.owns[key] = true; } }
      else if (this.owns[key]) { inp[key] = false; this.owns[key] = false; }
    };
    hold('fire', B.X); hold('boost', B.RB);
    // A = context action: hold for mine/salvage, press for dock/jump/hail
    if (S.hit(B.A)) {
      const a = g.currentAction;
      if (a && a.hold) { inp.mine = true; this.owns.mine = true; }
      else if (a) { g.audio.play('click', { vol: 0.5 }); g.doAction(a); }
    } else if (!S.btn(B.A) && this.owns.mine) { inp.mine = false; this.owns.mine = false; }
    if (S.hit(B.B)) g.fireMissile();
    if (S.hit(B.Y)) g.setCruise(!g.player.cruise);
    if (S.hit(B.LB)) g.cycleTarget();
    if (S.hit(B.BACK)) this.ui.openMap();
    if (S.hit(B.START)) this.ui.togglePause();
  }

  // ------------------------------------------------------------------ generic menu navigation
  layerRoot(ctx) {
    return { start: $('start').querySelector('.start-actions'), dialog: $('dialogBox'), pause: $('pause').querySelector('.dialog'), station: $('station') }[ctx];
  }
  buttons(root) {
    return [...root.querySelectorAll('button')].filter((b) => !b.disabled && b.offsetParent !== null && b.getClientRects().length);
  }
  setFocus(el) {
    if (this.focusEl && this.focusEl !== el) this.focusEl.classList.remove('gp-focus');
    this.focusEl = el;
    if (el) {
      el.classList.add('gp-focus'); el.scrollIntoView({ block: 'nearest', inline: 'nearest' }); this.lastRect = el.getBoundingClientRect();
      this.lastZone = el.closest('#stBody') ? '#stBody' : el.closest('.tabs') ? '.tabs' : null;
    }
  }
  dir(S) {
    let x = 0, y = 0;
    if (S.btn(B.LEFT)) x = -1; else if (S.btn(B.RIGHT)) x = 1;
    if (S.btn(B.UP)) y = -1; else if (S.btn(B.DOWN)) y = 1;
    if (!x && !y && Math.hypot(S.lx, S.ly) > 0.6) { if (Math.abs(S.lx) > Math.abs(S.ly)) x = Math.sign(S.lx); else y = Math.sign(S.ly); }
    const key = `${x},${y}`;
    if (!x && !y) { this.navKey = null; return null; }
    if (key !== this.navKey) { this.navKey = key; this.navT = 0.35; return [x, y]; }
    this.navT -= S.dt;
    if (this.navT <= 0) { this.navT = 0.11; return [x, y]; }
    return null;
  }
  // nearest candidate whose centre lies in the pressed direction; sideways distance is penalised
  pick(cands, from, [dx, dy]) {
    let best = null, bs = Infinity;
    for (const c of cands) {
      const vx = c.x - from.x, vy = c.y - from.y;
      const along = vx * dx + vy * dy; if (along <= 4) continue;
      const s = along + Math.abs(vx * dy - vy * dx) * 2.5;
      if (s < bs) { bs = s; best = c; }
    }
    return best;
  }
  menuNav(S, ctx) {
    const root = this.layerRoot(ctx); if (!root) return;
    const list = this.buttons(root); if (!list.length) return;
    // keep focus valid: the station re-renders its lists after every purchase, so re-acquire the
    // button nearest to where the focus last was
    if (!this.focusEl || !this.focusEl.isConnected || !list.includes(this.focusEl) || ctx !== this.lastCtx) {
      let next = null;
      if (this.lastRect && ctx === this.lastCtx) {
        const cx = this.lastRect.left + this.lastRect.width / 2, cy = this.lastRect.top + this.lastRect.height / 2;
        // stay in the same list (e.g. the market rows) when the focused button became disabled or was re-rendered
        const same = this.lastZone ? list.filter((b) => b.closest(this.lastZone)) : [];
        const pool = same.length ? same : list;
        next = pool.reduce((a, b) => { const r = b.getBoundingClientRect(); const d = Math.hypot(r.left + r.width / 2 - cx, r.top + r.height / 2 - cy); return !a || d < a.d ? { el: b, d } : a; }, null).el;
      } else next = this.defaultFocus(ctx, root, list);
      this.setFocus(next);
    } else this.lastRect = this.focusEl.getBoundingClientRect();
    const d = this.dir(S);
    if (d) {
      const centre = (el) => { const r = el.getBoundingClientRect(); return { el, x: r.left + r.width / 2, y: r.top + r.height / 2 }; };
      const from = centre(this.focusEl);
      const to = this.pick(list.filter((b) => b !== this.focusEl).map(centre), from, d);
      if (to) { this.setFocus(to.el); this.g.audio.play('click', { vol: 0.15, rate: 1.4 }); }
    }
    if (S.hit(B.A) && this.focusEl) {
      if (ctx === 'start') this.audioHint();
      this.focusEl.click();
    }
    if (ctx === 'station') {
      if (S.hit(B.LB) || S.hit(B.RB)) this.cycleTabs($('stTabs'), S.hit(B.RB) ? 1 : -1);
      if (S.ry) $('stBody').scrollTop += S.ry * 700 * S.dt;
      if (S.hit(B.B)) $('btnUndock').click();
    } else if (ctx === 'pause') {
      if (S.hit(B.B) || S.hit(B.START)) this.ui.togglePause();
    } else if (ctx === 'dialog') {
      if (S.hit(B.B)) { const c = this.buttons(root).find((b) => /CANCEL|CLOSE/.test(b.textContent)); if (c) c.click(); }
    }
  }
  // where focus starts in each menu: never on a destructive or leave-the-screen button
  defaultFocus(ctx, root, list) {
    if (ctx === 'station') return list.find((b) => b.closest('#stBody')) || list.find((b) => b.classList.contains('tab')) || list[0];
    if (ctx === 'dialog') return list.find((b) => /CANCEL|CLOSE/.test(b.textContent)) || list.find((b) => b.classList.contains('primary')) || list[0];
    return list.find((b) => b.classList.contains('primary')) || list[0];
  }
  cycleTabs(tabs, step) {
    const all = [...tabs.querySelectorAll('.tab')]; const i = all.findIndex((t) => t.classList.contains('on'));
    all[(i + step + all.length) % all.length].click();
  }
  // browsers only allow audio to start from a touch, click or key press, not a controller button
  audioHint() {
    setTimeout(() => {
      if (this.g.audio.ctx.state !== 'running' && this.g.state.sound) this.ui.toast('Tap the screen once to turn on sound — browsers only start audio after a touch or click', 'info', 6);
    }, 900);
  }

  // ------------------------------------------------------------------ nav chart
  mapItems() {
    const ui = this.ui, c = $('mapCanvas'), W = c.clientWidth, H = c.clientHeight;
    if (ui.mapTab === 'system') { const P = ui.sysProj(W, H); return ui.systemItems().map((it) => { const [x, y] = P(it.pos); return { sel: it, x, y }; }); }
    const P = ui.galProj(W, H);
    return this.g.galaxy.systems.map((s) => { const [x, y] = P(s); return { sel: { sys: s.id, name: s.name }, x, y }; });
  }
  mapNav(S) {
    const ui = this.ui, g = this.g, c = $('mapCanvas');
    if (this.focusEl) { this.focusEl.classList.remove('gp-focus'); this.focusEl = null; }
    const items = this.mapItems();
    const cur = ui.mapSel && items.find((i) => i.sel.name === ui.mapSel.name);
    let from = cur;
    if (!from) {
      if (ui.mapTab === 'system') { const [x, y] = ui.sysProj(c.clientWidth, c.clientHeight)(g.player.pos); from = { x, y }; }
      else { const [x, y] = ui.galProj(c.clientWidth, c.clientHeight)(g.galaxy.systems[g.state.systemId]); from = { x, y }; }
    }
    const d = this.dir(S);
    if (d) {
      const to = this.pick(items.filter((i) => i !== cur), from, d);
      if (to) { this.selectMap(to); }
    }
    if (S.hit(B.A)) {
      const b = $('mapInfo').querySelector('button[data-act]');
      if (b) b.click();
      else { const [cx, cy] = ui.mapCenter(); const n = items.reduce((a, i) => (!a || Math.hypot(i.x - cx, i.y - cy) < Math.hypot(a.x - cx, a.y - cy) ? i : a), null); if (n) this.selectMap(n); }
    }
    if (S.hit(B.B) || S.hit(B.BACK)) ui.closeMap();
    if (S.hit(B.LB) || S.hit(B.RB) || S.hit(B.Y)) this.cycleTabs($('mapTabs'), S.hit(B.LB) ? -1 : 1);
    if (S.hit(B.START)) { ui.closeMap(); ui.togglePause(); }
    // zoom toward the selection with the triggers, pan with the right stick
    const rt = S.val(B.RT), lt = S.val(B.LT);
    if (rt > 0.05 || lt > 0.05) {
      let [zx, zy] = ui.mapCenter(); const sel = items.find((i) => ui.mapSel && i.sel.name === ui.mapSel.name);
      if (sel) { zx = sel.x; zy = sel.y; }
      ui.mapZoomAt(zx, zy, Math.exp((rt - lt) * 2.2 * S.dt));
    }
    if (S.rx || S.ry) { const v = ui.mapView[ui.mapTab]; v.x -= S.rx * 520 * S.dt; v.y -= S.ry * 520 * S.dt; ui.mapClampPan(); ui.drawMap(); }
  }
  selectMap(item) {
    const ui = this.ui, c = $('mapCanvas');
    ui.mapSel = item.sel; ui.renderMapInfo();
    // keep the selection on screen: recentre if it is near or past the edge of the visible chart
    const W = c.clientWidth, H = c.clientHeight, m = 50;
    const info = $('mapInfo').getBoundingClientRect(), cb = c.getBoundingClientRect();
    const usableBottom = info.height && info.top > cb.top + H * 0.4 ? info.top - cb.top : H;
    if (item.x < m || item.x > W - ui.mapInfoReserve(W) - m || item.y < m || item.y > usableBottom - m) {
      const v = ui.mapView[ui.mapTab]; const [cx, cy] = ui.mapCenter();
      v.x += cx - item.x; v.y += Math.min(cy, usableBottom / 2) - item.y; ui.mapClampPan();
    }
    ui.drawMap();
    this.g.audio.play('click', { vol: 0.2, rate: 1.3 });
  }
}
