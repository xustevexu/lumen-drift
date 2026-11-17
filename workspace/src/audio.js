const FILES = {
  calm: './audio/bgm_calm.mp3', battle: './audio/bgm_battle.mp3', theme: './audio/bgm_theme.mp3',
  beam: './audio/sfx_beam.mp3', mine: './audio/sfx_mine.mp3', missile: './audio/sfx_missile.mp3',
  explosion: './audio/sfx_explosion.mp3', click: './audio/sfx_click.mp3', coins: './audio/sfx_coins.mp3',
  warp: './audio/sfx_warp.mp3', alarm: './audio/sfx_alarm.mp3',
};

// Loudness balance. The source files were mastered at very different levels (measured integrated loudness,
// EBU R128 / LUFS, with ffmpeg): sfx_click is ~11 dB hotter than everything else. Every sound is scaled to a
// common target so the per-call volumes in the game mean the same thing for every sound; UI clicks get a
// lower target so they sit under gameplay audio instead of over it.
const MEASURED_LUFS = { alarm: -16.3, beam: -16.4, click: -4.7, coins: -15.9, explosion: -18.9, mine: -15.5, missile: -17.1, warp: -16.1 };
const TARGET_LUFS = { click: -24 }; // default target below
const DEFAULT_TARGET = -17;
const NORM = Object.fromEntries(Object.entries(MEASURED_LUFS).map(([k, l]) => [k, Math.pow(10, ((TARGET_LUFS[k] ?? DEFAULT_TARGET) - l) / 20)]));
// the synthesized rock-crumble peaks at about -9 dB; this brings it to the old effect's loudness (about -25 dB at the in-game volume)
for (let i = 0; i < 3; i++) NORM[`crumble${i}`] = 0.3;
export const LOUDNESS_GAIN = NORM;

// A rock breaking apart in vacuum-but-it's-a-game: a dull low thump, a short crack, then gravel and
// debris scattering and settling. Built sample by sample so it needs no file. `seed` gives variations.
function makeCrumble(ctx, seed) {
  const sr = ctx.sampleRate, len = Math.floor(sr * 1.4), buf = ctx.createBuffer(1, len, sr), d = buf.getChannelData(0);
  let x = seed * 9301 + 49297; const rnd = () => { x = (x * 16807) % 2147483647; return x / 2147483647 * 2 - 1; };
  // 1) low thump + rumble: brown noise through two gentle low-passes, quick attack, ~0.4 s decay
  let br = 0, lp1 = 0, lp2 = 0;
  for (let i = 0; i < len; i++) {
    const t = i / sr; br = (br + rnd() * 0.02) * 0.998; lp1 += (br - lp1) * 0.05; lp2 += (lp1 - lp2) * 0.05;
    const env = Math.min(1, t / 0.006) * Math.exp(-t / (0.32 + seed * 0.04));
    const thump = Math.sin(2 * Math.PI * (55 - 25 * t) * t) * Math.exp(-t / 0.09) * 0.5; // a soft body to the hit
    d[i] = lp2 * 14 * env + thump;
  }
  // 2) the crack: a short burst of band-limited noise right at the start
  let hp = 0, prev = 0, lp = 0;
  for (let i = 0; i < Math.floor(sr * 0.08); i++) {
    const t = i / sr, n = rnd(); hp = 0.85 * (hp + n - prev); prev = n; lp += (hp - lp) * 0.35;
    d[i] += lp * 0.55 * Math.exp(-t / 0.018);
  }
  // 3) gravel: little grains of filtered noise scattering over the next second, getting sparser and quieter
  const grains = 22 + Math.floor((rnd() + 1) * 6);
  for (let k = 0; k < grains; k++) {
    const t0 = 0.03 + Math.pow((rnd() + 1) / 2, 1.6) * 0.95, dur = 0.012 + (rnd() + 1) * 0.012;
    const start = Math.floor(t0 * sr), n = Math.floor(dur * sr), amp = 0.28 * Math.exp(-t0 / 0.45) * (0.5 + (rnd() + 1) / 4);
    const tone = 0.15 + (rnd() + 1) * 0.15; let g = 0;
    for (let i = 0; i < n && start + i < len; i++) { g += (rnd() - g) * tone; d[start + i] += g * amp * Math.sin(Math.PI * i / n); }
  }
  // normalise and fade the tail
  let peak = 0; for (let i = 0; i < len; i++) peak = Math.max(peak, Math.abs(d[i]));
  for (let i = 0; i < len; i++) { const t = i / sr; d[i] = d[i] / peak * 0.85 * (t > 1.2 ? (1.4 - t) / 0.2 : 1); }
  return buf;
}

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
    for (let i = 0; i < 3; i++) this.buffers[`crumble${i}`] = makeCrumble(this.ctx, i + 1);
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
    const g = this.ctx.createGain(); g.gain.value = a * (NORM[name] ?? 1);
    s.connect(g); g.connect(this.sfx); s.start();
  }
  loop(key, name, on, vol = 0.5, rate = 1) {
    let l = this.loops[key];
    if (on && !l && this.buffers[name]) {
      const s = this.ctx.createBufferSource(); s.buffer = this.buffers[name]; s.loop = true; s.playbackRate.value = rate;
      const g = this.ctx.createGain(); g.gain.value = 0; s.connect(g); g.connect(this.sfx); s.start();
      const n = NORM[name] ?? 1;
      g.gain.setTargetAtTime(vol * n, this.ctx.currentTime, 0.04);
      l = this.loops[key] = { s, g, n };
    } else if (!on && l) {
      l.g.gain.setTargetAtTime(0, this.ctx.currentTime, 0.06);
      const s = l.s; setTimeout(() => { try { s.stop(); } catch (e) { /* already stopped */ } }, 300);
      delete this.loops[key];
    } else if (on && l) { l.g.gain.setTargetAtTime(vol * l.n, this.ctx.currentTime, 0.05); }
  }
  setMusic(name) {
    if (this.current === name) return;
    const now = this.ctx.currentTime;
    if (this.current && this.music[this.current]) { const m = this.music[this.current]; m.g.gain.setTargetAtTime(0, now, 0.8); const s = m.s; setTimeout(() => { try { s.stop(); } catch (e) { /* stopped */ } }, 4000); delete this.music[this.current]; }
    this.current = name;
    const b = this.buffers[name]; if (!b) return;
    const s = this.ctx.createBufferSource(); s.buffer = b; s.loop = true;
    if (name === 'theme') { s.loopStart = 0.03; s.loopEnd = b.duration - 0.03; } // skip the MP3 encoder padding so the loop is seamless
    const g = this.ctx.createGain(); g.gain.value = 0; s.connect(g); g.connect(this.musicBus); s.start();
    g.gain.setTargetAtTime(name === 'battle' ? 0.75 : 1, now, name === 'theme' ? 2.5 : 1.2);
    this.music[name] = { s, g };
  }
}
