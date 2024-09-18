import { useEffect, useState } from "react";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    restaurantInfo();
  }, []);

  async function restaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const response = await data.json();
    setRestaurant(response?.data?.cards[2]?.card?.card?.info);

    // some resturant menu items path is different and some have different path, so we are taking two paths
    const menuItemsPath1 =
      response?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card?.itemCards;
    const menuItemsPath2 =
      response?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
        ?.card?.card?.itemCards;

    const menuItems = menuItemsPath1 || menuItemsPath2 || [];

    setMenuItems(menuItems);
  }
  return { restaurant, menuItems };
};

export default useRestaurant;
