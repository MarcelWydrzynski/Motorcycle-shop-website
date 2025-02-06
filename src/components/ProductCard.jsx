import React, { useState, useEffect } from "react";
import WishlistIcon from "../../public/assets/Icons/services/Vector.png";
import { Alert } from "flowbite-react";

const ProductCard = ({ motorcycle }) => {
  const [wishlisted, setIsWishlisted] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [scaling, setScaling] = useState(false);

  const onClick = () => {
    if (!wishlisted) {
      setShowAlert(true);
    }
    setIsWishlisted(!wishlisted);
    setScaling(true);

    setTimeout(() => {
      setScaling(false);
    }, 300);
  };

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    }
  }, [showAlert]);

  return (
    <>
      {showAlert && (
        <div className="fixed inset-x-0 top-10 flex justify-center z-50">
          <Alert
            color="info"
            className="bg-primaryRed text-white px-6 py-3 rounded-lg text-center animate-fade-in-out"
          >
            <p className="text-md">Motorcycle added to wishlist!</p>
          </Alert>
        </div>
      )}

      <div className="rounded flex flex-col max-[840px]:w-full group hover:bg-primaryRed cursor-pointer ease-in-out duration-75 px-2 py-4 w-80 bg-lightGrey relative">
        <button
          className={`absolute top-2 left-2 p-2.5 w-10 rounded-full ${
            wishlisted ? "bg-primaryRed" : "bg-white"
          } group-hover:bg-white transform transition-transform duration-300 ${
            scaling ? "scale-125" : "scale-100"
          }`}
          onClick={onClick}
        >
          <img
            src={WishlistIcon}
            alt="heart icon on white rounded background"
            className="w-full"
          />
        </button>

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
              {`${motorcycle.price}`}
            </span>
            <button className="font-semibold btn bg-black text-white duration-75 hover:bg-black group-hover:bg-white group-hover:text-black border-none py-2 px-3 rounded">
              View motorcycle
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
