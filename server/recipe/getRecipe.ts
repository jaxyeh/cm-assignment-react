import maybeReturn from "../common/maybeReturn";
import recipesMock from "./recipes-mock";
import { Recipe } from "./types";

export const getRecipe = (id: number): Promise<Recipe | null> =>
  maybeReturn(() => {
    const recipe = recipesMock.find((recipe) => recipe.id === id);

    return recipe || null;
  });

export default getRecipe;
