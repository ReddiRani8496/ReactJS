import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App, Login, Signup } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

const isLogin = true;

root.render(
  <React.StrictMode>
    <App />
    {login()}
    <br></br>
    <br></br>
    <br></br>
    <button>Login/Signup</button>
  </React.StrictMode>
);

function login() {
  if (isLogin) {
    return <Login></Login>;
  } else {
    return <Signup></Signup>;
  }
}
