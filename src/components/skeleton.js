/**
 * skeleton.js — loading placeholders shown for a beat before content paints.
 * Reduces perceived latency and prevents layout shift (the skeleton matches
 * the real card height).
 */

export function skeletonList(count = 6) {
  const row = `
    <div class="skel-card" aria-hidden="true">
      <div class="skel skel--icon"></div>
      <div class="skel-card__body">
        <div class="skel skel--line w-70"></div>
        <div class="skel skel--line w-40"></div>
        <div class="skel skel--chips"></div>
      </div>
    </div>`;
  return `<div class="card-list" role="status" aria-label="Loading">${row.repeat(count)}</div>`;
}
