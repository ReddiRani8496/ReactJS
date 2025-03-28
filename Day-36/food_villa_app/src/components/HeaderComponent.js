import logo from "./logo.jpg";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => (
  <a href="/">
    <img className="h-16" src={logo} alt="logo" />
  </a>
);

const NavItems = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div>
      <ul className="flex space-x-4">
        <Link to="/" key="home">
          <li>Home</li>
        </Link>
        <Link to="/about" key="about">
          <li>About</li>
        </Link>
        <Link to="/contact" key="contact">
          <li>Contact</li>
        </Link>
        <Link to="/cart" key="cart">
          <li key="cart">Cart {cartItems.length} items</li>
        </Link>
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
  const { user } = useContext(UserContext);

  return (
    <div className="flex justify-between items-center p-2 m-2 bg-pink-100">
      <Title />
      <NavItems />
      {isOnline ? "🟢" : "🔴"}
      <span>{user.name}</span>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;

/**
 * tailwind css intellisense
 * ctrl + space
 */
