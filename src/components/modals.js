/**
 * modals.js — generic modal open/close + the PDF preview controller.
 * Modals share one overlay convention (.modal-overlay.is-open) and trap focus
 * lightly via Escape-to-close (wired globally in app.js).
 */

import { $ } from '../utils/dom.js';
import { recordView } from '../store/history.js';
import { fileId } from '../utils/fileIndex.js';

export function openModal(id) {
  const overlay = document.getElementById(id);
  if (!overlay) return;
  overlay.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

export function closeModal(id) {
  const overlay = document.getElementById(id);
  if (!overlay) return;
  overlay.classList.remove('is-open');
  if (id !== 'pdf-modal') document.body.style.overflow = '';
}

export function closeAllModals() {
  document.querySelectorAll('.modal-overlay.is-open').forEach((m) => m.classList.remove('is-open'));
  closePdf();
  document.body.style.overflow = '';
}

/* ── PDF preview ───────────────────────────────────────────── */
export function openPdf({ url, name, path = '' }) {
  const overlay = $('#pdf-modal');
  const frame = $('#pdf-iframe');
  const title = $('#pdf-title');
  const sub = $('#pdf-sub');
  const dl = $('#pdf-download');
  const open = $('#pdf-open');
  if (!overlay || !frame) return;

  // Convert a Google Drive "view" link to an embeddable preview when possible.
  const embed = /drive\.google\.com\/file\/d\//.test(url)
    ? url.replace(/\/view.*$/, '/preview')
    : url;

  title.textContent = name;
  if (sub) sub.textContent = path;
  frame.src = embed;
  if (dl) dl.href = url;
  if (open) open.href = url;

  overlay.classList.add('is-open');
  document.body.style.overflow = 'hidden';

  recordView({ id: fileId(url, path ? path.split(' › ') : [], name), name, url, path });
}

export function closePdf() {
  const overlay = $('#pdf-modal');
  const frame = $('#pdf-iframe');
  if (!overlay) return;
  overlay.classList.remove('is-open');
  // Defer clearing src so the close transition isn't janky / to free memory.
  setTimeout(() => {
    if (frame) frame.src = '';
  }, 300);
  document.body.style.overflow = '';
}
