import logo from "./logo.svg";
import "./App.css";
import { useState, createContext } from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import About from "./Pages/About";
import Navbar from "./Pages/Navbar";
export const AppContext = createContext();
function App() {
  const [name, setName] = useState("Rani");
  return (
    <div className="App">
      <AppContext.Provider value={{ name, setName }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile"
            // element={<Profile name={name} setName={setName} />}
            element={<Profile />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
