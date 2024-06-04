function Planet(props) {
  return (
    <div id="displaydata">
      <h1>{props.name}</h1>
      <p>{props.isGasPlanet}</p>
    </div>
  );
}

export default Planet;
