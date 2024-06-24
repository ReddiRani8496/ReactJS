import { React, useState, useEffect } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  console.log(count);
  useEffect(() => {
    console.log(count); // initially count is 0 it will print 0
    setCount(count + 1); // just the setCount is updated, but not the count variable
    setCount(count + 1); // still count is not updated, 0+1 is 1 is stored in setCount
    console.log(count); // still the function is not completed still count is 0
  }, []); // after the useEffect is completed count is still 1, becuase even though we wrote two setCount methods,
  // but the value gets updated only the function execution is completed.

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>
        I've rendered {count} times
      </button>
    </div>
  );
}

export default App;
