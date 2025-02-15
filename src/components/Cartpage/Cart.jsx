import React from "react";
import CartItem from "./CartItem";

const Cart = ({ motorcycles }) => {
  return (
    <div className="flex flex-wrap gap-2 py-8 justify-around max-[1000px]:w-full">
      {motorcycles.map((motorcycle) => (
        <CartItem motorcycle={motorcycle} key={motorcycle.id} />
      ))}
    </div>
  );
};

export default Cart;
