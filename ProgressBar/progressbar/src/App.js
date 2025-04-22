import logo from "./logo.svg";
import "./App.css";
import ProgressBar from "./Components/ProgressBar";

function App() {
  const bars = [0, 5, 10, 30, 50, 70, 90, 100];
  return (
    <div className="App">
      <h1>Progress Bar</h1>
      {bars.map((value) => (
        <ProgressBar progress={value} key={value} />
      ))}
    </div>
  );
}

export default App;
