import React, { Component } from "react";
import Board from "../../containers/Board/Board";

class Layout extends Component {
  render() {
    return (
      <div>
        <h1>Tic-Tac-Toe</h1>
        <Board />
      </div>
    );
  }
}

export default Layout;
