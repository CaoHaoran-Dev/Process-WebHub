# RunProcess · Web Demo

> macOS 风格命令启动器的网页演示版 —— 纯前端，模拟交互，开源免费。

---

## 这是什么

这是 [RunProcess](https://github.com/CaoHaoran-Dev/RunProcess) 的 **网页演示版本**。

原版 RunProcess 是一个 macOS 原生应用 —— 一个 Spotlight 风格、毛玻璃界面的命令启动器，本质是给 `/bin/zsh` 套了一个漂亮的壳。

这个 Web Demo 用纯前端技术（HTML + CSS + JavaScript）复现了原版的 UI 和交互逻辑。它不只是一个静态模型：它模拟了一个小型桌面环境，包括菜单栏、可拖拽的窗口、真正能用的红绿灯、Dock，以及可自定义的壁纸。

你可以：
- **在线体验**：无需下载安装，打开浏览器即可感受 macOS 风格界面
- **了解交互**：命令输入、历史记录、Tab 补全、Sudo 模式等核心交互
- **自定义桌面**：壁纸、Dock 大小、窗口材质、语言
- **二次开发**：代码完全开源，可自由修改和部署

---

## 功能特性

### 核心交互
- **命令输入**：支持多行输入（Shift+Enter 换行）
- **模拟执行**：预设 50+ 常用命令的模拟输出
- **Tab 补全**：从命令库和历史记录中智能补全
- **历史记录**：↑/↓ 键浏览历史，localStorage 持久化
- **Sudo 模式**：勾选后弹出模拟密码框，命令前添加 `sudo`
- **拖拽文件**：拖文件到输入框自动填入路径（自动转义空格）

### 桌面环境
- **菜单栏**：macOS 风格菜单（RunProcess · 文件 · 编辑 · 显示 · 窗口 · 帮助），下拉菜单可交互
- **可用的红绿灯**：红色关闭窗口、黄色最小化到 Dock、绿色最大化/还原
- **可拖拽窗口**：按住标题栏拖动，可通过「显示」菜单重置窗口位置
- **Dock**：点击打开/关闭 RunProcess，或打开设置与关于
- **壁纸**：8 个内置渐变，也可从本地导入图片
- **状态指示器**：就绪/运行中/完成/错误 状态反馈

### 外观
- **两种窗口材质**：毛玻璃、纯色
- **自动深色模式**：跟随系统偏好，「显示」菜单里也可手动切换
- **Dock 大小**：小 / 中 / 大

### 多语言支持
- **中英双语**：一键切换，界面和命令输出同步翻译
- **持久化**：语言偏好保存在 localStorage 中

### 键盘快捷键

这里只列出浏览器允许拦截的快捷键。系统级快捷键（如 ⌘Q、⌘W）无法被网页拦截，因此没有实现。

| 快捷键 | 功能 |
|--------|------|
| `Enter` | 执行命令 |
| `Shift+Enter` | 换行 |
| `Tab` | 补全建议 |
| `↑` / `↓` | 历史命令导航 |
| `Esc` | 输入框失焦 |

---

## 快速开始

### 在线体验

访问 GitHub Pages：
[https://CaoHaoran-Dev.github.io/RunProcess-WebDemo/](https://CaoHaoran-Dev.github.io/RunProcess-WebDemo/index.html)

### 本地运行

1. **克隆仓库**
```bash
git clone https://github.com/CaoHaoran-Dev/RunProcess-WebDemo.git
cd RunProcess-WebDemo
```

2. **在浏览器中打开**
```bash
# 方式一：双击 index.html 用浏览器打开
# 方式二：使用 VS Code Live Server
code .
# 右键 index.html → Open with Live Server
```

不需要任何构建工具或依赖。

### 部署到 GitHub Pages

1. Fork 本仓库
2. 进入 Settings → Pages → Branch 选择 `main`
3. 访问 `https://你的用户名.github.io/RunProcess-WebDemo/`

---

## 技术栈

| 技术 | 用途 |
|------|------|
| **HTML5** | 页面结构 |
| **CSS3** | 毛玻璃效果、深色模式、响应式布局 |
| **Vanilla JavaScript** | 所有交互逻辑（无框架依赖） |
| **localStorage** | 设置、历史记录、壁纸持久化 |

---

## 已知限制

- **命令是模拟的。** 不会在你的机器上执行任何东西，输出是预设的假数据。
- **Sudo 是模拟的。** 密码框接受任意输入，不会真的提权。
- **红绿灯是外观级的。** 红色只是隐藏窗口，Dock 图标仍在。网页无法真正退出或关闭自己。
- **拖拽文件只能拿到文件名。** 出于安全考虑，浏览器不暴露拖入文件的完整路径，`files[0].path` 通常是空的。
- **壁纸有大小限制。** 导入的图片以 Data URL 存在 localStorage 里，配额通常约 5 MB。

---

## 文档

- [English README](../../README.md)
- [License](LICENSE.zh-Hans.md)

---

## 许可证

MIT © CaoHaoran-Dev
