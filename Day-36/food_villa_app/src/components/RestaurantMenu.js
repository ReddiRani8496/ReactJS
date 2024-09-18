import React, { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../Constant";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

function RestaurantMenu() {
  const { id } = useParams();

  const { restaurant, menuItems } = useRestaurant(id);

  return restaurant == "" ? (
    <Shimmer />
  ) : (
    <div className="restaurantMenu">
      <div style={{ marginRight: "50px", marginLeft: "30px" }}>
        <h1>Restaurant Id: {id}</h1>
        <h2>{restaurant?.name}</h2>

        <img
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          height="200px"
          width={200}
        />

        <h3>{restaurant?.areaName}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating} stars</h3>
        <h3>{restaurant?.costForTwoMessage}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {menuItems?.map((item) => (
            <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RestaurantMenu;
