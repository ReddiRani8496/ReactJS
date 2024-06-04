import "./App.css";

function App() {
  const fruits = ["Grapes", "Apple", "Banana", "Strawberry"];
  return (
    <div className="App">
      <h1>{fruits[0]}</h1>

      {fruits.map((fruit, key) => (
        <h1 key={key}>{fruit}</h1>
      ))}
    </div>
  );
}

export default App;
