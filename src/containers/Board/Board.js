import classes from "./Board.module.css";
import React, { Component } from "react";
import Button from "../../components/Button/Button";
import { connect } from "react-redux";
import * as actions from "../../store/actions/makeMove";

class Board extends Component {

  assignSymbols = (playerOne) => {
    this.props.assignSymbols(playerOne)
  };

  verify = () => {
    this.props.verify()
  };

  makeMove = (key) => {
    this.props.makeMove(key)
  };

  resetGame = () => {
    this.props.resetGame()
  };

  render() {
    console.log(this.props);
    let temp = [];
    for (let i = 0; i < 3; i++) {
      const curr = [];
      for (let j = 0; j < 3; j++) {
        curr.push(
          <Button
            key={"" + i + j}
            clicked={() => this.makeMove("" + i + j)}
            value={this.props.matrix[i][j]}
            disabled={this.props.matrix[i][j] !== ""}
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
    this.verify();
    // console.log(board);
    if (!this.props.gameOn) {
      board = (
        <div className={classes.choice}>
          Choose your weapon:
          <Button clicked={() => this.assignSymbols("O")} value="O" />
          <Button clicked={() => this.assignSymbols("X")} value="X" />
        </div>
      );
    }
    return (
      <div className={classes.Board}>
        {this.props.result === true ? (
          <div className={classes.congratulate}>
            Congratulations!!! {this.props.player[1 - this.props.turn]} Won.
            <Button value="Reload the game" clicked={this.resetGame} />
          </div>
        ) : this.props.result === false ? (
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

const matchStateToProps = (state) => {
  return {
    gameOn: state.board.gameOn,
    player: state.board.player,
    color: state.board.color,
    turn: state.board.turn,
    matrix: state.board.matrix,
    remCells: state.board.remCells,
    result: state.board.result
  }
}

const matchDispatchToProps = dispatch => {
  return {
    assignSymbols: (symbol) => dispatch(actions.assignSymbols(symbol)),
    makeMove: (key) => dispatch(actions.makeMove(key)),
    verify: () => dispatch(actions.verify()),
    resetGame: () => dispatch(actions.resetGame())
  }
}

export default connect(matchStateToProps, matchDispatchToProps)(Board);
