import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { useState } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <DisplayData />
  </React.StrictMode>
);

function DisplayData() {
  let [name, setName] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="enter your name"
        onInput={(e) => setName(e.target.value)}
      ></input>
      <h1>{name}</h1>
    </div>
  );
}
