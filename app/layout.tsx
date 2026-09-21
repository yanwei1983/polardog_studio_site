import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://polardog.cc'),
  title: 'PolarDog Studio｜原创游戏研发团队',
  description:
    'PolarDog Studio 专注于原创科幻游戏与长期在线世界的研发，代表作品《The Second Epoch / 第二纪元》。',
  applicationName: 'PolarDog Studio',
  keywords: ['PolarDog', 'PolarDog Studio', '第二纪元', 'The Second Epoch', '游戏研发'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://polardog.cc',
    siteName: 'PolarDog Studio',
    title: 'PolarDog Studio｜原创游戏研发团队',
    description: '创造值得长期生活其中的游戏世界。',
  },
  twitter: {
    card: 'summary',
    title: 'PolarDog Studio｜原创游戏研发团队',
    description: '创造值得长期生活其中的游戏世界。',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
