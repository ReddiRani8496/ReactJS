import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [num, setNum] = useState(0); // Initialize with 0 or any default value
  let total = 0;

  const expensiveFunction = (num) => {
    console.log("Expensive function called");
    for (let i = 0; i < num; i++) {
      total += i;
    }
    return total;
  };

  console.log("Component rendered");

  // Use useMemo to memoize the result of expensiveFunction
  const sum = useMemo(() => expensiveFunction(num), [num]);

  return (
    <div className="App">
      First Name:{" "}
      <input
        type="text"
        name="fname"
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <br />
      <input
        type="number"
        name="result"
        onChange={(e) => setNum(Number(e.target.value))}
      />
      {sum}
    </div>
  );
}

export default App;

//when we change in the input field the input field is re-rendered
// even the function is called when there is a change in input field.
// to avoid those many time re-redered and re-render only whern there is a change, then we can use memo
// whern there is change in number field,then only the function is called
