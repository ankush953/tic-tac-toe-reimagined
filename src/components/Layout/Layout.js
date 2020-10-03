import React, { Component } from "react";
import { connect } from "react-redux";
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

const matchStateToProps = (state) => {};

const matchDispatchToProps = (props) => {};

export default connect(matchStateToProps, matchDispatchToProps)(Layout);
