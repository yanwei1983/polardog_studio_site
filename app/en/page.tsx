import type { Metadata } from 'next';
import { StudioSite } from '@/components/studio-site';

export const metadata: Metadata = {
  title: 'PolarDog Studio | Worlds Beyond the Known',
  description:
    'PolarDog Studio creates original science-fiction games and lasting online worlds. Discover The Second Epoch, our studio, and opportunities to join us.',
  alternates: {
    canonical: '/en/',
    languages: { 'zh-CN': '/', en: '/en/', 'x-default': '/' },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'zh_CN',
    url: 'https://polardog.cc/en/',
    siteName: 'PolarDog Studio',
    title: 'PolarDog Studio | Worlds Beyond the Known',
    description: 'We create worlds worth getting lost in.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PolarDog Studio | Worlds Beyond the Known',
    description: 'We create worlds worth getting lost in.',
  },
};

export default function EnglishHome() {
  return <StudioSite locale="en" />;
}
