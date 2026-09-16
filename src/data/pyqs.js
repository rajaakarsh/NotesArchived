/**
 * pyqs.js — Previous Year Questions archive.
 *
 * Same recursive shape as notes (see notes.js).
 * Hierarchy: pyqs > Branch > Semester > Subject > Year (file)
 * Files carry a `year` field used for the PYQ badge + filtering.
 */
export const PYQ_DATA = {
  type: 'folder',
  name: 'pyqs',
  children: [

    /* ── CSE PYQs ─────────────────────────────────────────────── */
    {
      type: 'folder', name: 'CSE',
      children: [
        {
          type: 'folder', name: '1st Semester',
          children: [
            {
              type: 'folder', name: 'Mathematics I',
              children: [
                { type: 'file', name: 'PYQ 2024', meta: 'PYQ', url: '#', year: '2024' },
                { type: 'file', name: 'PYQ 2023', meta: 'PYQ', url: '#', year: '2023' },
                { type: 'file', name: 'PYQ 2022', meta: 'PYQ', url: '#', year: '2022' },
              ]
            },
            {
              type: 'folder', name: 'Physics',
              children: [
                { type: 'file', name: 'PYQ 2024', meta: 'PYQ', url: '#', year: '2024' },
                { type: 'file', name: 'PYQ 2023', meta: 'PYQ', url: '#', year: '2023' },
                { type: 'file', name: 'PYQ 2022', meta: 'PYQ', url: '#', year: '2022' },
              ]
            },
            {
              type: 'folder', name: 'Chemistry',
              children: [
                { type: 'file', name: 'PYQ 2024', meta: 'PYQ', url: '#', year: '2024' },
                { type: 'file', name: 'PYQ 2023', meta: 'PYQ', url: '#', year: '2023' },
                { type: 'file', name: 'PYQ 2022', meta: 'PYQ', url: '#', year: '2022' },
              ]
            },
            {
              type: 'folder', name: 'Programming Fundamentals (C)',
              children: [
                { type: 'file', name: 'PYQ 2024', meta: 'PYQ', url: '#', year: '2024' },
                { type: 'file', name: 'PYQ 2023', meta: 'PYQ', url: '#', year: '2023' },
                { type: 'file', name: 'PYQ 2022', meta: 'PYQ', url: '#', year: '2022' },
              ]
            },
            {
              type: 'folder', name: 'English Communication',
              children: [
                { type: 'file', name: 'PYQ 2024', meta: 'PYQ', url: '#', year: '2024' },
                { type: 'file', name: 'PYQ 2023', meta: 'PYQ', url: '#', year: '2023' },
              ]
            },
            {
              type: 'folder', name: 'Electronics Engineering',
              children: [
                { type: 'file', name: 'PYQ 2024', meta: 'PYQ', url: '#', year: '2024' },
                { type: 'file', name: 'PYQ 2023', meta: 'PYQ', url: '#', year: '2023' },
              ]
            },
          ]
        },
        {
          type: 'folder', name: '2nd Semester',
          children: [
            {
              type: 'folder', name: 'Mathematics II',
              children: [
                { type: 'file', name: 'PYQ 2024', meta: 'PYQ', url: '#', year: '2024' },
                { type: 'file', name: 'PYQ 2023', meta: 'PYQ', url: '#', year: '2023' },
              ]
            },
            {
              type: 'folder', name: 'Data Structures',
              children: [
                { type: 'file', name: 'PYQ 2024', meta: 'PYQ', url: '#', year: '2024' },
                { type: 'file', name: 'PYQ 2023', meta: 'PYQ', url: '#', year: '2023' },
              ]
            },
            {
              type: 'folder', name: 'Object Oriented Programming (Java)',
              children: [
                { type: 'file', name: 'PYQ 2024', meta: 'PYQ', url: '#', year: '2024' },
                { type: 'file', name: 'PYQ 2023', meta: 'PYQ', url: '#', year: '2023' },
              ]
            },
            {
              type: 'folder', name: 'Digital Electronics',
              children: [
                { type: 'file', name: 'PYQ 2024', meta: 'PYQ', url: '#', year: '2024' },
                { type: 'file', name: 'PYQ 2023', meta: 'PYQ', url: '#', year: '2023' },
              ]
            },
          ]
        },
        {
          type: 'folder', name: '3rd Semester',
          children: [
            {
              type: 'folder', name: 'Digital Electronics',
              children: [
                { type: 'file', name: 'PYQ 2024', meta: 'PYQ', url: '#', year: '2024' },
                { type: 'file', name: 'PYQ 2023', meta: 'PYQ', url: '#', year: '2023' },
              ]
            },
            { type: 'folder', name: 'Computer Networks', children: [
              { type: 'file', name: 'PYQ 2024', meta: 'PYQ', url: '#', year: '2024' },
              { type: 'file', name: 'PYQ 2023', meta: 'PYQ', url: '#', year: '2023' },
            ]},
            { type: 'folder', name: 'Operating Systems', children: [
              { type: 'file', name: 'PYQ 2024', meta: 'PYQ', url: '#', year: '2024' },
              { type: 'file', name: 'PYQ 2023', meta: 'PYQ', url: '#', year: '2023' },
            ]},
            { type: 'folder', name: 'Database Management Systems', children: [
              { type: 'file', name: 'PYQ 2024', meta: 'PYQ', url: '#', year: '2024' },
              { type: 'file', name: 'PYQ 2023', meta: 'PYQ', url: '#', year: '2023' },
            ]},
          ]
        },
        { type: 'folder', name: '4th Semester', children: [] },
        { type: 'folder', name: '5th Semester', children: [] },
        { type: 'folder', name: '6th Semester', children: [] },
        { type: 'folder', name: '7th Semester', children: [] },
        { type: 'folder', name: '8th Semester', children: [] },
      ]
    },

    /* ── CE PYQs ───────────────────────────────────────────────── */
    {
      type: 'folder', name: 'CE',
      children: [
        { type: 'folder', name: '1st Semester', children: [] },
        { type: 'folder', name: '2nd Semester', children: [] },
        { type: 'folder', name: '3rd Semester', children: [] },
        { type: 'folder', name: '4th Semester', children: [] },
      ]
    },

    /* ── ECE PYQs ──────────────────────────────────────────────── */
    {
      type: 'folder', name: 'ECE',
      children: [
        { type: 'folder', name: '1st Semester', children: [] },
        { type: 'folder', name: '2nd Semester', children: [] },
        { type: 'folder', name: '3rd Semester', children: [] },
        { type: 'folder', name: '4th Semester', children: [] },
      ]
    },

    /* ── ME PYQs ───────────────────────────────────────────────── */
    {
      type: 'folder', name: 'ME',
      children: [
        { type: 'folder', name: '1st Semester', children: [] },
        { type: 'folder', name: '2nd Semester', children: [] },
        { type: 'folder', name: '3rd Semester', children: [] },
        { type: 'folder', name: '4th Semester', children: [] },
      ]
    },

  ]
};

export default PYQ_DATA;
