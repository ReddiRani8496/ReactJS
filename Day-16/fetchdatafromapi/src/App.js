import { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";
function App() {
  // fetch("https://catfact.ninja/fact")
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));

  let [fact, setFact] = useState("");

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((response) =>
      console.log(setFact(response.data.fact))
    );
  };

  useEffect(() => {
    // Axios.get("https://catfact.ninja/fact").then((response) =>
    //   console.log(setFact(response.data.fact))
    // );
    fetchCatFact();
  }, []);

  return (
    <div className="App">
      <button onClick={fetchCatFact}>Generate Cat Fact</button>
      <h1>{fact}</h1>
    </div>
  );
}

export default App;
