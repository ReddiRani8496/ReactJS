import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const age = 18;
// if (age >= 18) {
//   <h1>Major</h1>;
// } else {
//   <h1>Minor</h1>;
// }

// instead of writing if else, we can use ternary operator
