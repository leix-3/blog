# 阿雷实验室

一个使用 Astro、TypeScript、Markdown/MDX 和 Content Collections 构建的中文个人内容网站。网站为纯静态输出，不需要数据库，适合由 Codex 等 AI Agent 长期协助维护。

## 本地使用

需要 Node.js 22.12 或更高版本。

```bash
npm install
npm run dev
```

开发地址默认是 `http://localhost:4321`。

生成正式静态网站：

```bash
npm run build
```

生成结果位于 `dist/`。

## 新增文章

在 `src/content/blog/` 新建一个英文小写、使用短横线分隔的 `.md` 文件，例如：

```text
src/content/blog/my-new-article.md
```

推荐从下面的 Frontmatter 开始：

```yaml
---
title: "文章标题"
description: "文章摘要"
pubDate: 2026-07-21
updatedDate: 2026-07-21
heroImage: "../../assets/article-cover.jpg"
category: "AI 工具"
tags: ["AI", "教程"]
draft: true
featured: false
series: "可选的系列名称"
---
```

可用分类只能是：`AI 工具`、`NAS 数码`、`效率软件`、`内容创作`、`家庭教育`。

- `draft: true`：正式构建时不生成文章页面，也不会出现在 RSS 中。
- `featured: true`：有机会显示在首页推荐位。
- `updatedDate`、`heroImage` 和 `series` 可以省略。

图片可以放在 `src/assets/`，文章 Frontmatter 使用相对于文章文件的路径。普通静态文件也可以放在 `public/images/`，正文中使用 `/images/文件名.jpg` 引用。

## 修改网站信息

- 网站名称、简介、作者、导航、分类和社交链接：`src/consts.ts`
- 正式域名：设置构建环境变量 `SITE_URL`，或者修改 `astro.config.mjs` 中的占位域名
- 首页内容：`src/pages/index.astro`
- 关于页面：`src/pages/about.astro`
- 全局视觉样式：`src/styles/global.css`

上线前务必把 `https://example.com` 替换为正式域名，否则 canonical、RSS 和 sitemap 会使用占位地址。

## GitHub 与 Vercel

1. 在 GitHub 创建一个空仓库。
2. 将本项目连接到该仓库并推送。
3. 在 Vercel 中导入仓库。
4. 构建命令使用 `npm run build`，输出目录使用 `dist`。
5. 在 Vercel 中配置 `SITE_URL=https://你的正式域名`。

静态 Astro 项目不需要数据库或额外的服务器端运行环境。

## 推荐的 AI Agent 工作流

给 Agent 提供口播稿或原始笔记，并要求它：

1. 保留核心观点，不虚构个人经历。
2. 整理为结构清晰的 Markdown。
3. 生成合规的标题、摘要、分类和标签。
4. 新文章先设置 `draft: true`。
5. 写入后运行 `npm run build`。
6. 未经人工确认，不修改为正式发布状态，也不执行推送。

人工审核完成后，把 `draft` 改成 `false`，再次构建检查，再提交到 GitHub。

## 内容管理后台

网站包含 `/admin/` 内容管理入口，使用 Decap CMS 管理 `src/content/blog/` 中的 Markdown 文章。

后台支持：

- 新建和编辑文章
- 设置分类、标签、发布时间和封面
- 切换草稿与正式发布状态
- 上传文章图片
- 将修改提交回 GitHub，并触发托管平台重新构建

正式启用登录前，需要先完成以下配置：

1. 将网站代码上传到 GitHub。
2. 修改 `public/admin/config.yml` 中的 `repo` 为真实仓库，例如 `username/alei-lab`。
3. 建立 GitHub OAuth App 和 OAuth 代理。
4. 将 `base_url` 修改为 OAuth 代理域名。

不要把 GitHub Client Secret、访问令牌或后台密码写进仓库或前端文件。OAuth 代理的密钥只能配置在托管平台的安全环境变量中。
