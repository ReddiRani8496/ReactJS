import React, { useState, useEffect } from "react";

function DisplayDataOnChange() {
  let [data, setData] = useState("");

  useEffect(() => {
    console.log(data);
  }, [data]);

  let [date, setDate] = useState(new Date());
  useEffect(() => {
    setDate(new Date());
    console.log(date);
  }, [date]);

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
