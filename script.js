/* ── cursor (disabled — using native cursor) ── */

/* ── particles ── */
(function() {
  const container = document.getElementById('particles');
  for (let i = 0; i < 22; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');
    const size = Math.random() * 4 + 2;
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random()*100}%;
      animation-delay:${Math.random()*22}s;
      animation-duration:${Math.random()*18+16}s;
      opacity:${Math.random()*.06+.02};
    `;
    container.appendChild(p);
  }
})();

/* ── nav ── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('stuck', scrollY > 40);
  let cur = '';
  document.querySelectorAll('section[id]').forEach(s => {
    if (scrollY >= s.offsetTop - 130) cur = s.id;
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + cur ? 'var(--matcha)' : '';
  });
});

/* ── reveal on scroll ── */
const obs = new IntersectionObserver((entries, o) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); o.unobserve(e.target); } });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

/* ── form ── */
function sendMsg(e) {
  e.preventDefault();
  const btn = document.getElementById('sendBtn');
  const ok  = document.getElementById('fok');
  btn.textContent = 'Sending…'; btn.style.opacity = '.65';
  setTimeout(() => {
    btn.textContent = 'Sent! ✓'; ok.style.opacity = '1';
    setTimeout(() => {
      btn.textContent = 'Send Message ✦'; btn.style.opacity = '1';
      ok.style.opacity = '0'; e.target.reset();
    }, 4000);
  }, 1200);
}

/* ── photo upload ── */
const photoUpload = document.getElementById('photoUpload');
const uploadedPhoto = document.getElementById('uploadedPhoto');
const phInner = document.getElementById('phInner');
const pfCard = document.getElementById('pfCard');
const pfOverlay = document.getElementById('pfOverlay');

if (photoUpload) {
  photoUpload.addEventListener('change', function() {
    const file = this.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
      uploadedPhoto.src = e.target.result;
      uploadedPhoto.style.display = 'block';
      phInner.style.display = 'none';
      pfOverlay.style.display = 'flex';
    };
    reader.readAsDataURL(file);
  });
}

/* ── smooth skill hover side-accent ── */
document.querySelectorAll('.sk').forEach(sk => {
  sk.addEventListener('mouseenter', () => sk.style.boxShadow = '-3px 0 0 var(--matcha), 0 4px 12px rgba(74,124,89,.12)');
  sk.addEventListener('mouseleave', () => sk.style.boxShadow = '');
});
