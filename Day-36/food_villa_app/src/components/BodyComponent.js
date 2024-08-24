import React, { useEffect, useState } from "react";
import { IMG_CDN_URL, restaurantList } from "../Constant";
import { RestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  function filterData(searchInput, restaurants) {
    console.log("called");
    return restaurants.filter((restaurant) => {
      return restaurant?.info?.name
        .toLowerCase()
        .includes(searchInput.toLowerCase());
    });
  }

  useEffect(() => {
    //Api call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const response = await data.json();
    setAllRestaurants(
      response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurants(
      response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }

  // conditional rendering
  // if restaurant is empty => render shimmer UI
  // if restaurant has data => render actual data

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
        {filteredRestaurants.length === 0 ? (
          <h1>No restaurant Available</h1>
        ) : (
          filteredRestaurants.map((restaurant) => (
            <Link to={`/restaurant/${restaurant.info.id}`}>
              <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
            </Link>
          ))
        )}
      </div>
    </>
  );
};
export default Body;
