import * as actionTypes from "../actions/actionTypes";

const initialState = {
  turn: [0, 1],
  symbol: ["O", "X"],
  gameOn: 0,
};

const makeMoveReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MAKE_MOVE:
      return {
        ...state,
        val: "hello",
      };
    default:
      return { ...state };
  }
};

export default makeMoveReducer;
