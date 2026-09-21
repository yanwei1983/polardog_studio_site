'use client';

import { useEffect } from 'react';
import {
  languagePaths,
  languageStorageKey,
  resolveDefaultLocale,
} from '@/lib/site-language';

export function LanguageRedirect() {
  useEffect(() => {
    let saved = null;
    try {
      saved = localStorage.getItem(languageStorageKey);
    } catch {
      // Browser language remains available when storage is disabled.
    }
    const locale = resolveDefaultLocale(
      saved,
      navigator.languages?.[0] || navigator.language,
    );
    const destination = new URL(window.location.href);
    destination.pathname = languagePaths[locale];
    window.location.replace(destination.href);
  }, []);

  return (
    <main
      style={{
        minHeight: '100svh',
        display: 'grid',
        placeContent: 'center',
        justifyItems: 'center',
        gap: '24px',
      }}
    >
      <p style={{ fontSize: '24px', fontWeight: 700 }}>PolarDog Studio</p>
      <nav aria-label="选择语言 / Choose language" style={{ display: 'flex', gap: '24px' }}>
        <a href={languagePaths.zh} hrefLang="zh-CN" lang="zh-CN">中文</a>
        <a href={languagePaths.en} hrefLang="en" lang="en">English</a>
      </nav>
    </main>
  );
}
