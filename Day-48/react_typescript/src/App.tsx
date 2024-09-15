import "./App.css";
import Person from "./Person.tsx";

function App() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton title="I'm a button" />
    </div>
  );
}

export default App;

function MyButton({ title }: { title: string }) {
  return <button>{title}</button>;
}
