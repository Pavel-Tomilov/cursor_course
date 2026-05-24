"use client";

import { Select, SelectItem } from "@heroui/react";
import { i18nLanguageOptions } from "@/config/i18n.config";
import { useI18nStore } from "@/store/i18n.store";
import { isSupportedLanguage } from "@/utils/i18n";
export default function LanguageSwitcher() {
  const { language, setLanguage, isReady } = useI18nStore();

  const handleSelectionChange = (keys: "all" | Set<React.Key>) => {
    if (keys === "all") {
      return;
    }

    const selected = Array.from(keys)[0];

    if (typeof selected === "string" && isSupportedLanguage(selected)) {
      void setLanguage(selected);
    }
  };

  if (!isReady) {
    return null;
  }

  return (
    <Select
      aria-label="Язык интерфейса"
      size="sm"
      variant="flat"
      className="w-[140px]"
      selectedKeys={[language]}
      classNames={{
        trigger: "bg-default-100",
        value: "text-sm"
      }}
      onSelectionChange={handleSelectionChange}
    >
      {i18nLanguageOptions.map((option) => (
        <SelectItem key={option.code} className="text-black">
          {option.label}
        </SelectItem>
      ))}
    </Select>
  );
}
