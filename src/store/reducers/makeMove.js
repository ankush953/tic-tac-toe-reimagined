import * as actionTypes from "../actions/actionTypes";

const initialState = {
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
  noOfPlayer: 0,
};

const assignSymbols = (state, playerOne) => {
  let playerTwo;
  if (playerOne === "X") {
    playerTwo = "O";
  } else {
    playerTwo = "X";
  }
  return {
    ...state,
    gameOn: true,
    player: [playerOne, playerTwo],
    remCells: 9,
    result: ""
  };
}

const makeMove = (state, key) => {
  let row = key[0];
  let col = key[1];
  let matrix = { ...state.matrix };
  matrix[row][col] = state.player[state.turn];
  return {
    ...state,
    turn: 1 - state.turn,
    matrix: matrix,
    remCells: state.remCells - 1,
  };
}

const verify = (state) => {
  let matrix = { ...state.matrix };
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
    return {
      ...state,
      result: true
    };
  }
  return {
    ...state,
    result: (!state.remCells ? "draw" : false)
  }
}

const resetGame = (state) => {
  return {
    ...state,
    gameOn: false,
    player: ["", ""],
    turn: 0,
    matrix: [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ],
    remCells: 9,
  };
}

const makeMoveReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MAKE_MOVE:
      return makeMove(state, action.key)
    case actionTypes.ASSIGN_SYMBOLS:
      return assignSymbols(state, action.symbol)
    case actionTypes.VERIFY:
      return verify(state)
    case actionTypes.RESET_GAME:
      return resetGame(state)
    default:
      return { ...state };
  }
};

export default makeMoveReducer;
