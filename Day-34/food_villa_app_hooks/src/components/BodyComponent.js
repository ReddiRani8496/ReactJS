import React, { useState } from "react";
import { IMG_CDN_URL, restaurantList } from "../Constant";
import { RestaurantCard } from "./RestaurantCard";

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchInput, setSearchInput] = useState("");
  const [searchClicked, setSearchClicked] = useState("false");

  function filterData(searchInput, restaurants) {
    console.log("called");
    return restaurants.filter((restaurant) => {
      return restaurant.info.name.includes(searchInput);
    });
  }
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for restaurants..."
          className="search-input"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />

        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchInput, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => (
          <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
        ))}
      </div>
    </>
  );
};
export default Body;
