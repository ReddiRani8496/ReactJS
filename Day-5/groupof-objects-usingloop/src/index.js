import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
const person = [
  { name: "John", age: 22, email: "john@example.com" },
  { name: "Rahul", age: 22, email: "rahul@example.com" },
  { name: "Mary", age: 22, email: "mary@example.com" },
  { name: "David", age: 22, email: "david@example.com" },
];
root.render(
  <React.StrictMode>
    {person.map((person) => (
      <App personDetails={person} />
    ))}
  </React.StrictMode>
);
