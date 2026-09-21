import type { Locale } from './site-copy';

export const languageStorageKey = 'polardog-language';
export const languagePaths: Record<Locale, string> = {
  zh: '/cn/',
  en: '/en/',
};

export function resolveDefaultLocale(
  saved: string | null,
  browserLanguage: string,
): Locale {
  if (saved === 'zh' || saved === 'en') return saved;
  return /^zh(?:-|$)/i.test(browserLanguage) ? 'zh' : 'en';
}
