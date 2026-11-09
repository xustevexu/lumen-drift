(() => {
  window.__btnXY = (sel) => { const b = document.querySelector(sel); if (!b || b.offsetParent === null) return null; const r = b.getBoundingClientRect(); const vis = r.top >= 0 && r.bottom <= innerHeight; if (!vis) b.scrollIntoView({ block: 'nearest' }); const r2 = b.getBoundingClientRect(); return { xy: [Math.round(r2.left + r2.width / 2), Math.round(r2.top + r2.height / 2)], visibleWithoutScroll: vis }; };
  window.__svState = () => { const s = document.querySelector('#dialogBox .sv-status'); const t = document.querySelector('#dialogBox .ov-title'); const box = document.getElementById('dialogBox'); return JSON.stringify({ title: t && t.textContent, status: s && s.textContent, open: !document.getElementById('dialog').classList.contains('hidden'), fitsWithoutScroll: box.scrollHeight <= box.clientHeight + 1 }); };
  const orig = URL.createObjectURL.bind(URL); URL.createObjectURL = (blob) => { window.__exported = blob; return orig(blob); };
  const origClick = HTMLInputElement.prototype.click;
  HTMLInputElement.prototype.click = function () { if (this.type !== 'file' || !window.__nextFile) return origClick.call(this); const dt = new DataTransfer(); dt.items.add(window.__nextFile); this.files = dt.files; this.dispatchEvent(new Event('change')); };
  return 'helpers'; })()
