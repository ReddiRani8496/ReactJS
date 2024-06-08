import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App, Login, Signup } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Form />
  </React.StrictMode>
);

function Form() {
  let [isLoggin, setIsLoggIn] = useState("False");
  let [isFirst, setIsFirst] = useState("True");

  return (
    <div className="App">
      <button
        onClick={() => {
          setIsLoggIn(true);
          setIsFirst(false);
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          setIsLoggIn(false);
          setIsFirst(false);
        }}
      >
        Signup
      </button>
      {!isFirst && (isLoggin ? <Login /> : <Signup />)}
    </div>
  );
}
