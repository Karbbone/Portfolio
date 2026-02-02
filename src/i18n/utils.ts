import { defaultLang, type Language } from './config';

export async function getTranslations(lang: string) {
  try {
    const translations = await import(`./translations/${lang}.json`);
    return translations.default || translations;
  } catch (e) {
    console.warn(`Translation file for "${lang}" not found, falling back to "${defaultLang}"`);
    const fallback = await import(`./translations/${defaultLang}.json`);
    return fallback.default || fallback;
  }
}

export function t(key: string, translations: any): string {
  const keys = key.split('.');
  let result = translations;

  for (const k of keys) {
    if (result && typeof result === 'object' && k in result) {
      result = result[k];
    } else {
      console.warn(`Translation key "${key}" not found`);
      return key;
    }
  }

  return typeof result === 'string' ? result : key;
}

export function useTranslations(translations: any) {
  return (key: string) => t(key, translations);
}
