import React from "react";

function PrintHelloAfterFiveSeconds() {
  setTimeout(() => {
    console.log("Hello");
  }, 5000);
  return <h1>Hello World</h1>;
}

export default PrintHelloAfterFiveSeconds;

// javascript is asynchronous
// so it won't wait for the five seconds
// it will come to next lines, after all the lines are executed it will go to settimeout

// output:
// Hello World
// Hello is printed in console after five seconds
