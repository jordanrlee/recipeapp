//import { useContext } from "react";
import classes from "./RecipeItem.module.css";
import RecipeItemForm from "./RecipeItemForm";
//import CartContext from "../../../store/cart-context";

const RecipeItem = (props) => {

  
  return (
    <li className={classes.recipe}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.instructions}>{props.instructions}</div>
        <div className={classes.ingredients}>{props.ingredients}</div>
      </div>
      <div>
        <RecipeItemForm
        ></RecipeItemForm>
      </div>
    </li>
  );
};

export default RecipeItem;
