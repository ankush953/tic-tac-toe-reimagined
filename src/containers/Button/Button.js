import classes from "./Button.module.css";
import React, { Component } from "react";

class Button extends Component {
  state = {
    text: "",
  };

  render() {
    // let css = [classes.Button, classes[this.props.value]];
    // // console.log(css);
    return (
      <div className={classes.Button}>
        <button
          disabled={this.props.disabled}
          onClick={this.props.clicked}
          className={classes[this.props.value]}
        >
          {this.state.text || this.props.value}
        </button>
      </div>
    );
  }
}

export default Button;
