import "./App.css";
import Counter from "./Counter";
import UpdateAValueEveryTwoSeconds from "./UseStateWithSetTimeout";

import PrintHelloAfterFiveSeconds from "./settimeoutex";

function App() {
  return (
    <div className="App">
      <Counter />
      <PrintHelloAfterFiveSeconds />
      {/* <UpdateAValueEveryTwoSeconds /> */}
    </div>
  );
}

export default App;
