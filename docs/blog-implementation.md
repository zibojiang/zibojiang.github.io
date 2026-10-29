# Blog 与 Pages CMS 实施说明

核对日期：2026-10-28。本次工作只落盘到本地；没有 Git commit、push、GitHub App 安装、账号授权或线上发布。

## 范围与保留内容

沿用现有 Jekyll、Beautiful Jekyll 和 GitHub Pages。Blog 地址仍是 `/blogs/`，没有另建 `/blog/`。
现有文章仍使用 `/:year-:month-:day-:title/`，课程文章地址保持：

`/2026-07-27-ucsd-course-preview-ece-260a-ece-284/`

没有改动现有 `_posts` 文件的任何字节，也没有迁移或发布根目录的世界杯文章。
开始时已经存在的未提交 Blog 改动被保留并继续完善。用户提供的 `bibliophile-wpcom-1.0.4/` 原目录未修改或删除。

## 文件清单

本轮字体位置与导航调整共 8 个变更文件：`.pages.yml`、`_data/blog-navigation.yml`、`_includes/blog-sidebar.html`、`_includes/head.html`、`_layouts/blog-index.html`、`assets/css/blog.css`，以及两份 `docs/blog-editor-guide.zh-CN.md`、`docs/blog-implementation.md`。上传时应包含全部六个功能文件；两份文档用于说明操作与验证。没有改动文章或非博客页面。

下面包含本轮完善及上一轮保留的完整 Blog 集成文件；非 Blog 页面继续使用原来的布局和资源。

- `blogs.md`：保留 `/blogs/` permalink，使用独立 `blog-index` 布局。
- `_layouts/blog-index.html`：从 `site.posts` 生成标题、完整日期、摘要和文章链接，新文章自动加入列表。列表的大标题仅保留给屏幕阅读器，第一篇文章从版心顶部开始，与参考文章页位置一致。
- `_layouts/post.html`：使用独立博客布局；显示原正文、日期、副标题、封面、标签与文章导航；保留评论和前后内容插槽。
- `_layouts/blog-base.html`：博客专属文档骨架与双栏容器；复用现有 SEO head；主题切换移至页脚。
- `_includes/blog-sidebar.html`：读取博客导航数据，支持普通链接、按标签自动列文章、手动子菜单和可选计数。自动标签会跳过已手动配置的标签。没有订阅表单或订阅按钮。
- `_data/blog-navigation.yml`：可在 CMS 中修改的品牌、导航名称、顺序、链接和标签分组，初始包含 Home、Blogs 和现有五个标签。
- `_includes/head.html`：条件加载 `layout.layout-css`，加上每次构建的时间戳版本号，使新页面重新请求博客 CSS。非博客布局没有声明此字段，因此不会加载博客样式。
- `assets/css/blog.css`：仅匹配 `.journal-site`，定义本地字体、截图对应的尺寸、深色模式、手机布局和内容元素样式。
- `assets/js/blog.js`：只处理博客移动菜单及窗口宽度变化，无后台、凭据或第三方服务调用。
- `assets/fonts/albura/albura_normal_400.otf`：原主题常规字体，原样复制。
- `assets/fonts/albura/albura_italic_400.otf`：原主题斜体字体，原样复制。
- `assets/fonts/albura/albura_normal_545.otf`：原主题半粗字体，原样复制并用于 CSS 粗体。
- `assets/fonts/albura/albura_italic_541.otf`：原主题半粗斜体，原样复制并用于 CSS 粗斜体。
- `assets/fonts/albura/OFL.txt`：完整 SIL OFL 1.1 文本和字体版权声明。
- `assets/fonts/albura/README.txt`：字体来源、各字重用途及许可核对说明。
- `.pages.yml`：Pages CMS 文章集合、编辑字段、文件命名、发布开关、图片上传及合并保存设置；新增「博客导航」单文件表单，主菜单和子菜单支持拖动排序。
- `assets/img/blog/.gitkeep`：独立博客上传目录的占位文件，不改变已有图片资源。
- `_config.yml`：仅新增构建排除项 `bibliophile-wpcom-1.0.4/`、`.pages.yml`，避免参考源码进入网站输出。没有改 permalink、主题、插件、主导航或全站颜色。
- `docs/blog-editor-guide.zh-CN.md`：非技术用户的登录、授权、写作、图片、草稿、发布与排错指南。
- `docs/blog-implementation.md`：本说明。

`_layouts/home.html`、`_layouts/base.html`、首页及 About Me / News / Projects / Honors 的页面和内容文件均未修改。

## Bibliophile 视觉与许可

