import "./App.css";
import Planet from "./Planet";

function App() {
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { nmae: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];
  return (
    <div className="App">
      {planets.map((planet, key) => {
        if (planet.isGasPlanet)
          return (
            <Planet
              name={planet.name}
              isGasPlanet={planet.isGasPlanet}
              key={key}
            />
          );
      })}
    </div>
  );
}

export default App;
