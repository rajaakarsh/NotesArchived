import re

new_data = """const DATA = {
  type: 'folder',
  name: 'btech',
  children: [

    /* ── CSE  */
    {
      type: 'folder',
      name: 'CSE',
      children: [
        {
          type: 'folder', name: '1st Year',
          children: [
            {
              type: 'folder', name: 'Mathematics I',
              children: [
                { type: 'file', name: 'Unit 1 — Differential Calculus', meta: 'PDF', url: 'https://drive.google.com/file/d/1pRMTfdHPpG5WEw9qD5QQycmTKC-snf8y/view?usp=sharing', isNew: true },
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
          type: 'folder', name: '2nd Year',
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
          type: 'folder', name: '3rd Year',
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
          type: 'folder', name: '4th Year',
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
          type: 'folder', name: '1st Year',
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
        { type: 'folder', name: '2nd Year', children: [] },
        { type: 'folder', name: '3rd Year', children: [] },
        { type: 'folder', name: '4th Year', children: [] },
      ]
    },

    /* ── ECE ─────────────────────────────── */
    {
      type: 'folder', name: 'ECE',
      children: [
        {
          type: 'folder', name: '1st Year',
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
        { type: 'folder', name: '2nd Year', children: [] },
        { type: 'folder', name: '3rd Year', children: [] },
        { type: 'folder', name: '4th Year', children: [] },
      ]
    },

    /* ── ME ──────────────────────────────── */
    {
      type: 'folder', name: 'ME',
      children: [
        {
          type: 'folder', name: '1st Year',
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
        { type: 'folder', name: '2nd Year', children: [] },
        { type: 'folder', name: '3rd Year', children: [] },
        { type: 'folder', name: '4th Year', children: [] },
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
};"""

with open('app.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace the DATA block
text_new = re.sub(r'const DATA = ({.*?});(\s*)/\*', new_data + '\\2/*', text, flags=re.DOTALL)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(text_new)

print("Replacement successful.")
