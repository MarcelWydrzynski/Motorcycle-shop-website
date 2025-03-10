import React from "react";
import CartItem from "./CartItem";

const Cart = ({ cart }) => {
  console.log(cart);
  return (
    <div className="flex flex-wrap gap-2 py-8 justify-center max-[1000px]:w-full">
      {cart.length > 0 ? (
        cart.map((motorcycle) => (
          <CartItem motorcycle={motorcycle} key={motorcycle.id} />
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
