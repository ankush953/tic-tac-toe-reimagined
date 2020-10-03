import classes from "./Button.module.css";
import React, { Component } from "react";

class Button extends Component {
  state = {
    text: "",
  };

  render() {
    return (
      <div className={classes.Button}>
        <button
          disabled={this.props.disabled}
          onClick={this.props.clicked}
        >
          {this.state.text || this.props.value}
        </button>
      </div>
    );
  }
}

export default Button;
