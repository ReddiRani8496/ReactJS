import "./App.css";
import { useState, useEffect } from "react";
import Todo from "./Todos.js";

function App() {
  let [count, setCount] = useState(0);
  let [todos, settodos] = useState(["todo1", "todo2"]);
  function increment() {
    setCount((c) => c + 1);
  }
  useEffect(() => {
    console.log(count);
    if (count % 2 == 0) {
      settodos([...todos, "todo" + count]);
    }
  }, [count]);

  return (
    <div className="App">
      <Todo todos={todos} />
      Count: {count}
      <button onClick={increment}>Increase Count</button>
    </div>
  );
}

export default App;
