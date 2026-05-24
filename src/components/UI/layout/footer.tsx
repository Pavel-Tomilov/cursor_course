"use client";

import { layoutConfig } from "@/config/layout.config";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation("brand");

  return (
    <footer
      className="w-full flex items-center justify-center py-3"
      style={{ height: layoutConfig.footerHeight }}
    >
      <p>{t("description")}</p>
    </footer>
  );
}
