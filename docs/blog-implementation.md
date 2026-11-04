# Blog 与 Pages CMS 实现说明

本文描述当前实现。日常维护入口见根目录 [README](../README.md)，写作流程见 [中文指南](blog-editor-guide.zh-CN.md)。

## 页面与数据

- Blog 目录入口 blogs.md，固定地址 /blogs/，布局 blog-index。
- 所有文章由 _posts/ 提供，布局 post → blog-base。文章网址沿用 /:year-:month-:day-:title/。
- 目录从 site.posts 生成，每行显示 MM.DD.YY – 标题。文章标题链接、日期、分组和上下篇导航均来自 Jekyll 数据。
- _data/blog_groups/ 中每个 YAML 保存稳定 ID 和显示名称；改分组名不改变文章归属。
- 文章 blog_group 引用 ID。缺少分组字段的旧文使用 blog-navigation.yml 的 default_group；无效引用会进入“未分组”。
- blog-navigation.yml 的 group_order 控制顺序；重复项和无效项忽略，新组自动补在末尾。
- 品牌 ZIBO NOTES 指向 /blogs/；Homepage 返回个人主页；没有订阅功能。

## 样式隔离

assets/css/blog.css 仅用于 journal-site 博客页面，assets/js/blog.js 只管理手机菜单。主页和 Blog 的排版不共享选择器。

Bibliophile 参考实现使用本地 Albura、背景 #f5f3f1、最大1100px版心、80px双栏间距、620px正文区域。正文23.2px / 1.4，标题32px斜体；900px以下改为单栏。中文使用设备衬线字体回退，因此不同设备的字形可能不同。

layout-css 链接附构建时间版本参数，减少样式更新后的旧缓存问题。响应式和深色模式保留。

## CMS

配置文件是 .pages.yml，包含博客文章、博客分组、博客导航和媒体目录。

- 文章正文用 rich-text，format: markdown，保留 Editor / Source 切换。
- 新文章文件名为 {fields.date}-{fields.slug}.md；不允许 CMS 重命名既有文章。
- published: false 不进入普通 Jekyll 网站构建。省略该字段的旧文章按已发布处理。
- Published 默认 true，编辑旧文时避免意外下架；新草稿需先关闭发布开关。
- settings.content.merge: true 保留编辑器未展示的元数据，不承诺 Markdown 往返字节完全不变。
- 图片存入 assets/img/blog，网址从 /assets/img/blog/ 开始，采用随机文件名。
- blog_group 使用动态 reference 指向 blog_groups，以名称搜索、ID 保存，新建文章不默认选中分组。
- 当前 Pages CMS 引用框可能把已选名称作为搜索词；换组时清空框内文字后再选择即可。
- 分组 ID 使用隐藏 UUID，导航顺序是可拖动的 reference 列表。
- CMS 权限由 GitHub / Pages CMS 账号授权管理；仓库没有 Token、前端密码或匿名编辑后台。

没有新增数学渲染器。复杂公式、Liquid、HTML 和代码建议使用 Source；普通文字的四空格缩进或代码围栏会被识别为代码块。

## 组件清理后的约定

正式页面地址和文章文件不变；参考用的 WordPress 解压目录已移除，实际字体留在 assets/fonts/albura/。

唯一的个人简介正文是 _includes/home/about.md，主页人物组件和独立 About 页面共用。人物身份与 Education 在 profile.html；不要再建立第二份简介。

评论模板只保留 Giscus 的条件加载，当前没有配置服务。旧 Staticman、Disqus、Facebook、Utterances、CommentBox、统计集成和关闭的站内搜索已移除。若未来需要新的服务，应按需求添加，不再保留整套未使用的主题组件。

## 许可与来源

- [Bibliophile](https://wordpress.com/theme/bibliophile)；参考源码下载地址：https://public-api.wordpress.com/rest/v1/themes/download/bibliophile.zip
- Albura 四个 OTF 是未修改的原字体，包含常规、斜体、半粗和半粗斜体；许可见 assets/fonts/albura/OFL.txt。
- [Pages CMS 配置文档](https://pagescms.org/docs/configuration/)。
- 引用字段的搜索问题曾依据官方源码提交 6f4e860a35d934406580287e7042e5e111e207a1 核对，并由用户确认清空输入后能看到新分组。

## 验证边界

当前本地环境没有 Ruby / Bundler。模板、Markdown、文件引用、桌面/手机浏览器和草稿过滤可以在本地预览中检查，但不等同于 bundle exec jekyll build。

真实 GitHub OAuth、CMS 保存/上传和最终部署依赖用户已登录的在线服务；本地整理不操作账号授权、Git commit 或 push。
