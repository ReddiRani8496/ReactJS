import "./App.css";
import { useReducer } from "react";

function App() {
  const todoList = [
    {
      id: 1,
      title: "Eat",
      completed: false,
    },
    {
      id: 2,
      title: "Sleep",
      completed: false,
    },
    {
      id: 3,
      title: "Rome",
      completed: false,
    },
  ];

  const reducer = (state, action) => {
    switch (action.type) {
      case "Complete":
        return state.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        );
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, todoList);
  return (
    <div className="App">
      {state.map((todo) => {
        return (
          <label key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch({ type: "Complete", id: todo.id })}
            />
            {todo.title}
            <br />
          </label>
        );
      })}
    </div>
  );
}

export default App;
