import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Store from "./store";
import App from "./app";
import StoreProvider from "./store/provider";
import * as modules from "./store/exports.js";
import "./style.css";

const root = document.getElementById("app");

// Состояние приложения
const store = new Store(modules);

ReactDOM.render(
  <StoreProvider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreProvider>,
  root
);
