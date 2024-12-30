import React from "react";
import CartIcon from "../../public/assets/Icons/services/Cart1.png";
import FavoriteIcon from "../../public/assets/Icons/services/Vector.png";
import Search from "./Search";
import Navigation from "./Navigation";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="flex items-center w-full justify-between px-4">
      <Logo />
      <Navigation />
      <Search />
      <div className="flex gap-8">
        <img
          className="cursor-pointer"
          src={CartIcon}
          alt="Shopping cart icon"
        />
        <img
          className="cursor-pointer"
          src={FavoriteIcon}
          alt="Heart shaped icon"
        />
      </div>
    </div>
  );
};

export default Header;
