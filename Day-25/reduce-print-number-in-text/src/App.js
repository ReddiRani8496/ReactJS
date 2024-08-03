import logo from "./logo.svg";
import "./App.css";

function App() {
  const data = [1, 2, 3, 4, 5];

  const total = data.reduce((accumulator, num) => {
    return accumulator.concat("Number " + num + " ");
  }, []);

  return <>{total}</>;
}

export default App;
