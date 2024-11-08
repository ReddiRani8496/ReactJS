import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FoodItem } from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const clear = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <h1>Cart items - {cartItems.length}</h1>
      <button
        className="bg-yellow-300 text-white p-2 rounded-md m-2"
        onClick={clear}
      >
        Clear Cart
      </button>
      <div className="flex flex-wrap">
        {cartItems.map((item) => {
          return <FoodItem key={item.id} {...item.card.info} />;
        })}
      </div>
    </div>
  );
}

export default Cart;
