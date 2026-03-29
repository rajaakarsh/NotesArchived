
const DATA = {
  type: 'folder',
  name: 'btech',
  children: [

    /* ── CSE  */
    {
      type: 'folder',
      name: 'CSE',
      children: [
        {
          type: 'folder', name: 'Sem 1',
          children: [
            {
              type: 'folder', name: 'Mathematics I',
              children: [
                { type: 'file', name: 'Unit 1 — Differential Calculus', meta: 'PDF', url: 'https://drive.google.com/file/d/1pRMTfdHPpG5WEw9qD5QQycmTKC-snf8y/view?usp=sharing' },
                { type: 'file', name: 'Unit 2 — Integral Calculus', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 3 — Matrices & Determinants', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 4 — Differential Equations', meta: 'PDF', url: '#' },
              ]
            },
            {
              type: 'folder', name: 'Physics',
              children: [
                { type: 'file', name: 'Unit 1 — Mechanics', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 2 — Waves & Optics', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 3 — Electromagnetism', meta: 'PDF', url: '#' },
              ]
            },
            {
              type: 'folder', name: 'Programming Fundamentals (C)',
              children: [
                { type: 'file', name: 'Unit 1 — Introduction to C', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 2 — Control Flow & Functions', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 3 — Arrays & Pointers', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 4 — Structures & File I/O', meta: 'PDF', url: '#' },
              ]
            },
            {
              type: 'folder', name: 'English Communication',
              children: [
                { type: 'file', name: 'Unit 1 — Grammar & Writing', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 2 — Technical Communication', meta: 'PDF', url: '#' },
              ]
            },
          ]
        },
        {
          type: 'folder', name: 'Sem 2',
          children: [
            {
              type: 'folder', name: 'Mathematics II',
              children: [
                { type: 'file', name: 'Unit 1 — Linear Algebra', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 2 — Probability & Statistics', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 3 — Fourier Series', meta: 'PDF', url: '#' },
              ]
            },
            {
              type: 'folder', name: 'Data Structures',
              children: [
                { type: 'file', name: 'Unit 1 — Arrays & Linked Lists', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 2 — Stacks & Queues', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 3 — Trees & Binary Search Trees', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 4 — Graphs & Hashing', meta: 'PDF', url: '#' },
              ]
            },
            {
              type: 'folder', name: 'Digital Electronics',
              children: [
                { type: 'file', name: 'Unit 1 — Number Systems & Boolean Algebra', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 2 — Logic Gates & Combinational Circuits', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 3 — Sequential Circuits', meta: 'PDF', url: '#' },
              ]
            },
          ]
        },
        {
          type: 'folder', name: 'Sem 3',
          children: [
            {
              type: 'folder', name: 'Object Oriented Programming (Java)',
              children: [
                { type: 'file', name: 'Unit 1 — Classes & Objects', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 2 — Inheritance & Polymorphism', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 3 — Interfaces & Abstract Classes', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 4 — Exception Handling & Collections', meta: 'PDF', url: '#' },
              ]
            },
            {
              type: 'folder', name: 'Database Management Systems',
              children: [
                { type: 'file', name: 'Unit 1 — ER Model & Relational Model', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 2 — SQL — DDL & DML', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 3 — Normalization', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 4 — Transactions & Concurrency', meta: 'PDF', url: '#' },
              ]
            },
            {
              type: 'folder', name: 'Deep Learning',
              children: [
                { type: 'file', name: 'Unit 1 — Neural Network Basics', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 2 — CNN Architecture', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 3 — RNN & LSTM', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 4 — Transfer Learning', meta: 'PDF', url: '#' },
              ]
            },
            {
              type: 'folder', name: 'Discrete Mathematics',
              children: [
                { type: 'file', name: 'Unit 1 — Set Theory & Logic', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 2 — Relations & Functions', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 3 — Graph Theory', meta: 'PDF', url: '#' },
              ]
            },
          ]
        },
        {
          type: 'folder', name: 'Sem 4',
          children: [
            {
              type: 'folder', name: 'Career Skills',
              children: [
                { type: 'file', name: 'Unit 1 — Professional Communication', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 2 — Resume & Interview Skills', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 3 — Group Discussion & Presentation', meta: 'PDF', url: '#' },
              ]
            },
            {
              type: 'folder', name: 'Design And Analysis Of Algorithms',
              children: [
                { type: 'file', name: 'Unit 1 — Complexity Analysis', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 2 — Divide & Conquer', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 3 — Dynamic Programming', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 4 — Greedy & Graph Algorithms', meta: 'PDF', url: '#' },
              ]
            },
            {
              type: 'folder', name: 'Finite Automata And Formal Language',
              children: [
                { type: 'file', name: 'Unit 1 — Regular Expressions & DFA', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 2 — NFA & Conversion', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 3 — Context Free Grammars', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 4 — Pushdown Automata & Turing Machine', meta: 'PDF', url: '#' },
              ]
            },
            {
              type: 'folder', name: 'Fundamental Of Cyber Security',
              children: [
                { type: 'file', name: 'Unit 1 — Threats & Vulnerabilities', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 2 — Cryptography Basics', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 3 — Network Security', meta: 'PDF', url: '#' },
              ]
            },
            {
              type: 'folder', name: 'Fundamental Of Statistics And AI',
              children: [
                { type: 'file', name: 'Unit 1 — Descriptive Statistics', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 2 — Probability Distributions', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 3 — Introduction to AI & ML', meta: 'PDF', url: '#' },
              ]
            },
            {
              type: 'folder', name: 'Indian Constitution',
              children: [
                { type: 'file', name: 'Unit 1 — Preamble & Fundamental Rights', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 2 — Directive Principles & Fundamental Duties', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 3 — Parliament & Judiciary', meta: 'PDF', url: '#' },
              ]
            },
            {
              type: 'folder', name: 'Java Programming',
              children: [
                { type: 'file', name: 'Unit 1 — OOP & Collections', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 2 — Multithreading & Concurrency', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 3 — Java Streams & File I/O', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 4 — JavaFX & GUI', meta: 'PDF', url: '#' },
              ]
            },
          ]
        },
        {
          type: 'folder', name: 'Sem 5',
          children: [
            {
              type: 'folder', name: 'Computer Networks',
              children: [
                { type: 'file', name: 'Unit 1 — OSI & TCP/IP Model', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 2 — Data Link Layer', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 3 — Network Layer & Routing', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 4 — Transport & Application Layer', meta: 'PDF', url: '#' },
              ]
            },
            {
              type: 'folder', name: 'Operating Systems',
              children: [
                { type: 'file', name: 'Unit 1 — Process Management', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 2 — CPU Scheduling', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 3 — Memory Management', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 4 — File Systems & I/O', meta: 'PDF', url: '#' },
              ]
            },
            {
              type: 'folder', name: 'Software Engineering',
              children: [
                { type: 'file', name: 'Unit 1 — SDLC Models', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 2 — Requirements Engineering', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 3 — Software Testing', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 4 — Project Management', meta: 'PDF', url: '#' },
              ]
            },
          ]
        },
        {
          type: 'folder', name: 'Sem 6',
          children: [
            {
              type: 'folder', name: 'Compiler Design',
              children: [
                { type: 'file', name: 'Unit 1 — Lexical Analysis', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 2 — Syntax Analysis & Parsing', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 3 — Semantic Analysis & Code Generation', meta: 'PDF', url: '#' },
              ]
            },
            {
              type: 'folder', name: 'Machine Learning',
              children: [
                { type: 'file', name: 'Unit 1 — Supervised Learning', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 2 — Unsupervised Learning', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 3 — Model Evaluation & Tuning', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 4 — Neural Networks & Deep Learning Intro', meta: 'PDF', url: '#' },
              ]
            },
            {
              type: 'folder', name: 'Web Technologies',
              children: [
                { type: 'file', name: 'Unit 1 — HTML5 & CSS3', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 2 — JavaScript & DOM', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 3 — ReactJS Basics', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 4 — Node.js & REST APIs', meta: 'PDF', url: '#' },
              ]
            },
          ]
        },
        {
          type: 'folder', name: 'Sem 7',
          children: [
            {
              type: 'folder', name: 'Information Security',
              children: [
                { type: 'file', name: 'Unit 1 — Cryptographic Algorithms', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 2 — Network Security Protocols', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 3 — Ethical Hacking Basics', meta: 'PDF', url: '#' },
              ]
            },
            {
              type: 'folder', name: 'Artificial Intelligence',
              children: [
                { type: 'file', name: 'Unit 1 — Search Algorithms', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 2 — Knowledge Representation', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 3 — Expert Systems', meta: 'PDF', url: '#' },
              ]
            },
          ]
        },
        {
          type: 'folder', name: 'Sem 8',
          children: [
            {
              type: 'folder', name: 'Cloud Computing',
              children: [
                { type: 'file', name: 'Unit 1 — Cloud Service Models (IaaS, PaaS, SaaS)', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 2 — Virtualization', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 3 — AWS & Azure Basics', meta: 'PDF', url: '#' },
              ]
            },
            {
              type: 'folder', name: 'Big Data Analytics',
              children: [
                { type: 'file', name: 'Unit 1 — Hadoop & MapReduce', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 2 — Apache Spark', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 3 — Data Visualization', meta: 'PDF', url: '#' },
              ]
            },
          ]
        },
      ]
    },

    /* ── CE ──────────────────────────────── */
    {
      type: 'folder', name: 'CE',
      children: [
        {
          type: 'folder', name: 'Sem 1',
          children: [
            {
              type: 'folder', name: 'Engineering Mechanics',
              children: [
                { type: 'file', name: 'Unit 1 — Statics & Forces', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 2 — Dynamics & Kinematics', meta: 'PDF', url: '#' },
              ]
            },
            {
              type: 'folder', name: 'Mathematics I',
              children: [
                { type: 'file', name: 'Unit 1 — Calculus Notes', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 2 — Differential Equations', meta: 'PDF', url: '#' },
              ]
            },
          ]
        },
        {
          type: 'folder', name: 'Sem 2',
          children: [
            {
              type: 'folder', name: 'Building Materials',
              children: [
                { type: 'file', name: 'Unit 1 — Cement, Mortar & Concrete', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 2 — Stones, Bricks & Timber', meta: 'PDF', url: '#' },
              ]
            },
            {
              type: 'folder', name: 'Surveying',
              children: [
                { type: 'file', name: 'Unit 1 — Chain Surveying', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 2 — Leveling & Contouring', meta: 'PDF', url: '#' },
              ]
            },
          ]
        },
        { type: 'folder', name: 'Sem 3', children: [] },
        { type: 'folder', name: 'Sem 4', children: [] },
        { type: 'folder', name: 'Sem 5', children: [] },
        { type: 'folder', name: 'Sem 6', children: [] },
        { type: 'folder', name: 'Sem 7', children: [] },
        { type: 'folder', name: 'Sem 8', children: [] },
      ]
    },

    /* ── ECE ─────────────────────────────── */
    {
      type: 'folder', name: 'ECE',
      children: [
        {
          type: 'folder', name: 'Sem 1',
          children: [
            {
              type: 'folder', name: 'Basic Electronics',
              children: [
                { type: 'file', name: 'Unit 1 — Diodes & Transistors', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 2 — Amplifiers & Oscillators', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 3 — Operational Amplifiers', meta: 'PDF', url: '#' },
              ]
            },
          ]
        },
        { type: 'folder', name: 'Sem 2', children: [] },
        { type: 'folder', name: 'Sem 3', children: [] },
        { type: 'folder', name: 'Sem 4', children: [] },
        { type: 'folder', name: 'Sem 5', children: [] },
        { type: 'folder', name: 'Sem 6', children: [] },
        { type: 'folder', name: 'Sem 7', children: [] },
        { type: 'folder', name: 'Sem 8', children: [] },
      ]
    },

    /* ── ME ──────────────────────────────── */
    {
      type: 'folder', name: 'ME',
      children: [
        {
          type: 'folder', name: 'Sem 1',
          children: [
            {
              type: 'folder', name: 'Engineering Drawing',
              children: [
                { type: 'file', name: 'Unit 1 — Orthographic Projections', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 2 — Isometric Views', meta: 'PDF', url: '#' },
              ]
            },
          ]
        },
        { type: 'folder', name: 'Sem 2', children: [] },
        { type: 'folder', name: 'Sem 3', children: [] },
        { type: 'folder', name: 'Sem 4', children: [] },
        { type: 'folder', name: 'Sem 5', children: [] },
        { type: 'folder', name: 'Sem 6', children: [] },
        { type: 'folder', name: 'Sem 7', children: [] },
        { type: 'folder', name: 'Sem 8', children: [] },
      ]
    },

    /* ── Year 1 (Common) ─────────────────── */
    {
      type: 'folder', name: 'Year 1',
      children: [
        {
          type: 'folder', name: 'Chemistry',
          children: [
            { type: 'file', name: 'Unit 1 — Atomic Structure & Bonding', meta: 'PDF', url: '#' },
            { type: 'file', name: 'Unit 2 — Thermodynamics & Kinetics', meta: 'PDF', url: '#' },
            { type: 'file', name: 'Unit 3 — Organic Chemistry', meta: 'PDF', url: '#' },
          ]
        },
        {
          type: 'folder', name: 'English Communication',
          children: [
            { type: 'file', name: 'Unit 1 — Grammar & Writing Skills', meta: 'PDF', url: '#' },
            { type: 'file', name: 'Unit 2 — Reading Comprehension', meta: 'PDF', url: '#' },
          ]
        },
        {
          type: 'folder', name: 'Mathematics I',
          children: [
            { type: 'file', name: 'Unit 1 — Sequences & Series', meta: 'PDF', url: '#' },
            { type: 'file', name: 'Unit 2 — Differential Calculus', meta: 'PDF', url: '#' },
            { type: 'file', name: 'Unit 3 — Integral Calculus', meta: 'PDF', url: '#' },
            { type: 'file', name: 'Unit 4 — Matrices & Linear Algebra', meta: 'PDF', url: '#' },
          ]
        },
        {
          type: 'folder', name: 'Workshop Practice',
          children: [
            { type: 'file', name: 'Unit 1 — Fitting & Carpentry', meta: 'PDF', url: '#' },
            { type: 'file', name: 'Unit 2 — Welding & Smithy', meta: 'PDF', url: '#' },
          ]
        },
      ]
    },

  ]
};

/* 
   SVG ICONS
   */

// Teal folder — notes theme
function folderSVG(empty = false) {
  const body = empty ? 'var(--text-muted)' : 'var(--accent-folder)';
  const tab = empty ? 'var(--text-secondary)' : 'var(--accent-folder-tab)';
  return `<svg viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 9C0 7.9 0.9 7 2 7H14L17 11H34C35.1 11 36 11.9 36 13V29C36 30.1 35.1 31 34 31H2C0.9 31 0 30.1 0 29V9Z" fill="${body}"/>
    <rect x="0" y="7" width="17" height="5" rx="1" fill="${tab}"/>
    ${empty ? '' : `
    <line x1="11" y1="17" x2="25" y2="17" stroke="white" stroke-width="1.4" stroke-linecap="round" opacity="0.75"/>
    <line x1="11" y1="21" x2="25" y2="21" stroke="white" stroke-width="1.4" stroke-linecap="round" opacity="0.75"/>
    <line x1="11" y1="25" x2="19" y2="25" stroke="white" stroke-width="1.4" stroke-linecap="round" opacity="0.75"/>`}
  </svg>`;
}

// PDF file icon — red
function pdfSVG() {
  return `<svg viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="32" height="36" rx="3" fill="var(--accent-red)"/>
    <path d="M20 0L32 12V36H20V0Z" fill="var(--accent-red-dim)"/>
    <polygon points="20,0 32,12 20,12" fill="rgba(255,255,255,0.4)"/>
    <text x="4" y="24" font-family="Manrope,sans-serif" font-size="7" font-weight="800" fill="white">PDF</text>
  </svg>`;
}

/* 
   STATE
   */

let currentPath = [];

/* 
   NAVIGATION
   */

function getNodeAtPath(path) {
  let node = DATA;
  for (const idx of path) {
    if (!node.children) return null;
    node = node.children[idx];
  }
  return node;
}

function navigateTo(path) {
  currentPath = [...path];
  render();
  document.querySelector('.explorer-container').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function navigateUp() {
  if (currentPath.length > 0) {
    currentPath.pop();
    render();
  }
}

function navigateToIndex(idx) {
  const node = getNodeAtPath(currentPath);
  if (!node || !node.children) return;
  const child = node.children[idx];
  if (child.type === 'folder') {
    navigateTo([...currentPath, idx]);
  } else if (child.type === 'file') {
    if (child.url && child.url !== '#') {
      openPdfModal(child.url, child.name);
    } else {
      showToast('Note not linked yet - add the URL in app.js data!');
    }
  }
}

function breadcrumbNavigateTo(path) {
  navigateTo(path);
}

/* 
   RENDER
   */

function render() {
  renderBreadcrumb();
  renderFileList();
  renderUploadSection();
}

function renderBreadcrumb() {
  const bc = document.getElementById('breadcrumb');
  const upBtn = document.getElementById('up-btn');

  const segments = [
    { label: 'notes', path: null },
    { label: 'btech', path: [] },
  ];

  let node = DATA;
  for (let i = 0; i < currentPath.length; i++) {
    node = node.children[currentPath[i]];
    segments.push({ label: node.name.toLowerCase(), path: currentPath.slice(0, i + 1) });
  }

  bc.innerHTML = segments.map((seg, i) => {
    const isLast = i === segments.length - 1;
    const sep = i < segments.length - 1 ? '<span class="breadcrumb-sep"> / </span>' : '';

    if (isLast) {
      return `<span class="breadcrumb-segment active">${seg.label}</span>${sep}`;
    } else if (seg.path === null) {
      return `<span class="breadcrumb-segment clickable" onclick="navigateTo([])">${seg.label}</span>${sep}`;
    } else {
      return `<span class="breadcrumb-segment clickable" onclick="breadcrumbNavigateTo(${JSON.stringify(seg.path)})">${seg.label}</span>${sep}`;
    }
  }).join('');

  upBtn.disabled = currentPath.length === 0;
  upBtn.style.opacity = currentPath.length === 0 ? '0.35' : '1';
  upBtn.style.cursor = currentPath.length === 0 ? 'not-allowed' : 'pointer';
}

function renderFileList() {
  const list = document.getElementById('file-list');
  const node = getNodeAtPath(currentPath);

  if (!node || !node.children || node.children.length === 0) {
    list.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">&#128194;</div>
        <p>No notes here yet.</p>
        <p style="margin-top:0.5rem;font-size:0.8rem;">Be the first to contribute!</p>
      </div>`;
    return;
  }

  list.innerHTML = node.children.map((child, idx) => {
    if (child.type === 'folder') {
      const empty = !child.children || child.children.length === 0;
      return `
        <div class="file-item" id="item-${idx}"
             onclick="navigateToIndex(${idx})" role="button" tabindex="0"
             onkeydown="if(event.key==='Enter'||event.key===' ') navigateToIndex(${idx})">
          <div class="icon-folder">${folderSVG(empty)}</div>
          <div class="file-info">
            <div class="file-name">${escapeHtml(child.name)}</div>
          </div>
          <span class="file-arrow">&rsaquo;</span>
        </div>`;
    } else {
      return `
        <div class="file-item" id="item-${idx}"
             onclick="navigateToIndex(${idx})" role="button" tabindex="0"
             onkeydown="if(event.key==='Enter'||event.key===' ') navigateToIndex(${idx})">
          <div class="icon-pdf">${pdfSVG()}</div>
          <div class="file-info">
            <div class="file-name">${escapeHtml(child.name)}</div>
            ${child.meta ? `<div class="file-meta">${escapeHtml(child.meta)}</div>` : ''}
          </div>
          <span class="file-arrow file-arrow-download">&darr;</span>
        </div>`;
    }
  }).join('');
}

function renderUploadSection() {
  const section = document.getElementById('upload-section');
  const pathLabel = document.getElementById('upload-path-label');
  const node = getNodeAtPath(currentPath);

  // Show "Upload Notes" when inside a subject folder (its contents are files)
  const hasFiles = node && node.children && node.children.some(c => c.type === 'file');

  if (hasFiles && currentPath.length > 0) {
    let n = DATA;
    const parts = [];
    for (const idx of currentPath) {
      n = n.children[idx];
      parts.push(n.name);
    }
    pathLabel.textContent = parts.slice(-1)[0].toLowerCase();
    section.style.display = 'block';
  } else {
    section.style.display = 'none';
  }
}

/* 
   MODALS
   */

function openContribute() {
  document.getElementById('contribute-modal-overlay').classList.add('active');
}
function openAbout() {
  document.getElementById('about-modal-overlay').classList.add('active');
}
function openUpload() {
  // Populate path & subject name from current navigation state
  let node = DATA;
  const parts = [];
  for (const idx of currentPath) {
    node = node.children[idx];
    parts.push(node.name);
  }
  const pathStr = '/notes/btech/' + parts.map(p => p.toLowerCase()).join('/') + '/';
  const subjectName = parts.length > 0 ? parts[parts.length - 1] : 'this subject';

  document.getElementById('upl-path-value').textContent   = pathStr;
  document.getElementById('upl-subject-name').textContent = subjectName;
  clearUploadForm();

  document.getElementById('upload-modal-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(type) {
  document.getElementById(`${type}-modal-overlay`).classList.remove('active');
  if (type === 'upload') document.body.style.overflow = '';
}

/* ── Upload form helpers ── */

function handleFileSelect(input) {
  const file = input.files[0];
  if (!file) return;
  showFileChosen(file.name);
  updateFilename();
}

function handleFileDrop(e) {
  e.preventDefault();
  document.getElementById('upl-dropzone').classList.remove('drag-over');
  const file = e.dataTransfer.files[0];
  if (!file || !file.name.endsWith('.pdf')) {
    showToast('Please drop a PDF file.'); return;
  }
  const input = document.getElementById('note-file');
  const dt = new DataTransfer();
  dt.items.add(file);
  input.files = dt.files;
  showFileChosen(file.name);
  updateFilename();
}

function showFileChosen(name) {
  const el = document.getElementById('upl-file-chosen');
  el.textContent = '\uD83D\uDCC4 ' + name;
  el.style.display = 'block';
  document.getElementById('upl-dropzone').classList.add('has-file');
}

function updateFilename() {
  const title = (document.getElementById('note-title').value || '').trim();
  const type  = document.querySelector('input[name="note-type"]:checked')?.value || 'handwritten';
  const year  = (document.getElementById('note-year')?.value || '').trim();

  const yearRow = document.getElementById('upl-year-row');
  if (yearRow) yearRow.style.display = (type === 'pyq') ? 'flex' : 'none';

  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .trim()
    .replace(/\s+/g, '_')
    .substring(0, 40);

  let filename = slug || 'file';
  if (type !== 'handwritten') filename += `_${type}`;
  if (type === 'pyq' && year) filename += `_${year}`;
  filename += '.pdf';

  document.getElementById('upl-filename-box').textContent = filename;
}

function clearUploadForm() {
  const nt = document.getElementById('note-title'); if (nt) nt.value = '';
  const cn = document.getElementById('contributor-name'); if (cn) cn.value = '';
  const cb = document.getElementById('contributor-batch'); if (cb) cb.value = '';
  const ny = document.getElementById('note-year'); if (ny) ny.value = '';
  const nf = document.getElementById('note-file'); if (nf) nf.value = '';
  const chosen = document.getElementById('upl-file-chosen');
  if (chosen) { chosen.style.display = 'none'; chosen.textContent = ''; }
  const dz = document.getElementById('upl-dropzone');
  if (dz) dz.classList.remove('has-file');
  const firstRadio = document.querySelector('input[name="note-type"]');
  if (firstRadio) firstRadio.checked = true;
  updateFilename();
}

function openPdfModal(url, name) {
  const overlay = document.getElementById('pdf-modal-overlay');
  const iframe  = document.getElementById('pdf-iframe');
  const title   = document.getElementById('pdf-modal-title');
  const dlBtn   = document.getElementById('pdf-download-btn');

  title.textContent   = name;
  iframe.src          = url;
  dlBtn.href          = url;
  dlBtn.setAttribute('download', name + '.pdf');

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closePdfModal() {
  const overlay = document.getElementById('pdf-modal-overlay');
  const iframe  = document.getElementById('pdf-iframe');
  overlay.classList.remove('active');
  // Clear src so the PDF stops loading / frees memory
  setTimeout(() => { iframe.src = ''; }, 300);
  document.body.style.overflow = '';
}

function submitUpload() {
  const title = document.getElementById('note-title').value.trim();
  const file  = document.getElementById('note-file').files[0];
  if (!file) { showToast('Please select a PDF file first.'); return; }
  if (!title) { showToast('Please enter a note title.'); return; }

  const btn = document.getElementById('upl-submit-btn');
  btn.disabled    = true;
  btn.textContent = 'Submitted ✓';
  btn.style.background = '#16a34a';

  setTimeout(() => {
    closeModal('upload');
    showToast('Thank you! Your notes will be reviewed and added. 🎉', 4000);
    btn.disabled    = false;
    btn.textContent = 'Upload Notes';
    btn.style.background = '';
  }, 1200);
}

/* 
   THEME TOGGLE
   */

function syncThemeIcon(theme) {
  const icon = document.getElementById('theme-icon');
  if (!icon) return;
  icon.textContent = theme === 'dark' ? '\u263D' : '\u2600';
}

function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  const nextTheme = isDark ? 'light' : 'dark';
  html.setAttribute('data-theme', nextTheme);
  syncThemeIcon(nextTheme);
  localStorage.setItem('theme', nextTheme);
}

function initTheme() {
  const html = document.documentElement;
  const saved = localStorage.getItem('theme');
  const theme = saved || html.getAttribute('data-theme') || 'light';
  html.setAttribute('data-theme', theme);
  syncThemeIcon(theme);
}

function renderFooterLastUpdated() {
  const target = document.getElementById('footer-last-updated');
  if (!target) return;

  const lastModified = document.lastModified ? new Date(document.lastModified) : new Date();
  if (Number.isNaN(lastModified.getTime())) {
    target.textContent = 'recently';
    return;
  }

  const formatted = new Intl.DateTimeFormat(undefined, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  }).format(lastModified);

  target.textContent = formatted;
}

/* 
   TOAST
   */

function showToast(msg, duration = 3000) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  toast.style.cssText = `
    position:fixed;bottom:1.5rem;left:50%;transform:translateX(-50%);
    background:var(--modal-bg);color:var(--text-primary);border:1px solid var(--border);
    padding:0.7rem 1.5rem;border-radius:6px;font-size:0.85rem;
    font-family:'Manrope',sans-serif;z-index:9999;
    box-shadow:0 4px 20px rgba(0,0,0,0.3);
    animation:fadeInUp 0.2s ease;white-space:nowrap;
    max-width:90vw;text-align:center;`;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

/* 
   HELPERS
   */

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* 
   KEYBOARD
   */

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.active').forEach(m => m.classList.remove('active'));
    closePdfModal();
    document.body.style.overflow = '';
  }
  if (e.key === 'Backspace' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName))
    navigateUp();
});

/* 
   INIT
   */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderFooterLastUpdated();
  render();
});
