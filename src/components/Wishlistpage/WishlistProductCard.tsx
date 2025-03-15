import React from "react";
import { Motorcycle } from "../../shared/types";

type ProductCardProps = {
  motorcycle: Motorcycle;
  toggleWishlisted: (motorcycle: Motorcycle) => void;
  updateCart: (motorcycle: Motorcycle) => void;
};

const ProductCard: React.FC<ProductCardProps> = ({
  motorcycle,
  toggleWishlisted,
  updateCart,
}) => {
  const removeFromWishlist = () => {
    toggleWishlisted(motorcycle);
  };

  const moveToCart = () => {
    updateCart(motorcycle);
    removeFromWishlist();
  };

  const deleteIcon = "/assets/Icons/services/icon-delete.png";
  const cartIcon = "/assets/Icons/services/Cart.png";

  return (
    motorcycle && (
      <div className="rounded flex flex-col max-[840px]:w-full group hover:bg-primaryRed cursor-pointer ease-in-out duration-75 px-2 py-4 w-80 bg-lightGrey relative">
        <button
          className="absolute top-2 left-2 p-2.5 w-10 rounded-full group-hover:bg-white transform transition-transform duration-300"
          onClick={removeFromWishlist}
        >
          <img src={deleteIcon} alt="delete icon" className="w-full" />
        </button>
        <button
          className="absolute top-2 right-2 p-2.5 w-10 rounded-full group-hover:bg-white transform transition-transform duration-300"
          onClick={moveToCart}
        >
          <img src={cartIcon} alt="cart icon" className="w-full" />
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
    )
  );
};

export default ProductCard;
