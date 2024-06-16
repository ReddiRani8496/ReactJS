import { useState } from "react";
import "./App.css";
import Axios from "axios";
function App() {
  let [age, setAge] = useState(0);
  let [name, setName] = useState("");
  const fetchData = () => {
    Axios.get(`https://api.agify.io?name=${name}`).then((response) =>
      setAge(response.data.age)
    );
  };
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Ex.Pedro.."
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={fetchData}>Predict Age</button>
      <h1>Name: {name}</h1>
      <h1>Predicted Age: {age}</h1>
    </div>
  );
}

export default App;
