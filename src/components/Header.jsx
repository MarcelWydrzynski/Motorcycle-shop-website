import { useContext } from "react";
import CartIcon from "../../public/assets/Icons/services/Cart1.png";
import FavoriteIcon from "../../public/assets/Icons/services/Vector.png";
import Search from "./Search";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import Logo from "./Logo";
import { WishlistContext } from "../context/WishlistContext.jsx";

const Header = () => {
  const { wishlist } = useContext(WishlistContext); // ✅ Now correctly accessing context

  return (
    <div className="flex items-center w-full justify-between px-4 flex-wrap max-[530px]:justify-between">
      <Logo />
      <Navigation />
      <Search />
      <div className="flex gap-6">
        <div className="relative">
          <img
            className="cursor-pointer w-7 h-7 transition duration-150 ease-in-out hover:scale-110"
            src={CartIcon}
            alt="Shopping cart icon"
          />
          <div className="absolute -top-5 -right-7 bg-primaryRed rounded-full py-1 px-3 text-white">
            <p>0</p>
          </div>
        </div>

        {/* Wishlist Icon */}
        <div className="relative">
          <img
            className="cursor-pointer w-7 h-7 transition duration-150 ease-in-out hover:scale-110"
            src={FavoriteIcon}
            alt="Heart shaped icon"
          />
          <div className="absolute -top-5 -right-7 bg-primaryRed rounded-full py-1 px-3 text-white">
            <p>{wishlist.length}</p> {/* ✅ Now displays wishlist count */}
          </div>
        </div>
      </div>
      <MobileNavigation />
    </div>
  );
};

export default Header;
