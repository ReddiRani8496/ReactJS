import React from "react";
import ReactDOM from "react-dom/client";
import { memo } from "react";

function Todo({ todos }) {
  console.log("Todos element rendered");
  return (
    <>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
}

export default memo(Todo);

// only when there is a change in todos list, then todo component is rendered
