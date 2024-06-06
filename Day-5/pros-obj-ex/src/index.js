import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
const person = { name: "John", age: "22", email: "john@example.com" };
const person2 = { name: "Rahul", age: "26", email: "rahul@example.com" };
root.render(
  <React.StrictMode>
    <App personDetails={person} />
    <App personDetails={person2} />
  </React.StrictMode>
);
