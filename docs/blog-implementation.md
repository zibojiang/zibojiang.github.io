# Blog 与 Pages CMS 实施说明

核对日期：2026-10-28。本次工作只落盘到本地；没有 Git commit、push、GitHub App 安装、账号授权或线上发布。

## 范围与保留内容

沿用现有 Jekyll、Beautiful Jekyll 和 GitHub Pages。Blog 地址仍是 `/blogs/`，没有另建 `/blog/`。
现有文章仍使用 `/:year-:month-:day-:title/`，课程文章地址保持：

`/2026-07-27-ucsd-course-preview-ece-260a-ece-284/`

没有改动现有 `_posts` 文件的任何字节，也没有迁移或发布根目录的世界杯文章。
开始时已经存在的未提交 Blog 改动被保留并继续完善。用户提供的 `bibliophile-wpcom-1.0.4/` 原目录未修改或删除。

## 文件清单

当前分组功能涉及 `.pages.yml`、`_data/blog-navigation.yml`、`_data/blog_groups/`、`_includes/blog-sidebar.html`，以及两份 `docs/blog-editor-guide.zh-CN.md`、`docs/blog-implementation.md`。上传时应包含全部功能改动；若工作区还有此前尚未上传的字体或布局调整，也应一并保留。没有改动文章或非博客页面。

下面包含本轮完善及上一轮保留的完整 Blog 集成文件；非 Blog 页面继续使用原来的布局和资源。

- `blogs.md`：保留 `/blogs/` permalink，使用独立 `blog-index` 布局。
- `_layouts/blog-index.html`：从 `site.posts` 生成标题、完整日期、摘要和文章链接，新文章自动加入列表。列表的大标题仅保留给屏幕阅读器，第一篇文章从版心顶部开始，与参考文章页位置一致。
- `_layouts/post.html`：使用独立博客布局；显示原正文、日期、副标题、封面、标签与文章导航；保留评论和前后内容插槽。
- `_layouts/blog-base.html`：博客专属文档骨架与双栏容器；复用现有 SEO head；主题切换移至页脚。
- `_includes/blog-sidebar.html`：固定显示返回 `/` 的 Home，按分组名称排列可展开的文章组；根据文章的 `blog_group` ID 收录 `site.posts` 中的已发布文章，不按标签或年份推断。缺少分组字段的旧文归入初始组，悬空引用进入「未分组」。品牌链接指向 `/blogs/`，用于打开完整列表。没有订阅表单或订阅按钮。
- `_data/blog-navigation.yml`：保存左侧站名 `title`，初始为 ZIBO NOTES；`default_group` 保存旧文回退用的初始分组 ID，不在 CMS 表单中显示。不保存菜单列表、链接、标签映射、计数或自动追加开关。
- `_data/blog_groups/`：每个分组一个 YAML 文件，保存稳定的 `id` 和可编辑的 `title`，文件名由 ID 生成。目前只预置 UCSD (2026)，ID 为 `a2c37f84-95fb-4d3c-8f1b-0f8d8a662026`；其他分组由用户在 CMS 创建。
- `_includes/head.html`：条件加载 `layout.layout-css`，加上每次构建的时间戳版本号，使新页面重新请求博客 CSS。非博客布局没有声明此字段，因此不会加载博客样式。
- `assets/css/blog.css`：仅匹配 `.journal-site`，定义本地字体、截图对应的尺寸、深色模式、手机布局和内容元素样式。
- `assets/js/blog.js`：只处理博客移动菜单及窗口宽度变化，无后台、凭据或第三方服务调用。
- `assets/fonts/albura/albura_normal_400.otf`：原主题常规字体，原样复制。
- `assets/fonts/albura/albura_italic_400.otf`：原主题斜体字体，原样复制。
- `assets/fonts/albura/albura_normal_545.otf`：原主题半粗字体，原样复制并用于 CSS 粗体。
- `assets/fonts/albura/albura_italic_541.otf`：原主题半粗斜体，原样复制并用于 CSS 粗斜体。
- `assets/fonts/albura/OFL.txt`：完整 SIL OFL 1.1 文本和字体版权声明。
- `assets/fonts/albura/README.txt`：字体来源、各字重用途及许可核对说明。
- `.pages.yml`：Pages CMS 文章和博客分组集合、编辑字段、文件命名、发布开关、图片上传及合并保存设置；文章通过动态单选框选择分组；「博客导航」单文件表单仅提供「左侧站名」输入。
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

