import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./pages/navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Help from "./pages/Help";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route path="/help" element={<Help />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
