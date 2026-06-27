/**
 * app.js — application entry / orchestrator.
 *
 * Responsibilities:
 *  • boot theme + chrome (drawer, scroll progress, back-to-top, reveals)
 *  • render the homepage sections + explorer, and re-render on state changes
 *  • own all interactivity via a single delegated click handler (no inline JS)
 *  • lightweight hash routing: #/ (home) and #/bookmarks
 *
 * Data flow stays one-directional: handlers call setters in store/state.js,
 * which emit → render() runs. See README "Architecture".
 */

import { $, $$, debounce, scrollIntoView, prefersReducedMotion } from './utils/dom.js';
import {
  getState, subscribe, setTab, setPath, pushPath, popPath, setRoute,
  setQuery, setFilter, setSort,
} from './store/state.js';
import { initTheme } from './store/theme.js';
import { toggleBookmark } from './store/bookmarks.js';
import { fileId, getNodeAtPath } from './utils/fileIndex.js';
import { shareNote, openGmailCompose } from './utils/share.js';
import { showToast } from './components/toast.js';
import {
  initThemeToggle, initDrawer, initScrollProgress, initBackToTop,
  animateCounters, initReveal,
} from './components/ui.js';
import { statsHTML, categoriesHTML, recentlyAddedHTML } from './components/home.js';
import {
  renderBreadcrumb, renderControls, renderFileList, activeRoot, skeletonList,
} from './components/explorer.js';
import { bookmarksViewHTML } from './components/bookmarks.js';
import { openModal, closeModal, closeAllModals, openPdf, closePdf } from './components/modals.js';
import { SITE } from './config/site.js';

let drawer;
let skeletonUntil = 0; // timestamp; while in the future, render skeletons

/* ── Render ────────────────────────────────────────────────── */
function renderExplorer(state) {
  const crumb = $('#explorer-breadcrumb');
  const controls = $('#explorer-controls');
  const list = $('#file-list');
  if (!list) return;

  if (crumb) crumb.innerHTML = renderBreadcrumb(state);
  if (controls) controls.innerHTML = renderControls(state);

  if (Date.now() < skeletonUntil) {
    list.innerHTML = skeletonList(6);
    return;
  }
  list.innerHTML = renderFileList(state);
  renderUploadCTA(state);
}

/** Show "Upload to this subject" only when viewing a subject's files in Notes. */
function renderUploadCTA(state) {
  const mount = $('#upload-cta');
  if (!mount) return;
  const node = getNodeAtPath(activeRoot(state.tab), state.path);
  const hasFiles = node?.children?.some((c) => c.type === 'file');
  if (hasFiles && state.path.length && state.tab === 'notes') {
    let n = activeRoot(state.tab);
    const parts = state.path.map((idx) => (n = n.children[idx]).name);
    const subject = parts[parts.length - 1];
    mount.innerHTML = `
      <button class="btn btn--ghost btn--block" data-action="upload" data-subject="${subject}">
        Have notes for “${subject}”? Contribute them
      </button>`;
    mount.style.display = '';
  } else {
    mount.style.display = 'none';
    mount.innerHTML = '';
  }
}

function syncTabs(state) {
  $$('.tab').forEach((b) => {
    const active = b.dataset.tab === state.tab;
    b.classList.toggle('is-active', active);
    b.setAttribute('aria-selected', active ? 'true' : 'false');
  });
  const title = $('#explorer-title');
  const copy = $('#explorer-copy');
  if (title) title.textContent = state.tab === 'pyqs' ? 'Browse PYQs' : 'Browse Notes';
  if (copy) {
    copy.textContent = state.tab === 'pyqs'
      ? 'Previous-year question papers by branch and semester.'
      : 'Drill into branch, semester and subject. PDFs open in the built-in viewer.';
  }
}

function syncRoute(state) {
  const home = $('#view-home');
  const bm = $('#view-bookmarks');
  const onBm = state.route === 'bookmarks';
  if (home) home.hidden = onBm;
  if (bm) {
    bm.hidden = !onBm;
    if (onBm) $('#bookmarks-list').innerHTML = bookmarksViewHTML();
  }
  $$('[data-route-link]').forEach((l) =>
    l.classList.toggle('is-active', l.dataset.routeLink === state.route)
  );
}

function render() {
  const state = getState();
  syncRoute(state);
  syncTabs(state);
  if (state.route === 'home') renderExplorer(state);
}

/* ── Navigation helpers ────────────────────────────────────── */
function flashSkeleton(ms = 160) {
  if (prefersReducedMotion()) return;
  skeletonUntil = Date.now() + ms;
  render();
  setTimeout(render, ms + 10);
}

function gotoBranch(idx) {
  if (getState().route !== 'home') {
    setRoute('home');
    location.hash = '#/';
  }
  if (getState().tab !== 'notes') setTab('notes');
  flashSkeleton();
  setPath([idx]);
  scrollIntoView('#archive');
}

/* ── Card actions (preview/share/bookmark/etc.) ────────────── */
function cardPayload(card) {
  return {
    id: card.dataset.id,
    url: card.dataset.url,
    name: card.dataset.name,
    path: card.dataset.path || '',
    subject: card.dataset.subject || '',
    branch: card.dataset.branch || '',
  };
}

