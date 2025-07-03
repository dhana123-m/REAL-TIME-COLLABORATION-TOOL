# 💻 Real-Time Collaboration Tool

This is a real-time collaborative code editor built using **Node.js**, **Express**, **WebSocket**, and **CodeMirror**. It allows multiple users to write and edit code simultaneously, similar to Google Docs but focused on coding.

---

## 🚀 Features

- Real-time text/code sync between multiple users
- WebSocket-based communication
- CodeMirror integration for syntax-highlighted code editing
- Supports JavaScript code editing (can be extended)
- Lightweight and runs entirely on your local machine

---

## 📁 Folder Structure

Real_tme_collaboration/
├── client/
│ ├── index.html # CodeMirror frontend UI
│ ├── style.css # Styling for the editor
│ └── app.js # WebSocket + CodeMirror logic
├── server/
│ └── index.js # Express + WebSocket backend
├── package.json # Node dependencies
└── README.md # Project documentation


---

## 🔧 Requirements

- Node.js (v18 or later)
- Web browser (Chrome recommended)
- Internet (to load CodeMirror via CDN)

---

## 🛠️ Setup Instructions

1. **Clone or Download this repository**

2. **Install dependencies**
   ```bash
   npm install
3. **Run the server**
   '''bash
   node server/index.js
4.**Open in browser**
   '''arduino
   http://localhost:3000

    Test It
Type in one tab — text should appear in another tab.

Edits are broadcast live using WebSocket.

Supports multiple users without login (anonymous).

Developed By
Dhanasekar M
Real-Time Collaboration Tool
July 2025
