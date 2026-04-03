<p align="center">
  <img src="logo.svg" alt="NotesArchived Logo" width="120" height="120" />
</p>

# NotesArchived

<p align="center">
  <strong>A high-performance, lightweight digital repository for engineering academic resources.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/version-1.0.0-blue.svg" alt="Version">
  <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License">
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome">
  <img src="https://img.shields.io/badge/Maintained%3F-yes-emerald.svg" alt="Maintained">
</p>

---

## 📖 Overview

**NotesArchived** is a streamlined, data-driven web application designed to organize and distribute academic notes for B.Tech students. Built with a focus on speed and user experience, it provides a hierarchical, folder-based interface to navigate through various engineering branches—including CSE and Electronics Engineering—across multiple years and semesters.

The project eliminates the clutter of traditional file-sharing methods by providing a centralized, searchable hub where students can access Unit-wise PDF notes, previous year questions, and reference materials. The latest curriculum update expands the archive to include comprehensive resources for **1st and 2nd Year CSE**, covering subjects from **Mathematics** and **Programming Fundamentals (C)** to **Data Structures**, **Deep Learning**, and **Cyber Security**.

### Target Audience
- **Engineering Students**: Looking for organized, branch-specific study material.
- **Educators**: Seeking a platform to host and categorize course resources.
- **Contributors**: Developers wanting to expand the archive with more branches or features.

---
## ✨ Features

- **📂 Hierarchical Navigation**: Intuitive folder-tree structure mimicking a native OS file explorer.
- **📑 Tabbed Interface**: Seamlessly toggle between academic Notes and Previous Year Questions (PYQs) for better organization.
- **🔍 Global Search**: Real-time recursive search across all branches, semesters, and units.
- **📝 PYQ Repository**: Dedicated data structure and UI styling for accessing past examination papers.
- **🚀 Latest Uploads**: Dedicated section highlighting recently added materials (like Mathematics I) with "New" status badges.
- **📱 Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing.
- **🎨 Dynamic UI**: Custom-built SVG icons for folders and file types with theme-aware coloring and tabbed navigation styling.
- **⚡ Zero Framework Overhead**: Built with Vanilla JavaScript for near-instant load times and maximum compatibility.
- **📍 Breadcrumb Support**: Easy "up-one-level" navigation and path tracking.
- **📧 Smart Mail Integration**: Robust Gmail compose flow featuring mobile deep-link fallback and optimized desktop tab handling for seamless feedback.

---
## 🛠 Tech Stack

- **Frontend**: HTML5, CSS3 (Modern Flexbox/Grid, CSS Variables)
- **Logic**: Vanilla JavaScript (ES6+)
- **Data Management**: JSON-based state architecture
- **Icons**: Inline SVG Components (Custom rendered)
- **Typography**: Manrope (Google Fonts)

---

## 🏗 Architecture

The application follows a **Data-Driven UI** pattern. Instead of hardcoding HTML for every folder, the entire interface is generated dynamically from a central state object.

### Directory Structure
```text
├── index.html    # Main entry point and UI skeleton
├── style.css     # Design system and component styling
├── app.js        # Core logic: Data, State, and Rendering
├── logo.svg      # Project branding
└── README.md     # Documentation
```

### Data Flow
1. **The Store**: A recursive `DATA` object in `app.js` acts as the "Single Source of Truth."
2. **The Indexer**: `getAllFiles()` recursively crawls the data tree to create a flat index for search.
3. **The Renderer**: Functions like `renderFolder()` and `renderFile()` transform JSON nodes into DOM elements.
4. **The Router**: A simple `currentPath` array manages the user's depth within the archive.

---

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge).
- A local web server (optional, but recommended for development, e.g., Live Server for VS Code).

### Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/imaakarsh/NotesArchived.git
   ```
2. **Navigate to the directory**:
   ```bash
   cd NotesArchived
   ```
3. **Launch the application**:
   Simply open `index.html` in your browser.

---

## ⚙️ Configuration

To add new notes or branches, modify the `DATA` object in `app.js`.

### Adding a New File
Locate the appropriate `children` array and add a file object:
```javascript
{ 
  type: 'file', 
  name: 'Unit 5 — Advanced Topics', 
  meta: 'PDF', 
  url: 'https://drive.google.com/...', 
  isNew: true 
}
```

### Adding a New Folder
```javascript
{
  type: 'folder',
  name: 'New Subject',
  children: [ /* file objects here */ ]
}
```

---

## 🖥 Usage

1. **Browsing**: Click on folders (e.g., `CSE` -> `1st Year` -> `Chemistry` or `Physics`) to navigate through the academic hierarchy and view specific unit topics like *Water Technology* or *Relativity*.
2. **Tab Navigation**: Use the dedicated tabs to switch between the **Notes** library and the **PYQ** (Previous Year Questions) section.
3. **Searching**: Use the search bar at the top to find specific units or subjects instantly across the expanded curriculum.
4. **Downloading**: Click on any file entry (such as the newly added **Chemistry** or **Physics** notes) to open the document in a new tab via integrated Google Drive links.
5. **Breadcrumbs**: Use the "Back" button or the path indicators to navigate up the directory tree and switch between different years, semesters, or engineering disciplines.
6. **Feedback & Contact**: Use the integrated contact flow to send queries; the system intelligently handles transitions to the Gmail app on mobile devices or opens a dedicated compose tab on desktops.

---
## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. To simplify the process, we have transitioned from a GitHub-based workflow to direct submissions.

To contribute new notes or suggest improvements, please **submit your materials via email**. This streamlined flow allows for quicker updates and makes it easier for everyone to share resources without needing to manage forks or pull requests.

### Areas for Contribution:
- Adding missing notes for CE, ECE, and ME branches.
- Implementing a Dark Mode toggle.
- Adding support for more file types (PPT, DOCX, ZIP).
## 🛠 Troubleshooting

| Issue | Solution |
| :--- | :--- |
| **Links not opening** | Ensure the `url` in `app.js` is a valid link. Check your internet connection. |
| **Search not finding files** | Ensure the file is correctly nested within the `children` array of a folder. |
| **Icons not rendering** | Check if `style.css` is correctly linked; it contains the CSS variables used by the SVGs. |

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 💖 Acknowledgments

- Thanks to all the contributors who have shared their academic notes.
- UI inspired by modern file management systems.
- Icons designed specifically for the NotesArchived ecosystem.

---
<p align="center">Made with ❤️ for the student community.</p>