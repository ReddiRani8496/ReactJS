import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

const car = [
  {
    brand: "Toyota",
    model: "Camry",
    color: "Red",
  },
  {
    brand: "Ford",
    model: "Mustang",
    color: "Blue",
  },
  {
    brand: "Tesla",
    model: "Model S",
    color: "Black",
  },

  {
    brand: "BMW",
    model: "X5",
    color: "Silver",
  },
];

root.render(
  <React.StrictMode>
    {car.map((item) => (
      <App carDetails={item} />
    ))}
  </React.StrictMode>
);

// here we are assigning the javascript Object to carDetails so we need to place in curly braces
