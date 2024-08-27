import React, { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../Constant";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

function RestaurantMenu() {
  const [restaurant, setRestaurant] = useState("");
  const [menuItems, setMenuItems] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    restaurantInfo();
  }, []);

  console.log(id);
  async function restaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const response = await data.json();
    setRestaurant(response?.data?.cards[2]?.card?.card?.info);
    // setMenuItems(
    //   response?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]

    // );
    const menuItemsPath1 =
      response?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card?.itemCards;
    const menuItemsPath2 =
      response?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
        ?.card?.card?.itemCards;

    const menuItems = menuItemsPath1 || menuItemsPath2 || [];

    setMenuItems(menuItems);

    console.log(
      response?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card?.itemCards
    );
    const obj = response?.data;
    console.log(obj);
  }
  return restaurant == "" ? (
    <Shimmer />
  ) : (
    <div className="restaurantMenu">
      <div style={{ marginRight: "50px", marginLeft: "30px" }}>
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
      <div>
        <h1>Menu</h1>
        <ul>
          {menuItems.map((item) => (
            <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RestaurantMenu;
