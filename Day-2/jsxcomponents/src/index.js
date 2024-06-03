import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const color = "red";
const size = 50;

const name = <h1 id="yellowgreen">Rahul</h1>;
const age = (
  <p style={{ textAlign: "center", fontSize: size + "px", color: color }}>23</p>
);
const email = <p>rahul@gmail.com</p>;
// const root = ReactDOM.createRoot(document.getElementById("root"));

let element = document.createElement("div"); // creating div element using javascript
element.id = "root";
document.body.appendChild(element);
const root = ReactDOM.createRoot(element);
root.render(
  <React.StrictMode>
    <App />
    <div>
      {name}
      {age}
      {email}
    </div>
  </React.StrictMode>
);
