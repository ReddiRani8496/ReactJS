import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Text from "./Text";

function App() {
  const [text, setText] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setText(!text)}>{text ? "Hide" : "Show"}</button>
      {text && <Text />}
    </div>
  );
}

export default App;

/*
initially App component will mount,
button is clicked, setText to true, then Child component Texxt will mount and App component will update
button is clicked again, setText to false, then Child component Texxt will unmount and App component will update
*/
