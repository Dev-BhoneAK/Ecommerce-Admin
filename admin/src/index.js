import React from "react";
import ReactDOM from "react-dom/client";
import "./css/style.css";
import "./css/custom-style.css";
import { Provider } from "react-redux";
import store from "./app/store";
import { injectStore } from "./utility/jwtInterceptor";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
injectStore(store); // To use redux store outside react components
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
