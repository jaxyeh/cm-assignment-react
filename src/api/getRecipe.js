const getRecipe = (id) =>
  fetch(`http://localhost:8080/recipe/${id}`).then((response) =>
    response.json()
  );

export default getRecipe;
