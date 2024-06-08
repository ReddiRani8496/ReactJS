import "./App.css";

function App(props) {
  return (
    <div className="App">
      <h1>Car Details</h1>
      <h3>{props.carDetails.brand}</h3>
      <h3>{props.carDetails.model}</h3>
      <h3>{props.carDetails.color}</h3>
      <br></br>
    </div>
  );
}

export default App;

// if app parameter name and the name inside the refering component is same then we can access directly
// by using the parameter name and property name.

// if app parameter name and the name inside the refering component is not same then we can't acess directly.
// To acess we need to use parameter name followed by name inisde the refering component followed by property name

// in the above example we are reffering the app component by carDetails, but he parameter name is different
// so to acess we are using parameter name which is props, refering name is carDetails and property name.
