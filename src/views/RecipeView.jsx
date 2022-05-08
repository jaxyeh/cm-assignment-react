import React from "react";
import { useParams } from 'react-router-dom';
import getRecipe from "../api/getRecipe";

export default () => {
  const { id } = useParams();
  const [recipe, setRecipe] = React.useState(null);

  React.useEffect(() => {
    const fetchRecipeData = async() => {
      const data = await getRecipe(id);
      setRecipe(data);
    }
    if (id) fetchRecipeData();
  }, [setRecipe, id])

  if (!recipe) return null;

  return (
    <div>
      <h1>{ recipe.name }</h1>
      <img src={recipe.image} alt={recipe.name} />
      <p>rating: { recipe.rating }/5</p>
      { recipe.isPremium && <p>Premium recipe</p> }
      <ul>
        {
          Object.values(recipe.nutrients).map(({ value, unit, id }) => (
            <li key={ id }>{ value } { unit }</li>
          ))
        }
      </ul>
    </div>
  );
};
