import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-3 m-2 shadow-lg">
      <div className="flex items-center space-x-4 col-span-1">
        <FontAwesomeIcon
          icon={faBars}
          className="text-xl cursor-pointer"
          onClick={() => toggleMenuHandler()}
        />
        <FontAwesomeIcon icon={faYoutube} className="text-red-500 text-xl" />
      </div>
      <div className="col-span-10 text-center">
        <input
          type="text"
          className="border rounded-l-full p-2 w-1/2"
          placeholder="Search..."
        />
        <button className="bg-gray-200 p-2 rounded-r-full">Search</button>
      </div>
      <div className="col-span-1">
        <FontAwesomeIcon icon={faUser} className="text-xl" />
      </div>
    </div>
  );
};

export default Header;
