import type { Metadata } from 'next';
import { StudioSite } from '@/components/studio-site';

export const metadata: Metadata = {
  alternates: {
    canonical: '/cn/',
    languages: { 'zh-CN': '/cn/', en: '/en/', 'x-default': '/' },
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    alternateLocale: 'en_US',
    url: 'https://polardog.cc/cn/',
    siteName: 'PolarDog Studio',
    title: 'PolarDog Studio｜原创游戏研发团队',
    description: '创造值得长期生活其中的游戏世界。',
  },
};

export default function ChineseHome() {
  return <StudioSite locale="zh" />;
}
