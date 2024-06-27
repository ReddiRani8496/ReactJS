import { Outlet, Link } from "react-router-dom";
import React from "react";

function Contact() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="email">Email</Link>
          </li>
          <li>
            <Link to="phone">Phone</Link>
          </li>
          <li>
            <Link to="facebook">Facebook</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Contact;
