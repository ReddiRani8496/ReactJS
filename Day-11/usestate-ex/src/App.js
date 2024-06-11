import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    setTimeout(() => {
      console.log("Unmounted");
    }, 1000);
  });
  return (
    <div className="App">
      <button onClick={useEffect}>Click Me!</button>
    </div>
  );
}

export default App;
