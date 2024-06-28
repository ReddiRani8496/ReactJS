import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import { useState, createContext } from "react";
import A from "./A";

export let NameContext = createContext();

function App() {
  const [name, setName] = useState("Rahul");
  return (
    <div className="App box">
      <NameContext.Provider value={name}>
        <A />
      </NameContext.Provider>
    </div>
  );
}

export default App;
