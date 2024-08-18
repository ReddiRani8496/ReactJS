import logo from "./logo.jpg";
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

export default Header;
