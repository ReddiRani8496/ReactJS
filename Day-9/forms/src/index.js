import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <MyForm />
  </React.StrictMode>
);

function MyForm() {
  let [name, setName] = useState("");
  function displayName(e) {
    setName(e.target.value);
  }

  function displayalert(e) {
    e.preventDefault(); // to control the form submission
    alert("Your name is " + name);
  }
  return (
    <div>
      <form onSubmit={displayalert}>
        <label>Name</label>
        <input type="text" onChange={(e) => displayName(e)}></input>
        <h1>{name}</h1>
        <input type="submit" value="submit" onClick={displayalert}></input>
      </form>
    </div>
  );
}
