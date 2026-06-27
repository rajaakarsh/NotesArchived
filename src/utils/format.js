/** format.js — string formatting, slugs, search highlighting and tag derivation. */

import { escapeHtml } from './dom.js';

/** URL/file-safe slug from a title. */
export function slugify(str = '') {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .trim()
    .replace(/\s+/g, '_')
    .substring(0, 40);
}

/**
 * Escape `text`, then wrap occurrences of `query` in <mark>.
 * Safe: escaping happens first, the <mark> tags are the only HTML added.
 */
export function highlight(text = '', query = '') {
  const safe = escapeHtml(text);
  if (!query) return safe;
  const q = query.trim();
  if (!q) return safe;
  // Escape regex metachars in the query.
  const pattern = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return safe.replace(new RegExp(`(${pattern})`, 'ig'), '<mark>$1</mark>');
}

/** Pretty count label, e.g. "3 files" / "1 folder". */
export function countLabel(n, singular) {
  return `${n} ${singular}${n !== 1 ? 's' : ''}`;
}

/**
 * Derive a small set of tags for a file from its path + metadata.
 * Used by the rich note cards. No data re-authoring needed.
 */
export function deriveTags({ file, pathNames = [], tab = 'notes' }) {
  const tags = [];
  // Content type
  if (tab === 'pyqs' || file.meta === 'PYQ') tags.push('PYQ');
  else tags.push('Notes');
  // Unit number if the name starts with "Unit N"
  const unit = /unit\s*([0-9]+)/i.exec(file.name);
  if (unit) tags.push(`Unit ${unit[1]}`);
  // Year for PYQs
  if (file.year) tags.push(file.year);
  return tags;
}

/**
 * Derive subject / semester / branch context from the path names.
 * pathNames is ordered: [Branch, Year|Semester, Subject, ...].
 */
export function deriveContext(pathNames = []) {
  return {
    branch: pathNames[0] || '',
    level: pathNames[1] || '',
    subject: pathNames[2] || pathNames[pathNames.length - 1] || '',
  };
}
