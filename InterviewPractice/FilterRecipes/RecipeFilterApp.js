import React, { useEffect, useState } from "react";
import "./styles.css";
import recipesData from "./recipesData";

const RecipeFilterApp = () => {
  const [selectedRating, setSelectedRating] = useState("4.0");
  const [cartCount, setCartCount] = useState(0);
  const [averageRating, setAverageRating] = useState(0.0);

  const [filteredRecipies, setFilteredRecipies] = useState([]);

  useEffect(() => {
    const data = recipesData?.filter(
      (recipe) => recipe?.rating >= selectedRating
    );
    setFilteredRecipies(data);

    const ratingSum = data?.reduce((sum, recipe) => sum + recipe.rating, 0);
    if (data?.length > 0) setAverageRating(ratingSum / data?.length);
    else setAverageRating(0.0);
  }, [selectedRating]);

  const handleClick = (id) => {
    setCartCount(cartCount + 1);
  };

  return (
    <div>
      <div className="heading">
        <h1>🍽️ Recipe Explorer</h1>
      </div>
      <div className="subHeader">
        <div>
          <p>
            <label>
              Filter by Rating:{" "}
              <select
                value={selectedRating}
                onChange={(e) => setSelectedRating(e.target.value)}
                style={{ marginLeft: "8px" }}
              >
                <option value="4.0">4.0+</option>
                <option value="4.3">4.3+</option>
                <option value="4.5">4.5+</option>
                <option value="4.7">4.7+</option>
                <option value="4.9">4.9+</option>
              </select>
            </label>
          </p>
        </div>
        <div>
          <p className="cartTitle">🛒 Cart Items: {cartCount}</p>
        </div>
      </div>
      <div className="rating">
        Average Rating: {averageRating.toFixed(2)} ({filteredRecipies?.length}{" "}
        recipes)
      </div>

      <div className="cardsContainer">
        {filteredRecipies?.map((recipe) => (
          <div className="recipeCard" key={recipe?.id}>
            <img
              src={recipe?.image}
              alt="recipe"
              height="100px"
              width="170px"
            />
            <p>{recipe?.name}</p>
            <p>Cuisine: {recipe?.cuisine}</p>
            <p>
              Rating: {recipe?.rating} ({recipe?.reviewCount} reviews)
            </p>
            <button onClick={() => handleClick(recipe?.id)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeFilterApp;
