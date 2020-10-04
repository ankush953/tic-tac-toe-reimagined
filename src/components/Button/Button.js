import classes from "./Button.module.css";
import React from "react";

const Button = (props) => {
  return (
    <div className={classes.Button}>
      <button
        disabled={props.disabled}
        onClick={props.clicked}
        className={classes[props.value]}
      >
        {props.value}
      </button>
    </div>
  );
};

export default Button;
