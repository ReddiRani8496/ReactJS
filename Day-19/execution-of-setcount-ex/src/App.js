import { React, useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  return (
    <div className="App">
      <button
        onClick={() => {
          setCount(count + 1);
          console.log(count);
        }}
      >
        {count}
      </button>
    </div>
  );
}

export default App;

// here when we click on the button, it is not immediately updated,
// in the console.log it will print previous value not updated value,
// the value will be updated only once the onclick event is completed.
