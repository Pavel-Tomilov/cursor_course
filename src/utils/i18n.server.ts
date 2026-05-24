import "server-only";

import { cookies } from "next/headers";
import { i18nConfig } from "@/config/i18n.config";
import type { SupportedLanguage } from "@/types/i18n";
import { isSupportedLanguage } from "@/utils/i18n";

export async function getServerLanguage(): Promise<SupportedLanguage> {
  const cookieStore = await cookies();
  const stored = cookieStore.get(i18nConfig.cookieKey)?.value;

  if (stored && isSupportedLanguage(stored)) {
    return stored;
  }

  return i18nConfig.defaultLanguage;
}
