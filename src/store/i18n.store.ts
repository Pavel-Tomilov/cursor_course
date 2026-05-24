import { create } from "zustand";
import { i18nConfig } from "@/config/i18n.config";
import { i18nInstance, initI18nInstance, loadLanguageResources } from "@/lib/i18n";
import type { I18nState, SupportedLanguage } from "@/types/i18n";
import { detectClientLanguage, persistLanguage } from "@/utils/i18n";

export const useI18nStore = create<I18nState>((set, get) => ({
  language: i18nConfig.defaultLanguage,
  isReady: false,

  initialize: async (initialLanguage: SupportedLanguage) => {
    if (get().isReady) {
      return;
    }

    const language = detectClientLanguage(initialLanguage);

    await initI18nInstance(language);
    persistLanguage(language);

    set({ language, isReady: true });
  },

  setLanguage: async (language: SupportedLanguage) => {
    const { language: currentLanguage, isReady } = get();

    if (!isReady || currentLanguage === language) {
      return;
    }

    await loadLanguageResources(language);
    await i18nInstance.changeLanguage(language);
    persistLanguage(language);

    set({ language });
  }
}));
