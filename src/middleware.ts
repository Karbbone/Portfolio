import { defineMiddleware } from "astro:middleware";
import { detectLanguage, type Locale } from "./i18n";

// Extend Astro.locals type
declare global {
  namespace App {
    interface Locals {
      locale: Locale;
    }
  }
}

export const onRequest = defineMiddleware(async (context, next) => {
  // Check for locale cookie first (user preference)
  const cookies = context.request.headers.get("cookie") || "";
  const localeCookie = cookies
    .split(";")
    .find((c) => c.trim().startsWith("locale="));
  const cookieLocale = localeCookie?.split("=")[1]?.trim() as Locale | undefined;

  let locale: Locale;

  if (cookieLocale && (cookieLocale === "fr" || cookieLocale === "en")) {
    // Use cookie preference
    locale = cookieLocale;
  } else {
    // Fall back to Accept-Language detection
    const acceptLanguage = context.request.headers.get("accept-language");
    locale = detectLanguage(acceptLanguage);
  }

  // Store locale in context.locals for use in components
  context.locals.locale = locale;

  return next();
});
