import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { i18nConfig } from "@/config/i18n.config";
import type { I18nNamespace, SupportedLanguage } from "@/types/i18n";

export const i18nInstance = i18n.createInstance();

async function loadNamespace(
  language: SupportedLanguage,
  namespace: I18nNamespace
): Promise<void> {
  if (i18nInstance.hasResourceBundle(language, namespace)) {
    return;
  }

  const url = `/${i18nConfig.localesPath}/${language}/${namespace}.json`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to load translations: ${url}`);
  }

  const resources = await response.json();
  i18nInstance.addResourceBundle(language, namespace, resources, true, true);
}

export async function loadLanguageResources(
  language: SupportedLanguage
): Promise<void> {
  await Promise.all(
    i18nConfig.namespaces.map((namespace) => loadNamespace(language, namespace))
  );
}

export async function initI18nInstance(
  language: SupportedLanguage
): Promise<void> {
  if (!i18nInstance.isInitialized) {
    await i18nInstance.use(initReactI18next).init({
      lng: language,
      fallbackLng: i18nConfig.defaultLanguage,
      supportedLngs: [...i18nConfig.supportedLanguages],
      ns: [...i18nConfig.namespaces],
      defaultNS: "common",
      interpolation: { escapeValue: false },
      react: { useSuspense: false }
    });
  }

  await loadLanguageResources(language);
  await i18nInstance.changeLanguage(language);
}