仍然存在的差异：中文和英文混排的长标题会换行，日期和正文随标题高度向下移动；中文由设备的 Noto Serif / 思源宋体 / 宋体回退，跨系统字形不会完全一致。左栏包含固定 Home 和本站的文章分组，点站名可到博客列表；订阅区已按要求移除。列表是本站文章摘要，不能与参考站一篇长文章的内容长度逐像素一致。手机折叠菜单为适配实现，未经参考站手机截图核验。深色模式延续现有功能，参考截图只有浅色。

本轮下载的线上 `assets/css/blog.css` 与修改前本地文件 SHA-256 一致，已包含纠正后的 32px/23.2px 字号和 1100px 版心；用户截图仍呈现旧版大字号，无法从截图确定是浏览器缓存还是部署完成前的画面。已添加 CSS 版本参数。上传本轮全部变更、等待 Pages 部署成功后，首次可用 Ctrl+Shift+R 刷新；仅上传 CSS 不会启用导航后台或新的布局。

字体二进制中的 name ID 13/14 明确标注 SIL OFL 1.1；四个复制文件的 SHA-256 与原始文件完全一致。中文回退使用设备已有字体，没有打包未经授权的商业中文字库。主题 README 中混杂的 Apache 行未被作为 Albura 的许可依据。

