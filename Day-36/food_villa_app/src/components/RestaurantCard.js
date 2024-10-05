import { IMG_CDN_URL, restaurantList } from "../Constant";
// using rest operator
export const RestaurantCard = ({ cloudinaryImageId, name, cuisines, sla }) => {
  return (
    <div className="w-[200px]">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="burger"></img>
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{sla.lastMileTravelString} Minutes</h4>
    </div>
  );
};
