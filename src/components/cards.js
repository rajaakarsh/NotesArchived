/**
 * cards.js — the rich note card + folder card markup.
 * Shared by the explorer, search results and the bookmarks view so a note
 * looks identical everywhere. Cards are data-attribute driven: the orchestrator
 * delegates clicks, so there are no inline handlers to keep in sync.
 */

import { escapeHtml } from '../utils/dom.js';
import { highlight, deriveTags, deriveContext } from '../utils/format.js';
import { fileId } from '../utils/fileIndex.js';
import { isBookmarked } from '../store/bookmarks.js';
import { getViews } from '../store/history.js';
import { icon, folderSVG, pdfSVG, pyqSVG } from '../icons/icons.js';

const tagHTML = (t) => `<span class="tag">${escapeHtml(t)}</span>`;

/** Folder row — navigates one level deeper. */
export function folderCardHTML(child, idx) {
  const empty = !child.children || child.children.length === 0;
  const files = (child.children || []).filter((c) => c.type === 'file').length;
  const folders = (child.children || []).filter((c) => c.type === 'folder').length;
  const count =
    files > 0 ? `${files} file${files !== 1 ? 's' : ''}`
    : folders > 0 ? `${folders} folder${folders !== 1 ? 's' : ''}`
    : null;

  return `
    <button class="card card--folder" data-action="open-folder" data-idx="${idx}"
            type="button" aria-label="Open ${escapeHtml(child.name)}">
      <span class="card__icon">${folderSVG(empty)}</span>
      <span class="card__body">
        <span class="card__title">${escapeHtml(child.name)}</span>
        ${count ? `<span class="card__count">${count}</span>` : ''}
      </span>
      <span class="card__chev">${icon.chevronRight(18)}</span>
    </button>`;
}

/**
 * Rich note/file card.
 * @param ctx { file, pathNames, idx?, tab, query }
 */
export function noteCardHTML(ctx) {
  const { file, pathNames = [], idx, tab = 'notes', query = '' } = ctx;
  const hasUrl = file.url && file.url !== '#';
  const id = fileId(file.url, pathNames, file.name);
  const { branch, level, subject } = deriveContext(pathNames);
  const tags = deriveTags({ file, pathNames, tab });
  const views = getViews(id);
  const marked = isBookmarked(id);
  const isPyq = tab === 'pyqs' || file.meta === 'PYQ';

  // data-* payload the orchestrator needs to open / bookmark / share.
  const payload = [
    `data-id="${escapeHtml(id)}"`,
    `data-url="${escapeHtml(file.url || '#')}"`,
    `data-name="${escapeHtml(file.name)}"`,
    `data-path="${escapeHtml(pathNames.join(' › '))}"`,
    `data-subject="${escapeHtml(subject)}"`,
    `data-branch="${escapeHtml(branch)}"`,
    typeof idx === 'number' ? `data-idx="${idx}"` : '',
  ].join(' ');

  const context = [branch, level].filter(Boolean).map(escapeHtml).join(' · ');

  return `
    <article class="card card--note ${hasUrl ? '' : 'is-unlinked'}" ${payload}>
      <div class="card__icon card__icon--file">${isPyq ? pyqSVG(file.year || '') : pdfSVG()}</div>
      <div class="card__body">
        <h3 class="card__title">
          ${highlight(file.name, query)}
          ${file.isNew ? '<span class="badge badge--new">NEW</span>' : ''}
        </h3>
        ${context ? `<p class="card__context">${context}</p>` : ''}
        <div class="card__tags">${tags.map(tagHTML).join('')}</div>
        <div class="card__meta">
          <span class="card__meta-item">${icon.eye(14)} ${views} view${views !== 1 ? 's' : ''}</span>
          <span class="card__meta-item">${escapeHtml(file.meta || 'PDF')}</span>
        </div>
      </div>
      <div class="card__actions">
        <button class="iconbtn ${marked ? 'is-active' : ''}" data-action="bookmark"
                title="${marked ? 'Remove bookmark' : 'Bookmark'}" aria-pressed="${marked}"
                aria-label="Bookmark ${escapeHtml(file.name)}">
          ${marked ? icon.bookmarkFill(18) : icon.bookmark(18)}
        </button>
        <button class="iconbtn" data-action="share" title="Share"
                aria-label="Share ${escapeHtml(file.name)}">${icon.share(18)}</button>
        ${hasUrl
          ? `<button class="iconbtn iconbtn--primary" data-action="preview" title="Preview"
                aria-label="Preview ${escapeHtml(file.name)}">${icon.eye(18)}</button>
             <a class="iconbtn" href="${escapeHtml(file.url)}" target="_blank" rel="noopener"
                data-action="download" title="Open / download"
                aria-label="Download ${escapeHtml(file.name)}">${icon.download(18)}</a>`
          : `<button class="iconbtn" data-action="unlinked" title="Not linked yet"
                aria-label="Not linked yet">${icon.clock(18)}</button>`}
      </div>
    </article>`;
}
