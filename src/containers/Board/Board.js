import classes from "./Board.module.css";
import React, { Component } from "react";
import Button from "../../components/Button/Button";

class Board extends Component {
  state = {
    gameOn: false,
    player: ["", ""],
    color: ["green", "red"],
    turn: 0,
    matrix: [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ],
    remCells: 9,
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
      player: [playerOne, playerTwo],
      remCells: 9,
    });
  };

  shouldComponentUpdate = (nextProps, nextState) => {
    return true;
    // return this.state.turn !== nextState.turn;
  };

  verify = () => {
    let matrix = { ...this.state.matrix };
    // console.log(matrix);
    if (
      (matrix[0][0] !== "" &&
        matrix[0][0] === matrix[0][1] &&
        matrix[0][1] === matrix[0][2]) ||
      (matrix[1][0] !== "" &&
        matrix[1][0] === matrix[1][1] &&
        matrix[1][1] === matrix[1][2]) ||
      (matrix[2][0] !== "" &&
        matrix[2][0] === matrix[2][1] &&
        matrix[2][1] === matrix[2][2]) ||
      (matrix[0][0] !== "" &&
        matrix[0][0] === matrix[1][0] &&
        matrix[1][0] === matrix[2][0]) ||
      (matrix[0][1] !== "" &&
        matrix[0][1] === matrix[1][1] &&
        matrix[1][1] === matrix[2][1]) ||
      (matrix[0][2] !== "" &&
        matrix[0][2] === matrix[1][2] &&
        matrix[1][2] === matrix[2][2]) ||
      (matrix[0][0] !== "" &&
        matrix[0][0] === matrix[1][1] &&
        matrix[1][1] === matrix[2][2]) ||
      (matrix[0][2] !== "" &&
        matrix[0][2] === matrix[1][1] &&
        matrix[1][1] === matrix[2][0])
    ) {
      return true;
    }
    return !this.state.remCells ? "draw" : false;
  };

  makeMove = (key) => {
    // console.log(key);
    let row = key[0];
    let col = key[1];
    let matrix = { ...this.state.matrix };
    // console.log(row, col);
    matrix[row][col] = this.state.player[this.state.turn];
    this.setState((prevState) => {
      return {
        ...this.state,
        turn: 1 - prevState.turn,
        matrix: matrix,
        remCells: prevState.remCells - 1,
      };
    });
  };

  resetGame = () => {
    this.setState({
      gameOn: false,
      player: ["", ""],
      turn: 0,
      matrix: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
      remCells: 9,
    });
  };

  render() {
    let temp = [];
    for (let i = 0; i < 3; i++) {
      const curr = [];
      for (let j = 0; j < 3; j++) {
        // console.log(i, j);
        // console.log("" + i + j);
        // let val = "" + i + j;
        // console.log(val[0], val[1]);
        curr.push(
          <Button
            key={"" + i + j}
            clicked={() => this.makeMove("" + i + j)}
            value={this.state.matrix[i][j]}
            disabled={this.state.matrix[i][j] !== ""}
          />
        );
      }
      temp.push(curr);
    }

    let board = temp.map((row, id) => (
      <div className={classes.row} key={id}>
        {row}
      </div>
    ));
    const result = this.verify();
    // console.log(board);
    if (!this.state.gameOn) {
      board = (
        <div>
          Choose your weapon:
          <Button clicked={() => this.assignSymbols("O")} value="O" />
          <Button clicked={() => this.assignSymbols("X")} value="X" />
        </div>
      );
    }
    return (
      <div className={classes.Board}>
        {result === true ? (
          <div className={classes.congratulate}>
            Congratulations!!! {this.state.player[1 - this.state.turn]} Won.
            <Button value="Reload the game" clicked={this.resetGame} />
          </div>
        ) : result === false ? (
          board
        ) : (
          <div className={classes.draw}>
            Oops!!! Match draw.
            <Button value="Reload the game" clicked={this.resetGame} />
          </div>
        )}
      </div>
    );
  }
}

export default Board;
