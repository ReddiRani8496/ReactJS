import react, { useEffect, useState } from "react";

function FetchingApiData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []);

  return (
    <>
      {data
        .filter((todoId) => todoId.id > 5)
        .map((titleName) => (
          <p>
            id: {titleName.id} Title: {titleName.title}
          </p>
        ))}
    </>
  );
}

export default FetchingApiData;
