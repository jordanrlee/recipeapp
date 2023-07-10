import classes from "./AvailableRecipes.module.css";
import Card from "../UI/Card";
import RecipeItem from "./RecipeItem/RecipeItem";
import { useEffect, useState, useCallback } from "react";

const AvailableRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    fetchRecipesHandler();
    }, []);

    const fetchRecipesHandler = useCallback(async () => {
    //const fetchRecipes = async () => {
      try {
        const response = await fetch(
          "https://recipe-app-29bfe-default-rtdb.firebaseio.com/Recipes.json"
          );

        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        const responseData = await response.json();

        const loadedRecipes = [];

        for (const key in responseData) {
          loadedRecipes.push({
            id: key,
            name: responseData[key].name,
            ingredients: responseData[key].ingredients,
            instructions: responseData[key].instructions,
          });
        }
        setRecipes(loadedRecipes);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setHttpError(error.message);
      }
    });
//     fetchRecipes();
//   }, []);

  if (isLoading) {
    return (
      <section className={classes.RecipesLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.RecipesError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const recipesList = recipes.map((recipe) => (
    <RecipeItem
      id={recipe.id}
      key={recipe.id}
      name={recipe.name}
      ingredients={recipe.ingredients}
      instructions={recipe.instructions}
    />
  ));

  return (
    <section className={classes.recipes}>
        <button onClick={fetchRecipesHandler}>Fetch Recipes</button>
      <Card>
        <ul>{recipesList}</ul>
      </Card>
    </section>
  );
};

export default AvailableRecipes;
