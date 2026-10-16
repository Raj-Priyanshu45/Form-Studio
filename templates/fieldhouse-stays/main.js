import { SITE_CONFIG } from './config.js';

const root = document.documentElement;
Object.entries(SITE_CONFIG.theme).forEach(([key, value]) => root.style.setProperty(`--${key}`, value));
document.querySelectorAll('[data-brand-name]').forEach((node) => { node.textContent = SITE_CONFIG.brand.name; });
document.querySelectorAll('[data-location]').forEach((node) => { node.textContent = SITE_CONFIG.brand.location; });
document.querySelectorAll('[data-coordinates]').forEach((node) => { node.textContent = SITE_CONFIG.brand.coordinates; });
document.querySelectorAll('[data-tagline]').forEach((node) => { node.textContent = SITE_CONFIG.brand.tagline; });

document.querySelector('[data-hero-eyebrow]').textContent = SITE_CONFIG.hero.eyebrow;
document.querySelector('#hero-title').innerHTML = SITE_CONFIG.hero.titleLines.map((line, index) => index === SITE_CONFIG.hero.titleLines.length - 1 ? `<em>${escapeHTML(line)}</em>` : escapeHTML(line)).join('<br/>');
document.querySelector('[data-hero-intro]').textContent = SITE_CONFIG.hero.intro;
document.querySelector('[data-hero-image]').src = SITE_CONFIG.hero.image;
document.querySelector('[data-hero-image]').alt = SITE_CONFIG.hero.alt;
document.querySelector('[data-hero-caption]').textContent = SITE_CONFIG.hero.caption;
document.querySelector('[data-hero-aside]').textContent = SITE_CONFIG.hero.aside;
setEditorialHeading('[data-intro-heading]', SITE_CONFIG.intro.headingLines);
document.querySelector('#intro-body').innerHTML = SITE_CONFIG.intro.paragraphs.map((p) => `<p>${escapeHTML(p)}</p>`).join('') + '<a class="text-link text-link-arrow" href="#stays">Find your stay <span aria-hidden="true">↗</span></a>';
document.querySelector('[data-intro-image]').src = SITE_CONFIG.intro.image;
document.querySelector('[data-intro-image]').alt = SITE_CONFIG.intro.alt;
document.querySelector('[data-intro-stamp]').textContent = SITE_CONFIG.intro.stamp;
document.querySelector('[data-experience-eyebrow]').textContent = SITE_CONFIG.experiences.eyebrow;
setEditorialHeading('[data-experience-heading]', SITE_CONFIG.experiences.headingLines);
document.querySelector('[data-experience-copy]').textContent = SITE_CONFIG.experiences.copy;
document.querySelector('[data-experience-image]').src = SITE_CONFIG.experiences.image;
document.querySelector('[data-experience-image]').alt = SITE_CONFIG.experiences.alt;
document.querySelector('[data-experience-link]').textContent = SITE_CONFIG.experiences.link;
setEditorialHeading('[data-visit-heading]', SITE_CONFIG.visit.headingLines);
document.querySelector('[data-visit-copy]').textContent = SITE_CONFIG.visit.copy;
document.querySelector('[data-visit-address]').textContent = SITE_CONFIG.visit.address;
document.querySelector('[data-visit-hours]').textContent = SITE_CONFIG.visit.hours;
document.querySelector('[data-form-note]').textContent = SITE_CONFIG.booking.note;

renderStays();
renderGallery();
autoHeader();
setupMenu();
setupGallery();
setupBookingForm();
setupReveal();

function setEditorialHeading(selector, lines) {
  const node = document.querySelector(selector);
  if (!node || !Array.isArray(lines)) return;
  node.innerHTML = lines.map((line, index) => index === lines.length - 1 ? `<em>${escapeHTML(line)}</em>` : escapeHTML(line)).join('<br/>');
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
}

function renderStays() {
  const host = document.querySelector('#room-list');
  host.innerHTML = SITE_CONFIG.stays.map((room) => `
    <article class="room-item">
      <span class="room-index">${escapeHTML(room.number)}</span>
      <div class="room-image"><img src="${escapeHTML(room.image)}" alt="${escapeHTML(room.alt)}" loading="lazy" decoding="async" /></div>
      <div class="room-copy"><p class="eyebrow">${escapeHTML(room.category)}</p><h3>${escapeHTML(room.name)}</h3><p>${escapeHTML(room.description)}</p><a class="text-link text-link-arrow" href="#booking">Ask about this stay <span aria-hidden="true">↗</span></a></div>
      <div class="room-price"><span>From</span><strong>${escapeHTML(room.price)}</strong><span>${escapeHTML(room.suffix.replace(/^\s*\/\s*/, '/ '))}</span></div>
    </article>`).join('');
}

