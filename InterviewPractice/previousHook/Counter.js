import "./styles.css";
import { useState } from "react";
import usePrevious from "./usePrevious";

export default function Counter() {
  const [currentCount, setCurrentCount] = useState(0);

  const previousCount = usePrevious(currentCount);

  const handleDecrement = () => {
    setCurrentCount(currentCount - 1);
  };

  const handleReset = () => {
    setCurrentCount(0);
  };

  const handleIncrement = () => {
    setCurrentCount(currentCount + 1);
  };

  return (
    <div className="App">
      <h2>Current Count: {currentCount}</h2>
      <h2>Previous Count: {previousCount}</h2>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
