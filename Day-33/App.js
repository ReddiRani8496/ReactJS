import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/logo.jpg";
import Body from "./BodyComponent";
import Footer from "./FooterComponent";

const Title = () => (
  <a href="/">
    <img className="logo" src={logo} alt="logo" />
  </a>
);

const NavItems = () => (
  <div className="nav-items">
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li>Cart</li>
    </ul>
  </div>
);

const Header = () => (
  <div className="header">
    <Title />
    <NavItems />
  </div>
);

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
