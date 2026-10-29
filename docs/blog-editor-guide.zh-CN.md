# 用 Pages CMS 写博客

以后可以在浏览器中写文章、插入图片、修改已发布内容和博客左侧导航。Pages CMS 把保存结果提交到这个 GitHub 仓库；网站仍由原有的 Jekyll / GitHub Pages 流程生成。CMS 是写作工具，编辑器里的排版不等于网站最终排版。

## 第一次连接

1. 先把本次新增的 `.pages.yml` 和相关网站文件 **commit 并 push 到 GitHub Pages 实际使用的分支**。仅放在电脑上，在线 CMS 读不到。首次提交、推送和 GitHub 授权由你完成；本次配置不会替你安装应用或发布文章。
2. 打开 [Pages CMS](https://app.pagescms.org/)，选择 GitHub 登录。
3. 按页面提示安装 Pages CMS GitHub App。选择 **Only select repositories（仅选定仓库）**，只勾选 `zibojiang.github.io`；核对权限后完成安装。
4. 在 CMS 选择 `zibojiang/zibojiang.github.io`，再选择与 GitHub Pages 发布设置一致的分支。
5. 左侧应出现「博客文章」「博客导航」和「博客图片」。如果还提示创建配置，先检查分支是否选对、`.pages.yml` 是否已经推送，不要覆盖已有配置。[官方入门说明](https://pagescms.org/docs/quick-start/)

第一次使用建议新建一篇简短草稿，保存后重新打开，确认标题、日期、正文和图片都正确，再开启发布。这里已完成配置准备，尚未替你登录 CMS 做真实保存或验证线上部署。

## 谁可以编辑

管理入口是官方 [app.pagescms.org](https://app.pagescms.org/)，使用 GitHub 身份登录。本次没有增加匿名编辑入口、网站 `/admin` 页面或前端密码，也没有把密码、Token 等凭据放入网站文件；没有邀请任何 CMS 协作者。

`.pages.yml` 定义编辑表单，**不能单靠它保证只有你本人能改文章**。GitHub 仓库中已有写入权限或管理员权限的人仍可能编辑；Pages CMS 中已有的 Collaborators 也可能拥有内容编辑权限。这些 CMS 协作者记录保存在服务端数据库中，不由这份配置文件自动清除。[官方身份验证说明](https://pagescms.org/docs/development/authentication/)、[协作者说明](https://pagescms.org/docs/configuration/collaborators/)

首次启用时，请你自己登录确认：GitHub App 只授权 `zibojiang.github.io` 这个仓库，检查 GitHub 仓库的 Collaborators / 访问权限，也检查 Pages CMS 的 Collaborators 列表；若只希望自己编辑，不要邀请其他人，并处理已有的不需要的授权。本次没有替你修改这些远程权限。

## 新建文章

1. 打开「博客文章」，新建一篇文章。**如果还没准备好公开，先关闭「发布到网站」再保存。**
2. 填写标题，可选填副标题；日期默认使用你当前设备的本地日期，也可以选择其他日期。作者默认是 Zibo Jiang。
3. 在「网址短名」填写简短的小写英文，例如 `ucsd-course-notes`。可以包含数字和短横线，不要输入空格、中文或 `.md`。
4. 标签每项填写一个，例如 `UCSD`、`VLSI`、`旅行`。
5. 在「正文」写内容。普通文章可使用 **Editor** 模式：选中文字添加粗体、斜体或链接；使用编辑器的段落/标题菜单或 `/` 菜单插入标题、列表、引用、图片等。
6. 保存前核对日期和网址短名。文件名由这两项自动生成，界面不提供手工文件名输入。例如日期为 `2026-10-27`、网址短名为 `ucsd-course-notes`，保存后文件名为 `2026-10-27-ucsd-course-notes.md`。
7. 点击保存，等待保存成功。文章存入仓库的 `_posts` 目录。[日期字段](https://pagescms.org/docs/configuration/fields/date/)、[文件名规则](https://pagescms.org/docs/configuration/content/filename/)

保存会向当前分支提交修改，并不是只保存在当前浏览器。若选择的分支就是网站部署分支，保存已发布文章会触发现有发布流程。日期设到未来也不等于建立了定时发布任务：网站需要在相应时间之后再次构建，而且构建配置必须允许该文章显示。

## 草稿与发布

- 「发布到网站」关闭后保存，会写入 `published: false`；普通 Jekyll 构建不会把这篇文章列入网站。
- 准备好之后打开开关并保存，再等 GitHub Pages 构建成功，到网站的 Blogs 页面查看。保存成功与网站部署成功是两件事。
- 需要暂时撤下文章时，关闭开关并保存；等部署完成后再检查网站。
- **公开仓库的草稿不是私密笔记**：即使网站不显示，文章源码、历史提交和上传图片仍可能公开访问。不要把不愿公开的内容写入这个公开仓库。

这个开关默认开启，是为了兼容旧文章：Jekyll 对没有 `published` 字段的旧文章按已发布处理。CMS 若默认关闭，会在编辑旧文章时把它意外下架。本配置显式使用 `default: true`；已有 `published: false` 的草稿仍会保持关闭。新建草稿因此需要你先关闭开关。[布尔字段](https://pagescms.org/docs/configuration/fields/boolean/)、[Jekyll 发布字段](https://jekyllrb.com/docs/front-matter/)

文章列表会显示发布状态：`True` 表示已标记发布，`False` 表示草稿。旧文章若没有 `published` 字段，这一列可能为空，**空白不代表草稿**；打开编辑表单后才会应用默认开启的状态。实际是否已上线还取决于网站部署结果。[官方列表显示实现](https://github.com/hunvreus/pagescms/blob/6f4e860a35d934406580287e7042e5e111e207a1/fields/core/boolean/view-component.tsx)

## 编辑旧文章，保持原网址

在「博客文章」列表中打开文章，修改后保存即可。已发布文章的「文章日期」和「网址短名」应保持原值；改其中任何一个都可能改变链接。

早期文章没有单独保存 `slug`（网址短名）。首次用 CMS 编辑时，必填框可能为空：从当前文件名取出日期后面的部分，去掉末尾 `.md`，填入即可。仓库现有课程文章应填写：

```text
ucsd-course-preview-ece-260a-ece-284
```

请保留它的日期 `2026-07-27`。这样首次保存可以补上等价的 `slug`，同时保持原网址；不要按中文标题另起短名。CMS 配置隐藏手工文件名输入，并关闭文章重命名操作。官方保存逻辑会沿用既有文章的文件路径，文件名模板只用于新建；但即使文件名不变，修改 frontmatter 中的日期或 `slug` 仍可能改变 Jekyll 生成的网址。配置本身没有移动或重写旧文章。[保存与重命名实现](https://github.com/hunvreus/pagescms/blob/6f4e860a35d934406580287e7042e5e111e207a1/components/entry/entry.tsx)

配置开启了 `settings.content.merge: true`，以保留表单未列出的原有 frontmatter 字段，例如封面、分享设置等；它不保证 YAML 注释、字段顺序或正文 Markdown 字节完全不变。[合并设置](https://pagescms.org/docs/configuration/settings/)

## 修改博客左侧导航

1. 在 CMS 打开「博客导航」。「左侧标题」可以把 `ZIBO NOTES` 改成你想显示的文字。
2. 在「菜单项目」中展开已有项目修改名称，或点击新增按钮。拖动项目左侧的手柄，可以调整它们在网页中的顺序。
3. 每个项目先填写「显示名称」，再选择下面三种方式之一；**链接地址、文章标签、子菜单不要混用**。
4. 保存后等待网站部署完成，再刷新 Blog 页面查看。导航保存在 `_data/blog-navigation.yml`；修改名称或顺序不会改写文章。

- **普通链接**：填写「链接地址」。例如显示名称填 `Home`、地址填 `/`；`Blogs` 对应 `/blogs/`。外部网页填写完整的 `https://` 链接。
- **按标签自动列文章**：填写「文章标签」，例如 `UCSD`；显示名称可以另写「课程笔记」。标签必须与文章里的标签完全一致，包括大小写和空格。以后新文章加上 `UCSD` 标签，就会自动出现在这组里，无需再改菜单。
- **手动子菜单**：在「子菜单」下新增名称和链接，例如把几篇指定文章放在同一组中。子项目也能拖动排序；父项目的链接地址和文章标签留空。

初始菜单已列出 Home、Blogs 和现有的五个标签：UCSD、VLSI、Digital Design、NPU、Course Notes。打开「博客导航」就能直接修改它们的显示名称和顺序；修改名称时，保留「文章标签」原值即可继续关联原来的文章。

「自动追加其他文章标签」默认开启，以后文章使用的新标签会自动补到菜单末尾。想控制某个新标签的显示名称或位置，再新增一个对应的标签菜单项目并拖到所需位置；自动部分会略过已经手动配置的标签。**开启自动追加时，删除一个标签菜单项目后，该标签仍会被自动补回来。** 若要完全隐藏某些标签，关闭这个开关，并在菜单项目中只保留需要显示的项目。

「显示标签下的文章数量」默认关闭；需要在标签旁显示篇数时再开启。删除菜单中的一项只移除这项导航，不会删除文章。当前配置禁止删除整个导航配置文件，仍可自由增删菜单项目。

对象列表和折叠标题依据 [Pages CMS 列表配置](https://pagescms.org/docs/configuration/content/list/)；拖拽排序由其编辑器提供。本次尚未在你的登录账号中实际拖动、保存这份导航，首次使用请保存后检查网页结果。

## 上传与插入图片

1. 在「博客图片」上传图片，或在正文 Editor 模式的图片菜单选择/上传。
2. 图片保存到 `assets/img/blog/`；插入正文的地址以 `/assets/img/blog/` 开头。JPG、JPEG、PNG、GIF、WebP、AVIF 可用；手机 HEIC 照片先导出为 JPG 或 WebP。
3. 上传采用随机文件名，降低多张 `image.jpg` 或中文文件名清理后发生重名的风险；不是用新上传去覆盖旧图片。图片原名不用于文章网址。
4. 插入后填写能描述图片的替代文字（ALT）。正文下方可另写简短图注。
5. 上传大照片前先压缩到适合网页的尺寸。图片只有在上传完成、文章保存成功、网站部署完成后，才能在正式页面可靠查看。[媒体配置](https://pagescms.org/docs/configuration/media/)

图片上传与文章保存是分开的操作：即使最后放弃保存文章，图片也可能已经提交到仓库。删除媒体前先确认没有其他文章引用，否则旧文章的图片会失效。

官方当前富文本实现也接入了拖入图片和粘贴图片上传；可以在 Editor 模式尝试。本次没有在你的已登录账号中实测拖入、粘贴或上传，结果还受浏览器剪贴板和文件类型影响。若没有开始上传或出现失败提示，改用图片菜单或「博客图片」上传，并等待完成后再保存。[官方上传接入](https://github.com/hunvreus/pagescms/blob/6f4e860a35d934406580287e7042e5e111e207a1/fields/core/rich-text/edit-component.tsx)

## Markdown、公式和复杂内容

正文上方的 **Editor / Source** 可切换富文本和 Markdown 源文。本配置保存 Markdown，不把文章改成 HTML。[富文本字段](https://pagescms.org/docs/configuration/fields/rich-text/)

普通段落、标题、链接、列表和代码块适合富文本。公式、Liquid 模板、HTML、自定义属性、脚注或复杂表格建议用 **Source**：打开文章后，先切到 Source，再开始修改；保存前检查源文，避免反复切回 Editor。

当前网站没有单独接入 MathJax / KaTeX 浏览器公式渲染器，本次 CMS 配置也没有新增它们。因此，公式源文可以保存，但 **不能保证 CMS 或正式网页将它排成数学公式**；本次没有自动转换公式或承诺支持某组公式分隔符。需要公式排版时，应另行配置并验证前台渲染。

不要把富文本往返理解为无损转换。当前官方编辑器使用 Tiptap 的 Markdown 解析和序列化；其启用的扩展没有专门的数学编辑节点。编辑器可能把公式当成普通文字，也可能重排空白、转义字符、表格或不支持的语法。即使 Source 中能输入，CMS 也不会替你验证网站是否支持该语法。复杂旧文应先保留原文副本，保存后在 GitHub 提交差异中检查，再看最终网页。若源文已经被改坏，先取消保存或从原文恢复；不要继续来回切换模式。[官方编辑器实现](https://github.com/hunvreus/pagescms/blob/6f4e860a35d934406580287e7042e5e111e207a1/components/ui/editor/index.tsx)

## 保存后没有看到变化

- 先确认 CMS 保存成功且选中了正确分支；再去 GitHub 仓库的 Actions / Pages 查看构建是否完成。
- 确认「发布到网站」已开启、日期不是尚未到来的日期，文件名符合 `YYYY-MM-DD-英文短名.md`。
- 更新旧文章后通常使用原网址；如果改过日期或短名，旧链接可能已经失效。
- 图片未出现时，检查媒体上传是否成功，以及源文里的路径是否以 `/assets/img/blog/` 开头。
- 若是源码格式、公式或部署报错，保留错误提示和对应文章文件名再排查，不必重建整个网站。

## 配置核对记录

本配置依据 Pages CMS 2.x 官方文档，并核对官方仓库提交 `6f4e860a35d934406580287e7042e5e111e207a1`：

- [字段初始化与文件名生成](https://github.com/hunvreus/pagescms/blob/6f4e860a35d934406580287e7042e5e111e207a1/lib/schema.ts)：缺失字段使用配置默认值；文件名用明确的 `{fields.date}` 和 `{fields.slug}`。`{year}` 等取当前时间，`{slug}` 是主标题字段的别名，均不适合作为这里的替代写法。
- [日期默认值实现](https://github.com/hunvreus/pagescms/blob/6f4e860a35d934406580287e7042e5e111e207a1/fields/core/date/index.ts)：未设置字段 `default` 时，使用 `new Date()` 初始化当前设备的本地日期；本配置以 `yyyy-MM-dd` 保存。
- [Source 模式与保存同步](https://github.com/hunvreus/pagescms/blob/6f4e860a35d934406580287e7042e5e111e207a1/fields/core/rich-text/edit-component.tsx)：支持源码输入；富文本被修改后会同步序列化结果。
- [上传文件命名](https://github.com/hunvreus/pagescms/blob/6f4e860a35d934406580287e7042e5e111e207a1/lib/utils/file.ts)：`rename: random` 使用时间和随机片段生成名称。

在线服务以后可能更新；如果界面文字或行为发生变化，以 [官方配置文档](https://pagescms.org/docs/configuration/) 和保存后的实际文件为准。
