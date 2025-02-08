import React from "react";
import CartItem from "./CartItem";

const Cart = ({ motorcycles }) => {
  return (
    <div className=" w-full flex flex-wrap gap-4 py-8 justify-start">
      {motorcycles.map((motorcycle) => (
        <CartItem motorcycle={motorcycle} key={motorcycle.id} />
      ))}
    </div>
  );
};

export default Cart;