function handleAction(action, el) {
  const card = el.closest('[data-id], [data-idx]');
  switch (action) {
    case 'open-folder':
      flashSkeleton();
      pushPath(Number(el.dataset.idx));
      scrollIntoView('#archive');
      break;
    case 'open-branch':
      gotoBranch(Number(el.dataset.idx));
      break;
    case 'crumb': {
      const raw = el.dataset.path;
      flashSkeleton();
      setPath(raw ? raw.split(',').map(Number) : []);
      break;
    }
    case 'up':
      flashSkeleton();
      popPath();
      break;
    case 'preview': {
      const p = cardPayload(card);
      openPdf(p);
      break;
    }
    case 'share':
      shareNote(cardPayload(card));
      break;
    case 'bookmark': {
      const p = cardPayload(card);
      const now = toggleBookmark(p);
      showToast(now ? 'Saved to bookmarks' : 'Removed from bookmarks', {
        type: now ? 'success' : 'info',
      });
      if (getState().route === 'bookmarks') $('#bookmarks-list').innerHTML = bookmarksViewHTML();
      else render();
      break;
    }
    case 'unlinked':
      showToast('This note isn’t linked yet — coming soon!', { type: 'info' });
      break;
    case 'upload': {
      const subject = el.dataset.subject || 'a subject';
      const su = encodeURIComponent('Notes Contribution – ' + subject);
      const body = encodeURIComponent(`Subject: ${subject}\n\nAttaching my notes PDF.`);
      openGmailCompose(SITE.email, su, body);
      break;
    }
    case 'goto-browse':
      setRoute('home');
      location.hash = '#/';
      scrollIntoView('#archive');
      break;
    case 'contribute':
      openModal('contribute-modal');
      break;
    case 'about':
      openModal('about-modal');
      break;
    case 'send-contribute': {
      const su = encodeURIComponent('Notes Contribution');
      const body = encodeURIComponent('Branch: \nSemester: \nSubject: \nUnit: \n\nAttaching my notes PDF.');
      openGmailCompose(SITE.email, su, body);
      break;
    }
    default:
      break;
  }
}

/* ── Wiring ────────────────────────────────────────────────── */
function wireGlobalClicks() {
  document.addEventListener('click', (e) => {
    // Let real download links behave natively.
    const dl = e.target.closest('[data-action="download"]');
    if (dl) return;

    const actionEl = e.target.closest('[data-action]');
    if (actionEl) {
      e.preventDefault();
      handleAction(actionEl.dataset.action, actionEl);
      return;
    }

    // Tab switch.
    const tab = e.target.closest('[data-tab]');
    if (tab) {
      flashSkeleton();
      setTab(tab.dataset.tab);
      return;
    }

    // Modal close (overlay click or close button).
    const closeBtn = e.target.closest('[data-modal-close]');
    if (closeBtn) {
      const id = closeBtn.dataset.modalClose;
      id === 'pdf-modal' ? closePdf() : closeModal(id);
      return;
    }
    if (e.target.classList.contains('modal-overlay')) {
      e.target.id === 'pdf-modal' ? closePdf() : closeModal(e.target.id);
    }
  });
}

function wireControls() {
  // Search (debounced live search).
  const search = $('#search-input');
  if (search) {
    const onInput = debounce((v) => {
      setQuery(v);
      $('#search-clear').style.display = v ? 'grid' : 'none';
    }, 160);
    search.addEventListener('input', (e) => onInput(e.target.value));
  }
  $('#search-clear')?.addEventListener('click', () => {
    search.value = '';
    setQuery('');
    $('#search-clear').style.display = 'none';
    search.focus();
  });

  // Filter / sort selects (delegated on the controls container).
  $('#explorer-controls')?.addEventListener('change', (e) => {
    const sel = e.target.closest('[data-control]');
    if (!sel) return;
    const kind = sel.dataset.control;
    if (kind === 'sort') setSort(sel.value);
    else setFilter(kind, sel.value);
  });
}

function wireKeyboard() {
  document.addEventListener('keydown', (e) => {
    const inField = ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName);
    if (e.key === 'Escape') {
      closeAllModals();
      if (getState().query) {
        $('#search-input').value = '';
        setQuery('');
        $('#search-clear').style.display = 'none';
      }
    }
    if ((e.ctrlKey && e.key === 'k') || (e.key === '/' && !inField)) {
      e.preventDefault();
      const input = $('#search-input');
      if (input) {
        if (getState().route !== 'home') { setRoute('home'); location.hash = '#/'; }
        input.focus();
        input.select();
        scrollIntoView('#archive');
      }
    }
    if (e.key === 'Backspace' && !inField && !getState().query && getState().route === 'home') {
      popPath();
    }
  });
}

function wireRouting() {
  const apply = () => {
    const hash = location.hash.replace(/^#\/?/, '');
    setRoute(hash === 'bookmarks' ? 'bookmarks' : 'home');
    if (hash === 'bookmarks') scrollIntoView('#app', { behavior: 'auto', block: 'start' });
    drawer?.close?.();
  };
  window.addEventListener('hashchange', apply);
  apply();
}

/* ── Boot ──────────────────────────────────────────────────── */
function boot() {
  initTheme(() => initThemeToggle());

  // Static homepage sections.
  const statsEl = $('#stats-mount');
  if (statsEl) statsEl.innerHTML = statsHTML();
  const catEl = $('#categories-mount');
  if (catEl) catEl.innerHTML = categoriesHTML();
  const recentEl = $('#recent-mount');
  if (recentEl) {
    const html = recentlyAddedHTML();
    if (html) recentEl.innerHTML = `<div class="card-grid">${html}</div>`;
    else $('#recent-section')?.remove();
  }

  initThemeToggle();
  drawer = initDrawer();
  initScrollProgress();
  initBackToTop();
  initReveal();

  wireGlobalClicks();
  wireControls();
  wireKeyboard();
  wireRouting();

  subscribe(render);
  render();

  // Animate stats once they scroll into view.
  if ('IntersectionObserver' in window && statsEl) {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((en) => {
        if (en.isIntersecting) { animateCounters(statsEl); obs.disconnect(); }
      }),
      { threshold: 0.4 }
    );
    obs.observe(statsEl);
  } else {
    animateCounters(statsEl || document);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
