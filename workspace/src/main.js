import { Game } from './game.js';

const game = new Game(document.getElementById('app'));
game.boot().catch((err) => {
  console.error('Boot failed', err);
  const t = document.getElementById('loadText');
  if (t) t.textContent = `Startup error: ${err.message}`;
});
