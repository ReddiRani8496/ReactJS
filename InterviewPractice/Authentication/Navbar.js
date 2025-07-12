import React, { useContext } from "react";
import { UserContext } from "./userContext";

const Navbar = () => {
  const { isLoggedIn, login, logout } = useContext(UserContext);

  const handleClick = () => {
    if (isLoggedIn) {
      logout();
    } else {
      login();
    }
  };

  return (
    <nav>
      <h1>App</h1>
      {isLoggedIn && <h1>Welcome, User!</h1>}
      <button onClick={handleClick}>{isLoggedIn ? "Logout" : "Login"}</button>
    </nav>
  );
};

export default Navbar;
