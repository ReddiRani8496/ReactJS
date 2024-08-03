import logo from "./logo.svg";
import "./App.css";

function App() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const total = data.reduce((aggregate, num) => aggregate + num, 0);

  return <>{total}</>;
}

export default App;
