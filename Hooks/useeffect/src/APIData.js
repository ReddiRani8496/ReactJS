import react, { useState, useEffect } from "react";
import axios from "axios";

const APIData = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  // only first time it will rerender
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const jsonData = await response.data;
      setData(jsonData);
      console.log(jsonData);
    };
    fetchData();
  }, []);

  // only when there is change in count variable
  useEffect(() => {
    console.log(`Count changed to: ${count}`);
  }, [count]);

  //every time it will rerender
  useEffect(() => {
    console.log("Component rendered");
  });

  return (
    <>
      <button onClick={incrementCount}>Click</button>
      <h1>Button clicked {count} times</h1>
      {data.map((fetchedData) => (
        <p key={fetchedData.id}>{fetchedData.title}</p>
      ))}
    </>
  );
};

export default APIData;
