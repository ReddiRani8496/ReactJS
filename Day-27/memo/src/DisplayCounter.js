import React from "react";
import { memo } from "react";

const DisplayCounter = ({ count }) => {
  console.log("child rendered");
  return <h1>{count}</h1>;
};

export default memo(DisplayCounter);
