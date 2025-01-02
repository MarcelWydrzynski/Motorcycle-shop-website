import React from "react";
import CartIcon from "../../public/assets/Icons/services/Cart1.png";
import FavoriteIcon from "../../public/assets/Icons/services/Vector.png";
import Search from "./Search";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="flex items-center w-full justify-between px-4 flex-wrap max-[530px]:justify-between">
      <Logo />
      <Navigation />
      <Search />
      <div className="flex gap-6">
        <img
          className="cursor-pointer w-6 h-6"
          src={CartIcon}
          alt="Shopping cart icon"
        />
        <img
          className="cursor-pointer w-6 h-6"
          src={FavoriteIcon}
          alt="Heart shaped icon"
        />
      </div>
      <MobileNavigation />
    </div>
  );
};

export default Header;
