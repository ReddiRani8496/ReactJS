import logo from "./logo.svg";
import "./App.css";
import ProgressBar from "./Components/ProgressBar";

function App() {
  return (
    <div className="App">
      <h1>Progress Bar</h1>
      <ProgressBar progress={50} />
    </div>
  );
}

export default App;
