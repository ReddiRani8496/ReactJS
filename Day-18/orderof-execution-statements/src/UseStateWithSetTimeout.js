import React, { useState } from "react";

function UpdateAValueEveryTwoSeconds() {
  let [a, setA] = useState(0);
  setInterval(() => {
    setA((a) => a + 1);
    console.log(a);
  }, 2000);
  return <h1>Value of a is : {a}</h1>;
}

export default UpdateAValueEveryTwoSeconds;
