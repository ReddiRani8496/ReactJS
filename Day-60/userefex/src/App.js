import logo from "./logo.svg";
import "./App.css";
import { useRef } from "react";
import { UserDetails } from "../../../Hooks/use-context/src/UserDetails";

function App() {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
      <UserDetails />
    </>
  );
}

export default App;
