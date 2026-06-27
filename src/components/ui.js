/**
 * ui.js — chrome behaviours: theme toggle button, mobile drawer, scroll
 * progress bar, back-to-top button, animated counters and scroll reveals.
 * Each initialiser is idempotent and self-contained.
 */

import { $, $$, prefersReducedMotion } from '../utils/dom.js';
import { icon } from '../icons/icons.js';
import { toggleTheme, resolveTheme } from '../store/theme.js';

/* ── Theme toggle ──────────────────────────────────────────── */
export function initThemeToggle() {
  const btn = $('#theme-toggle');
  if (!btn) return;
  const paint = () => {
    const t = document.documentElement.getAttribute('data-theme') || resolveTheme();
    btn.innerHTML = t === 'light' ? icon.moon(18) : icon.sun(18);
    btn.setAttribute('aria-label', t === 'light' ? 'Switch to dark theme' : 'Switch to light theme');
  };
  paint();
  btn.addEventListener('click', () => {
    toggleTheme();
    paint();
  });
}

/* ── Mobile drawer ─────────────────────────────────────────── */
export function initDrawer() {
  const toggle = $('#nav-toggle');
  const drawer = $('#mobile-drawer');
  const backdrop = $('#drawer-backdrop');
  if (!toggle || !drawer) return;

  const open = () => {
    drawer.classList.add('is-open');
    backdrop?.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };
  const close = () => {
    drawer.classList.remove('is-open');
    backdrop?.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  toggle.addEventListener('click', () =>
    drawer.classList.contains('is-open') ? close() : open()
  );
  backdrop?.addEventListener('click', close);
  $$('[data-drawer-close]', drawer).forEach((el) => el.addEventListener('click', close));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) close();
  });
  return { close };
}

/* ── Scroll progress bar ───────────────────────────────────── */
export function initScrollProgress() {
  const bar = $('#scroll-progress');
  if (!bar) return;
  const update = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    bar.style.transform = `scaleX(${max > 0 ? h.scrollTop / max : 0})`;
  };
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
}

/* ── Back to top ───────────────────────────────────────────── */
export function initBackToTop() {
  const btn = $('#back-to-top');
  if (!btn) return;
  btn.innerHTML = icon.chevronUp(20);
  const toggle = () => btn.classList.toggle('is-visible', window.scrollY > 600);
  window.addEventListener('scroll', toggle, { passive: true });
  btn.addEventListener('click', () =>
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
  );
  toggle();
}

/* ── Animated counters ─────────────────────────────────────── */
export function animateCounters(root = document) {
  const els = $$('[data-count]', root);
  els.forEach((el) => {
    const target = parseInt(el.dataset.count, 10) || 0;
    const suffix = el.dataset.suffix || '';
    if (prefersReducedMotion()) {
      el.textContent = target + suffix;
      return;
    }
    const dur = 900;
    const start = performance.now();
    const step = (now) => {
      const t = Math.min((now - start) / dur, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(ease * target) + suffix;
      if (t < 1) requestAnimationFrame(step);
      else el.textContent = target + suffix;
    };
    requestAnimationFrame(step);
  });
}

/* ── Reveal on scroll (fade/slide in) ──────────────────────── */
export function initReveal() {
  const els = $$('[data-reveal]');
  if (!els.length) return;
  if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-revealed'));
    return;
  }
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  els.forEach((el) => obs.observe(el));
}
