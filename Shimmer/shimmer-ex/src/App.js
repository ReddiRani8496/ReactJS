import logo from "./logo.svg";
import "./App.css";
import { ShimmerPostItem } from "react-shimmer-effects";

function App() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "30px",
        width: "100%",
        justifyItems: "center",
      }}
    >
      {[...Array(20)].map((_, index) => (
        <ShimmerPostItem key={index} postStyle="STYLE_FOUR" />
      ))}
    </div>
  );
}

export default App;
