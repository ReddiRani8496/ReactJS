import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 onClick={() => alert("Hello world")}>Click Me</h1>
      <h2 onClick={(event) => alert(event.type)}>
        Click me To show type of event
      </h2>
    </div>
  );
}

export default App;
