import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Student name="Rahul" age={20} email="rahul@gmail.com" />
    <Student name="John" age={20} email="john@gmail.com" />
    <Student name="Mary" age={20} email="mary@gmail.com" />
  </React.StrictMode>
);

function Student(props) {
  return (
    <div id="displaydata">
      <h1>{props.name}</h1>
      <p>{props.age}</p>
      <p>{props.email}</p>
    </div>
  );
}
