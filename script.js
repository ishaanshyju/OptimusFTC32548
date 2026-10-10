const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  navigation.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Open navigation');
}
toggle.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
window.addEventListener('resize', () => { if (window.innerWidth > 1240) closeMenu(); });
document.querySelector('#year').textContent = new Date().getFullYear();

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const motionButton = document.querySelector('.motion-toggle');
let motionPaused = false;
try { motionPaused = localStorage.getItem('optimus-motion-paused') === 'true'; } catch {}
function syncMotion() {
  document.documentElement.classList.toggle('motion-enabled', !reducedMotion.matches && !motionPaused);
  motionButton.textContent = motionPaused ? 'Resume motion' : 'Pause motion';
  motionButton.setAttribute('aria-pressed', String(motionPaused));
  motionButton.hidden = reducedMotion.matches;
}
motionButton.addEventListener('click', () => {
  motionPaused = !motionPaused;
  try { localStorage.setItem('optimus-motion-paused', String(motionPaused)); } catch {}
  syncMotion();
});
reducedMotion.addEventListener('change', syncMotion);
syncMotion();

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.remove('reveal-pending');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('[data-reveal]').forEach((element, index) => {
    element.style.setProperty('--reveal-delay', `${Math.min(index % 3 * 80, 160)}ms`);
    element.classList.add('reveal-pending');
    revealObserver.observe(element);
  });
}

const progress = document.querySelector('.scroll-progress');
let progressQueued = false;
function updateProgress() {
  const distance = document.documentElement.scrollHeight - window.innerHeight;
  const amount = distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0;
  progress.style.transform = `scaleX(${amount})`;
  progressQueued = false;
}
function scheduleProgress() {
  if (progressQueued) return;
  progressQueued = true;
  requestAnimationFrame(updateProgress);
}
window.addEventListener('scroll', scheduleProgress, { passive: true });
window.addEventListener('resize', scheduleProgress);
updateProgress();

if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navigation.querySelectorAll('a').forEach(link => {
        const active = link.getAttribute('href') === `#${entry.target.id}`;
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -55% 0px' });
  document.querySelectorAll('main section[id]').forEach(section => sectionObserver.observe(section));
}

// Keep the final values readable when motion is reduced or paused.
const counters = [...document.querySelectorAll('[data-count-to]')];
const counterFrames = new Map();
function finishCounters() {
  counters.forEach(counter => {
    const frame = counterFrames.get(counter);
    if (frame) cancelAnimationFrame(frame);
    counter.textContent = counter.dataset.countTo;
    counterFrames.delete(counter);
  });
}
function animateCounter(counter) {
  if (reducedMotion.matches || motionPaused) return;
  const end = Number(counter.dataset.countTo);
  const start = performance.now();
  function tick(now) {
    if (reducedMotion.matches || motionPaused) { counter.textContent = String(end); return; }
    const progress = Math.min(1, (now - start) / 1000);
    counter.textContent = String(Math.round(end * (1 - Math.pow(1 - progress, 3))));
    if (progress < 1) counterFrames.set(counter, requestAnimationFrame(tick));
    else counterFrames.delete(counter);
  }
  counterFrames.set(counter, requestAnimationFrame(tick));
}
if ('IntersectionObserver' in window) {
  const countObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      animateCounter(entry.target);
      countObserver.unobserve(entry.target);
    });
  }, { threshold: 0.6 });
  counters.forEach(counter => countObserver.observe(counter));
}
motionButton.addEventListener('click', () => { if (motionPaused) finishCounters(); });
reducedMotion.addEventListener('change', () => { if (reducedMotion.matches) finishCounters(); });
