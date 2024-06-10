import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Help } from "./pages/help";
import { Error } from "./pages/error";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/index" className="links start">
          Home
        </Link>
        <Link to="/about" className="links">
          About
        </Link>
        <Link to="/contact" className="links">
          Contact
        </Link>
        <Link to="/help" className="links">
          Help
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