参考为用户提供的两张截图以及本地 Bibliophile 1.0.4 的 `theme.json`、`templates/single.html`、`templates/index.html`、`parts/header.html` 和字体。
早期参考网页读取不可访问；2026-10-28 本轮已成功只读获取参考站 Hello Again 页 HTML 和内联 CSS，使用本地原字体渲染静态快照核对。快照屏蔽外部脚本及外链请求，不等于在线 WordPress 全功能验收。

源码声明 Albura、背景 `#f5f3f1`、正文行高 1.4，双栏比例约 1:2。此前将截图中的物理像素误当作 CSS 像素，导致在用户约 1.4 倍显示比例下再次放大。本次按原主题的实际 CSS 尺寸纠正；不对网页设置 zoom，也不修改用户的浏览器缩放。

- 外层版心最大 1100 CSS px，窄桌面左右各保留 20 CSS px。
- 双栏比例 1:2，列间距 80 CSS px；正文内层最大宽度 620 CSS px，居于右列中央。
- 顶部容器留白 136 CSS px；文章和列表标题 32 CSS px、正常字重、真实斜体；正文、摘要和日期均为 23.2 CSS px / 1.4。
- 品牌 16 CSS px；左栏导航 14.4 CSS px、行高 1.6、项目间距 20 CSS px。
- 参考页实际内联样式进一步确认：品牌行高 18px、品牌顶部相对正文标题下移 10.72px；导航字距 .04em。单行标题顶端 136px，日期顶端 245px，正文顶端 301.484px；列表首篇和详情页采用同样的起始坐标。标题后的空白 73px、日期后的空白和普通段落间距均为 24px。
- 900px 及以下改为单栏，菜单可折叠；正文减至 22px，480px 及以下为 20px。

截图验收同时记录 CSS 视口和设备比例：约 1878 物理像素宽的用户截图对应约 1341 CSS px 视口和 1.4 倍设备比例。不能再把 1878 当作 CSS 视口宽度、以设备比例 1 验收。标题 32 CSS px 在该显示比例下约为 44.8 物理像素，正文 23.2 CSS px 约为 32.5 物理像素。没有复制参考作者的正文、照片、身份信息到网站。

仍然存在的差异：中文和英文混排的长标题会换行，日期和正文随标题高度向下移动；中文由设备的 Noto Serif / 思源宋体 / 宋体回退，跨系统字形不会完全一致。左栏使用本站实际标签及 Home / Blogs；订阅区已按要求移除。列表是本站文章摘要，不能与参考站一篇长文章的内容长度逐像素一致。手机折叠菜单为适配实现，未经参考站手机截图核验。深色模式延续现有功能，参考截图只有浅色。

本轮下载的线上 `assets/css/blog.css` 与修改前本地文件 SHA-256 一致，已包含纠正后的 32px/23.2px 字号和 1100px 版心；用户截图仍呈现旧版大字号，无法从截图确定是浏览器缓存还是部署完成前的画面。已添加 CSS 版本参数。上传本轮全部变更、等待 Pages 部署成功后，首次可用 Ctrl+Shift+R 刷新；仅上传 CSS 不会启用导航后台或新的布局。

字体二进制中的 name ID 13/14 明确标注 SIL OFL 1.1；四个复制文件的 SHA-256 与原始文件完全一致。中文回退使用设备已有字体，没有打包未经授权的商业中文字库。主题 README 中混杂的 Apache 行未被作为 Albura 的许可依据。

