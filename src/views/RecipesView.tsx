import React, { useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import NutrientItem from "../components/NutrientItem";
import getRecipes from "../api/getRecipes";
import trophyIcon from "../assets/trophy.svg";
import { AppContext } from "../store/app";

import "./RecipesView.css";
import { useQuery } from "@tanstack/react-query";
import { Nutrient, NutrientName, Recipe, Unit } from "../types/recipe";

const RecipesView = () => {
  const navigate = useNavigate();
  const { user } = useContext(AppContext);

  const [recipes, setReceipes] = useState<Recipe[] | undefined>(undefined);
  const { status, data, isLoading, error } = useQuery<Recipe[], Error>({
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

  console.log("RERENDER");
  console.log("user:", user);
  console.log("receipes:", recipes);

  const getEnergyValue = useCallback(
    (recipeUnit: Unit, value: number) => {
      let label;
      if (recipeUnit !== user?.units.energy) {
        if (recipeUnit === "kilojoule") {
          label = "kCal";
          value = value / 4.184;
        } else {
          label = "kJ";
          value = value * 4.184;
        }
      } else {
        if (recipeUnit === "kilojoule") {
          label = "kJ";
        } else {
          label = "kCal";
        }
      }
      return {
        label,
        value,
      };
    },
    [user?.units.energy]
  );

  const round = React.useCallback((num: number, decimalPlaces = 2) => {
    const p = Math.pow(10, decimalPlaces);
    return Math.round(num * p) / p;
  }, []);

  return (
    <div className="recipes">
      {status === "loading" ? (
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
                key={index}
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
                            name={index === 0 ? "Carbs" : null}
                            value={value + "g"}
                            className="carbs"
                          />
                        )}
                        {nutrientName === NutrientName.Proteins && (
                          <NutrientItem
                            name={index === 0 ? "Protein" : null}
                            value={value + "g"}
                            className="protein"
                          />
                        )}
                        {nutrientName === NutrientName.Fat && (
                          <NutrientItem
                            name={index === 0 ? "Fat" : null}
                            value={value + "g"}
                            className="fat"
                          />
                        )}
                        {nutrientName === NutrientName.Energy && (
                          <NutrientItem
                            name={
                              index === 0
                                ? getEnergyValue(unit, value).label
                                : null
                            }
                            value={round(getEnergyValue(unit, value).value)}
                            className="energy"
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
                      Premium
                    </div>
                  )}
                  {recipe.tags.map((tag: any) => (
                    <div className="tag" key={tag}>
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      {!recipes?.length && !isLoading && <div>Unable to load recipes</div>}
    </div>
  );
};

export default RecipesView;
