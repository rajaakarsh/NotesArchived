/**
 * share.js — copy-link / native-share + the Gmail compose flow.
 * Kept separate so cards, modals and the contribute flow share one impl.
 */

import { isMobile } from './dom.js';
import { showToast } from '../components/toast.js';
import { SITE } from '../config/site.js';

/** Share a note: native share sheet where available, else copy to clipboard. */
export async function shareNote({ title, url }) {
  const shareUrl = url && url !== '#' ? url : SITE.url;
  if (navigator.share) {
    try {
      await navigator.share({ title, url: shareUrl });
      return;
    } catch {
      // user cancelled or share failed — fall through to copy
    }
  }
  try {
    await navigator.clipboard.writeText(shareUrl);
    showToast('Link copied to clipboard', { type: 'success' });
  } catch {
    showToast('Could not copy link', { type: 'error' });
  }
}

/**
 * Open a Gmail compose window.
 * Mobile: try the Gmail app deep-link, fall back to mailto after a beat.
 * Desktop: open Gmail web compose in a new tab.
 */
export function openGmailCompose(to, subject, body) {
  if (isMobile()) {
    const gmailDeep = `googlegmail://co?to=${to}&subject=${subject}&body=${body}`;
    const mailtoFallback = `mailto:${to}?subject=${subject}&body=${body}`;
    let opened = false;
    const timer = setTimeout(() => {
      if (!opened) window.location.href = mailtoFallback;
    }, 1500);
    window.addEventListener(
      'blur',
      () => {
        opened = true;
        clearTimeout(timer);
      },
      { once: true }
    );
    window.location.href = gmailDeep;
  } else {
    const webUrl = `https://mail.google.com/mail/?view=cm&to=${to}&su=${subject}&body=${body}`;
    window.open(webUrl, '_blank', 'noopener');
  }
}
