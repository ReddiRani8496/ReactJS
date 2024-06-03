import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Job position="Junior SDE" salary={10000} company="Google" />
    <Job position="Senior SDE" salary={30000} company="Amazon" />
    <Job position="Manager" salary={50000} company="Microsoft" />
  </React.StrictMode>
);

function Job(props) {
  return (
    <div id="displaydetails">
      <h1>{props.position}</h1>
      <p>{props.salary}</p>
      <p>{props.company}</p>
    </div>
  );
}
