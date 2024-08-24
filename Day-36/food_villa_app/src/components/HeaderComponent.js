import logo from "./logo.jpg";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => (
  <a href="/">
    <img className="logo" src={logo} alt="logo" />
  </a>
);

const NavItems = () => {
  return (
    <div className="nav-items">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <li>Cart</li>
      </ul>
    </div>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="header">
      <Title />
      <NavItems />
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
