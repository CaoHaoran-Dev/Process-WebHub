# RunProcess · Web Demo

> A macOS-style command launcher web demo — pure frontend, simulated interactions, open source and free.

---

## Overview

This is the **web demo version** of [RunProcess](https://github.com/CaoHaoran-Dev/RunProcess).

The original RunProcess is a macOS native application — a Spotlight-style, translucent command launcher that wraps `/bin/zsh` in a beautiful interface.

This Web Demo recreates the UI and interaction logic using pure frontend technologies (HTML + CSS + JavaScript), allowing you to:
- **Try it online** – No download or installation required
- **Explore the interactions** – Command input, history, Tab completion, Sudo mode, and more
- **Customize and extend** – Fully open source code, freely modifiable and deployable

---

## Features

### Core Interactions
- **Command Input** – Multi-line input support with Shift+Enter
- **Simulated Execution** – 50+ preset commands with mock output
- **Tab Completion** – Smart completion from command database and history
- **Command History** – Browse previous commands with ↑ and ↓ arrow keys
- **Sudo Mode** – Toggle to prepend `sudo` to commands (simulated)
- **Drag & Drop** – Drag files from Finder to auto-fill file paths with escaping

### macOS-Style UI
- **Translucent Interface** – `backdrop-filter` blur with automatic light/dark mode adaptation
- **Menu Bar** – Complete macOS-style menu (RunProcess · File · Edit · View · Go · Window · Help)
- **Title Bar** – Traffic light window controls + app icon
- **Window Dragging** – Drag the window by its title bar
- **Status Indicator** – Visual feedback for idle/running/done/error states

### Multi-Language Support
- **Bilingual** – Toggle between Chinese and English instantly
- **Persistent** – Language preference saved in localStorage

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Enter` | Execute command |
| `Shift+Enter` | New line |
| `Tab` | Auto-complete |
| `↑`/`↓` | History navigation |
| `⌘Q` | Quit (demo) |
| `⌘,` | Preferences (demo) |
| `⌘C`/`⌘V`/`⌘A` | Copy/Paste/Select All |
| `⌘W` | Close (demo) |
| `⌘N` | New Tab (demo) |
| `⌘⇧N` | New Window (demo) |
| `⌘M` | Minimize (demo) |
| `⌘⇧H`/`⌘⇧D`/`⌘⇧L` | Go to Home/Desktop/Downloads (demo) |

---

## Quick Start

### Try It Online

Visit the GitHub Pages demo:
[https://CaoHaoran-Dev.github.io/RunProcess-WebDemo/](https://CaoHaoran-Dev.github.io/RunProcess-WebDemo/index.html)

### Run Locally

1. **Clone the repository**
```bash
git clone https://github.com/CaoHaoran-Dev/RunProcess-WebDemo.git
cd RunProcess-WebDemo
```

2. **Open in browser**
```bash
# Option 1: Double-click index.html
# Option 2: Use VS Code Live Server
code .
# Right-click index.html → Open with Live Server
```

No build tools or dependencies required.

### Deploy to GitHub Pages

1. Fork this repository
2. Go to Settings → Pages → Branch select `main`
3. Visit `https://your-username.github.io/RunProcess-WebDemo/`

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Page structure |
| **CSS3** | Translucent effects, dark mode, responsive layout |
| **Vanilla JavaScript** | All interaction logic (no framework dependencies) |
| **[Puppertino](https://github.com/codedgar/Puppertino)** | macOS-style CSS component library |
| **localStorage** | History and language preference persistence |

---

## Documentation

- [简体中文 README](Docs/zh-Hans/README.zh-Hans.md)
- [License](LICENSE.md)
---

## License

MIT © CaoHaoran-Dev