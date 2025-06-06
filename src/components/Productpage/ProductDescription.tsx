import React, { useContext } from "react";
import ServiceInfo from "./ServiceInfo";
import { ShopContext } from "../../context/ShopContext";
import { motion } from "framer-motion";
import { Motorcycle } from "../../shared/types";

type ProductDescriptionProps = {
  motorcycle: Motorcycle;
};

const ProductDescription: React.FC<ProductDescriptionProps> = ({
  motorcycle,
}) => {
  const { updateCart, cart, triggerAlert } = useContext(ShopContext);

  const onClick = () => {
    updateCart(motorcycle);
    triggerAlert(
      cart.some((moto) => moto.id === motorcycle.id)
        ? "Motorcycle removed from basket!"
        : "Motorcycle added to basket!"
    );
  };

  return (
    <>
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
        <motion.button
          whileTap={{ scale: 1.2 }}
          onClick={onClick}
          className="font-semibold bg-primaryRed text-white border-2 duration-75 py-4 px-6 rounded w-fit hover:border-primaryRed hover:bg-white hover:text-primaryRed"
        >
          {cart.some((moto) => moto.id === motorcycle.id)
            ? "Remove from cart"
            : "Add to cart!"}
        </motion.button>
        <ServiceInfo />
      </div>
    </>
  );
};

export default ProductDescription;
