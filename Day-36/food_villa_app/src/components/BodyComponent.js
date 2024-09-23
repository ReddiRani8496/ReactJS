import React, { useEffect, useState } from "react";
import { IMG_CDN_URL, restaurantList } from "../Constant";
import { RestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/Helper";
import useAllRestaurants from "../utils/useAllRestaurants";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const {
    allRestaurants: initialRestaurants,
    filteredRestaurants: initialFilteredRestaurants,
  } = useAllRestaurants();

  // Use effect to set filtered restaurants once data is fetched
  useEffect(() => {
    if (initialFilteredRestaurants) {
      setFilteredRestaurants(initialFilteredRestaurants);
    }
    if (initialRestaurants) {
      setAllRestaurants(initialRestaurants);
    }
  }, [initialFilteredRestaurants]);

  const isOnline = useOnline();
  if (!isOnline) {
    return (
      <h1>
        🔴 You are currently offline. Please check your internet connection
      </h1>
    );
  }

  // conditional rendering
  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
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
            const data = filterData(searchInput, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants?.length === 0 ? (
          <h1>No restaurant Available</h1>
        ) : (
          filteredRestaurants?.map((restaurant) => (
            <Link
              to={`/restaurant/${restaurant?.info?.id}`}
              className="link"
              key={restaurant?.info?.id}
            >
              <RestaurantCard
                {...restaurant?.info}
                key={restaurant?.info?.id}
              />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Body;
