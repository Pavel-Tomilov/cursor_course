"use client";

import RecipeCard from "@/components/common/recipe-card";
import { useRecipeStore } from "@/store/recipe.store";
import { Button } from "@heroui/react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { recipes, isLoading, error } = useRecipeStore();
  const { t } = useTranslation(["recipes", "common"]);

  return (
    <>
      <div className="flex w-full justify-center items-center mb-4">
        <Link href="/recipes/new">
          <Button color="primary">{t("recipes:addRecipe")}</Button>
        </Link>
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {isLoading && <p>{t("common:status.loading")}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </>
  );
}
