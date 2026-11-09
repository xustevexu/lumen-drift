const FILES = {
  calm: './audio/bgm_calm.mp3', battle: './audio/bgm_battle.mp3',
  beam: './audio/sfx_beam.mp3', mine: './audio/sfx_mine.mp3', missile: './audio/sfx_missile.mp3',
  explosion: './audio/sfx_explosion.mp3', click: './audio/sfx_click.mp3', coins: './audio/sfx_coins.mp3',
  warp: './audio/sfx_warp.mp3', alarm: './audio/sfx_alarm.mp3',
};

export class Audio {
  constructor() {
    const AC = window.AudioContext || window.webkitAudioContext;
    this.ctx = new AC();
    this.master = this.ctx.createGain(); this.master.gain.value = 0.9; this.master.connect(this.ctx.destination);
    this.sfx = this.ctx.createGain(); this.sfx.gain.value = 0.8; this.sfx.connect(this.master);
    this.musicBus = this.ctx.createGain(); this.musicBus.gain.value = 0.42; this.musicBus.connect(this.master);
    this.buffers = {};
    this.loops = {};
    this.music = {};
    this.current = null;
    this.listener = null;
    this.enabled = true;
  }
  async load(onProgress) {
    const names = Object.keys(FILES);
    let done = 0;
    await Promise.all(names.map(async (n) => {
      try {
        const res = await fetch(FILES[n]);
        if (!res.ok) throw new Error(`HTTP ${res.status} for ${FILES[n]}`);
        const buf = await res.arrayBuffer();
        this.buffers[n] = await this.ctx.decodeAudioData(buf);
      } catch (e) { console.warn('audio load failed', n, e); }
      done++; onProgress && onProgress(done / names.length, n);
    }));
  }
  unlock() { if (this.ctx.state !== 'running') this.ctx.resume(); }
  setEnabled(on) { this.enabled = on; this.master.gain.setTargetAtTime(on ? 0.9 : 0, this.ctx.currentTime, 0.05); }
  attenuate(pos) {
    if (!pos || !this.listener) return 1;
    const d = pos.distanceTo(this.listener);
    return Math.max(0, 1 - d / 1400);
  }
  play(name, { vol = 1, pos = null, rate = 1 } = {}) {
    const b = this.buffers[name]; if (!b) return;
    const a = vol * this.attenuate(pos); if (a < 0.02) return;
    const s = this.ctx.createBufferSource(); s.buffer = b; s.playbackRate.value = rate * (0.94 + Math.random() * 0.12);
    const g = this.ctx.createGain(); g.gain.value = a;
    s.connect(g); g.connect(this.sfx); s.start();
  }
  loop(key, name, on, vol = 0.5, rate = 1) {
    let l = this.loops[key];
    if (on && !l && this.buffers[name]) {
      const s = this.ctx.createBufferSource(); s.buffer = this.buffers[name]; s.loop = true; s.playbackRate.value = rate;
      const g = this.ctx.createGain(); g.gain.value = 0; s.connect(g); g.connect(this.sfx); s.start();
      g.gain.setTargetAtTime(vol, this.ctx.currentTime, 0.04);
      l = this.loops[key] = { s, g };
    } else if (!on && l) {
      l.g.gain.setTargetAtTime(0, this.ctx.currentTime, 0.06);
      const s = l.s; setTimeout(() => { try { s.stop(); } catch (e) { /* already stopped */ } }, 300);
      delete this.loops[key];
    } else if (on && l) { l.g.gain.setTargetAtTime(vol, this.ctx.currentTime, 0.05); }
  }
  setMusic(name) {
    if (this.current === name) return;
    const now = this.ctx.currentTime;
    if (this.current && this.music[this.current]) { const m = this.music[this.current]; m.g.gain.setTargetAtTime(0, now, 0.8); const s = m.s; setTimeout(() => { try { s.stop(); } catch (e) { /* stopped */ } }, 4000); delete this.music[this.current]; }
    this.current = name;
    const b = this.buffers[name]; if (!b) return;
    const s = this.ctx.createBufferSource(); s.buffer = b; s.loop = true;
    const g = this.ctx.createGain(); g.gain.value = 0; s.connect(g); g.connect(this.musicBus); s.start();
    g.gain.setTargetAtTime(name === 'battle' ? 0.75 : 1, now, 1.2);
    this.music[name] = { s, g };
  }
}
