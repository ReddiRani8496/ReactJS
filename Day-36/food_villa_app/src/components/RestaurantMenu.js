import { IMG_CDN_URL } from "../Constant";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

function RestaurantMenu() {
  const { id } = useParams();

  const { restaurant, menuItems } = useRestaurant(id);

  const dispatch = useDispatch();
  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return restaurant == "" ? (
    <Shimmer />
  ) : (
    <div className="flex">
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
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name}
              <button
                className="bg-red-500 text-white p-1 m-1"
                onClick={() => addFoodItem(item)}
              >
                Add
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RestaurantMenu;
