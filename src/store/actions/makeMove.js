import * as actionTypes from "./actionTypes";

export const makeMove = (key) => {
  return {
    type: actionTypes.MAKE_MOVE,
    key: key
  };
};

export const assignSymbols = (symbol) => {
  return {
    type: actionTypes.ASSIGN_SYMBOLS,
    symbol: symbol
  }
}

export const verify = () => {
  return {
    type: actionTypes.VERIFY
  }
}

export const resetGame = () => {
  return {
    type: actionTypes.RESET_GAME
  }
}

