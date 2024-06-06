import "./App.css";

function App({ personDetails }) {
  return (
    <div className="App">
      <p>
        Name of the person is <h1>{personDetails.name}</h1>
      </p>
      <p>
        Age of the person is <h1>{personDetails.age}</h1>
      </p>
      <p>
        Email of the person is <h1>{personDetails.email}</h1>
      </p>
    </div>
  );
}

export default App;
