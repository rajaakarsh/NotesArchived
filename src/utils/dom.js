/** dom.js — tiny DOM + general helpers shared across the app. */

export const $ = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

/** Escape user/data strings before injecting into innerHTML. */
export function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Debounce — used for live search so we render once per pause, not per keypress. */
export function debounce(fn, wait = 180) {
  let t;
  return function debounced(...args) {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), wait);
  };
}

/** Smooth-scroll an element into view if it exists. */
export function scrollIntoView(sel, opts = { behavior: 'smooth', block: 'start' }) {
  const el = typeof sel === 'string' ? $(sel) : sel;
  if (el) el.scrollIntoView(opts);
}

/** True when the device looks like a phone/tablet (used for the Gmail deep-link). */
export const isMobile = () => /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

/** Respect the user's reduced-motion preference. */
export const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;
