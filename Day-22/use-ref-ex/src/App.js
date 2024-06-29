import "./App.css";
import React, { useEffect, useRef, useState } from "react";

function App() {
  // let [number, setNumber] = useState(0); // component rerenders every time number changes.

  const number = useRef(0); // component does not render every time.

  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("Component rendered");
  });

  console.log("number: " + number.current);

  function handleClick(e) {
    number.current += 1;
    console.log("number: " + number.current);
  }

  function increaseValue() {
    setValue((value) => value + 1);
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Click Me!</button>
      <p>Number: {number.current}</p>{" "}
      {/* // The value is 0, even if we increment because doesn't render. */}
      <h1 onClick={increaseValue}>
        Click and see Current Value is : {value + number.current}
      </h1>
    </div>
  );
}

export default App;

// initially click button for 3 times, there will be no change on document
// then click once on heading, the output will be 4, because for the button we are using useRef,
// which doens't render but stores the value, preivously number is 3 + vaule is 1 = 4
