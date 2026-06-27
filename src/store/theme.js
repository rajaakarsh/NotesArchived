/**
 * theme.js — light/dark theme controller.
 * Order of precedence: saved choice → system preference → dark default.
 * The choice persists in localStorage and `data-theme` drives all tokens.
 */

const KEY = 'na-theme';
const media = window.matchMedia('(prefers-color-scheme: light)');

export function getStoredTheme() {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return null;
  }
}

export function resolveTheme() {
  const stored = getStoredTheme();
  if (stored === 'light' || stored === 'dark') return stored;
  return media.matches ? 'light' : 'dark';
}

export function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  document.documentElement.style.colorScheme = theme;
}

export function setTheme(theme) {
  try {
    localStorage.setItem(KEY, theme);
  } catch {
    /* storage may be unavailable — fail silently */
  }
  applyTheme(theme);
}

export function toggleTheme() {
  const next =
    document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  setTheme(next);
  return next;
}

/** Initialise on boot; also react to OS changes when the user hasn't chosen. */
export function initTheme(onChange) {
  applyTheme(resolveTheme());
  media.addEventListener('change', () => {
    if (!getStoredTheme()) {
      applyTheme(resolveTheme());
      onChange?.();
    }
  });
}
