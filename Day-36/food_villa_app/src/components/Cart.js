import React from "react";
import { useSelector } from "react-redux";
import { FoodItem } from "./FoodItem";

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div>
      <h1>Cart items - {cartItems.length}</h1>
      {cartItems.map((item) => {
        return <FoodItem key={item.id} {...item.card.info} />;
      })}
    </div>
  );
}

export default Cart;
