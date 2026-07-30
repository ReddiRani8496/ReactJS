import logo from "./logo.svg";
import "./App.css";
import ProgressBar from "./Components/ProgressBar";
import { SearchAndFilter } from "./Components/SearchAndFilter";
import { InfiniteScroll } from "./Components/InfiniteScroll";

function App() {
  const bars = [0, 3, 5, 10, 30, 50, 70, 80, 90, 100];
  return (
    <div className="App">
      <h1>Progress Bar</h1>
      {bars.map((value) => (
        <ProgressBar progress={value} key={value} />
      ))}

      <SearchAndFilter />

      <InfiniteScroll />
    </div>
  );
}

export default App;
