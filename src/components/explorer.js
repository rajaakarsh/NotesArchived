/**
 * explorer.js — renders the archive browser: breadcrumb, filter/sort bar,
 * and the file/folder list (browse mode + search mode). Pure rendering against
 * state; all interactivity is wired by app.js via event delegation.
 */

import { escapeHtml } from '../utils/dom.js';
import { getNodeAtPath, getAllFiles, pathNamesOf, DATA, PYQ_DATA } from '../utils/fileIndex.js';
import { folderCardHTML, noteCardHTML } from './cards.js';
import { skeletonList } from './skeleton.js';
import { icon } from '../icons/icons.js';

export const activeRoot = (tab) => (tab === 'pyqs' ? PYQ_DATA : DATA);

/* ── Breadcrumb ─────────────────────────────────────────────── */
export function renderBreadcrumb(state) {
  const root = activeRoot(state.tab);
  const rootLabel = state.tab === 'pyqs' ? 'pyqs' : 'notes';
  const segments = [
    { label: rootLabel, path: [] },
    { label: root.name, path: [] },
  ];
  let node = root;
  for (let i = 0; i < state.path.length; i++) {
    node = node.children[state.path[i]];
    segments.push({ label: node.name.toLowerCase(), path: state.path.slice(0, i + 1) });
  }

  const crumbs = segments
    .map((seg, i) => {
      const isLast = i === segments.length - 1;
      const sep = i < segments.length - 1 ? '<span class="crumb__sep">/</span>' : '';
      if (isLast) return `<span class="crumb crumb--active">${escapeHtml(seg.label)}</span>${sep}`;
      return `<button class="crumb crumb--link" data-action="crumb" data-path="${seg.path.join(',')}">${escapeHtml(seg.label)}</button>${sep}`;
    })
    .join('');

  const levels = ['', 'Branch', 'Semester', 'Subject', 'Files'];
  const depth = state.path.length
    ? `<span class="crumb__depth">${levels[state.path.length] || `Level ${state.path.length}`}</span>`
    : '';

  return `
    <button class="iconbtn up-btn" data-action="up" title="Go up (Backspace)"
            aria-label="Go up" ${state.path.length === 0 ? 'disabled' : ''}>${icon.arrowUp(16)}</button>
    <nav class="crumbs" aria-label="Breadcrumb">${crumbs}</nav>
    ${depth}`;
}

/* ── Filter / sort bar ─────────────────────────────────────── */
export function renderControls(state) {
  // Years available in current dataset (mostly meaningful for PYQs).
  const years = Array.from(
    new Set(getAllFiles(activeRoot(state.tab)).map((r) => r.file.year).filter(Boolean))
  ).sort((a, b) => b.localeCompare(a));

  const opt = (val, label, current) =>
    `<option value="${val}" ${current === val ? 'selected' : ''}>${label}</option>`;

  return `
    <div class="controls__group">
      <label class="controls__field">
        <span class="controls__label">${icon.filter(14)} Type</span>
        <select class="select" data-control="type">
          ${opt('all', 'All', state.filters.type)}
          ${opt('notes', 'Notes', state.filters.type)}
          ${opt('pyq', 'PYQ', state.filters.type)}
        </select>
      </label>
      ${years.length
        ? `<label class="controls__field">
             <span class="controls__label">Year</span>
             <select class="select" data-control="year">
               ${opt('all', 'All', state.filters.year)}
               ${years.map((y) => opt(y, y, state.filters.year)).join('')}
             </select>
           </label>`
        : ''}
      <label class="controls__field">
        <span class="controls__label">Sort</span>
        <select class="select" data-control="sort">
          ${opt('relevance', 'Relevance', state.sort)}
          ${opt('az', 'A → Z', state.sort)}
          ${opt('newest', 'Newest first', state.sort)}
          ${opt('oldest', 'Oldest first', state.sort)}
        </select>
      </label>
    </div>`;
}

/* ── Filtering + sorting applied to a flat result set ───────── */
function applyFilters(results, state) {
  let out = results;
  const { type, year } = state.filters;
  if (type === 'notes') out = out.filter((r) => (r.file.meta || 'PDF') !== 'PYQ' && !r.file.year);
  if (type === 'pyq') out = out.filter((r) => r.file.meta === 'PYQ' || r.file.year);
  if (year !== 'all') out = out.filter((r) => r.file.year === year);

  const byName = (a, b) => a.file.name.localeCompare(b.file.name);
  if (state.sort === 'az') out = [...out].sort(byName);
  else if (state.sort === 'newest') out = [...out].sort((a, b) => (b.file.isNew ? 1 : 0) - (a.file.isNew ? 1 : 0) || byName(a, b));
  else if (state.sort === 'oldest') out = [...out].sort((a, b) => (a.file.isNew ? 1 : 0) - (b.file.isNew ? 1 : 0) || byName(a, b));
  return out;
}

/* ── File list ──────────────────────────────────────────────── */
export function renderFileList(state) {
  const root = activeRoot(state.tab);

  // SEARCH MODE — flat, filtered, highlighted results.
  if (state.query) {
    let results = getAllFiles(root).filter(
      ({ file, pathNames }) =>
        file.name.toLowerCase().includes(state.query) ||
        pathNames.some((p) => p.toLowerCase().includes(state.query))
    );
    results = applyFilters(results, state);

    if (!results.length) {
      return emptyStateHTML('search', state.rawQuery);
    }
    const head = `<p class="result-count">${results.length} result${results.length !== 1 ? 's' : ''} for “${escapeHtml(state.rawQuery)}”</p>`;
    return (
      head +
      `<div class="card-list">` +
      results
        .map(({ file, pathNames }) =>
          noteCardHTML({ file, pathNames, tab: state.tab, query: state.rawQuery })
        )
        .join('') +
      `</div>`
    );
  }

  // BROWSE MODE.
  const node = getNodeAtPath(root, state.path);
  if (!node || !node.children || node.children.length === 0) {
    return emptyStateHTML(state.tab === 'pyqs' ? 'pyqs' : 'notes');
  }

  const pathNames = pathNamesOf(root, state.path);
  const items = node.children
    .map((child, idx) =>
      child.type === 'folder'
        ? folderCardHTML(child, idx)
        : noteCardHTML({ file: child, pathNames, idx, tab: state.tab, query: '' })
    )
    .join('');

  return `<div class="card-list">${items}</div>`;
}

/* ── Empty states ──────────────────────────────────────────── */
export function emptyStateHTML(kind, query = '') {
  if (kind === 'search') {
    return `
      <div class="empty">
        <div class="empty__icon">${icon.search(28)}</div>
        <p class="empty__title">No results for “${escapeHtml(query)}”</p>
        <p class="empty__sub">Try a shorter keyword, clear filters, or browse by branch.</p>
      </div>`;
  }
  const isPyq = kind === 'pyqs';
  return `
    <div class="empty">
      <div class="empty__icon">${icon.layers(28)}</div>
      <p class="empty__title">${isPyq ? 'No PYQs here yet' : 'Nothing here yet'}</p>
      <p class="empty__sub">${isPyq ? 'Papers will be added soon — contribute to help!' : 'Be the first to contribute notes for this subject.'}</p>
    </div>`;
}

export { skeletonList };
