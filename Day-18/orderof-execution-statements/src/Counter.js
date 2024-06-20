import React from "react";
import ReactDOM from "react-dom/client";

function Counter() {
  let a = 10;
  console.log(++a);
  return <h1>Counter : {a}</h1>;
}

export default Counter;

// the order of execution is asynchronously
// first the variable is initialized
// log statements are executed and increments the value of a by 1
// in h1 the value of a is 11, because the variable is updated in console.log statement.
