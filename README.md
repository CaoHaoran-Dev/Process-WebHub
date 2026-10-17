# Process-WebHub

> Interactive web demonstrations for RunProcess (macOS) and ProcessSH (Windows) — pure frontend, no build tools required.

---

## Overview

**Process-WebHub** is a static, multi-page website that hosts browser-based demos for two native desktop applications:

- **RunProcess** – A Spotlight-style command launcher for macOS.
- **ProcessSH** – A Windows port of RunProcess built with WinUI 3, featuring system tray integration and native Mica/Acrylic materials.

The goal of this project is to showcase the UI, interactions, and design language of both native apps directly in your browser. You can drag windows, execute simulated commands, change window materials, and customize the desktop wallpaper — all without installing anything.

---

## Key Features

- **Platform Selection** – A clean, Apple-style landing page to choose between RunProcess and ProcessSH.
- **Native UI Recreation** – Pixel-perfect replications of macOS traffic lights, menu bars, Windows taskbar, system tray, and acrylic flyouts using pure CSS and web fonts (Segoe Fluent Icons).
- **Window Dragging** – Fully draggable windows using native Pointer Events (supports mouse, trackpad, and touch).
- **Dynamic Window Expansion** – Windows smoothly expand in height to accommodate command output, just like the native apps.
- **Customizable Wallpapers** – Choose from 8 built-in gradients, or import your own image (saved locally in `localStorage`).
- **Window Materials** – Simulate Frosted Glass, Liquid Glass (RunProcess) and Mica, Acrylic, Solid (ProcessSH).
- **Full Localization** – Complete support for English, Simplified Chinese (zh-Hans), and Traditional Chinese (zh-Hant) via runtime JSON loading.
- **Simulated Execution** – A set of preset commands returns mock output with ANSI-like formatting. Nothing is executed on your machine.

---

## Project Structure

```text
Process-WebHub/
├── index.html                 # Homepage (Platform selection)
├── runprocess/
│   └── index.html             # RunProcess (macOS) demo & documentation
├── processsh/
│   └── index.html             # ProcessSH (Windows) demo & documentation
└── assets/
    ├── css/
    │   ├── main.css           # Global site styles, tokens, typography
    │   ├── demo.css           # Native UI components, window dragging, layout
    │   └── liquid-glass.css   # Liquid Glass specific effects for RunProcess
    ├── js/
    │   ├── i18n.js            # Localization engine (JSON loader)
    │   ├── demo-common.js     # Shared logic (wallpaper, dragging, menus)
    │   ├── demo-runprocess.js # RunProcess interaction logic
    │   └── demo-processsh.js  # ProcessSH interaction logic
    └── lang/
        ├── en.json            # English strings
        ├── zh-Hans.json       # Simplified Chinese strings
        └── zh-Hant.json       # Traditional Chinese strings
```

---

## How to Run Locally

Because the site loads localization strings via `fetch` (JSON files), you cannot simply open `index.html` directly from your file system due to CORS restrictions.

1. **Clone the repository**
   ```bash
   git clone https://github.com/CaoHaoran-Dev/Process-WebHub.git
   cd Process-WebHub
   ```

2. **Start a local web server**
   - Using Python (recommended):
     ```bash
     python3 -m http.server 8000
     ```
   - Or using Node.js (if you have `npx` installed):
     ```bash
     npx serve .
     ```

3. **Open in browser**
   Navigate to `http://localhost:8000`.

---

## Deployment

This site is designed to be hosted on **GitHub Pages** or any static hosting service.

1. Push the repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set the source to **Deploy from a branch**.
4. Select the `main` branch and the `/ (root)` folder.
5. Save. Your site will be live at `https://<your-username>.github.io/Process-WebHub/`.

> **Note:** Ensure the `.nojekyll` file is present in the root directory to prevent GitHub Pages from processing the site with Jekyll, which might interfere with `assets/` folders.

---

## Known Limitations

- **Simulated Commands Only:** No actual shell commands are executed. All output is hardcoded mock data.
- **Sudo / Admin Mode is Simulated:** The password dialog and UAC prompts are visual only.
- **Wallpaper Size Limit:** Imported images are stored as Data URLs in `localStorage`. Browsers typically limit `localStorage` to around 5 MB.
- **Liquid Glass Refraction:** The true refraction effect in RunProcess requires SVG displacement maps, which are fully supported only in Chromium-based browsers. Safari and Firefox gracefully degrade to a frosted glass effect.

---

## Tech Stack

- **HTML5 & CSS3** (Flexbox, Grid, CSS Variables, `backdrop-filter`)
- **Vanilla JavaScript** (No frameworks, no bundlers)
- **Pointer Events** for unified mouse/touch dragging
- **Web Fonts** (`Segoe Fluent Icons`, `SF Pro`, `Cascadia Mono`)

---

## License

MIT © 2026 CaoHaoran-Dev