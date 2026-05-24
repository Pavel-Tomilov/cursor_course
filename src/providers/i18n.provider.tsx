"use client";

import { I18nextProvider } from "react-i18next";
import { useEffect } from "react";
import { i18nInstance } from "@/lib/i18n";
import { useI18nStore } from "@/store/i18n.store";
import type { SupportedLanguage } from "@/types/i18n";

interface I18nProviderProps {
  children: React.ReactNode;
  initialLanguage: SupportedLanguage;
}

export function I18nProvider({ children, initialLanguage }: I18nProviderProps) {
  const { initialize, isReady } = useI18nStore();

  useEffect(() => {
    void initialize(initialLanguage);
  }, [initialize, initialLanguage]);

  if (!isReady) {
    return <>{children}</>;
  }

  return <I18nextProvider i18n={i18nInstance}>{children}</I18nextProvider>;
}
