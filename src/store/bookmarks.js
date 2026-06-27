/**
 * bookmarks.js — locally-stored bookmarks ("My Bookmarks").
 * A bookmark stores everything needed to render its card and re-open the PDF,
 * so the Bookmarks view never has to re-walk the tree.
 */

const KEY = 'na-bookmarks';

function read() {
  try {
    return JSON.parse(localStorage.getItem(KEY) || '[]');
  } catch {
    return [];
  }
}

function write(list) {
  try {
    localStorage.setItem(KEY, JSON.stringify(list));
  } catch {
    /* ignore quota / privacy-mode errors */
  }
}

export function getBookmarks() {
  return read();
}

export function isBookmarked(id) {
  return read().some((b) => b.id === id);
}

/** Add if absent, remove if present. Returns the new bookmarked state. */
export function toggleBookmark(entry) {
  const list = read();
  const i = list.findIndex((b) => b.id === entry.id);
  if (i >= 0) {
    list.splice(i, 1);
    write(list);
    return false;
  }
  list.unshift({ ...entry, savedAt: Date.now() });
  write(list);
  return true;
}

export function removeBookmark(id) {
  write(read().filter((b) => b.id !== id));
}
