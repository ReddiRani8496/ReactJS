import "./App.css";
import User from "./User";

function App() {
  const users = [
    { name: "john", age: 21 },
    { name: "fred", age: 30 },
    { name: "alex", age: 45 },
  ];
  return (
    <div className="App">
      {users.map((user, key) => (
        <User name={user.name} age={user.age} key={key} />
      ))}
    </div>
  );
}

export default App;
