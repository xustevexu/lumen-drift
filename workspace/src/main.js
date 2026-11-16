import { Game } from './game.js';

const game = new Game(document.getElementById('app'));

// installable app: register the service worker (needed for Chrome's "Install app")
if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));

// full screen: a pause-menu button, and automatically on phones/tablets when you start playing
export function enterFullscreen() {
  const el = document.documentElement;
  if (document.fullscreenElement || !el.requestFullscreen) return;
  el.requestFullscreen({ navigationUI: 'hide' }).then(() => { try { screen.orientation && screen.orientation.lock && screen.orientation.lock('landscape').catch(() => {}); } catch (e) { /* not supported */ } }).catch(() => {});
}
function toggleFullscreen() { if (document.fullscreenElement) document.exitFullscreen().catch(() => {}); else enterFullscreen(); }
const touch = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
document.getElementById('btnFull').addEventListener('click', toggleFullscreen);
const syncFull = () => { document.getElementById('btnFull').textContent = document.fullscreenElement ? 'EXIT FULL SCREEN' : 'FULL SCREEN'; };
document.addEventListener('fullscreenchange', syncFull);
if (touch) for (const id of ['btnStart', 'btnNew']) document.getElementById(id).addEventListener('click', enterFullscreen);
game.boot().catch((err) => {
  console.error('Boot failed', err);
  const t = document.getElementById('loadText');
  if (t) t.textContent = `Startup error: ${err.message}`;
});
