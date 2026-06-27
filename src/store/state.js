/**
 * state.js — central application state + a tiny pub/sub.
 * Components never mutate state directly; they call the setters here, which
 * emit a change so the orchestrator can re-render. This keeps data flow
 * one-directional and predictable (the "Single Source of Truth" pattern).
 */

const state = {
  route: 'home', // 'home' | 'bookmarks'
  tab: 'notes', // 'notes' | 'pyqs'
  path: [], // array of child indices into the active dataset
  query: '', // current search string (lowercased on read)
  rawQuery: '', // search string as typed (for highlighting)
  filters: { type: 'all', year: 'all' }, // advanced search filters
  sort: 'relevance', // 'relevance' | 'newest' | 'oldest' | 'az'
};

const listeners = new Set();

/** Subscribe to state changes; returns an unsubscribe fn. */
export function subscribe(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

function emit() {
  listeners.forEach((fn) => fn(state));
}

export const getState = () => state;

/* ── Setters (each emits) ─────────────────────────────────────── */

export function setRoute(route) {
  if (state.route === route) return;
  state.route = route;
  emit();
}

export function setTab(tab) {
  if (state.tab === tab) return;
  state.tab = tab;
  state.path = [];
  state.query = '';
  state.rawQuery = '';
  state.filters = { type: 'all', year: 'all' };
  emit();
}

export function setPath(path) {
  state.path = [...path];
  emit();
}

export function pushPath(idx) {
  state.path = [...state.path, idx];
  emit();
}

export function popPath() {
  if (state.path.length) {
    state.path = state.path.slice(0, -1);
    emit();
  }
}

export function setQuery(raw) {
  state.rawQuery = raw;
  state.query = raw.trim().toLowerCase();
  emit();
}

export function setFilter(key, value) {
  state.filters = { ...state.filters, [key]: value };
  emit();
}

export function setSort(sort) {
  state.sort = sort;
  emit();
}

export function resetFilters() {
  state.filters = { type: 'all', year: 'all' };
  state.sort = 'relevance';
  emit();
}
