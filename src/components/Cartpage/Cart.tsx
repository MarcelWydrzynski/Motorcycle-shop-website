import React from "react";
import CartItem from "./CartItem";
import { Motorcycle } from "../../shared/types";

type CartProps = {
  cart: Motorcycle[];
  motorcycle: Motorcycle;
};

const Cart: React.FC<CartProps> = ({ cart }) => {
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
