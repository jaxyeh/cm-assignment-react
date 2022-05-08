import maybeReturn from "../common/maybeReturn";
import recipesMock from "./recipes-mock";
import { Recipe } from "./types";

export const getRecipes = (): Promise<Recipe[]> =>
  maybeReturn(() => recipesMock);

export default getRecipes;
