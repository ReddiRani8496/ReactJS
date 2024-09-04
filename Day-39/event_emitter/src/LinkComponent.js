import React from "react";
import EventEmitter from "./utils/EventEmitter.js";

function LinkComponent() {
  const handleClick = () => {
    EventEmitter.emit("NewLog", { text: "Clicked the link" });
    console.log("Clicked the link");
  };
  return <div onClick={() => handleClick()}>Click Me!</div>;
}

export default LinkComponent;