来源：[Bibliophile](https://wordpress.com/theme/bibliophile)、[OFL 官方文本](https://openfontlicense.org/open-font-license-official-text/)。本站使用 Jekyll 重新实现布局，没有加载 WordPress PHP 或复制其示例文章。

## CMS 配置与发布语义

`.pages.yml` 使用当前 Pages CMS 2.x 文档支持的配置：

- 唯一文章集合指向 `_posts`，格式为 `yaml-frontmatter`。
- 编辑 Title、Subtitle、Date、Author、Tags、Slug、Published、Body；隐藏的 Layout 默认 `post`。
- `body` 是 Markdown 富文本，保留 Editor / Source 切换。
- 自动文件名为 `{fields.date}-{fields.slug}.md`；隐藏手工文件名输入，关闭重命名操作。
- slug 限小写英文字母、数字和短横线；中文标题不会被直接用作文件名。
- 图片保存到 `assets/img/blog`，正文 URL 为 `/assets/img/blog/...`，采用随机命名降低冲突。
- `settings.content.merge: true` 保留表单之外的现有 frontmatter 字段；这不是正文 Markdown 的逐字节无损保证。

Jekyll 原生处理 `published: false`，普通生产构建会排除该文章，而不是只在列表里隐藏它。本配置没有自定义 JavaScript 隐藏草稿，也不使用 `--unpublished`。

**Published 默认 true 是旧文兼容策略。** 旧文章缺少此字段时继续发布；已有 false 保持 false。新建草稿时必须先关闭开关再保存。原文章首次在 CMS 编辑时需在 slug 输入框填写 `ucsd-course-preview-ece-260a-ece-284`，保留 `2026-07-27` 日期，以保持 URL。

公开仓库中的草稿源文件、Git 历史和图片仍可能公开；这不是私密草稿存储。网页编辑权依赖 GitHub 身份、仓库权限和 Pages CMS 协作者配置；没有创建匿名编辑入口，没有提交 Token/Secret，没有邀请协作者。

来源：[文件名](https://pagescms.org/docs/configuration/content/filename/)、[富文本](https://pagescms.org/docs/configuration/fields/rich-text/)、[媒体](https://pagescms.org/docs/configuration/media/)、[合并保存](https://pagescms.org/docs/configuration/settings/)、[Jekyll published](https://jekyllrb.com/docs/front-matter/)。

## 实际验证与边界

正式执行 `bundle exec jekyll build`，结果是本机找不到 `bundle`；Ruby / Bundler / Jekyll 未安装。没有为此修改 Gemfile、安装大型运行环境或替换网站依赖。**不能据此声称正式 Jekyll 或 GitHub Pages 构建已经通过。**

替代检查使用真实布局和 includes，经 LiquidJS 与 marked 生成站点外的临时预览；Chrome / Playwright 实际加载 HTML、CSS、脚本、图片和本地字体。该预览不等同于 Ruby Liquid、kramdown 和 Jekyll 插件链。

已完成：

- 本轮 1848×1166 物理像素（1320×833 CSS px、DPR 1.4）桌面截图与参考 HTML 静态快照对齐；Blog 列表、英文文章、中文文章及三张手机预览共六项浏览器检查通过。字体加载成功、CSS 版本参数存在，无横向溢出或脚本错误。
- 本轮新增六种导航配置场景、27 项断言：默认导航、自定义标签名称和顺序、标签去重、子菜单、自动追加开关、计数开关及缺配置回退；手机菜单和文章链接可用。CMS 本身的实际拖拽/保存仍需本人登录后验证。
- YAML 解析及 CMS 配置与官方文档、字段初始化和保存源码核对。
- `git diff --check` 和 `node --check assets/js/blog.js`。
- 既有文章文件哈希不变，原 URL 与发布日期不变。
- 5 个非 Blog 页面的预览 HTML、4 个共享 CSS 逐字节相同；20 组前后截图中 18 组逐像素相同，其余仅照片区域合计 6 个像素单通道 ±1 的栅格化差异，无布局变化。
- Blog 列表及文章在 1968、1401、1440、768、390、320px 宽度、深浅两主题下检查：无横向溢出、缺资源或 JavaScript 异常，Albura 常规和斜体均加载成功。
- 30 项实际浏览器交互检查：手机菜单、分组开合、当前文章、主题持久化、列表到文章及返回、标签锚点、RSS XML。
- 在站点外独立测试副本中，新增无 layout 文章自动继承 `post`；按 Jekyll 规则模拟的 published:false、_drafts、未来文章未进入列表/标签/RSS，也没有详情页输出。这是预览规则回归，正式 Jekyll 行为仍需构建确认。
- 测试副本中的多级标题、粗斜体、图片、图注、链接、列表、引用、表格、长代码在桌面及手机预览正常，无页面横向溢出。

未完成且不应误认为已通过：GitHub OAuth、App 安装、CMS 中真实保存和图片上传、复杂 Markdown 在在线编辑器中的往返保存、GitHub Pages 正式构建与部署。现有网站没有专用数学渲染器，只检查公式源文本保留，不声称完成数学排版。

## 用户需要完成的一次性步骤

你已完成 Pages CMS 登录与仓库授权，无需重复授权。将本轮改动完整上传到当前 GitHub Pages 的实际发布分支（可用 GitHub Desktop 图形界面，不必运行 Git 命令），包含 `.pages.yml` 和新增的 `_data/blog-navigation.yml`，等待构建完成。重新打开 [Pages CMS](https://app.pagescms.org/) 中的该仓库和分支，即可看到「博客导航」。若网站仍显示旧样式，用 Ctrl+Shift+R 刷新。保存一次导航修改，检查部署后的菜单即可验证新功能。

完成连接后的日常写作无需手动创建 Markdown、填写 YAML 或执行 Git 命令。详细操作见 [中文写作指南](blog-editor-guide.zh-CN.md)。
