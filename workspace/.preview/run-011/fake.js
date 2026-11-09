(() => {
  const mk = () => ({ pressed: false, touched: false, value: 0 });
  window.__rumbles = [];
  window.__fake = { id: 'Xbox Wireless Controller (STANDARD GAMEPAD Vendor: 045e Product: 0b13)', index: 0, connected: true, mapping: 'standard', timestamp: 0,
    axes: [0, 0, 0, 0], buttons: Array.from({ length: 17 }, mk),
    vibrationActuator: { playEffect: (type, o) => { window.__rumbles.push(o.strongMagnitude.toFixed(2)); return Promise.resolve('complete'); } } };
  navigator.getGamepads = () => [window.__fake];
  const frames = (n) => new Promise((res) => { let k = 0; const f = () => (++k >= n ? res() : requestAnimationFrame(f)); requestAnimationFrame(f); });
  window.__pad = {
    frames,
    down: (i, v = 1) => { window.__fake.buttons[i].pressed = v > 0.5; window.__fake.buttons[i].value = v; },
    up: (i) => { window.__fake.buttons[i].pressed = false; window.__fake.buttons[i].value = 0; },
    tap: async (i) => { window.__pad.down(i); await frames(3); window.__pad.up(i); await frames(3); },
    axis: (i, v) => { window.__fake.axes[i] = v; },
  };
  return 'fake controller installed';
})()
