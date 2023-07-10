import RecipesSummary from "./RecipesSummary";
import AvailableRecipes from "./AvailableRecipes";

const Recipes = () => {
  const fetchRecipeHandler = async () => {
    const response = await fetch(
      "https://recipe-app-29bfe-default-rtdb.firebaseio.com/Recipes.json"
    );
    const responseData = await response.json();
    console.log(responseData);
  };
  

  return (
    <>
      <RecipesSummary />
      <AvailableRecipes />
    </>
  );
};

export default Recipes;
