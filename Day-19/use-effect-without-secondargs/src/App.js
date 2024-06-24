import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount((count) => count + 1);
  }, []);

  return (
    <div className="App">
      <button>I have rendered {count} times</button>
    </div>
  );
}

export default App;
