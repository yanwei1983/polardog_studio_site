# PolarDog Studio 官网

PolarDog Studio 的公司官网，介绍团队、旗舰产品《The Second Epoch / 第二纪元》、公司理念、招聘方向与联系方式。

## 本地开发

```bash
pnpm install
pnpm dev
```

## 生产构建

```bash
pnpm build
```

静态站点输出到 `dist/client`，可直接发布到 Cloudflare Pages。

运行 `pnpm start` 可在本地 `http://localhost:3002` 检查静态生产文件，无需启动 Workers 运行时。

## 内容维护

- 中文与英文文案：`lib/site-copy.ts`
- 页面组件与语言切换：`components/studio-site.tsx`
- 默认语言入口：`app/page.tsx`；中文路由：`app/cn/page.tsx`；英文路由：`app/en/page.tsx`
- 默认语言判断与路径：`lib/site-language.ts`、`components/language-redirect.tsx`
- 拖动、指针与滚动视差：`lib/use-studio-motion.ts`
- 全局视觉与响应式样式：`app/globals.css`
- 页面元数据：`app/layout.tsx`
- 网站主视觉：`public/images/`
- 公司 Logo 与网站图标：`public/brand/`、`public/favicon.ico`
- 品牌素材来源与首图生成记录：[docs/brand-assets.md](docs/brand-assets.md)

默认入口 `/` 优先使用已保存的手动语言选择，否则每次根据浏览器当前首选语言跳转：中文（含 `zh-CN`、`zh-TW`、`zh-HK`）使用 `/cn/`，其他语言使用 `/en/`。明确访问 `/cn/` 或 `/en/` 时始终显示对应语言。仅手动切换时记住选择；禁用浏览器存储时仍可正常切换。右上角语言切换保留当前章节和查询参数。

产品图片和按钮按当前语言跳转：中文使用 `https://tse.polardog.cc/cn/`，英文使用 `https://tse.polardog.cc/en/`。游戏官网使用相同的默认语言与固定语言路径规则。

## 构建说明

Windows 下 vinext 1.0.0-beta.5 的构建完成阶段会立即调用 `process.exit(0)`，可能在原生工作线程关闭时触发 libuv 断言。`patches/vinext@1.0.0-beta.5.patch` 通过 pnpm 的 `patchedDependencies` 管理，只让 Windows 成功构建自然退出，保留所有失败退出；其他平台不受影响。升级 vinext 时应重新验证并移除不再需要的补丁。

同一补丁修正 App Router 预渲染时的尾斜杠 URL：`trailingSlash: true` 会生成 `en/index.html`，预渲染请求也必须使用 `/en/`，否则 beta.5 会将正常的规范地址重定向误判为动态路由并跳过英文页。此修正同时覆盖 HTML 和 RSC 请求。

## Cloudflare Pages

- GitHub：[yanwei1983/polardog_studio_site](https://github.com/yanwei1983/polardog_studio_site)
- Pages 项目：`polardog-studio-site`
- Pages 地址：[polardog-studio-site.pages.dev](https://polardog-studio-site.pages.dev)
- 正式域名：[polardog.cc](https://polardog.cc/)；中文版：[polardog.cc/cn/](https://polardog.cc/cn/)；英文版：[polardog.cc/en/](https://polardog.cc/en/)
- 主域名 DNS：代理的 `CNAME @ → polardog-studio-site.pages.dev`，TTL 为自动

Pages 使用 GitHub 仓库的 `main` 作为生产分支，构建命令为
`pnpm install --frozen-lockfile && pnpm build`，输出目录为 `dist/client`。
构建环境设置 `NODE_VERSION=22.16.0`、`PNPM_VERSION=11.19.0`、
`SKIP_DEPENDENCY_INSTALL=1`，使用项目指定的 pnpm 完成依赖安装。
本机的共享 pnpm 存储由机器配置管理。

推送后自动部署需要在 GitHub 的 **Cloudflare Workers and Pages** 应用中授权
`yanwei1983/polardog_studio_site`，并在 Pages 中启用生产分支自动部署。
如项目显示 Git 帐户连接已断开，应先检查该应用的仓库授权范围。

需要手动发布已验证的静态产物时，在项目根目录执行：

```bash
pnpm exec wrangler pages deploy dist/client --project-name polardog-studio-site --branch main
```

Cloudflare 的项目与 DNS 凭据由本机登录或平台授权管理，不写入仓库。

页面的公司介绍、招聘方向与联系邮箱属于当前官网文案；正式发布前应核对商务与招聘邮箱。

© 2026 PolarDog Studio.
