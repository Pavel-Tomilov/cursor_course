import { i18nConfig } from "@/config/i18n.config";
import type { SupportedLanguage } from "@/types/i18n";

export function isSupportedLanguage(value: string): value is SupportedLanguage {
  return i18nConfig.supportedLanguages.includes(value as SupportedLanguage);
}

export function persistLanguage(language: SupportedLanguage): void {
  document.cookie = `${i18nConfig.cookieKey}=${language};path=/;max-age=31536000;SameSite=Lax`;
  document.documentElement.lang = language;
}

export function detectClientLanguage(
  fallback: SupportedLanguage
): SupportedLanguage {
  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${i18nConfig.cookieKey}=`))
    ?.split("=")[1];

  if (cookieValue && isSupportedLanguage(cookieValue)) {
    return cookieValue;
  }

  const browserLanguage = navigator.language.split("-")[0];

  if (isSupportedLanguage(browserLanguage)) {
    return browserLanguage;
  }

  return fallback;
}
