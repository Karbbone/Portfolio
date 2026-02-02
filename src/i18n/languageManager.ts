import type { Language } from './config';
import { defaultLang } from './config';

const COOKIE_NAME = 'portfolio_lang';
const COOKIE_MAX_AGE = 365 * 24 * 60 * 60; // 1 year in seconds

/**
 * Get the preferred language from cookie or browser
 */
export function getPreferredLanguage(cookies: any, acceptLanguage?: string | null): Language {
  // Check cookie first
  const cookieLang = cookies.get(COOKIE_NAME)?.value;
  if (cookieLang === 'fr' || cookieLang === 'en') {
    return cookieLang;
  }

  // Check Accept-Language header
  if (acceptLanguage) {
    const browserLang = acceptLanguage.split(',')[0].split('-')[0].toLowerCase();
    if (browserLang === 'fr' || browserLang === 'en') {
      return browserLang;
    }
  }

  // Default fallback
  return defaultLang;
}

/**
 * Set the language preference cookie
 */
export function setLanguageCookie(cookies: any, lang: Language) {
  cookies.set(COOKIE_NAME, lang, {
    path: '/',
    maxAge: COOKIE_MAX_AGE,
    sameSite: 'lax',
    secure: true,
    httpOnly: false, // Allow JS access for client-side changes
  });
}
