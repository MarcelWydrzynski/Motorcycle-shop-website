import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShopContext } from "../context/ShopContext";

const ProductCard = ({ motorcycle }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { toggleWishlisted, triggerAlert } = useContext(ShopContext);

  const onClick = () => {
    toggleWishlisted(motorcycle);
    setIsWishlisted(!isWishlisted);
    triggerAlert(
      !isWishlisted
        ? "Motorcycle added to wishlist!"
        : "Motorcycle removed from wishlist!"
    );
  };

  const generateSlug = (brand, model) => {
    return `${brand}-${model}`.toLowerCase().replace(/\s+/g, "-");
  };

  const WishlistIcon = "/assets/Icons/services/Vector.png"

  return (
    <>
      <div className="rounded flex flex-col max-[840px]:w-full group hover:bg-primaryRed ease-in-out duration-75 px-2 py-4 w-80 bg-lightGrey relative">
        <motion.button
          className={`absolute top-2 left-2 p-2 w-10 rounded-full ${
            isWishlisted ? "bg-primaryRed" : "bg-white"
          } group-hover:bg-white transform transition-transform duration-300`}
          onClick={onClick}
          whileTap={{ padding: 0 }} 
        >
          <img
            src={WishlistIcon}
            alt="heart icon on white rounded background"
            className="w-full"
          />
        </motion.button>

        <div>
          <img
            src={motorcycle.image}
            alt={`${motorcycle.brand} ${motorcycle.model}`}
          />
        </div>

        <div className="flex flex-col justify-between align-middle text-black px-4 gap-y-2">
          <h3 className="text-xl font-bold">{`${motorcycle.brand} ${motorcycle.model}`}</h3>
          <div>
            <ul className="flex w-full justify-center gap-4">
              <li className="font-bold text-primaryRed group-hover:text-black">
                {motorcycle.horsepower} hp
              </li>
              <li>|</li>
              <li className="font-bold text-primaryRed group-hover:text-black">
                {motorcycle.category === "Electric"
                  ? "Electric"
                  : `${motorcycle.cc}cc`}
              </li>
              <li>|</li>
              <li className="font-bold text-primaryRed group-hover:text-black">
                {motorcycle.performance.weight}
              </li>
            </ul>
          </div>
          <span className="text-sm text-grey group-hover:text-black">
            {motorcycle.short_description}
          </span>

          <div className="flex justify-between w-full">
            <span className="text-xl font-bold text-primaryRed group-hover:text-black">
              {motorcycle.price}
            </span>
            <Link
              to={`/products/${generateSlug(motorcycle.brand, motorcycle.model)}`}
            >
              <button className="font-semibold btn bg-black text-white duration-75 hover:bg-black group-hover:bg-white group-hover:text-black border-none py-2 px-3 rounded">
                View Motorcycle
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
