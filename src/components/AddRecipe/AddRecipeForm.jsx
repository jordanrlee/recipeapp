import useInput from '../../hooks/useInput'
import classes from './AddRecipeForm.module.css'

const AddRecipeForm = (props) => {
    // add recipe to database handler
    const addRecipeToDatabaseHandler = (recipe) => {
        fetch(
          "https://recipe-app-29bfe-default-rtdb.firebaseio.com/Recipes.json",
          {
            method: "POST",
            body: JSON.stringify(recipe),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
    }

    // states
    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangedHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput
        } = useInput(value => value.trim() !== '');

    const {
        value: enteredInstructions,
        isValid: enteredInstructionsIsValid,
        hasError: instructionsInputHasError,
        valueChangeHandler: instructionsChangedHandler,
        inputBlurHandler: instructionsBlurHandler,
        reset: resetInstructionsInput
        } = useInput(value => value.trim() !== '');

    const {
        value: enteredIngredients,
        isValid: enteredIngredientsIsValid,
        hasError: ingredientsInputHasError,
        valueChangeHandler: ingredientsChangedHandler,
        inputBlurHandler: ingredientsBlurHandler,
        reset: resetIngredientsInput
        } = useInput(value => value.trim() !== '');

    // variables
    let formIsValid = false;
    if (enteredNameIsValid && enteredInstructionsIsValid && enteredIngredientsIsValid) {
        formIsValid = true;
    }

            // variable for recipe object
            const recipe = {
                name: enteredName,
                instructions: enteredInstructions,
                ingredients: enteredIngredients
            }

    // handlers
    const formSubmitHandler = (event) => {
        event.preventDefault();

        if (!formIsValid) {
            return;
        }

        addRecipeToDatabaseHandler(recipe);
        console.log('Recipe added to database')
        console.log(recipe)
        console.log(enteredName);
        console.log(enteredInstructions);
        console.log(enteredIngredients);

        resetNameInput();
        resetInstructionsInput();
        resetIngredientsInput();
    }

    // classes for styling
    const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
    const instructionsInputClasses = instructionsInputHasError ? 'form-control invalid' : 'form-control';
    const ingredientsInputClasses = ingredientsInputHasError ? 'form-control invalid' : 'form-control';
    // handle the conditional button styling
     const buttonClasses = !formIsValid ? classes.buttonInvalid : classes.button;
    // JSX
    return (
        <form onSubmit={formSubmitHandler} >
            <div className={nameInputClasses}>
                <label htmlFor='name'>Recipe Name</label>
                <input
                    type='text'
                    id='name'
                    onChange={nameChangedHandler}
                    onBlur={nameBlurHandler}
                    value={enteredName}
                />
                {nameInputHasError && <p className='error-text'>Please enter a valid name.</p>}
            </div>
            <div className={instructionsInputClasses}>
                <label htmlFor='name'>Instructions</label>
                <textarea
                    id='instructions'
                    rows='5'
                    onChange={instructionsChangedHandler}
                    onBlur={instructionsBlurHandler}
                    value={enteredInstructions}
                />
                {instructionsInputHasError && <p className='error-text'>Please enter valid instructions.</p>}
            </div>
            <div className={ingredientsInputClasses}>
                <label htmlFor='name'>Ingredients</label>
                <textarea
                    id='ingredients'
                    rows='5'
                    onChange={ingredientsChangedHandler}
                    onBlur={ingredientsBlurHandler}
                    value={enteredIngredients}
                />
                {ingredientsInputHasError && <p className='error-text'>Please enter valid ingredients.</p>}
            </div>
            <div className='recipe-form__actions'>
                <button className={buttonClasses} type='submit' disabled={!formIsValid}>Add Recipe</button>
            </div>
        </form>
    )

}

export default AddRecipeForm