来源：[Bibliophile](https://wordpress.com/theme/bibliophile)、[OFL 官方文本](https://openfontlicense.org/open-font-license-official-text/)。本站使用 Jekyll 重新实现布局，没有加载 WordPress PHP 或复制其示例文章。

## CMS 配置与发布语义

`.pages.yml` 使用当前 Pages CMS 2.x 文档支持的配置：

- 唯一文章集合指向 `_posts`，格式为 `yaml-frontmatter`。
- 编辑 Title、Subtitle、Date、Author、Blog Group、Tags、Slug、Published、Body；隐藏的 Layout 默认 `post`。
- `body` 是 Markdown 富文本，保留 Editor / Source 切换。
- 自动文件名为 `{fields.date}-{fields.slug}.md`；隐藏手工文件名输入，关闭重命名操作。
- slug 限小写英文字母、数字和短横线；中文标题不会被直接用作文件名。
- 图片保存到 `assets/img/blog`，正文 URL 为 `/assets/img/blog/...`，采用随机命名降低冲突。
- `settings.content.merge: true` 保留表单之外的现有 frontmatter 字段；这不是正文 Markdown 的逐字节无损保证。
- 导航表单只显示站名 `title`，文件中另保留旧文回退用的 `default_group`。Home 固定返回首页；分组由独立集合管理，写新文章只需选择所属分组，无需修改导航。文章 Tags 字段仍可选，不参与分组。

### 分组数据与稳定引用

「博客分组」集合指向 `_data/blog_groups`，使用 `format: yaml`。每条记录包含隐藏的 `type: uuid` 字段 `id`，以及唯一可见的必填名称字段 `title`。UUID 不设固定默认值，由 CMS 新建时生成；文件名使用 `{fields.id}.yml` 并隐藏手工文件名输入。初始 2026 分组沿用原侧栏的分组名称，未创建 2027 示例记录。

文章的 `blog_group` 是必填 reference 字段，配置 `collection: blog_groups`、`multiple: false`、`search: title`、`value: "{fields.id}"`、`label: "{primary}"`。保存值是单个 ID 字符串，不是数组，也不是显示名称。默认值为初始分组 ID `a2c37f84-95fb-4d3c-8f1b-0f8d8a662026`；旧文件不会被批量重写，缺字段时由侧栏模板回退到这个 ID，首次经 CMS 保存时才会补入默认值。

分组名称可以修改，ID、文件路径和既有文章引用保持不变。分组按名称排列；在 CMS 保存新组后，再进入文章编辑页选择，已打开的文章表单可能需要刷新。分组允许删除；删除前应先调整文章归属。reference 的必填验证不保证目标仍存在，因此侧栏将引用不存在 ID 的文章集中显示在「未分组」，不会丢失阅读入口。若初始组已删除，缺分组字段的旧文也进入「未分组」。

核对 Pages CMS 2.1.8 官方提交 `6f4e860a35d934406580287e7042e5e111e207a1`：

- [reference 官方文档](https://pagescms.org/docs/configuration/fields/reference/)与[单选保存源码](https://github.com/hunvreus/pagescms/blob/6f4e860a35d934406580287e7042e5e111e207a1/fields/core/reference/edit-component.tsx)：单选保存标量；显式设置 `search: title`，避免默认按文件名搜索 UUID。
- [引用数据接口](https://github.com/hunvreus/pagescms/blob/6f4e860a35d934406580287e7042e5e111e207a1/app/api/%5Bowner%5D/%5Brepo%5D/%5Bbranch%5D/references/%5Bname%5D/route.ts)：支持 YAML 集合，并用配置模板解析引用值和显示名称。
- [UUID 官方文档](https://pagescms.org/docs/configuration/fields/uuid/)、[UUID 初始化源码](https://github.com/hunvreus/pagescms/blob/6f4e860a35d934406580287e7042e5e111e207a1/fields/core/uuid/index.tsx)、[字段默认值源码](https://github.com/hunvreus/pagescms/blob/6f4e860a35d934406580287e7042e5e111e207a1/lib/schema.ts)：隐藏 UUID 仍参与新建默认值；缺失的 reference 字段可用 ID 字符串默认值。
- [文件名文档](https://pagescms.org/docs/configuration/content/filename/)与[保存源码](https://github.com/hunvreus/pagescms/blob/6f4e860a35d934406580287e7042e5e111e207a1/components/entry/entry.tsx)：新建按模板生成路径，编辑沿用既有路径，因此修改名称不改变引用。
- [Jekyll 数据子目录](https://jekyllrb.com/docs/datafiles/#subfolders)：`site.data.blog_groups` 是文件名到记录的映射，侧栏需从映射取记录后排序，不能直接当作记录数组。

Jekyll 原生处理 `published: false`，普通生产构建会排除该文章，而不是只在列表里隐藏它。本配置没有自定义 JavaScript 隐藏草稿，也不使用 `--unpublished`。

**Published 默认 true 是旧文兼容策略。** 旧文章缺少此字段时继续发布；已有 false 保持 false。新建草稿时必须先关闭开关再保存。原文章首次在 CMS 编辑时需在 slug 输入框填写 `ucsd-course-preview-ece-260a-ece-284`，保留 `2026-07-27` 日期，以保持 URL。

公开仓库中的草稿源文件、Git 历史和图片仍可能公开；这不是私密草稿存储。网页编辑权依赖 GitHub 身份、仓库权限和 Pages CMS 协作者配置；没有创建匿名编辑入口，没有提交 Token/Secret，没有邀请协作者。

来源：[文件名](https://pagescms.org/docs/configuration/content/filename/)、[富文本](https://pagescms.org/docs/configuration/fields/rich-text/)、[媒体](https://pagescms.org/docs/configuration/media/)、[合并保存](https://pagescms.org/docs/configuration/settings/)、[Jekyll published](https://jekyllrb.com/docs/front-matter/)。

## 实际验证与边界

正式执行 `bundle exec jekyll build`，结果是本机找不到 `bundle`；Ruby / Bundler / Jekyll 未安装。没有为此修改 Gemfile、安装大型运行环境或替换网站依赖。**不能据此声称正式 Jekyll 或 GitHub Pages 构建已经通过。**

替代检查使用真实布局和 includes，经 LiquidJS 与 marked 生成站点外的临时预览；Chrome / Playwright 实际加载 HTML、CSS、脚本、图片和本地字体。该预览不等同于 Ruby Liquid、kramdown 和 Jekyll 插件链。

已完成：

- 本轮 1848×1166 物理像素（1320×833 CSS px、DPR 1.4）桌面截图与参考 HTML 静态快照对齐；Blog 列表、英文文章、中文文章及三张手机预览共六项浏览器检查通过。字体加载成功、CSS 版本参数存在，无横向溢出或脚本错误。
- YAML 解析及 CMS 配置与官方文档、字段初始化和保存源码核对。
- `git diff --check` 和 `node --check assets/js/blog.js`。
- 既有文章文件哈希不变，原 URL 与发布日期不变。
- 5 个非 Blog 页面的预览 HTML、4 个共享 CSS 逐字节相同；20 组前后截图中 18 组逐像素相同，其余仅照片区域合计 6 个像素单通道 ±1 的栅格化差异，无布局变化。
- Blog 列表及文章在 1968、1401、1440、768、390、320px 宽度、深浅两主题下检查：无横向溢出、缺资源或 JavaScript 异常，Albura 常规和斜体均加载成功。
- 30 项实际浏览器交互检查：手机菜单、分组开合、当前文章、主题持久化、列表到文章及返回、标签锚点、RSS XML。
- 在站点外独立测试副本中，新增无 layout 文章自动继承 `post`；按 Jekyll 规则模拟的 published:false、_drafts、未来文章未进入列表/标签/RSS，也没有详情页输出。这是预览规则回归，正式 Jekyll 行为仍需构建确认。
- 测试副本中的多级标题、粗斜体、图片、图注、链接、列表、引用、表格、长代码在桌面及手机预览正常，无页面横向溢出。

未完成且不应误认为已通过：GitHub OAuth、App 安装、CMS 中真实保存和图片上传、复杂 Markdown 在在线编辑器中的往返保存、GitHub Pages 正式构建与部署。现有网站没有专用数学渲染器，只检查公式源文本保留，不声称完成数学排版。

上述浏览器记录来自前面的布局工作。本轮多分组另行完成 4 个场景、27 项检查：正确加载嵌套数据目录、旧文默认归入 2026、新增 2027 后文章按 ID 分组、改组名保持归属、空组提示、删除组后的「未分组」入口，以及草稿排除和手机菜单。11 个保护文件哈希、5 个非 Blog 页面、4 个共享样式和两篇旧文章 URL 保持不变。桌面和手机截图展示实际仓库的 2026 分组；2027 等测试数据仅存在于站点外的 QA 副本。配置和官方源码核对不等于已登录 CMS 的真实创建、保存和下拉刷新测试，本地模板预览也不能代替正式 Jekyll 构建。

## 用户需要完成的一次性步骤

你已完成 Pages CMS 登录与仓库授权，无需重复授权。将本轮改动完整上传到当前 GitHub Pages 的实际发布分支（可用 GitHub Desktop 图形界面，不必运行 Git 命令），包含 `.pages.yml`、`_data/blog-navigation.yml`、`_data/blog_groups/` 和侧栏模板，等待构建完成。重新打开 [Pages CMS](https://app.pagescms.org/) 中的该仓库和分支，应看到「博客分组」，文章中应有分组下拉框；「博客导航」只显示站名输入框。若网站仍显示旧样式，用 Ctrl+Shift+R 刷新。

需要 UCSD (2027) 时，在「博客分组」新建，只填名称并保存；再到「博客文章」写作，选择这个分组。日常发布后文章自动进入所选分组，无需再操作导航。想改组名，在「博客分组」修改名称；想看完整列表，点网页左上方的 ZIBO NOTES。详细操作见 [中文写作指南](blog-editor-guide.zh-CN.md)。
