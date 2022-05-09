const getRecipes = () =>
  fetch("http://localhost:8080/recipes").then((response) => response.json());

export default getRecipes;
