import "./App.css";

function App() {
  const age = 20;
  const isRed = true;
  return (
    <div className="App">
      {age > 18 ? <h1>Major</h1> : <h1>Minor</h1>}
      <h1 style={{ color: isRed ? "Red" : "Blue" }}>
        Displaying color Based on condition
      </h1>
    </div>
  );
}

export default App;
