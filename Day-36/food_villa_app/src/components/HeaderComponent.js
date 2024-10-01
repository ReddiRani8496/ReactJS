import logo from "./logo.jpg";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () => (
  <a href="/">
    <img className="logo" src={logo} alt="logo" />
  </a>
);

const NavItems = () => {
  return (
    <div className="nav-items">
      <ul>
        <Link to="/" key="home">
          <li>Home</li>
        </Link>
        <Link to="/about" key="about">
          <li>About</li>
        </Link>
        <Link to="/contact" key="contact">
          <li>Contact</li>
        </Link>
        <li key="cart">Cart</li>
        <Link to="/instamart" key="instamart">
          <li>Instamart</li>
        </Link>
      </ul>
    </div>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const isOnline = useOnline();

  return (
    <div className="header">
      <Title />
      <NavItems />
      {isOnline ? "🟢" : "🔴"}
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
