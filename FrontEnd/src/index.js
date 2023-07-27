import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";
import "@fontsource/itim"; // Defaults to weight 400
import "@fontsource/poppins";
import "@fontsource/nunito";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

