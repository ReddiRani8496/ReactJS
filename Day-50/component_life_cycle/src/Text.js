import React, { useEffect, useState } from "react";

function Text() {
  const [value, setValue] = useState("");
  useEffect(() => {
    console.log("Text component rendered");
    return () => {
      console.log("Text component unmounted");
    };
  }, [value]);
  return (
    <div>
      <input onChange={(e) => setValue(e.target.value)} />
      <h1>{value}</h1>
    </div>
  );
}

export default Text;
