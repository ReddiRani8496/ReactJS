import React, { useContext } from "react";
import B from "./B";
import { NameContext } from "./App";

export default function A() {
  let name = useContext(NameContext);
  return (
    <>
      <h1>Hi from A {name}</h1>
      <B />
    </>
  );
}
