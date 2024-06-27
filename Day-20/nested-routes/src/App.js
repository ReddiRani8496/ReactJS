import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import React from "react";
import ReactDOM from "react-dom/client";
import Facebook from "./pages/Facebook";
import Phone from "./pages/Phone";
import Email from "./pages/Email";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />}>
          <Route path="facebook" element={<Facebook />} />
          <Route path="phone" element={<Phone />} />
          <Route path="email" element={<Email />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
