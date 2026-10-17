# Process-WebHub

> RunProcess (macOS) 与 ProcessSH (Windows) 的交互式网页演示 —— 纯前端，无需构建工具。

---

## 简介

**Process-WebHub** 是一个静态多页面网站，用于在浏览器中托管两个原生桌面应用的演示：

- **RunProcess** —— 一款 macOS 上 Spotlight 风格的命令启动器。
- **ProcessSH** —— RunProcess 的 Windows 移植版，基于 WinUI 3 构建，具有系统托盘集成与原生 Mica/亚克力材质。

本项目的目标是在你的浏览器中直接展示这两个原生应用的 UI、交互和设计语言。你可以在不安装任何东西的情况下，拖动窗口、执行模拟命令、切换窗口材质以及自定义桌面壁纸。

---

## 核心功能

- **平台选择** —— 一个干净的苹果风格落地页，用于在 RunProcess 和 ProcessSH 之间进行选择。
- **原生 UI 还原** —— 使用纯 CSS 和 Web 字体（Segoe Fluent Icons）像素级复刻 macOS 红绿灯、菜单栏、Windows 任务栏、系统托盘以及亚克力悬浮面板。
- **窗口拖拽** —— 基于原生 Pointer Events 的全功能窗口拖拽（完美支持鼠标、触控板和触摸屏）。
- **窗口动态扩展** —— 窗口会根据命令输出内容平滑增加高度，与原生应用的表现完全一致。
- **自定义壁纸** —— 可选择 8 种内置渐变，或导入你自己的图片（存储在本地 `localStorage` 中）。
- **窗口材质** —— 模拟 RunProcess 的毛玻璃、液态玻璃，以及 ProcessSH 的 Mica、亚克力、纯色。
- **完整本地化** —— 通过运行时加载 JSON，完整支持英语、简体中文（zh-Hans）和繁体中文（zh-Hant）。
- **模拟执行** —— 预设的一组命令会返回带有 ANSI 格式的模拟输出。不会在你的机器上真正执行任何内容。

---

## 项目结构

```text
Process-WebHub/
├── index.html                 # 主页（平台选择）
├── runprocess/
│   └── index.html             # RunProcess (macOS) 演示与文档
├── processsh/
│   └── index.html             # ProcessSH (Windows) 演示与文档
└── assets/
    ├── css/
    │   ├── main.css           # 全局站点样式、变量、排版
    │   ├── demo.css           # 原生 UI 组件、窗口拖拽、布局
    │   └── liquid-glass.css   # RunProcess 专属液态玻璃效果
    ├── js/
    │   ├── i18n.js            # 本地化引擎（JSON 加载器）
    │   ├── demo-common.js     # 共享逻辑（壁纸、拖拽、菜单）
    │   ├── demo-runprocess.js # RunProcess 交互逻辑
    │   └── demo-processsh.js  # ProcessSH 交互逻辑
    └── lang/
        ├── en.json            # 英文文案
        ├── zh-Hans.json       # 简体中文文案
        └── zh-Hant.json       # 繁体中文文案
```

---

## 本地运行

因为站点通过 `fetch` 加载本地化 JSON 字符串，受 CORS 限制，你不能直接双击打开 `index.html` 文件。

1. **克隆仓库**
   ```bash
   git clone https://github.com/CaoHaoran-Dev/Process-WebHub.git
   cd Process-WebHub
   ```

2. **启动本地服务器**
   - 使用 Python（推荐）：
     ```bash
     python3 -m http.server 8000
     ```
   - 或者使用 Node.js（如果你安装了 `npx`）：
     ```bash
     npx serve .
     ```

3. **在浏览器中打开**
   访问 `http://localhost:8000`。

---

## 部署

本项目专为托管在 **GitHub Pages** 或任何静态托管服务而设计。

1. 将仓库推送到 GitHub。
2. 进入 **Settings → Pages**。
3. 在 **Build and deployment** 下，将 source 设置为 **Deploy from a branch**。
4. 选择 `main` 分支和 `/ (root)` 文件夹。
5. 保存。你的站点将发布在 `https://<你的用户名>.github.io/Process-WebHub/`。

> **注意：** 请确保根目录下存在 `.nojekyll` 文件，以防止 GitHub Pages 使用 Jekyll 处理站点（这可能会干扰 `assets/` 文件夹）。

---

## 已知限制

- **仅为模拟命令：** 不会执行真实的 shell 命令。所有输出均为硬编码的模拟数据。
- **Sudo / 管理员模式为模拟：** 密码输入框和 UAC 提示仅用于视觉展示。
- **壁纸大小限制：** 导入的图片以 Data URL 形式存储在 `localStorage` 中。浏览器通常将 `localStorage` 限制在 5 MB 左右。
- **液态玻璃折射效果：** RunProcess 中真正的折射效果需要 SVG 置换贴图，这仅在基于 Chromium 的浏览器中获得完整支持。Safari 和 Firefox 会自动降级为毛玻璃效果。

---

## 技术栈

- **HTML5 与 CSS3**（Flexbox、Grid、CSS 变量、`backdrop-filter`）
- **Vanilla JavaScript**（无框架、无打包工具）
- **Pointer Events** 用于统一的鼠标/触摸拖拽
- **Web 字体**（`Segoe Fluent Icons`、`SF Pro`、`Cascadia Mono`）

---

## 许可证

MIT © 2026 CaoHaoran-Dev