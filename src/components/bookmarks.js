/**
 * bookmarks.js — "My Bookmarks" view. Renders saved notes from localStorage
 * using the same card actions as the explorer (preview/share/download/remove).
 */

import { escapeHtml } from '../utils/dom.js';
import { getBookmarks } from '../store/bookmarks.js';
import { isBookmarked } from '../store/bookmarks.js';
import { getViews } from '../store/history.js';
import { icon, pdfSVG } from '../icons/icons.js';

export function bookmarksViewHTML() {
  const list = getBookmarks();

  if (!list.length) {
    return `
      <div class="empty empty--page">
        <div class="empty__icon">${icon.bookmark(30)}</div>
        <p class="empty__title">No bookmarks yet</p>
        <p class="empty__sub">Tap the bookmark icon on any note to save it here for quick access.</p>
        <button class="btn btn--primary" data-action="goto-browse" type="button">Browse the archive</button>
      </div>`;
  }

  const cards = list
    .map((b) => {
      const views = getViews(b.id);
      const hasUrl = b.url && b.url !== '#';
      return `
        <article class="card card--note" data-id="${escapeHtml(b.id)}" data-url="${escapeHtml(b.url || '#')}"
                 data-name="${escapeHtml(b.name)}" data-path="${escapeHtml(b.path || '')}">
          <div class="card__icon card__icon--file">${pdfSVG()}</div>
          <div class="card__body">
            <h3 class="card__title">${escapeHtml(b.name)}</h3>
            ${b.path ? `<p class="card__context">${escapeHtml(b.path)}</p>` : ''}
            <div class="card__meta">
              <span class="card__meta-item">${icon.eye(14)} ${views} view${views !== 1 ? 's' : ''}</span>
            </div>
          </div>
          <div class="card__actions">
            <button class="iconbtn is-active" data-action="bookmark" title="Remove bookmark"
                    aria-pressed="true" aria-label="Remove bookmark">${icon.bookmarkFill(18)}</button>
            <button class="iconbtn" data-action="share" title="Share" aria-label="Share">${icon.share(18)}</button>
            ${hasUrl
              ? `<button class="iconbtn iconbtn--primary" data-action="preview" title="Preview" aria-label="Preview">${icon.eye(18)}</button>
                 <a class="iconbtn" href="${escapeHtml(b.url)}" target="_blank" rel="noopener" data-action="download" title="Open / download" aria-label="Download">${icon.download(18)}</a>`
              : `<button class="iconbtn" data-action="unlinked" title="Not linked yet" aria-label="Not linked yet">${icon.clock(18)}</button>`}
          </div>
        </article>`;
    })
    .join('');

  return `<div class="card-list">${cards}</div>`;
}

export { isBookmarked };
