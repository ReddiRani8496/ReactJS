import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);
  useEffect(() => {
    // setCount(() => setCount(count + 1)); // if we write set count here it will run infiite times
    console.log(count);
  }, [count]); // this will only there is change in count variable

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default App;
