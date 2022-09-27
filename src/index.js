import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/state";

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={store.getState()}
        dispatch={store.dispatch.bind(store)}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
