import "./App.css";
import Person from "./Person.tsx";

function App() {
  return (
    <div className="App">
      <Person name="Rahul" age={25} email="rahul@gmail.com" isMarried={true} />
    </div>
  );
}

export default App;
