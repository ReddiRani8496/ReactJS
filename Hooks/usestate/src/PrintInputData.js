import react, { useState } from "react";

const PrintInputData = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }

  function valueChange(e) {
    setValue(e.target.value);
  }
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <br />
      <br />
      <input placeholder="type something..." onChange={valueChange} />
      <p>{value}</p>
    </>
  );
};

export default PrintInputData;
