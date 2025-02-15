import React, { useContext, useEffect, useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import Cart from "../components/Cartpage/Cart";
import CartTotal from "../components/Cartpage/CartTotal";
import { ShopContext } from "../context/ShopContext";

const CartPage = () => {
  const { cart } = useContext(ShopContext);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  const updateCartTotalPrice = (totalPrice) => {
    setCartTotalPrice(totalPrice);
  };

  useEffect(() => {
    const totalPrice = cart.reduce((total, motorcycle) => {
      const price = parseFloat(motorcycle.price.replace(/[^0-9.-]+/g, ""));
      return total + price;
    }, 0);
    updateCartTotalPrice(totalPrice);
  }, [cart]);

  return (
    <div className="relative w-full">
      <Breadcrumbs />
      <h1 className="text-2xl font-bold">Motorcycles in your cart</h1>
      <div className="flex-col w-full flex">
        <Cart cart={cart} />
        <CartTotal totalPrice={cartTotalPrice} />
      </div>
    </div>
  );
};

export default CartPage;
