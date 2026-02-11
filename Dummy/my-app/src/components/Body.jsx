import React, { useState } from "react";
import Content from "./Content";

export function Body({ val, inc, handleReset }) {
  return (
    <div>
      <h1>
        Body{val} {inc}
      </h1>

      <Content handleReset={handleReset} />
    </div>
  );
}
