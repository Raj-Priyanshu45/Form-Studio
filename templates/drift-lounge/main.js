import { DRIFT_CONFIG } from './config.js';

const deck = document.querySelector('#slide-deck');
const dotsHost = document.querySelector('#slide-dots');
const count = document.querySelector('#slide-count');
const live = document.querySelector('#slide-live');
const hint = document.querySelector('#swipe-hint');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let activeIndex = 0;
let startX = 0;
let lastX = 0;
let pointerStartTime = 0;
let dragDistance = 0;
let isDragging = false;
let wheelLock = false;
let wheelTimer = 0;
let hasInteracted = false;

const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
const slides = DRIFT_CONFIG.slides;

document.querySelectorAll('[data-brand-name]').forEach((node) => { node.textContent = DRIFT_CONFIG.brand.name; });
document.title = `${DRIFT_CONFIG.brand.name} — ${DRIFT_CONFIG.brand.descriptor}`;

deck.innerHTML = slides.map((slide, index) => {
  const headingTag = index === 0 ? 'h1' : 'h2';
  const title = slide.title.map((line, lineIndex) => `<span>${lineIndex === slide.title.length - 1 ? `<em>${escapeHTML(line)}</em>` : escapeHTML(line)}</span>`).join('');
  const action = slide.action
    ? slide.action.type === 'next'
      ? `<button class="slide-action" type="button" data-next-slide><span>${escapeHTML(slide.action.label)}</span><b aria-hidden="true">↗</b></button>`
      : `<a class="slide-action" href="mailto:hello@formstudio.example?subject=DRIFT%20table%20enquiry"><span>${escapeHTML(slide.action.label)}</span><b aria-hidden="true">↗</b></a>`
    : '';
  return `<article class="drift-slide ${index === 0 ? 'is-active' : ''}" data-slide="${index}" aria-label="${index + 1} of ${slides.length}: ${escapeHTML(slide.title.join(' '))}" aria-hidden="${index === 0 ? 'false' : 'true'}" style="--tone:${slide.tone};--accent:${slide.accent};--focus:${slide.position || 'center'}">
    <img class="slide-image" src="${slide.image}" alt="${escapeHTML(slide.alt)}" ${index === 0 ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async" />
    <div class="slide-shade" aria-hidden="true"></div><div class="slide-index-watermark" aria-hidden="true">${String(index + 1).padStart(2, '0')}</div>
    <div class="slide-inner"><div class="slide-content"><p class="slide-kicker">${escapeHTML(slide.kicker)}</p><${headingTag} class="slide-title">${title}</${headingTag}><p class="slide-description">${escapeHTML(slide.description)}</p><div class="slide-meta">${slide.price ? `<span class="pill">From ${escapeHTML(slide.price)}</span>` : ''}<span>${escapeHTML(slide.tag)}</span></div>${action}</div></div>
  </article>`;
}).join('');

dotsHost.innerHTML = slides.map((slide, index) => `<button type="button" data-go-slide="${index}" aria-label="Go to scene ${index + 1}: ${escapeHTML(slide.title.join(' '))}" aria-current="${index === 0 ? 'true' : 'false'}"></button>`).join('');

function goTo(index, source = 'control') {
  activeIndex = Math.max(0, Math.min(slides.length - 1, index));
  const items = [...deck.querySelectorAll('[data-slide]')];
  items.forEach((slide, itemIndex) => {
    slide.classList.toggle('is-active', itemIndex === activeIndex);
    slide.classList.toggle('is-before', itemIndex < activeIndex);
    slide.classList.toggle('is-after', itemIndex > activeIndex);
    slide.setAttribute('aria-hidden', itemIndex === activeIndex ? 'false' : 'true');
    slide.inert = itemIndex !== activeIndex;
  });
  [...dotsHost.children].forEach((dot, itemIndex) => dot.setAttribute('aria-current', itemIndex === activeIndex ? 'true' : 'false'));
  count.innerHTML = `${String(activeIndex + 1).padStart(2, '0')} <i>/</i> ${String(slides.length).padStart(2, '0')}`;
  document.documentElement.style.setProperty('--tone', slides[activeIndex].tone);
  document.documentElement.style.setProperty('--accent', slides[activeIndex].accent);
  live.textContent = `${activeIndex + 1} of ${slides.length}: ${slides[activeIndex].title.join(' ')}`;
  if (source !== 'initial' && !hasInteracted) {
    hasInteracted = true;
    hint.classList.add('is-hidden');
  }
}

document.querySelector('#prev-slide').addEventListener('click', () => goTo(activeIndex - 1));
document.querySelector('#next-slide').addEventListener('click', () => goTo(activeIndex + 1));
dotsHost.addEventListener('click', (event) => {
  const button = event.target.closest('[data-go-slide]');
  if (button) goTo(Number(button.dataset.goSlide));
});
deck.addEventListener('click', (event) => {
  if (event.target.closest('[data-next-slide]')) goTo(activeIndex + 1);
});

deck.addEventListener('pointerdown', (event) => {
  if (event.target.closest('a,button')) return;
  isDragging = true; startX = lastX = event.clientX; pointerStartTime = performance.now(); dragDistance = 0;
  deck.classList.add('is-dragging');
  try { deck.setPointerCapture(event.pointerId); } catch {}
});
deck.addEventListener('pointermove', (event) => {
  if (!isDragging) return;
  dragDistance = event.clientX - startX;
  lastX = event.clientX;
});
function endDrag() {
  if (!isDragging) return;
  isDragging = false;
  deck.classList.remove('is-dragging');
  const elapsed = Math.max(1, performance.now() - pointerStartTime);
  const threshold = window.innerWidth * (elapsed < 250 ? .12 : .18);
  if (Math.abs(dragDistance) > Math.max(40, threshold)) goTo(activeIndex + (dragDistance < 0 ? 1 : -1), 'swipe');
}
deck.addEventListener('pointerup', endDrag);
deck.addEventListener('pointercancel', endDrag);
deck.addEventListener('wheel', (event) => {
  if (wheelLock) return;
  const dominant = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
  if (Math.abs(dominant) < 24) return;
  wheelLock = true;
  goTo(activeIndex + (dominant > 0 ? 1 : -1), 'wheel');
  window.clearTimeout(wheelTimer);
  wheelTimer = window.setTimeout(() => { wheelLock = false; }, 560);
}, { passive: true });

document.addEventListener('keydown', (event) => {
  if (event.altKey || event.ctrlKey || event.metaKey) return;
  if (event.key === 'ArrowRight' || event.key === 'ArrowDown') { event.preventDefault(); goTo(activeIndex + 1, 'keyboard'); }
  if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') { event.preventDefault(); goTo(activeIndex - 1, 'keyboard'); }
  if (event.key === 'Home') goTo(0, 'keyboard');
  if (event.key === 'End') goTo(slides.length - 1, 'keyboard');
});

goTo(0, 'initial');
if (reducedMotion) hint.classList.add('is-hidden');
