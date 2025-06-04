import { useContext } from "react";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import Logo from "./Logo";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import React from "react";

const Header = () => {
  const { cart, wishlist } = useContext(ShopContext);

  const CartIcon = "/assets/Icons/services/Cart1.png";
  const FavoriteIcon = "/assets/Icons/services/Vector.png";

  return (
    <div className="select-none flex items-center w-full justify-between px-4 flex-wrap max-[530px]:justify-between gap-y-4">
      <Logo />
      <Navigation />
      <div className="flex gap-6">
        <Link to="/cart">
          <div className="relative">
            <img
              className="cursor-pointer w-7 h-7 transition duration-150 ease-in-out hover:scale-110"
              src={CartIcon}
              alt="Shopping cart icon"
            />
            <div className="absolute -top-5 -right-7 bg-primaryRed rounded-full py-1 px-3 text-white">
              <p>{cart.length}</p>
            </div>
          </div>
        </Link>
        <Link to="/wishlist">
          <div className="relative">
            <img
              className="cursor-pointer w-7 h-7 transition duration-150 ease-in-out hover:scale-110"
              src={FavoriteIcon}
              alt="Heart shaped icon"
            />
            <div className="absolute -top-5 -right-7 bg-primaryRed rounded-full py-1 px-3 text-white">
              <p>{wishlist.length}</p>
            </div>
          </div>
        </Link>
      </div>
      <MobileNavigation />
    </div>
  );
};

export default Header;
