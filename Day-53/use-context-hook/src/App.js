import React, { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

export const NameContext = createContext();

function App() {
  const [username, setUsername] = useState("");

  return (
    <div className="App">
      <NameContext.Provider value={{ username, setUsername }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </NameContext.Provider>
    </div>
  );
}

export default App;
