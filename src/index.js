import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import makeMoveReducer from "./store/reducers/makeMove";

const rootReducer = combineReducers({
  board: makeMoveReducer
})

const store = createStore(rootReducer);

const app = (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(app, document.getElementById("root"));
