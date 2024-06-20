/* eslint-disable react/prop-types */

import { useRef, useState } from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1) {
      setAmountIsValid(false);
      return;
    }

    props.onAddCart(enteredAmountNumber);
    setAmountIsValid(true); // Reset the validity for subsequent inputs
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label className={classes.label} htmlFor="amount">Amount:</label>
      <input
        ref={amountInputRef}
        id="amount"
        type="number"
        min="1"
        step="1"
        defaultValue="1"
        className={classes.input}
      />
      <button className={classes.button}>+ Add</button>
      {!amountIsValid && <p className={classes.error}>Enter a valid amount</p>}
    </form>
  );
};

export default Input;
