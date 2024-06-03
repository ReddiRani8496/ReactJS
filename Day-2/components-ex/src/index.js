import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <GetNameComponent />
    <User />
    <User />
  </React.StrictMode>
);
const GetName = () => {
  // it is a javascript function, becuase it returns a string
  return "Rahul";
};

function GetNameComponent() {
  // it is a react component which returns html code. It is a combination of react and javascript
  return <h1 style={{ textAlign: "center" }}>John</h1>;
}

function User() {
  return (
    <div>
      <h1 style={{ color: "Blue" }}>User Details</h1>
      <h1>Rahul</h1>
      <p>23</p>
      <p>rahul@gmail.com</p>
    </div>
  );
}
