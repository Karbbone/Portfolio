export const languages = {
  fr: 'Français',
  en: 'English',
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = 'fr';

export const languageLabels: Record<Language, string> = {
  fr: 'Français',
  en: 'English',
};
