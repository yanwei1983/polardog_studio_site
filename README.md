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

## 内容维护

- 页面内容：`app/page.tsx`
- 全局视觉与响应式样式：`app/globals.css`
- 页面元数据：`app/layout.tsx`
- 网站主视觉：`public/images/`

© 2026 PolarDog Studio.
