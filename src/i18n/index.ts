import type { Locale, Translations } from "./types";
import fr from "./translations/fr.json";
import en from "./translations/en.json";

const translations: Record<Locale, Translations> = {
  fr: fr as Translations,
  en: en as Translations,
};

export const defaultLocale: Locale = "fr";
export const supportedLocales: Locale[] = ["fr", "en"];

/**
 * Detect language from Accept-Language header
 * Returns 'fr' if French is preferred, 'en' otherwise
 */
export function detectLanguage(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return "en";

  // Parse Accept-Language header and get the first language
  const languages = acceptLanguage
    .split(",")
    .map((lang) => {
      const [code, qValue] = lang.trim().split(";q=");
      return {
        code: code.toLowerCase().split("-")[0], // Get base language code (fr-FR -> fr)
        q: qValue ? parseFloat(qValue) : 1.0,
      };
    })
    .sort((a, b) => b.q - a.q);

  // Check if French is in the preferred languages with highest priority
  for (const lang of languages) {
    if (lang.code === "fr") return "fr";
    // If any other language comes first with higher priority, use English
    return "en";
  }

  return "en";
}

/**
 * Get translations for a specific locale
 */
export function getTranslations(locale: Locale): Translations {
  return translations[locale] || translations.en;
}

/**
 * Get a specific translation by key path
 * Example: t('header.about', locale) => "À propos" or "About"
 */
export function t(key: string, locale: Locale): string {
  const keys = key.split(".");
  let value: unknown = translations[locale];

  for (const k of keys) {
    if (value && typeof value === "object" && k in value) {
      value = (value as Record<string, unknown>)[k];
    } else {
      return key; // Return key if translation not found
    }
  }

  return typeof value === "string" ? value : key;
}

/**
 * Replace {placeholder} in translation strings
 */
export function interpolate(
  text: string,
  params: Record<string, string>
): string {
  return text.replace(/\{(\w+)\}/g, (_, key) => params[key] || `{${key}}`);
}

export type { Locale, Translations };
