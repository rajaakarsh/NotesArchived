/**
 * icons.js — Inline SVG components (Lucide-style line icons + branded file icons).
 * All UI icons accept an optional size; they inherit `currentColor` so theming
 * is automatic. Returning strings keeps rendering allocation-free in templates.
 */

const stroke = (paths, size = 18) =>
  `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;

export const icon = {
  search: (s) => stroke('<circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>', s),
  sun: (s) => stroke('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>', s),
  moon: (s) => stroke('<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/>', s),
  bookmark: (s) => stroke('<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"/>', s),
  bookmarkFill: (s = 18) =>
    `<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="currentColor" aria-hidden="true"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"/></svg>`,
  share: (s) => stroke('<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>', s),
  download: (s) => stroke('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>', s),
  eye: (s) => stroke('<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>', s),
  chevronRight: (s) => stroke('<path d="m9 18 6-6-6-6"/>', s),
  chevronUp: (s) => stroke('<path d="m18 15-6-6-6 6"/>', s),
  arrowUp: (s) => stroke('<path d="M12 19V5"/><path d="m5 12 7-7 7 7"/>', s),
  menu: (s) => stroke('<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>', s),
  x: (s) => stroke('<path d="M18 6 6 18M6 6l12 12"/>', s),
  plus: (s) => stroke('<path d="M12 5v14M5 12h14"/>', s),
  mail: (s) => stroke('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>', s),
  file: (s) => stroke('<path d="M5 4h11l3 3v13H5z"/><path d="M14 4v4h4"/><path d="M9 12h6"/><path d="M9 16h4"/>', s),
  link: (s) => stroke('<path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1"/>', s),
  layers: (s) => stroke('<path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/>', s),
  globe: (s) => stroke('<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.7 2.5 4.2 5.6 4.2 9S14.7 18.5 12 21c-2.7-2.5-4.2-5.6-4.2-9S9.3 5.5 12 3Z"/>', s),
  info: (s) => stroke('<circle cx="12" cy="12" r="9"/><path d="M12 10v5"/><path d="M12 7.5h.01"/>', s),
  sparkle: (s) => stroke('<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/>', s),
  filter: (s) => stroke('<path d="M3 5h18M6 12h12M10 19h4"/>', s),
  clock: (s) => stroke('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>', s),
};

/** Branded folder icon (notes theme). */
export function folderSVG(empty = false) {
  const body = empty ? 'var(--text-muted)' : 'var(--accent-folder)';
  const tab = empty ? 'var(--text-secondary)' : 'var(--accent-folder-tab)';
  return `<svg viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M0 9C0 7.9 0.9 7 2 7H14L17 11H34C35.1 11 36 11.9 36 13V29C36 30.1 35.1 31 34 31H2C0.9 31 0 30.1 0 29V9Z" fill="${body}"/>
    <rect x="0" y="7" width="17" height="5" rx="1" fill="${tab}"/>
    ${empty ? '' : `
    <line x1="11" y1="17" x2="25" y2="17" stroke="white" stroke-width="1.4" stroke-linecap="round" opacity="0.75"/>
    <line x1="11" y1="21" x2="25" y2="21" stroke="white" stroke-width="1.4" stroke-linecap="round" opacity="0.75"/>
    <line x1="11" y1="25" x2="19" y2="25" stroke="white" stroke-width="1.4" stroke-linecap="round" opacity="0.75"/>`}
  </svg>`;
}

/** Branded PDF file icon (red). */
export function pdfSVG() {
  return `<svg viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="0" y="0" width="32" height="36" rx="3" fill="var(--accent-red)"/>
    <path d="M20 0L32 12V36H20V0Z" fill="var(--accent-red-dim)"/>
    <polygon points="20,0 32,12 20,12" fill="rgba(255,255,255,0.4)"/>
    <text x="4" y="24" font-family="Inter,sans-serif" font-size="7" font-weight="800" fill="white">PDF</text>
  </svg>`;
}

/** Branded PYQ file icon (blue) with the exam year. */
export function pyqSVG(year) {
  return `<svg viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="0" y="0" width="32" height="36" rx="3" fill="#2563eb"/>
    <path d="M20 0L32 12V36H20V0Z" fill="#1d4ed8"/>
    <polygon points="20,0 32,12 20,12" fill="rgba(255,255,255,0.35)"/>
    <text x="4" y="16" font-family="Inter,sans-serif" font-size="5.5" font-weight="800" fill="white">PYQ</text>
    <text x="4" y="28" font-family="Inter,sans-serif" font-size="6.5" font-weight="800" fill="rgba(255,255,255,0.9)">${year || ''}</text>
  </svg>`;
}
