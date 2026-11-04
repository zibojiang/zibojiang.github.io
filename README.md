# Zibo Jiang 的个人网站

[Jekyll / GitHub Pages 个人主页](https://zibojiang.github.io/)。主页沿用 Beautiful Jekyll，Blog 使用独立的 Bibliophile 风格，写博客使用 Pages CMS。

## 平时在哪里修改

- **个人介绍和研究兴趣**：[_includes/home/about.md](_includes/home/about.md)。这是唯一的简介正文，主页和独立 About 页共用；用普通 Markdown 写段落，双星号表示加粗。
- **照片右侧短简介、Education**：[_includes/home/profile.html](_includes/home/profile.html)。主要改文字和日期，保留 HTML 标签。
- **首页照片**：[assets/img/Zibo Jiang.png](assets/img/Zibo%20Jiang.png)。更换文件时尽量保持同样比例；图片位置写在 profile.html 中。
- **短简介与页脚的图标链接**：[_data/profile-links.yml](_data/profile-links.yml)。两处共用 CV、LinkedIn、Scholar 等链接；填入网址后显示，留空时隐藏；邮箱和 GitHub 默认沿用 _config.yml。
- **CV 文件**：[assets/files/Zibo-Jiang-CV.pdf](assets/files/Zibo-Jiang-CV.pdf)。用同名新 PDF 替换即可保持图标网址不变。
- **风景轮播、首页标题与分享说明**：[index.md](index.md) 顶部的配置。
- **News / Projects / Honors**：分别编辑 [_includes/home/news.md](_includes/home/news.md)、[projects.md](_includes/home/projects.md)、[honors.md](_includes/home/honors.md)。
- **导航、邮箱、GitHub、网站配色**：[_config.yml](_config.yml)。
- **博客文章、分组和左侧菜单**：在 [Pages CMS](https://app.pagescms.org/) 编辑，操作见 [中文写作指南](docs/blog-editor-guide.zh-CN.md)。

首页介绍的内容来源已经统一。不要再复制一份介绍到 profile.html；修改 about.md 就会同时更新两个页面。

## 目录各自做什么

- 根目录的 index.md、aboutme.md、news.md、projects.md、awards.md、blogs.md、tags.html、404.html：各页面入口。旧的独立页面仍保留原网址。
- _includes/home/：主页内容与人物组件；普通使用只需编辑上面的几个文件。
- _layouts/、其余 _includes/：页面骨架、导航、页脚。日常写文章不用改。
- _posts/：已保存到 CMS 的博客文章，包含 published: false 的草稿；文章名和 slug 决定网址。
- _data/blog_groups/、_data/blog-navigation.yml：CMS 管理的分组与菜单数据。
- assets/img/：个人照片和使用中的图片；assets/img/blog/ 专门存 CMS 上传图片。
- assets/css/、assets/js/：样式和交互。
- assets/fonts/、assets/licenses/：字体、图标及许可证，需要随网站保留。
- drafts/：尚未纳入 CMS 的原始文字草稿；已排除网站构建。世界杯草稿完整保存在这里。
- docs/：博客使用指南和实现说明。

保留个人原照片是为了以后可以重新裁剪、写文章。未显示在页面上，并不等于没有用途。

## 改样式

- 主页正文与标题字号、照片、简介、Education：assets/css/home-profile.css，仅首页加载。正文在 .home-section 中设为 17px，行高为字号的 1.5 倍。
- Blog 目录和文章：assets/css/blog.css，仅 Blog 布局加载。
- 公共深色模式、导航、短简介与页脚的图标、独立 About 照片：assets/css/home-about.css。
- 原主题正文基础字体和字号：assets/css/beautifuljekyll.css。

这几份 CSS 的作用范围不同，保持分开可避免改 Blog 时影响主页。字号用 font-size，行高用 line-height。

## 写博客与发布

在 Pages CMS 登录已经授权的仓库，编辑并保存即可触发原有 GitHub Pages 流程。新建文章时选择博客分组；草稿关闭发布开关。详细步骤见 [中文写作指南](docs/blog-editor-guide.zh-CN.md)。

修改本地网站文件后，由你检查差异、提交并推送。GitHub Pages 部署完成后刷新网站。这里没有自动提交或自动推送脚本。

公开仓库中的草稿源文件仍可被访问，drafts/ 和 published: false 都不提供私密存储。不要修改已发布文章的日期、文件名或 slug，除非确实打算更换网址。

## 本地构建

已有 Ruby 和 Bundler 后，在仓库根目录运行：

    bundle install
    bundle exec jekyll build
    bundle exec jekyll serve

Gemfile 仍引用 beautiful-jekyll-theme.gemspec，所以这两个文件需要一起保留。本次整理没有更改依赖版本。

当前维护环境没有 Ruby / Bundler；验证使用实际 Liquid 模板加 Markdown 的本地预览和浏览器检查，不能替代正式 Jekyll 构建。正式构建状态以 GitHub Pages 的部署结果为准。

## 这次整理了什么

- 删除不参与构建的 WordPress 主题参考包，使用中的 Albura 字体与许可保留。
- 删除误留的他人介绍页、他人论文图片及无引用的主题示例图。
- 删除未使用的 home/minimal 布局、旧评论平台、统计组件和已关闭的站内搜索；Giscus 的条件加载集中在 _includes/comments.html，当前仍未启用。
- 合并重复简介、图标组件；缩减未使用的页脚社交平台代码。
- 404 页面移到根目录，仍使用 /404.html；世界杯草稿移入 drafts/，正文未改。
- 保留所有现有文章、个人照片、CV、页面网址、RSS、CMS 配置和依赖。

## 来源与许可

- [Beautiful Jekyll](https://github.com/daattali/beautiful-jekyll)：原主题，MIT；见 [LICENSE](LICENSE)。
- [Bibliophile](https://wordpress.com/theme/bibliophile)：Blog 布局参考；本站不运行 WordPress/PHP。
- Albura 字体：见 [字体说明](assets/fonts/albura/README.txt) 与 [OFL 许可](assets/fonts/albura/OFL.txt)。
- [Lucide](https://lucide.dev/) 图标：见 [ISC 许可](assets/licenses/lucide-0.453.0.txt)。
