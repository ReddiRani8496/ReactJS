import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [chips, setChips] = useState([]);
  const handleKeyDown = (e) => {
    if (e.key == "enter") {
    }
  };
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Type a key and press enter"
        value={inputText}
        style={{ padding: "8px", width: "200px" }}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
    </div>
  );
}

export default App;
