import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Welcome to xAble</h1>
    </div>
  );
}

function Login() {
  return (
    <div>
      <h1>Login Form</h1>
      <label className="name">Name</label>
      <input type="text" id="name" placeholder="Enter your name" /> <br></br>
      <label className="email">Email</label>
      <input type="email" id="email" placeholder="Enter your email" /> <br></br>
      <label className="password">Password</label>
      <input type="password" id="password" placeholder="Enter your password" />
    </div>
  );
}

function Signup() {
  return (
    <div>
      <h1>Singup Form</h1>
      <label className="email">Email</label>
      <input type="email" id="email" placeholder="Enter your email" /> <br></br>
      <label className="password">Password</label>
      <input type="password" id="password" placeholder="Enter your password" />
    </div>
  );
}

export { App, Login, Signup };
