/**
 * site.js — Central configuration.
 * Brand, contact, links and per-branch presentation metadata live here so the
 * rest of the app never hard-codes strings. Future backend integration only
 * needs to touch this file + the data modules.
 */
export const SITE = {
  name: 'Students Archived',
  tagline: 'B.Tech study library',
  university: 'B.Tech Curriculum',
  description:
    'A clean, fast archive of B.Tech study notes, PYQs and uploads — organised by branch, semester and subject.',
  url: 'https://imaakarsh.github.io/NotesArchived/',
  email: 'notesarchive1@gmail.com',
  author: {
    name: 'Aakarsh Raj',
    role: 'Creator & Maintainer · B.Tech 2029',
    photo: 'WhatsApp Image 2026-03-31 at 12.08.44 AM.jpeg',
    portfolio: 'https://aakarshdev.me/',
    email: 'aakarsh027@outlook.com',
    github: 'https://github.com/imaakarsh',
    linkedin: 'https://www.linkedin.com/in/aakarshraj07/',
    x: 'https://x.com/imaakarshh',
  },
  repo: 'https://github.com/imaakarsh/NotesArchived',
};

/**
 * Per-branch presentation: full label, accent gradient and a short blurb.
 * Keyed by the folder `name` used in the data tree.
 */
export const BRANCH_META = {
  CSE: {
    label: 'Computer Science',
    gradient: 'linear-gradient(135deg, #49c5b6 0%, #2563eb 100%)',
    blurb: 'Programming, algorithms, AI/ML, networks and core CS.',
  },
  CE: {
    label: 'Civil Engineering',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef8d81 100%)',
    blurb: 'Mechanics, materials, surveying and structures.',
  },
  ECE: {
    label: 'Electronics & Comm.',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #2563eb 100%)',
    blurb: 'Devices, signals, communication and embedded systems.',
  },
  ME: {
    label: 'Mechanical Engineering',
    gradient: 'linear-gradient(135deg, #ef8d81 0%, #f59e0b 100%)',
    blurb: 'Drawing, thermodynamics, design and manufacturing.',
  },
};

/** Fallback presentation for any branch not explicitly listed above. */
export const DEFAULT_BRANCH_META = {
  label: '',
  gradient: 'linear-gradient(135deg, #49c5b6 0%, #2ba497 100%)',
  blurb: 'Course notes organised by semester and subject.',
};
