import React, {useContext} from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const {user} = useContext(UserContext);
  return (
    <footer className="text-center">
      <p>Copyright © 2024 My Website. All rights reserved.</p>
      <p>Made with 💗 by {user.name}</p>
    </footer>
  );
};

export default Footer;
