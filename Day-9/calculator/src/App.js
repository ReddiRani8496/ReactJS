import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Operations />
    </div>
  );
}
export function Operations() {
  let [firstNum, setFirstNum] = useState("");

  let [secondNum, setSecondNum] = useState("");

  let [result, setResult] = useState(null);

  let [operation, setOperation] = useState("");

  function setFirstNumber(e) {
    setFirstNum(e.target.value);
  }

  function setSecondNumber(e) {
    setSecondNum(e.target.value);
  }

  function calculate(operation) {
    let num1 = parseFloat(firstNum);

    let num2 = parseFloat(secondNum);

    let res = 0;

    switch (operation) {
      case "Add":
        res = num1 + num2;

        break;

      case "Sub":
        res = num1 - num2;

        break;

      case "Mul":
        res = num1 * num2;

        break;

      case "Div":
        res = num1 / num2;

        break;

      default:
        break;
    }

    setResult(res);

    setOperation(operation);
  }

  function resetFields() {
    setFirstNum("");

    setSecondNum("");

    setResult(null);

    setOperation("");
  }

  return (
    <div className="calc">
      <h1
        className="heading"
        style={{ color: "#DC6B19", fontSize: "40px", marginBottom: "40px" }}
      >
        Simple Calculator
      </h1>
      <label>Enter first number</label>
      <input
        type="text"
        value={firstNum}
        onChange={setFirstNumber}
      ></input>{" "}
      <br /> <br />
      <label>Enter second number</label>
      <input
        type="text"
        value={secondNum}
        onChange={setSecondNumber}
      ></input>{" "}
      <br /> <br />
      {result !== null && (
        <div
          className={`result ${result !== null ? "show" : ""}`}
          style={{ fontWeight: "bold" }}
        >
          The result of {operation} is: {result}
        </div>
      )}
      <button onClick={() => calculate("Add")}>Add</button>
      <button onClick={() => calculate("Sub")}>Sub</button>
      <button onClick={() => calculate("Mul")}>Mul</button>
      <button onClick={() => calculate("Div")}>Div</button>
      <button onClick={resetFields} className="reset-button">
        Reset
      </button>
    </div>
  );
}

export default App;
