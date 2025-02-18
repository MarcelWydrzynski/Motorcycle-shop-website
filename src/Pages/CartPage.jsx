import React, { useContext } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import Cart from "../components/Cartpage/Cart";
import CartTotal from "../components/Cartpage/CartTotal";
import { ShopContext } from "../context/ShopContext";

const CartPage = () => {
  const { cart, cartTotal } = useContext(ShopContext);

  return (
    <div className="relative w-full">
      <Breadcrumbs />
      <h1 className="text-2xl font-bold my-5">Motorcycles in your cart</h1>
      <div className="flex-col w-full flex">
        <Cart cart={cart} />
        <CartTotal cartTotal={cartTotal} />
      </div>
    </div>
  );
};

export default CartPage;