function renderGallery() {
  const host = document.querySelector('#gallery-grid');
  host.innerHTML = SITE_CONFIG.gallery.map((item, index) => `
    <button class="gallery-item ${index === 0 ? 'gallery-item-tall' : ''}" type="button" data-gallery="${index}" aria-label="Open photo: ${escapeHTML(item.caption)}">
      <img src="${escapeHTML(item.src)}" alt="${escapeHTML(item.alt)}" loading="lazy" decoding="async" />
      <span>${escapeHTML(item.caption)}</span>
    </button>`).join('');
}

function autoHeader() {
  const header = document.querySelector('[data-header]');
  if (!header) return;
  let lastScroll = window.scrollY;
  let ticking = false;
  const update = () => {
    const current = window.scrollY;
    header.classList.toggle('is-scrolled', current > 24);
    if (current > lastScroll + 5 && current > 150) header.classList.add('is-hidden');
    if (current < lastScroll - 3 || current < 80) header.classList.remove('is-hidden');
    lastScroll = current;
    ticking = false;
  };
  window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
}

function setupMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#mobile-menu');
  if (!toggle || !menu) return;
  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    menu.hidden = !open;
    document.body.classList.toggle('menu-open', open);
    if (open) menu.querySelector('a')?.focus();
  };
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { setOpen(false); toggle.focus(); }));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { setOpen(false); toggle.focus(); } });
}

function setupGallery() {
  const lightbox = document.querySelector('[data-lightbox]');
  const image = document.querySelector('[data-lightbox-image]');
  const caption = document.querySelector('[data-lightbox-caption]');
  const closeButton = document.querySelector('[data-lightbox-close]');
  const prevButton = document.querySelector('[data-lightbox-prev]');
  const nextButton = document.querySelector('[data-lightbox-next]');
  if (!lightbox || !image || !caption || !closeButton || !prevButton || !nextButton) return;
  let current = 0;
  let opener = null;
  const render = () => {
    const item = SITE_CONFIG.gallery[current];
    image.src = item.src; image.alt = item.alt;
    caption.textContent = `${String(current + 1).padStart(2, '0')} / ${String(SITE_CONFIG.gallery.length).padStart(2, '0')} — ${item.caption}`;
    prevButton.disabled = nextButton.disabled = SITE_CONFIG.gallery.length < 2;
  };
  const open = (index, trigger) => {
    opener = trigger;
    current = (index + SITE_CONFIG.gallery.length) % SITE_CONFIG.gallery.length;
    render();
    lightbox.classList.add('is-open'); lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open'); closeButton.focus();
  };
  const close = () => {
    lightbox.classList.remove('is-open'); lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open'); opener?.focus();
  };
  document.querySelectorAll('[data-gallery]').forEach((button) => button.addEventListener('click', () => open(Number(button.dataset.gallery), button)));
  closeButton.addEventListener('click', close);
  prevButton.addEventListener('click', () => { current = (current - 1 + SITE_CONFIG.gallery.length) % SITE_CONFIG.gallery.length; render(); });
  nextButton.addEventListener('click', () => { current = (current + 1) % SITE_CONFIG.gallery.length; render(); });
  lightbox.addEventListener('click', (event) => { if (event.target === lightbox) close(); });
  document.addEventListener('keydown', (event) => {
    if (!lightbox.classList.contains('is-open')) return;
    if (event.key === 'Escape') close();
    if (event.key === 'ArrowLeft') prevButton.click();
    if (event.key === 'ArrowRight') nextButton.click();
    if (event.key === 'Tab') {
      const controls = [closeButton, prevButton, nextButton];
      const first = controls[0], last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
}

function setupBookingForm() {
  const form = document.querySelector('[data-booking-form]');
  const note = document.querySelector('[data-form-note]');
  if (!form || !note) return;
  const arrivalInput = form.elements.namedItem('arrival');
  const departureInput = form.elements.namedItem('departure');
  const today = new Date();
  const localDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  arrivalInput.min = localDate;
  departureInput.min = localDate;
  arrivalInput.addEventListener('change', () => { departureInput.min = arrivalInput.value || localDate; if (departureInput.value && departureInput.value <= arrivalInput.value) departureInput.value = ''; });
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    if (!arrivalInput.value || !departureInput.value || departureInput.value <= arrivalInput.value) {
      note.textContent = 'Choose a departure date after your arrival date.';
      note.classList.remove('is-success'); departureInput.focus(); return;
    }
    const format = (value) => new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(new Date(`${value}T12:00:00`));
    note.textContent = `Demo request checked for ${format(arrivalInput.value)} → ${format(departureInput.value)}. No booking was sent; connect a booking service to enable real reservations.`;
    note.classList.add('is-success');
  });
}

function setupReveal() {
  const targets = document.querySelectorAll('.section-pad > *, .room-item, .quote-break > *');
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
  }), { threshold: 0.08 });
  targets.forEach((target, index) => { target.classList.add('reveal'); target.style.transitionDelay = `${(index % 4) * 55}ms`; observer.observe(target); });
}
