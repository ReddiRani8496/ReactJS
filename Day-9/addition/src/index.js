import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { useState } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Add />
  </React.StrictMode>
);

function Add() {
  let [firstNum, setFirstNum] = useState(0);
  let [secondNum, setSecondNum] = useState(0);
  let [sum, setSum] = useState(0);

  function setFirstNumber(e) {
    setFirstNum(e.target.value);
  }

  function setSecondNumber(e) {
    setSecondNum(e.target.value);
  }

  function calculateSum(e) {
    setSum(parseInt(firstNum) + parseInt(secondNum));
  }
  return (
    <div>
      <label>Enter first number</label>
      <input type="text" onChange={setFirstNumber}></input> <br /> <br />
      <label>Enter second number</label>
      <input type="text" onChange={setSecondNumber}></input> <br /> <br />
      <h1 style={{ marginLeft: "30px" }}>Sum of two numbers is: {sum}</h1>
      <button style={{ marginLeft: "90px" }} onClick={calculateSum}>
        Add
      </button>
    </div>
  );
}
