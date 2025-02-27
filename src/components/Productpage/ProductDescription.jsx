import React, { useContext } from "react";
import ServiceInfo from "./serviceInfo";
import { ShopContext } from "../../context/ShopContext";
import Alert from "../../components/Alert";
import { AnimatePresence } from "framer-motion"; // Import AnimatePresence

const ProductDescription = ({ motorcycle }) => {
  const { updateCart, cart, alert, triggerAlert } = useContext(ShopContext);

  const onClick = () => {
    updateCart(motorcycle);
    triggerAlert();
  };

  return (
    <>
      <AnimatePresence>
        {alert && (
          <Alert
            alertMessage={
              cart.some((moto) => moto.id === motorcycle.id)
                ? "Motorcycle added to basket!"
                : "Motorcycle removed from basket!"
            }
          />
        )}
      </AnimatePresence>

      <div className="w-1/2 flex flex-col gap-y-6 max-[1000px]:w-full">
        <h2 className="text-4xl font-extrabold">
          {motorcycle.brand} {motorcycle.model}
        </h2>
        <span className="text-3xl font-thin">{motorcycle.price}</span>
        <p>{motorcycle.long_description}</p>
        <div className="flex flex-wrap justify-start gap-x-4">
          <p className="text-primaryRed font-bold">
            {motorcycle.horsepower} HP
          </p>
          <p className="text-primaryRed font-bold">{motorcycle.cc} CC</p>
          <p className="text-primaryRed font-bold">
            {motorcycle.performance["weight"]}
          </p>
        </div>
        <div>
          <ul className="flex flex-wrap gap-x-4">
            <li className="text-grey font-thin italic">
              0-100km/h:{" "}
              <span className="text-black font-bold">
                {motorcycle.performance["0-100kph"]}
              </span>
            </li>
            <li className="text-grey font-thin italic">
              Fuel capacity:{" "}
              <span className="text-black font-bold">
                {motorcycle.performance["fuelCapacity"]}
              </span>
            </li>
            <li className="text-grey font-thin italic">
              Top speed:{" "}
              <span className="text-black font-bold">
                {motorcycle.performance["topSpeed"]}
              </span>
            </li>
          </ul>
        </div>
        <button
          onClick={onClick}
          className="font-semibold bg-primaryRed text-white border-2 duration-75 py-4 px-6 rounded w-fit hover:border-primaryRed hover:bg-white hover:text-primaryRed"
        >
          {cart.some((moto) => moto.id === motorcycle.id)
            ? "Remove from cart"
            : "Add to cart!"}
        </button>
        <ServiceInfo />
      </div>
    </>
  );
};

export default ProductDescription;
