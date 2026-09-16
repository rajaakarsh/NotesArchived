/**
 * notes.js — Single source of truth for the Notes archive.
 *
 * Shape: a recursive folder tree.
 *   folder = { type:'folder', name, children:[] }
 *   file   = { type:'file', name, meta, url, isNew? }
 *
 * Hierarchy: btech > Branch > Year > Subject > Unit (file)
 * `url` of '#' means "not linked yet" — the UI handles this gracefully.
 *
 * To add material, edit this tree (or regenerate via replace_data.py).
 */
export const DATA = {
  type: 'folder',
  name: 'btech',
  children: [

    /* ── CSE  */
    {
      type: 'folder',
      name: 'CSE',
      children: [
        /* ── Year 1 (Common) ─────────────────── */
        {
          type: 'folder', name: '1st Year (Common)',
          children: [
            {
              type: 'folder', name: '1st Year',
              children: [
                {
                  type: 'folder', name: 'Mathematics I',
                  children: [
                    { type: 'file', name: 'Unit 1 — Matrices & Determinants', meta: 'PDF', url: "#", isNew: true },
                    { type: 'file', name: 'Unit 2 — Integral Calculus', meta: 'PDF', url: '#' },
                    { type: 'file', name: 'Unit 3 — Calculaus 2nd', meta: 'PDF', url: '#' },
                    { type: 'file', name: 'Unit 4 — Differential Equations', meta: 'PDF', url: '#' },
                  ]
                },
                {
                  type: 'folder', name: 'Mathsmatics 2nd',
                  children: [
                    { type: 'file', name: 'Unit 1: Ordinary Differential Equations', meta: 'PDF', url: '#' },
                    { type: 'file', name: 'Unit 2: Series Solution & Special Functions', meta: 'PDF', url: '#' },
                    { type: 'file', name: 'Unit 3: Sequences & Series', meta: 'PDF', url: '#' },
                    { type: 'file', name: 'Unit 4: Complex Variable – I', meta: 'PDF', url: '#' },
                    { type: 'file', name: 'Unit 5: Complex Variable – II', meta: 'PDF', url: '#' }
                  ]
                },
                {
                  type: 'folder', name: 'Chemistry',
                  children: [
                    { type: 'file', name: 'Unit 1 — MOLECULAR STUCTURE AND SPECTROSCOPIC TECHNIQUES', meta: 'PDF', url: 'https://drive.google.com/file/d/1mifbCbm3ivKc1NYxbSNbsHOt9axJpv3Q/view?usp=drive_link' },
                    { type: 'file', name: 'Unit 2 — WATER TECHNOLOGY', meta: 'PDF', url: 'https://drive.google.com/file/d/1BSdW78md9gpfQ4XtZci6nVtkuEisz-K_/view?usp=drive_link' },
                    { type: 'file', name: 'Unit 3 — POLYMERS', meta: 'PDF', url: 'https://drive.google.com/file/d/1BSdW78md9gpfQ4XtZci6nVtkuEisz-K_/view?usp=drive_link' },
                    { type: 'file', name: 'Unit 4 — FUELS AND RENEWABLE ENERGY', meta: 'PDF', url: 'https://drive.google.com/file/d/1zWmhnvyv3fZV0cPVlX0ICGvsa6l7UXE-/view?usp=sharing' },
                    { type: 'file', name: 'Unit 5 — ELECTROCHEMISTRY AND APPLICATIONS', meta: 'PDF', url: 'https://drive.google.com/file/d/1MpwbIy__OWAPs31X8VS5ECrnIDz0ymRM/view?usp=sharing' },
                  ]
                },
                {
                  type: 'folder', name: 'Physics',
                  children: [
                    { type: 'file', name: 'Unit 1: Interfrence And Diffraction', meta: 'PDF', url: 'https://drive.google.com/file/d/1C0hFLiPsXU6f23UlZ_Ig8_tepYC9z9FG/view?usp=sharing' },
                    { type: 'file', name: 'Unit 2: Polarization', meta: 'PDF', url: 'https://drive.google.com/file/d/1w7numNH5lZif629JWlRblxyRQS9IzQO6/view?usp=sharing' },
                    { type: 'file', name: 'Unit 3: Relativity', meta: 'PDF', url: 'https://drive.google.com/file/d/1LsJlarad5iE16kJCP8atioT8Co9Uqkf6/view?usp=sharing' },
                    { type: 'file', name: 'Unit 4: Superconductivity', meta: 'PDF', url: 'https://drive.google.com/file/d/1LsJlarad5iE16kJCP8atioT8Co9Uqkf6/view?usp=sharing' },
                    { type: 'file', name: 'Unit 5: Quantum Mechanics', meta: 'PDF', url: 'https://drive.google.com/file/d/1k66bgPDtFWt8B2ugHAuHnrIki4DMumsZ/view?usp=sharing' },
                  ]
                },
                {
                  type: 'folder', name: 'Electrical Engineering',
                  children: [
                    { type: 'file', name: 'Unit 1 — Mechanics', meta: 'PDF', url: '#' },
                    { type: 'file', name: 'Unit 2 — Waves & Optics', meta: 'PDF', url: '#' },
                    { type: 'file', name: 'Unit 3 — Electromagnetism', meta: 'PDF', url: '#' },
                  ]
                },
                {
                  type: 'folder', name: 'Electronics Engineering',
                  children: [
                    { type: 'file', name: 'Unit 1: Number Systems & Boolean Algebra:', meta: 'PDF', url: 'https://drive.google.com/file/d/1WHCokUQeLmhrkZMuvkW2R_ZPcsnGeP0x/view?usp=drive_link' },
                    { type: 'file', name: 'Unit 2: Basics of Semiconductor Devices: P-N junction diode and BJT', meta: 'PDF', url: '#' },
                    { type: 'file', name: 'Unit 3: AC to DC Conversion and Introduction of Operational amplifier:', meta: 'PDF', url: '#' },
                  ]
                },
                {
                  type: 'folder', name: 'CS 2',
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
                    { type: 'file', name: 'Unit 1 — Functional Grammer', meta: 'PDF', url: '#' },
                    { type: 'file', name: 'Unit 2 — Creative Writing Skill', meta: 'PDF', url: '#' },
                    { type: 'file', name: 'Unit 3 — Reading Skill', meta: 'PDF', url: '#' },
                    { type: 'file', name: 'Unit 4 — Presentation Skill', meta: 'PDF', url: '#' },
                    { type: 'file', name: 'Unit 5 — Project Evaluation', meta: 'PDF', url: '#' },
                  ]
                },
              ]
            },
          ]
        },
        {
          type: 'folder', name: '1st Year',
          children: [
            {
              type: 'folder', name: 'Mathematics I',
              children: [
                { type: 'file', name: 'Unit 1 — Matrices & Determinants', meta: 'PDF', url: "#", isNew: true },
                { type: 'file', name: 'Unit 2 — Integral Calculus', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 3 — Calculaus 2nd', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 4 — Differential Equations', meta: 'PDF', url: '#' },
              ]
            },
            {
              type: 'folder', name: 'Mathsmatics 2nd',
              children: [
                { type: 'file', name: 'Unit 1: Ordinary Differential Equations', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 2: Series Solution & Special Functions', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 3: Sequences & Series', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 4: Complex Variable – I', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 5: Complex Variable – II', meta: 'PDF', url: '#' }
              ]
            },

            {
              type: 'folder', name: 'Chemistry',
              children: [
                { type: 'file', name: 'Unit 1 — MOLECULAR STUCTURE AND SPECTROSCOPIC TECHNIQUES', meta: 'PDF', url: 'https://drive.google.com/file/d/1mifbCbm3ivKc1NYxbSNbsHOt9axJpv3Q/view?usp=drive_link' },
                { type: 'file', name: 'Unit 2 — WATER TECHNOLOGY', meta: 'PDF', url: 'https://drive.google.com/file/d/1BSdW78md9gpfQ4XtZci6nVtkuEisz-K_/view?usp=drive_link' },
                { type: 'file', name: 'Unit 3 — POLYMERS', meta: 'PDF', url: 'https://drive.google.com/file/d/1BSdW78md9gpfQ4XtZci6nVtkuEisz-K_/view?usp=drive_link' },
                { type: 'file', name: 'Unit 4 — FUELS AND RENEWABLE ENERGY', meta: 'PDF', url: 'https://drive.google.com/file/d/1zWmhnvyv3fZV0cPVlX0ICGvsa6l7UXE-/view?usp=sharing' },
                { type: 'file', name: 'Unit 5 — ELECTROCHEMISTRY AND APPLICATIONS', meta: 'PDF', url: 'https://drive.google.com/file/d/1MpwbIy__OWAPs31X8VS5ECrnIDz0ymRM/view?usp=sharing' },
              ]
            },
            {
              type: 'folder', name: 'Physics',
              children: [
                { type: 'file', name: 'Unit 1: Interfrence And Diffraction', meta: 'PDF', url: 'https://drive.google.com/file/d/1C0hFLiPsXU6f23UlZ_Ig8_tepYC9z9FG/view?usp=sharing' },
                { type: 'file', name: 'Unit 2: Polarization', meta: 'PDF', url: 'https://drive.google.com/file/d/1w7numNH5lZif629JWlRblxyRQS9IzQO6/view?usp=sharing' },
                { type: 'file', name: 'Unit 3: Relativity', meta: 'PDF', url: 'https://drive.google.com/file/d/1LsJlarad5iE16kJCP8atioT8Co9Uqkf6/view?usp=sharing' },
                { type: 'file', name: 'Unit 4: Superconductivity', meta: 'PDF', url: 'https://drive.google.com/file/d/1LsJlarad5iE16kJCP8atioT8Co9Uqkf6/view?usp=sharing' },
                { type: 'file', name: 'Unit 5: Quantum Mechanics', meta: 'PDF', url: 'https://drive.google.com/file/d/1k66bgPDtFWt8B2ugHAuHnrIki4DMumsZ/view?usp=sharing' },
              ]
            },
            {
              type: 'folder', name: 'Electrical Engineering',
              children: [
                { type: 'file', name: 'Unit 1 — Mechanics', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 2 — Waves & Optics', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 3 — Electromagnetism', meta: 'PDF', url: '#' },
              ]
            },
            {
              type: 'folder', name: 'Electronics Engineering',
              children: [
                { type: 'file', name: 'Unit 1: Number Systems & Boolean Algebra:', meta: 'PDF', url: 'https://drive.google.com/file/d/1WHCokUQeLmhrkZMuvkW2R_ZPcsnGeP0x/view?usp=drive_link' },
                { type: 'file', name: 'Unit 2: Basics of Semiconductor Devices: P-N junction diode and BJT', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 3: AC to DC Conversion and Introduction of Operational amplifier:', meta: 'PDF', url: '#' },
              ]
            },
            {
              type: 'folder', name: 'CS 2',
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
                { type: 'file', name: 'Unit 1 — Functional Grammer', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 2 — Creative Writing Skill', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 3 — Reading Skill', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 4 — Presentation Skill', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 5 — Project Evaluation', meta: 'PDF', url: '#' },
              ]
            },
          ]
        },
                {
          type: 'folder', name: '2nd Year',
          children: [
            {
              type: 'folder', name: '3rd Semester',
              children: [
                {
                  type: 'folder',
                  name: 'Digital Electronics',
                  isSubjectView: true,
                  code: 'TCS-308',
                  year: '2nd Year',
                  semester: '3rd Semester',
                  branch: 'CSE',
                  subtitle: '3rd Semester • B.Tech CSE • 2nd Year',
                  description: 'Complete chapter-wise handwritten notes covering Boolean algebra, logic gates, K-maps, combinational circuits, adders & subtractors, multiplexers & demultiplexers, decoders & encoders, magnitude comparators, code converters, digital multipliers, and sequential flip-flops.',
                  children: [
                    {
                      id: 'de-ch01',
                      number: 1,
                      type: 'file',
                      name: 'Chapter 01 — Boolean Algebra & Logic Gates',
                      title: 'Boolean Algebra & Logic Gates',
                      desc: 'Basic logic gates, universal gates (NAND, NOR), AND/OR implementations, Boolean expressions, SOP, POS, canonical forms, minterms & maxterms.',
                      noteType: 'Handwritten',
                      meta: 'Handwritten · 2 Pages',
                      pages: 2,
                      pageRange: 'Pages 1–2',
                      available: true,
                      url: 'notes/btech/2nd-year/3rd-semester/digital-electronics/chapter-01-boolean-algebra/notes.pdf',
                      slug: 'chapter-01-boolean-algebra',
                      route: '/notes/btech/2nd-year/3rd-semester/digital-electronics/chapter-01/',
                      tags: ['digital electronics', 'boolean algebra', 'logic gates', 'nand', 'nor', 'universal gates', 'sop', 'pos', 'canonical', 'minterms', 'maxterms']
                    },
                    {
                      id: 'de-ch02',
                      number: 2,
                      type: 'file',
                      name: 'Chapter 02 — K-Maps & Boolean Function Minimization',
                      title: 'K-Maps & Boolean Function Minimization',
                      desc: 'K-map basics, 2-variable, 3-variable, 4-variable, and 5-variable K-maps, adjacent cells, grouping, prime implicants, essential prime implicants, don\'t-care conditions, SOP/POS minimization, consensus theorem.',
                      noteType: 'Handwritten',
                      meta: 'Handwritten · 10 Pages',
                      pages: 10,
                      pageRange: 'Pages 3–12',
                      available: true,
                      url: 'notes/btech/2nd-year/3rd-semester/digital-electronics/chapter-02-kmaps/notes.pdf',
                      slug: 'chapter-02-kmaps',
                      route: '/notes/btech/2nd-year/3rd-semester/digital-electronics/chapter-02/',
                      tags: ['digital electronics', 'k-map', 'kmap', 'k-maps', 'boolean function minimization', 'prime implicants', 'essential prime implicants', 'epi', 'dont care', "don't care", 'consensus theorem', 'sop minimization', 'pos minimization']
                    },
                    {
                      id: 'de-ch03',
                      number: 3,
                      type: 'file',
                      name: 'Chapter 03 — Combinational Circuit Design',
                      title: 'Combinational Circuit Design',
                      desc: 'Design procedure of combinational circuits, specification to truth table, Boolean function minimization using K-maps, and logic gate implementation (AND-OR, SOP/POS).',
                      noteType: 'Handwritten',
                      meta: 'Handwritten · 3 Pages',
                      pages: 3,
                      pageRange: 'Pages 13–15',
                      available: true,
                      url: 'notes/btech/2nd-year/3rd-semester/digital-electronics/chapter-03-combinational-circuits/notes.pdf',
                      slug: 'chapter-03-combinational-circuits',
                      route: '/notes/btech/2nd-year/3rd-semester/digital-electronics/chapter-03/',
                      tags: ['digital electronics', 'combinational circuit design', 'combinational circuits', 'combinational circuit', 'truth tables', 'design procedure', 'logic gate implementation']
                    },
                    {
                      id: 'de-ch04',
                      number: 4,
                      type: 'file',
                      name: 'Chapter 04 — Adders & Subtractors',
                      title: 'Adders & Subtractors',
                      desc: 'Half Adder, Full Adder, Half Subtractor, Full Subtractor, NAND-only implementations, parallel adders, n-bit parallel adder, and BCD adder with correction logic (+6).',
                      noteType: 'Handwritten',
                      meta: 'Handwritten · 8 Pages',
                      pages: 8,
                      pageRange: 'Pages 16–23',
                      available: true,
                      url: 'notes/btech/2nd-year/3rd-semester/digital-electronics/chapter-04-adders-subtractors/notes.pdf',
                      slug: 'chapter-04-adders-subtractors',
                      route: '/notes/btech/2nd-year/3rd-semester/digital-electronics/chapter-04/',
                      tags: ['digital electronics', 'half adder', 'full adder', 'half subtractor', 'full subtractor', 'adders', 'subtractors', 'n-bit parallel adder', 'parallel adder', 'bcd adder', 'decimal adder', 'nand adder']
                    },
                    {
                      id: 'de-ch05',
                      number: 5,
                      type: 'file',
                      name: 'Chapter 05 — Multiplexers & Demultiplexers',
                      title: 'Multiplexers & Demultiplexers',
                      desc: 'Multiplexer basics (data selector), 4:1 MUX, 8:1 MUX, 16:1 MUX, 32:1 MUX, Boolean function implementation using MUX, MUX tree cascading, Demultiplexer (DEMUX) basics, and function implementation using DEMUX.',
                      noteType: 'Handwritten',
                      meta: 'Handwritten · 20 Pages',
                      pages: 20,
                      pageRange: 'Pages 24–43',
                      available: true,
                      url: 'notes/btech/2nd-year/3rd-semester/digital-electronics/chapter-05-multiplexers-demultiplexers/notes.pdf',
                      slug: 'chapter-05-multiplexers-demultiplexers',
                      route: '/notes/btech/2nd-year/3rd-semester/digital-electronics/chapter-05/',
                      tags: ['digital electronics', 'multiplexer', 'demultiplexer', 'mux', 'demux', '4:1 mux', '8:1 mux', '16:1 mux', '32:1 mux', 'mux tree', 'data selector', 'data distributor', 'mux cascading']
                    },
                    {
                      id: 'de-ch06',
                      number: 6,
                      type: 'file',
                      name: 'Chapter 06 — Decoders & Encoders',
                      title: 'Decoders & Encoders',
                      desc: 'Decoder basics, 2:4 decoder, 3:8 decoder, active-high decoder, active-low decoder, decoder tree cascading, Encoder basics, 8:3 encoder, priority encoder, and transmitter-receiver applications.',
                      noteType: 'Handwritten',
                      meta: 'Handwritten · 9 Pages',
                      pages: 9,
                      pageRange: 'Pages 44–52',
                      available: true,
                      url: 'notes/btech/2nd-year/3rd-semester/digital-electronics/chapter-06-decoders-encoders/notes.pdf',
                      slug: 'chapter-06-decoders-encoders',
                      route: '/notes/btech/2nd-year/3rd-semester/digital-electronics/chapter-06/',
                      tags: ['digital electronics', 'decoder', 'encoder', 'decoders', 'encoders', '2:4 decoder', '3:8 decoder', 'active high', 'active low', 'priority encoder', 'cascading decoder']
                    },
                    {
                      id: 'de-ch07',
                      number: 7,
                      type: 'file',
                      name: 'Chapter 07 — Magnitude Comparators',
                      title: 'Magnitude Comparators',
                      desc: '1-bit magnitude comparator (A > B, A = B, A < B) using NOR/NAND gates, 2-bit magnitude comparator, Boolean expressions, K-map minimization, and logic implementation.',
                      noteType: 'Handwritten',
                      meta: 'Handwritten · 3 Pages',
                      pages: 3,
                      pageRange: 'Pages 53–55',
                      available: true,
                      url: 'notes/btech/2nd-year/3rd-semester/digital-electronics/chapter-07-magnitude-comparator/notes.pdf',
                      slug: 'chapter-07-magnitude-comparator',
                      route: '/notes/btech/2nd-year/3rd-semester/digital-electronics/chapter-07/',
                      tags: ['digital electronics', 'magnitude comparator', 'comparator', '1-bit comparator', '2-bit comparator', 'a > b', 'a = b', 'a < b', 'amplitude comparator']
                    },
                    {
                      id: 'de-ch08',
                      number: 8,
                      type: 'file',
                      name: 'Chapter 08 — Code Converters',
                      title: 'Code Converters',
                      desc: 'Code converter principles, Binary to Gray code, Gray to Binary code, BCD to Excess-3 (XS-3), Excess-3 to BCD, truth tables, K-map minimization, and logic gate implementation.',
                      noteType: 'Handwritten',
                      meta: 'Handwritten · 5 Pages',
                      pages: 5,
                      pageRange: 'Pages 56–60',
                      available: true,
                      url: 'notes/btech/2nd-year/3rd-semester/digital-electronics/chapter-08-code-converters/notes.pdf',
                      slug: 'chapter-08-code-converters',
                      route: '/notes/btech/2nd-year/3rd-semester/digital-electronics/chapter-08/',
                      tags: ['digital electronics', 'code converter', 'code converters', 'binary to gray', 'gray to binary', 'bcd to excess-3', 'excess-3 to bcd', 'bcd', 'excess-3', 'xs-3', 'gray code']
                    },
                    {
                      id: 'de-ch09',
                      number: 9,
                      type: 'file',
                      name: 'Chapter 09 — Digital Multipliers',
                      title: 'Digital Multipliers',
                      desc: 'Binary multiplication fundamentals, 2-bit by 2-bit multiplier design, 4-bit by 3-bit multiplier, partial products generation, and adder-based multiplier circuit implementation.',
                      noteType: 'Handwritten',
                      meta: 'Handwritten · 2 Pages',
                      pages: 2,
                      pageRange: 'Pages 61–62',
                      available: true,
                      url: 'notes/btech/2nd-year/3rd-semester/digital-electronics/chapter-09-digital-multipliers/notes.pdf',
                      slug: 'chapter-09-digital-multipliers',
                      route: '/notes/btech/2nd-year/3rd-semester/digital-electronics/chapter-09/',
                      tags: ['digital electronics', 'multiplier', 'digital multiplier', 'binary multiplier', 'binary multiplication', '2-bit multiplier', '4-bit multiplier', 'partial products']
                    },
                    {
                      id: 'de-ch10',
                      number: 10,
                      type: 'file',
                      name: 'Chapter 10 — Sequential Circuits & Flip-Flops',
                      title: 'Sequential Circuits & Flip-Flops',
                      desc: 'Sequential circuit fundamentals with feedback, latches vs flip-flops, R-S latch, NAND-based S-R latch, S-R flip-flop, D flip-flop, J-K flip-flop, T flip-flop, characteristic tables, characteristic equations, and toggle/invalid conditions.',
                      noteType: 'Handwritten',
                      meta: 'Handwritten · 10 Pages',
                      pages: 10,
                      pageRange: 'Pages 63–72',
                      available: true,
                      url: 'notes/btech/2nd-year/3rd-semester/digital-electronics/chapter-10-sequential-circuits-flip-flops/notes.pdf',
                      slug: 'chapter-10-sequential-circuits-flip-flops',
                      route: '/notes/btech/2nd-year/3rd-semester/digital-electronics/chapter-10/',
                      tags: ['digital electronics', 'sequential circuit', 'sequential circuits', 'latch', 'latches', 'flip-flop', 'flip flop', 'flip-flops', 'sr flip-flop', 'sr latch', 'd flip-flop', 'jk flip-flop', 't flip-flop', 'characteristic table', 'characteristic equation', 'toggle condition']
                    }
                  ]
                },
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
              ]
            },
            {
              type: 'folder', name: '4th Semester',
              children: [
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
                {
                  type: 'folder', name: 'Deep Learning',
                  children: [
                    { type: 'file', name: 'Unit 1 — Neural Network Basics', meta: 'PDF', url: '#' },
                    { type: 'file', name: 'Unit 2 — CNN Architecture', meta: 'PDF', url: '#' },
                    { type: 'file', name: 'Unit 3 — RNN & LSTM', meta: 'PDF', url: '#' },
                    { type: 'file', name: 'Unit 4 — Transfer Learning', meta: 'PDF', url: '#' },
                  ]
                },
              ]
            }
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
                { type: 'file', name: 'Unit 1: Number Systems & Boolean Algebra:', meta: 'PDF', url: 'https://drive.google.com/file/d/1WHCokUQeLmhrkZMuvkW2R_ZPcsnGeP0x/view?usp=drive_link' },
                { type: 'file', name: 'Unit 2: Basics of Semiconductor Devices: P-N junction diode and BJT', meta: 'PDF', url: '#' },
                { type: 'file', name: 'Unit 3: AC to DC Conversion and Introduction of Operational amplifier:', meta: 'PDF', url: '#' },
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


  ]
};

export default DATA;
