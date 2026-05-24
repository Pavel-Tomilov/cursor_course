export type SupportedLanguage = "ru" | "en" | "ta";

export type I18nNamespace = "common" | "brand" | "navigation" | "recipes";

export type NavigationKey = "recipes" | "ingredients" | "about";

export interface I18nLanguageOption {
  code: SupportedLanguage;
  label: string;
}

export interface I18nConfig {
  defaultLanguage: SupportedLanguage;
  supportedLanguages: readonly SupportedLanguage[];
  namespaces: readonly I18nNamespace[];
  localesPath: string;
  cookieKey: string;
}

export interface I18nState {
  language: SupportedLanguage;
  isReady: boolean;
  initialize: (initialLanguage: SupportedLanguage) => Promise<void>;
  setLanguage: (language: SupportedLanguage) => Promise<void>;
}
