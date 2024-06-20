import React, { useState, useEffect } from "react";

function DisplayDataOnChange() {
  let [data, setData] = useState("");

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <h1>{data}</h1>
    </div>
  );
}

export default DisplayDataOnChange;
