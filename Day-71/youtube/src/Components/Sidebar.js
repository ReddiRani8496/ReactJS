import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="shadow-lg w-48 p-5">
      <ul className="pt-3 pb-3">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <hr />
      <h1 className="font-bold pt-3">Subscription</h1>
      <ul className="pb-3">
        <li>Bro Code</li>
        <li>GitHub</li>
        <li>Apna College</li>
        <li>Telusko</li>
        <li>Simplilearn</li>
      </ul>
      <hr />
      <h1 className="font-bold pt-3">Explore</h1>
      <ul className="pb-3">
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Movies</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sports</li>
      </ul>
      <hr />
      <ul className="pt-3 pb-3">
        <li>Settings</li>
        <li>Help</li>
        <li>Feedback</li>
      </ul>
    </div>
  );
};

export default Sidebar;
