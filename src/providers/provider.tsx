"use client";

import { HeroUIProvider } from "@heroui/react";
import { I18nProvider } from "@/providers/i18n.provider";
import type { SupportedLanguage } from "@/types/i18n";

interface ProvidersProps {
  children: React.ReactNode;
  initialLanguage: SupportedLanguage;
}

export function Providers({ children, initialLanguage }: ProvidersProps) {
  return (
    <I18nProvider initialLanguage={initialLanguage}>
      <HeroUIProvider>{children}</HeroUIProvider>
    </I18nProvider>
  );
}
