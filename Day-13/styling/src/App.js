import "./App.css";
import styles from "./styles.module.css";

function App() {
  const courseStyles = {
    color: "red",
    fontSize: "25px",
  };
  return (
    <div className="App">
      <h1
        style={{ color: "indigo", fontSize: "55px" }}
        className={styles.heading}
      >
        Welcome to xAble Life
      </h1>
      <h2>Courses Available: </h2>
      <p style={courseStyles}>Java</p>
      <p style={courseStyles}>Python</p>
      <p style={courseStyles}>React</p>
      <p style={courseStyles}>Angular</p>
    </div>
  );
}

export default App;
