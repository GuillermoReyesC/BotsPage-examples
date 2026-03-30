/* ── LOGO INJECT ── */
function injectLogos() {
  const tpl = document.getElementById('logo-svg-tpl');
  ['d1-logo','d2-logo','d3-logo'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.appendChild(tpl.content.cloneNode(true));
  });
}

/* ── DESIGN SWITCHER ── */
function show(n) {
  document.querySelectorAll('.mockup').forEach(m => m.classList.remove('active'));
  document.querySelectorAll('.sel-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('d'+n).classList.add('active');
  document.querySelectorAll('.sel-btn')[n-1].classList.add('active');
  // close any open mobile menus
  document.querySelectorAll('.mobile-menu').forEach(m => m.style.display='');
  window.scrollTo(0,0);
}

/* ── HAMBURGER ── */
function toggleMenu(id) {
  const m = document.getElementById(id);
  const open = m.style.display === 'flex';
  document.querySelectorAll('.mobile-menu').forEach(mm => mm.style.display='');
  if (!open) m.style.display = 'flex';
}

/* ── FONT SWITCHER ── */
const loadedFonts = new Set(['Ubuntu']);
function setFont(fontName) {
  if (!loadedFonts.has(fontName)) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(fontName)}:wght@300;400;500;600;700;800;900&display=swap`;
    document.head.appendChild(link);
    loadedFonts.add(fontName);
  }
  document.body.style.setProperty('font-family', `'${fontName}', sans-serif`, 'important');
  document.querySelectorAll('*').forEach(el => {
    const cf = window.getComputedStyle(el).fontFamily;
    if (!cf.includes('Syne') && !cf.includes('DM Serif')) {
      el.style.fontFamily = `'${fontName}', sans-serif`;
    }
  });
}

injectLogos();
show(2);
setFont('Ubuntu');