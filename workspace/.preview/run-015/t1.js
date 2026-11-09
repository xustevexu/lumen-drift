(() => {
  const g = window.__game;
  const btns = [...document.querySelectorAll('#start button')].filter((b) => b.offsetParent).map((b) => `${b.id}:${b.textContent.trim()}`);
  return JSON.stringify({ btns, hasGame: !!g, mode: g && g.mode });
})()
