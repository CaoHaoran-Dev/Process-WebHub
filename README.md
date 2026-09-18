# RunProcess · Web Demo

> A macOS-style command launcher web demo — pure frontend, simulated interactions, open source and free.

---

## Overview

This is the **web demo version** of [RunProcess](https://github.com/CaoHaoran-Dev/RunProcess).

The original RunProcess is a macOS native application — a Spotlight-style, translucent command launcher that wraps `/bin/zsh` in a beautiful interface.

This Web Demo recreates the UI and interaction logic using pure frontend technologies (HTML + CSS + JavaScript). It goes beyond a static mockup: it simulates a small desktop environment with a menu bar, a draggable window with working traffic lights, a Dock, and a customizable wallpaper.

You can:
- **Try it online** – No download or installation required
- **Explore the interactions** – Command input, history, Tab completion, Sudo mode, and more
- **Customize the desktop** – Wallpaper, Dock size, window material, language
- **Extend it** – Fully open source, freely modifiable and deployable

---

## Features

### Core Interactions
- **Command Input** – Multi-line input support with Shift+Enter
- **Simulated Execution** – 50+ preset commands with mock output
- **Tab Completion** – Smart completion from command database and history
- **Command History** – Browse previous commands with ↑ and ↓ arrow keys, persisted in localStorage
- **Sudo Mode** – Toggle to prepend `sudo` to commands, with a simulated password dialog
- **Drag & Drop** – Drag files into the input to auto-fill paths with escaping

### Desktop Environment
- **Menu Bar** – macOS-style menu (RunProcess · File · Edit · View · Window · Help) with working dropdowns
- **Working Traffic Lights** – Red closes the window, yellow minimizes to the Dock, green toggles maximize
- **Draggable Window** – Drag by the title bar; position is reset via the View menu
- **Dock** – Click to open/close RunProcess, or open Settings and About
- **Wallpaper** – 8 built-in gradients, plus import your own image from disk
- **Status Indicator** – Visual feedback for idle/running/done/error states

### Appearance
- **Two Window Materials** – Frosted Glass and Solid
- **Automatic Dark Mode** – Follows system preference, with a manual toggle in the View menu
- **Dock Size** – Small / Medium / Large

### Multi-Language Support
- **Bilingual** – Toggle between Chinese and English instantly
- **Persistent** – Language preference saved in localStorage

### Keyboard Shortcuts

Only shortcuts that browsers allow are listed. System-level shortcuts (like ⌘Q or ⌘W) cannot be intercepted by a web page and are therefore not implemented.

| Shortcut | Action |
|----------|--------|
| `Enter` | Execute command |
| `Shift+Enter` | New line |
| `Tab` | Auto-complete |
| `↑` / `↓` | History navigation |
| `Esc` | Blur input |

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
| **CSS3** | Frosted glass, dark mode, responsive layout |
| **Vanilla JavaScript** | All interaction logic (no framework dependencies) |
| **localStorage** | Settings, history, and wallpaper persistence |

---

## Known Limitations

- **Commands are simulated.** Nothing is executed on your machine. The output is preset mock data.
- **Sudo is simulated.** The password dialog accepts any input; no privilege escalation occurs.
- **Traffic lights are cosmetic.** Red hides the window, but the Dock icon remains. A web page cannot truly quit or close itself.
- **File drag-and-drop falls back to filename.** Browsers do not expose the full path of a dropped file for security reasons, so `files[0].path` is usually empty.
- **Wallpaper size limit.** Imported images are stored as Data URLs in localStorage, which has a typical quota of about 5 MB.

---

## Documentation

- [简体中文 README](Docs/zh-Hans/README.zh-Hans.md)
- [License](LICENSE.md)

---

## License

MIT © CaoHaoran-Dev
