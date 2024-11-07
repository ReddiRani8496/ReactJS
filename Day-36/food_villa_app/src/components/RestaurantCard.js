import { IMG_CDN_URL, restaurantList } from "../Constant";
// using rest operator
export const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  sla,
  location,
}) => {
  console.log("Image id: " + cloudinaryImageId);
  return (
    <div className="w-[200px] m-2 p-2 shadow-md h-96 hover:bg-red-100">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="burger"></img>
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{sla.lastMileTravelString} Minutes</h4>
      <h4>{location.location}</h4>
    </div>
  );
};
