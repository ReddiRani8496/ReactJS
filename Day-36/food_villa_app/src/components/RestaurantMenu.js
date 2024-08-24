import React, { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../Constant";
import { useParams } from "react-router-dom";

function RestaurantMenu() {
  const [restaurant, setRestaurant] = useState("");
  const { id } = useParams();
  useEffect(() => {
    restaurantInfo();
  }, []);

  async function restaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const response = await data.json();
    setRestaurant(response?.data?.cards[2]?.card?.card?.info);
  }
  return (
    <div>
      <div>
        <h1>Restaurant Id: {id}</h1>
        <h2>{restaurant.name}</h2>

        <img
          src={IMG_CDN_URL + restaurant.cloudinaryImageId}
          height="200px"
          width={200}
        />

        <h3>{restaurant.areaName}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avgRating} stars</h3>
        <h3>{restaurant.costForTwoMessage}</h3>
      </div>
    </div>
  );
}

export default RestaurantMenu;
