import type { I18nConfig, I18nLanguageOption } from "@/types/i18n";

export const i18nConfig: I18nConfig = {
  defaultLanguage: "ru",
  supportedLanguages: ["ru", "en", "ta"],
  namespaces: ["common", "brand", "navigation", "recipes"],
  localesPath: "locales",
  cookieKey: "language"
};

export const i18nLanguageOptions: I18nLanguageOption[] = [
  { code: "ru", label: "Русский" },
  { code: "en", label: "English" },
  { code: "ta", label: "Татар" }
];
