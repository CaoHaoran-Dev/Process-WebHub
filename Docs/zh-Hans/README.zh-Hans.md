# RunProcess · Web Demo

> macOS 风格命令启动器的网页演示版 —— 纯前端，模拟交互，开源免费。

---

## 这是什么

这是 [RunProcess](https://github.com/CaoHaoran-Dev/RunProcess) 的 **网页演示版本**。

原版 RunProcess 是一个 macOS 原生应用 —— 一个 Spotlight 风格、毛玻璃界面的命令启动器，本质是给 `/bin/zsh` 套了一个漂亮的壳。

这个 Web Demo 用纯前端技术（HTML + CSS + JavaScript）复现了原版的 UI 和交互逻辑，方便你：
- **在线体验**：无需下载安装，打开浏览器即可感受 macOS 风格界面
- **了解交互**：命令输入、历史记录、Tab 补全、Sudo 模式等核心交互
- **二次开发**：代码完全开源，可自由修改和部署

---

## 功能特性

### 核心交互
- **命令输入**：支持多行输入（Shift+Enter 换行）
- **模拟执行**：预设 50+ 常用命令的模拟输出
- **Tab 补全**：从命令库和历史记录中智能补全
- **历史记录**：↑/↓ 键浏览历史，localStorage 持久化
- **Sudo 模式**：勾选后命令前自动添加 `sudo`（模拟）
- **拖拽文件**：从访达拖拽文件自动填入路径（自动转义空格）

### macOS 风格 UI
- **毛玻璃效果**：`backdrop-filter` 模糊，自动适配深色模式
- **菜单栏**：完整的 macOS 风格菜单（RunProcess · 文件 · 编辑 · 显示 · 前往 · 窗口 · 帮助）
- **标题栏**：红黄绿三色灯 + 应用图标
- **窗口拖拽**：按住标题栏可拖动窗口
- **状态指示器**：就绪/运行中/完成/错误 状态反馈

### 多语言支持
- **中英双语**：一键切换，界面和命令输出同步翻译
- **持久化**：语言偏好保存在 localStorage 中

### 键盘快捷键

| 快捷键 | 功能 |
|--------|------|
| `Enter` | 执行命令 |
| `Shift+Enter` | 换行 |
| `Tab` | 补全建议 |
| `↑`/`↓` | 历史命令导航 |
| `⌘Q` | 退出（演示） |
| `⌘,` | 偏好设置（演示） |
| `⌘C`/`⌘V`/`⌘A` | 拷贝/粘贴/全选 |
| `⌘W` | 关闭（演示） |
| `⌘N` | 新建标签页（演示） |
| `⌘⇧N` | 新建窗口（演示） |
| `⌘M` | 最小化（演示） |
| `⌘⇧H`/`⌘⇧D`/`⌘⇧L` | 前往个人收藏/桌面/下载（演示） |

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
| **[Puppertino](https://github.com/codedgar/Puppertino)** | macOS 风格 CSS 组件库 |
| **localStorage** | 历史记录和语言偏好持久化 |

---

## 文档

- [English README](../../README.md)
- [License](LICENSE.zh-Hans.md)

---

## 许可证

MIT © CaoHaoran-Dev