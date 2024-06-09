import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <MyForm />
    </div>
  );
}

function MyForm() {
  const [colors, setColors] = useState({
    color1: "",
    color2: "",
  });

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        onChange={(e) =>
          setColors((col) => ({ ...col, color1: e.target.value }))
        }
      />
      <select
        value={colors.color2}
        onChange={(e) =>
          setColors((col) => ({ ...col, color2: e.target.value }))
        }
      >
        <option value="Red">Red</option>
        <option value="Green">Green</option>
        <option value="Blue">Blue</option>
        <option value="Yellow">Yellow</option>
      </select>
      <input
        type="submit"
        onClick={() => setColors((col) => ({ color2: colors.color1 }))}
      />
    </form>
  );
}

export default App;
