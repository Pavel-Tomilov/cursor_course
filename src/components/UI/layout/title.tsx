"use client";

import { siteConfig } from "@/config/site.config";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

const Title = () => {
  const pathname = usePathname();
  const { t } = useTranslation(["navigation", "brand"]);

  const currentNavItem = siteConfig.navItems.find(
    (item) => item.href === pathname
  );

  const pageTitle = currentNavItem
    ? t(`navigation:${currentNavItem.translationKey}`)
    : t("brand:title");

  return (
    <div className="w-full flex justify-center my-6">
      <h1 className="text-3xl font-bold">{pageTitle}</h1>
    </div>
  );
};

export default Title;
