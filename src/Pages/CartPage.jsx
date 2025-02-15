import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import Cart from "../components/Cartpage/Cart";
import CartTotal from "../components/Cartpage/CartTotal";
import useFetchRandomMotorcycles from "../hooks/useFetchRandomMotorcycles";

const CartPage = () => {
  const { randomMotorcycles, error, loading } = useFetchRandomMotorcycles(12);
  const [motorcycles, setMotorcycles] = useState([]);

  useEffect(() => {
    if (randomMotorcycles && randomMotorcycles.length > 0) {
      setMotorcycles(randomMotorcycles);
    }
  }, [randomMotorcycles]);

  if (loading) return <p>Loading motorcycles...</p>;
  if (error) return <p>Error loading motorcycles!</p>;

  return (
    <div className="relative">
      <Breadcrumbs />
      <h1 className="text-2xl font-bold">Motorcycles in your cart</h1>
      <div className="flex-col w-full flex">
        {" "}
        <Cart motorcycles={motorcycles} />
        <CartTotal />
      </div>
    </div>
  );
};

export default CartPage;
