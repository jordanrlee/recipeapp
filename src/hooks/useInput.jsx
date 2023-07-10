import { useState } from "react";

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    // check if the input is valid
    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    // change the value of the input
    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    }
    
    // check if the input is touched
    const inputBlurHandler = (event) => {
        setIsTouched(true);
    }

    // reset the input
    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }

    // return the values
    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    };
}

export default useInput;