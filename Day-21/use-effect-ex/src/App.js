import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", () => {
      console.log("Added");
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    });
    return () => {
      window.removeEventListener("resize", () => {});
      console.log("removed");
    };
  }, []);
  useEffect(() => {
    document.title = `size ${width} * ${height}`;
  }, [width, height]);

  return (
    <div className="App">
      <p>Width: {width}</p>
      <p>height: {height}</p>
    </div>
  );
}

export default App;
