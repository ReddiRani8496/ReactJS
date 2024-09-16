import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person";

function App() {
  return (
    <div className="App">
      <Person name="Rahul" age={25} email="rahul@gmail.com" />
    </div>
  );
}

export default App;
