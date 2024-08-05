import react, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "VALUE_CHANGE":
      return { ...state, value: action.payload };
    default:
      return state;
  }
}
function UseReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0, value: "" });

  const incrementCount = () => dispatch({ type: "INCREMENT" });
  const decrementCount = () => dispatch({ type: "DECREMENT" });
  const valueChange = (e) =>
    dispatch({ type: "VALUE_CHANGE", payload: e.target.value });

  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <br></br>
      <input placeholder="type something.." onChange={valueChange} />
      <p>{state.value}</p>
    </>
  );
}

export default UseReducer;
