import React, { useContext } from "react";
import { NameContext } from "./App";

export default function C() {
  let name = useContext(NameContext);
  return (
    <>
      <h1>Hi from C {name}</h1>
    </>
  );
}
