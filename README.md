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
- 中文路由：`app/page.tsx`；英文路由：`app/en/page.tsx`
- 拖动、指针与滚动视差：`lib/use-studio-motion.ts`
- 全局视觉与响应式样式：`app/globals.css`
- 页面元数据：`app/layout.tsx`
- 网站主视觉：`public/images/`

右上角语言切换保留当前章节，并在浏览器允许时记住所选语言。默认访问 `/`，英文版本位于 `/en/`。产品入口统一配置为 `https://tse.polardog.cc/`。

## 构建说明

Windows 下 vinext 1.0.0-beta.5 的构建完成阶段会立即调用 `process.exit(0)`，可能在原生工作线程关闭时触发 libuv 断言。`patches/vinext@1.0.0-beta.5.patch` 通过 pnpm 的 `patchedDependencies` 管理，只让 Windows 成功构建自然退出，保留所有失败退出；其他平台不受影响。升级 vinext 时应重新验证并移除不再需要的补丁。

同一补丁修正 App Router 预渲染时的尾斜杠 URL：`trailingSlash: true` 会生成 `en/index.html`，预渲染请求也必须使用 `/en/`，否则 beta.5 会将正常的规范地址重定向误判为动态路由并跳过英文页。此修正同时覆盖 HTML 和 RSC 请求。

## Cloudflare Pages

构建命令：`pnpm build`；输出目录：`dist/client`；生产分支：`main`。安装时使用 `pnpm install --frozen-lockfile`，共享 pnpm 存储由机器配置管理。

页面的公司介绍、招聘方向与联系邮箱属于当前官网文案；正式发布前应核对商务与招聘邮箱。

© 2026 PolarDog Studio.
