import classes from "./Board.module.css";
import React, { Component } from "react";
import Input from "../../components/Input/Input";

class Board extends Component {
  render() {
    return (
      <div className={classes.Board}>
        <div className={classes.row}>
          <Input />
          <Input />
          <Input />
        </div>
        <div className={classes.row}>
          <Input />
          <Input />
          <Input />
        </div>
        <div className={classes.row}>
          <Input />
          <Input />
          <Input />
        </div>
      </div>
    );
  }
}

export default Board;
