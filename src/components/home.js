/**
 * home.js — homepage sections rendered into static mount points:
 * animated stats, category cards (per branch) and "recently added" notes.
 */

import { escapeHtml } from '../utils/dom.js';
import { computeStats, countFiles, getAllFiles, DATA } from '../utils/fileIndex.js';
import { BRANCH_META, DEFAULT_BRANCH_META } from '../config/site.js';
import { noteCardHTML } from './cards.js';
import { icon } from '../icons/icons.js';

/* ── Stats (animated counters) ─────────────────────────────── */
export function statsHTML() {
  const { linkedNotes, subjectCount, branchCount, totalFiles } = computeStats();
  const stat = (val, suffix, label) => `
    <div class="stat">
      <span class="stat__num" data-count="${val}" data-suffix="${suffix}">0${suffix}</span>
      <span class="stat__label">${label}</span>
    </div>`;
  return (
    stat(totalFiles, '', 'Notes indexed') +
    `<span class="stat__divider"></span>` +
    stat(subjectCount, '+', 'Subjects covered') +
    `<span class="stat__divider"></span>` +
    stat(branchCount, '', 'Branches') +
    `<span class="stat__divider"></span>` +
    stat(linkedNotes, '', 'Live PDFs')
  );
}

/* ── Category cards (one per branch) ───────────────────────── */
export function categoriesHTML() {
  return (DATA.children || [])
    .map((branch, idx) => {
      const meta = BRANCH_META[branch.name] || DEFAULT_BRANCH_META;
      const notes = countFiles(branch);
      const subjects = (branch.children || []).reduce(
        (n, sem) => n + (sem.children ? sem.children.filter((c) => c.type === 'folder').length : 0),
        0
      );
      return `
        <button class="category" data-action="open-branch" data-idx="${idx}" type="button"
                style="--cat-gradient:${meta.gradient}">
          <span class="category__glow" aria-hidden="true"></span>
          <span class="category__icon">${icon.layers(22)}</span>
          <span class="category__name">${escapeHtml(branch.name)}</span>
          <span class="category__label">${escapeHtml(meta.label)}</span>
          <span class="category__blurb">${escapeHtml(meta.blurb)}</span>
          <span class="category__foot">
            <span>${notes} notes</span><span>${subjects} subjects</span>
            <span class="category__arrow">${icon.chevronRight(16)}</span>
          </span>
        </button>`;
    })
    .join('');
}

/* ── Recently added (isNew first, then a stable slice) ─────── */
export function recentlyAddedHTML() {
  const all = getAllFiles(DATA);
  const fresh = all.filter((r) => r.file.isNew);
  const linked = all.filter((r) => r.file.url && r.file.url !== '#' && !r.file.isNew);
  const picks = [...fresh, ...linked].slice(0, 6);
  if (!picks.length) return '';
  return picks
    .map(({ file, pathNames }) => noteCardHTML({ file, pathNames, tab: 'notes', query: '' }))
    .join('');
}
