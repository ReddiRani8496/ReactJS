import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [ids, setIds] = useState(0);
  const addTodoItem = () => {
    if (input.trim() !== "") {
      const newId = ids + 1;
      const item = {
        id: newId,
        text: input?.trim(),
        complete: false,
      };

      setTodos((prev) => [...prev, item]);
      setInput("");
      setIds(newId);
    }
  };

  const toggleChange = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    return setTodos(todos.filter((todo) => todo.id != id));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodoItem}>Add</button>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <input
              type="checkbox"
              checked={t?.complete}
              onChange={(e) => toggleChange(t.id)}
            />
            <span className={t.complete ? "strikeThrogh" : ""}>{t.text}</span>
            <button onClick={() => deleteTodo(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
