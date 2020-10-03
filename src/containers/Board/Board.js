import classes from "./Board.module.css";
import React, { Component } from "react";
import Button from "../Button/Button";

class Board extends Component {
  state = {
    gameOn: false,
    playerOne: "",
    playerTwo: "",
    player: ["", ""],
    turn: 0,
  };

  assignSymbols = (playerOne) => {
    let playerTwo;
    if (playerOne === "X") {
      playerTwo = "O";
    } else {
      playerTwo = "X";
    }
    this.setState({
      gameOn: true,
      playerOne: playerOne,
      playerTwo: playerTwo,
      player: [playerOne, playerTwo],
    });
  };

  shouldComponentUpdate = (nextProps, nextState) => {
    return true;
    // return this.state.turn !== nextState.turn;
  };

  makeMove = (val) => {
    this.setState((prevState) => {
      return {
        ...this.state,
        turn: 1 - prevState.turn,
      };
    });
  };

  render() {
    let board = (
      <div>
        <div className={classes.row}>
          <Button clicked={() => this.makeMove()} />
          <Button clicked={() => this.makeMove()} />
          <Button clicked={() => this.makeMove()} />
        </div>
        <div className={classes.row}>
          <Button clicked={() => this.makeMove()} />
          <Button clicked={() => this.makeMove()} />
          <Button clicked={() => this.makeMove()} />
        </div>
        <div className={classes.row}>
          <Button clicked={() => this.makeMove()} />
          <Button clicked={() => this.makeMove()} />
          <Button clicked={() => this.makeMove()} />
        </div>
      </div>
    );
    if (!this.state.gameOn) {
      board = (
        <div>
          Choose your weapon:
          <Button clicked={() => this.assignSymbols("O")} value="O" />
          <Button clicked={() => this.assignSymbols("X")} value="X" />
        </div>
      );
    }
    return <div className={classes.Board}>{board}</div>;
  }
}

export default Board;
