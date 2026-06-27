/**
 * toast.js — lightweight, accessible toast notifications.
 * One toast at a time; announced politely to screen readers.
 */

let host;

function ensureHost() {
  if (host) return host;
  host = document.createElement('div');
  host.className = 'toast-host';
  host.setAttribute('role', 'status');
  host.setAttribute('aria-live', 'polite');
  document.body.appendChild(host);
  return host;
}

/**
 * @param {string} msg
 * @param {{type?:'info'|'success'|'error', duration?:number}} [opts]
 */
export function showToast(msg, opts = {}) {
  const { type = 'info', duration = 2800 } = opts;
  const root = ensureHost();
  root.querySelector('.toast')?.remove();

  const el = document.createElement('div');
  el.className = `toast toast--${type}`;
  el.textContent = msg;
  root.appendChild(el);

  // Force reflow so the entrance transition runs.
  requestAnimationFrame(() => el.classList.add('toast--in'));

  setTimeout(() => {
    el.classList.remove('toast--in');
    setTimeout(() => el.remove(), 280);
  }, duration);
}
