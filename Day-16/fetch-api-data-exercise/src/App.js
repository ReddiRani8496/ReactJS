import { useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [excuse, setExcuse] = useState("");

  const fetchExcuse = (type) => {
    Axios.get(`https://excuser.herokuapp.com/v1/excuse/${type}`)
      .then((response) => {
        setExcuse(response.data[0].type);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  return (
    <div className="App">
      <h1>Generate An Excuse</h1>
      <button onClick={() => fetchExcuse("party")}>Party</button>
      <br></br>
      <button onClick={() => fetchExcuse("family")}>Family</button>
      <br></br>
      <button onClick={() => fetchExcuse("office")}>Office</button>
      <br></br>
      <p>{excuse}</p>
    </div>
  );
}

export default App;
