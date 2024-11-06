import { IMG_CDN_URL, restaurantList } from "../Constant";
// using rest operator
export const FoodItem = ({ name, description, defaultPrice, ImageId }) => {
  return (
    <div className="w-[200px] m-2 p-2 shadow-md h-96 hover:bg-red-100">
      <img src={IMG_CDN_URL + ImageId} alt="burger"></img>
      <h2>{name}</h2>
      <h3>{description}</h3>
      <h4>{defaultPrice / 100} Minutes</h4>
    </div>
  );
};
