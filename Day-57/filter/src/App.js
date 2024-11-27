import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const fruits = ["apple", "orange", "banana", "mango", "strawberry"];
  const [filteredItems, setFilteredItems] = useState([fruits.toString()]);
  const setFruits = (e) => {
    const items = fruits.filter((item) => {
      return item.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setFilteredItems(items);
  };

  return (
    <div className="App">
      <input type="text" placeholder="Fruits" onChange={setFruits} />
      <br />
      <hr />
      <h2>Items</h2>
      {filteredItems.map((item) => {
        return <p>{item}</p>;
      })}
    </div>
  );
}

export default App;
