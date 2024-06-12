import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(document.getElementById("username").value);
          console.log(document.getElementsByTagName("h1")[0].innerHTML); // returns including html tags
          console.log(document.getElementsByTagName("h1")[0].innerText); // returns only the text inside it
        }}
      >
        <h1>
          <h2>Login Form</h2>
        </h1>
        <label for="username">Username</label>
        <input type="text" id="username" name="username" />
        <br />
        <br />
        <label for="password">Password</label>
        <input type="password" id="password" name="password" />
        <br />
        <br />
        <button
          type="submit"
          onClick={(e) => console.log(e.target.getAttribute("type"))}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
