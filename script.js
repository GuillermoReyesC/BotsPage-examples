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
const loadedFonts = new Set(['IBM Plex Sans']);
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

/* LISTA de fuentes sin apykey) */
const FONT_LIST = [
  "Inter","Work Sans","Poppins","Nunito","Outfit","DM Sans","Lato","Raleway",
  "Open Sans","Roboto","Montserrat","Ubuntu","Merriweather","Playfair Display",
  "Lexend","Quicksand","Karla","Bebas Neue","Oswald","Pacifico",

  // adicionales
  "Manrope","Space Grotesk","Plus Jakarta Sans","Rubik","Figtree",
  "Urbanist","Public Sans","Libre Franklin","Hind","Cabin",
  "Archivo","Barlow","Barlow Condensed","Assistant","Heebo",
  "Teko","Rajdhani","Sora","Mulish","PT Sans",
  "PT Serif","Noto Sans","Noto Serif","IBM Plex Sans","IBM Plex Serif",
  "Red Hat Display","Red Hat Text","Signika","Exo 2","Kanit"
];

/* GENERAR OPTIONS DINÁMICAMENTE */
function populateFonts() {
  const select = document.querySelector('.font-select');
  select.innerHTML = '';

  FONT_LIST.forEach(f => {
    const opt = document.createElement('option');
    opt.value = f;
    opt.textContent = f;
    if (f === 'IBM Plex Sans') opt.selected = true;
    select.appendChild(opt);
  });
}



/* INIT */
populateFonts();

injectLogos();
show(2);
setFont('IBM Plex Sans');