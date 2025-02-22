import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const getSearchResults = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const response = await data.json();
    setSuggestions(response[1]);
  };

  useEffect(() => {
    const timer = setTimeout(() => getSearchResults(), 200);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  return (
    <div className="grid grid-flow-col p-3 m-2 shadow-lg">
      <div className="flex items-center space-x-4 col-span-4">
        <FontAwesomeIcon
          icon={faBars}
          className="text-xl cursor-pointer"
          onClick={() => toggleMenuHandler()}
        />
        <FontAwesomeIcon icon={faYoutube} className="text-red-500 text-xl" />
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            type="text"
            className="border rounded-l-full p-2 w-1/2 border-blue-600 px-5"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="bg-gray-200 p-2 rounded-r-full">Search</button>
        </div>
        <div className="fixed w-[29rem] shadow-lg rounded-lg bg-white py-2 px-5 border-gray-100">
          <ul>
            {suggestions.map((s) => (
              <li className="px-3 py-2 hover:bg-gray-100 shadow-sm" key={s}>
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-span-1">
        <FontAwesomeIcon icon={faUser} className="text-xl" />
      </div>
    </div>
  );
};

export default Header;
