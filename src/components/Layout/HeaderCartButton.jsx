import { useEffect, useState } from "react";
//import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  // when the button is clicked, open the form to add a recipe
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}></span>
      <span> Add a Recipe Here!</span>
    </button>
  );
};

export default HeaderCartButton;
