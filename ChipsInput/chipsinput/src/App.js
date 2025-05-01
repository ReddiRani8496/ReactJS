import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [chips, setChips] = useState([]);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (inputText.trim() !== "") {
        setChips((prevChips) => [...prevChips, inputText]);
        setInputText("");
      }
    }
  };
  const handleDeleteChip = (index) => {
    // setChips((prevChips) => prevChips.filter((_, i) => i !== index));
    const newChips = [...chips];
    newChips.splice(index, 1);
    setChips(newChips);
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
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "10px" }}>
        {chips.map((chip, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#007bff",
              color: "white",
              padding: "5px 10px",
              borderRadius: "20px",
              margin: "5px",
            }}
          >
            {chip}
            <button
              style={{
                color: "red",
                marginLeft: "10px",
                border: "none",
                background: "none",
              }}
              onClick={() => handleDeleteChip(index)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
