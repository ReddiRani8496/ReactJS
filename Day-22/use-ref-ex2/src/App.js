import "./App.css";
import { useRef, useEffect } from "react";

function App() {
  let count1 = useRef(null);
  let count2 = useRef(null);
  let count3 = useRef(null);

  useEffect(() => {
    console.log("Component rendered");
  });

  function handleClick1() {
    count1.current.focus();
    count1.current.style.backgroundColor = "purple";
    count2.current.style.backgroundColor = "";
    count3.current.style.backgroundColor = "";
  }

  function handleClick2() {
    count2.current.focus();
    count1.current.style.backgroundColor = "";
    count2.current.style.backgroundColor = "purple";
    count3.current.style.backgroundColor = "";
  }

  function handleClick3() {
    count3.current.focus();
    count1.current.style.backgroundColor = "";
    count2.current.style.backgroundColor = "";
    count3.current.style.backgroundColor = "purple";
  }

  return (
    <div className="App">
      <h1 onClick={handleClick1}>Heading1</h1>
      <h1 onClick={handleClick2}>Heading2</h1>
      <h1 onClick={handleClick3}>Heading3</h1>
      <input ref={count1} />
      <input ref={count2} />
      <input ref={count3} />
    </div>
  );
}

export default App;
