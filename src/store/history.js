/**
 * history.js — "recently viewed" notes (most-recent-first, capped).
 * A note is recorded when its PDF preview opens. Also keeps a tiny local
 * view-counter per file so cards can show honest, device-local view counts
 * (we never fabricate global numbers).
 */

const KEY = 'na-history';
const VIEWS_KEY = 'na-views';
const MAX = 12;

function read(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key) || fallback);
  } catch {
    return JSON.parse(fallback);
  }
}
function write(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* ignore */
  }
}

export function getHistory() {
  return read(KEY, '[]');
}

/** Record a viewed note; de-dupes by id and bumps it to the front. */
export function recordView(entry) {
  const list = read(KEY, '[]').filter((h) => h.id !== entry.id);
  list.unshift({ ...entry, viewedAt: Date.now() });
  write(KEY, list.slice(0, MAX));

  const views = read(VIEWS_KEY, '{}');
  views[entry.id] = (views[entry.id] || 0) + 1;
  write(VIEWS_KEY, views);
}

export function getViews(id) {
  const views = read(VIEWS_KEY, '{}');
  return views[id] || 0;
}

export function clearHistory() {
  write(KEY, []);
}
