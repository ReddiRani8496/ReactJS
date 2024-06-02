import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Rhyme from "./Rhyme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <p>This is para 1</p>
  // <p>This is para 2</p>
  // There will be only one root element, if we uncomment the above lines it will throw an error
  <>
    <h1 className="headingElement">React World</h1>
    {/* because in javascript and css we have class, it might confuse, so we have to use className */}
    <App />
    <Add />
    <Sub />
    <Rhyme />
  </>
);

function Add() {
  // add is a functional component, it must return something.
  return <h1>sum of two numbers is {10 + 20}</h1>; // function is combination of both html and javascript
}

function Sub() {
  return (
    <>
      <h1>a = 30</h1>
      <h1>b = 10</h1>
      <h1>
        Subtraction of two numbers {30} and {10} is {30 - 10}
      </h1>
    </>
  );
}
