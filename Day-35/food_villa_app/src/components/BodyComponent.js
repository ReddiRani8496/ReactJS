import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    //Api call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const response = await data.json();
    console.log(response);
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
