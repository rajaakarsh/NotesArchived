/**
 * fileIndex.js — read-only helpers over the recursive data tree.
 * The Indexer (getAllFiles) flattens the tree for search; getNodeAtPath
 * resolves the current navigation depth; computeStats powers the hero.
 */

import { DATA } from '../data/notes.js';
import { PYQ_DATA } from '../data/pyqs.js';

/** A stable id for a file based on its location — used by bookmarks/history. */
export function fileId(url, pathNames = [], name = '') {
  if (url && url !== '#') return url;
  return `${pathNames.join('/')}/${name}`;
}

/** Recursively collect every file with its path metadata (flat search index). */
export function getAllFiles(node, pathNames = [], parentPathIdx = [], results = []) {
  if (!node || !node.children) return results;
  node.children.forEach((child, i) => {
    if (child.type === 'file') {
      results.push({
        file: child,
        fileIdx: i,
        parentPath: [...parentPathIdx],
        pathNames: [...pathNames],
      });
    } else if (child.type === 'folder') {
      getAllFiles(child, [...pathNames, child.name], [...parentPathIdx, i], results);
    }
  });
  return results;
}

/** Resolve the node at an index path within a dataset. */
export function getNodeAtPath(root, path) {
  let node = root;
  for (const idx of path) {
    if (!node.children) return null;
    node = node.children[idx];
  }
  return node;
}

/** Names along a path (for breadcrumbs / context). */
export function pathNamesOf(root, path) {
  const names = [];
  let node = root;
  for (const idx of path) {
    node = node.children[idx];
    if (!node) break;
    names.push(node.name);
  }
  return names;
}

/** Hero statistics — always computed from Notes (PYQs are separate). */
export function computeStats() {
  const allFiles = getAllFiles(DATA);
  const linkedNotes = allFiles.filter((r) => r.file.url && r.file.url !== '#').length;

  let subjectCount = 0;
  (DATA.children || []).forEach((branch) => {
    (branch.children || []).forEach((sem) => {
      (sem.children || []).forEach((subject) => {
        if (subject.type === 'folder') subjectCount++;
      });
    });
  });

  const branchCount = DATA.children ? DATA.children.length : 0;
  return { linkedNotes, subjectCount, branchCount, totalFiles: allFiles.length };
}

/** Count of files (recursively) inside a folder node — for category cards. */
export function countFiles(node) {
  return getAllFiles(node).length;
}

export { DATA, PYQ_DATA };
