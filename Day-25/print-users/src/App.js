import logo from "./logo.svg";
import "./App.css";

function App() {
  const users = [
    {
      id: "1",
      name: "Rohit",
      age: 25,
    },
    {
      id: "2",
      name: "Rakesh",
      age: 30,
    },
    {
      id: "3",
      name: "Rahul",
      age: 28,
    },
    {
      id: "4",
      name: "Roopesh",
      age: 22,
    },
  ];
  return (
    <>
      {users
        .filter((user) => user.name != "Rahul")
        .map((user) => (
          <p>
            {user.id} {user.name}
          </p>
        ))}
    </>
  );
}

export default App;
