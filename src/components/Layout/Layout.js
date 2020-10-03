import classes from "./Layout.module.css";
import React, { Component } from "react";
import Board from "../../containers/Board/Board";

class Layout extends Component {
  render() {
    return (
      <div className={classes.Layout}>
        <h1>Tic-Tac-Toe</h1>
        <Board />
      </div>
    );
  }
}

export default Layout;
