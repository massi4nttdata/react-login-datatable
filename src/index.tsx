import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const environment = process.env.NODE_ENV;

if (environment !== "production") {
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
