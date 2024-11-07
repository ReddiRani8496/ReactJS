import { IMG_CDN_URL, restaurantList } from "../Constant";
// using rest operator
export const FoodItem = ({
  name,
  description,
  defaultPrice,
  imageId,
  ratings,
}) => {
  return (
    <div className="w-[200px] m-7 p-2 shadow-md h-72 hover:bg-red-100">
      <img src={IMG_CDN_URL + imageId} alt="burger"></img>
      <h2>{name}</h2>
      <h3>{ratings.aggregatedRating.rating} stars</h3>
      <h4>{defaultPrice / 100} Rupees</h4>
    </div>
  );
};
