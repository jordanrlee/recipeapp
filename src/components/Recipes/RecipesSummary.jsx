import classes from "./RecipesSummary.module.css";

const RecipesSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Awesome Recipes just to hit that spot!</h2>
      <p>
        Choose your favorite recipe from our selection of available recipes, or
        add one!
      </p>
      <p>
        All our recipes are chosen by credible chefs and are guaranteed to be of 
        the highest quality!
      </p>
    </section>
  );
};

export default RecipesSummary;
