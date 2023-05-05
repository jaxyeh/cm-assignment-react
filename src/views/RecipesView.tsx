import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import NutrientItem from "../components/NutrientItem";
import EnergyItem from "../components/EnergyItem";
import getRecipes from "../api/getRecipes";
import { AppContext } from "../store/app";
import { Nutrient, NutrientName, Recipe } from "../types/recipe";
import { useTranslation } from "react-i18next";
import "./RecipesView.css";
// @ts-ignore
import trophyIcon from "../assets/trophy.svg";

const RecipesView = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { user } = useContext(AppContext);

  const [recipes, setReceipes] = useState<Recipe[] | undefined>(undefined);

  const { data, isFetching, status, error } = useQuery<Recipe[], Error>({
    queryKey: ["receipes"],
    queryFn: getRecipes,
    onSuccess: setReceipes,
  });

  const goToSingleRecipe = (id: number) =>
    navigate(`/recipe/${id}`, { replace: true });

  const filterRecipes = React.useCallback(
    (value: string) =>
      setReceipes(
        data?.filter(({ name }) =>
          name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
        )
      ),
    [data]
  );

  return (
    <div className="recipes">
      {isFetching ? (
        "Loading..."
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          <input
            placeholder="Search foods and servings&hellip;"
            className="search"
            type="text"
            onChange={(event) => filterRecipes(event.target.value)}
          />
          <div className="list">
            {recipes?.map((recipe, index) => (
              <div
                key={recipe.id}
                className="recipe-item"
                onClick={() => goToSingleRecipe(recipe.id)}
              >
                <div className="recipe-name">{recipe.name}</div>
                <img
                  className="recipeImage"
                  src={recipe.image}
                  alt={recipe.name}
                />
                <div className="nutrients">
                  {Object.keys(recipe.nutrients).map((key) => {
                    const nutrientName = key as keyof Record<
                      NutrientName,
                      Nutrient
                    >;
                    const nutrient = recipe.nutrients[nutrientName];
                    if (!nutrient) return null;
                    const { unit, value } = nutrient;
                    return !nutrient ? null : (
                      <React.Fragment key={value}>
                        {nutrientName === NutrientName.Carbs && (
                          <NutrientItem
                            name={index === 0 ? t("Carbs") : null}
                            value={value + "g"}
                            className="carbs"
                          />
                        )}
                        {nutrientName === NutrientName.Proteins && (
                          <NutrientItem
                            name={index === 0 ? t("Protein") : null}
                            value={value + "g"}
                            className="protein"
                          />
                        )}
                        {nutrientName === NutrientName.Fat && (
                          <NutrientItem
                            name={index === 0 ? t("Fat") : null}
                            value={value + "g"}
                            className="fat"
                          />
                        )}
                        {nutrientName === NutrientName.Energy && (
                          <EnergyItem
                            energyValue={value}
                            energyUnit={unit}
                            defaultUnit={user?.units.energy}
                            displayLabel={index === 0}
                          />
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
                <div className="tags">
                  {recipe.isPremium && (
                    <div className="tag premium">
                      <img className="trophy" src={trophyIcon} alt="Premium" />
                      {t("Premium")}
                    </div>
                  )}
                  {recipe.tags.map((tag: any) => (
                    <div className="tag" key={tag}>
                      {t(tag)}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default RecipesView;
