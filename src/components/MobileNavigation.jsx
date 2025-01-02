import React from "react";
import hamburgerIcon from "../../public/assets/Icons/services/HamburgerMenu.png";


const MobileNavigation = () => {
  return (
    <div className="dropdown dropdown-end min-[620px]:hidden bg-lightGrey rounded-xl">
      <div tabIndex={0} role="button" className="btn m-1 hover:bg-lightGrey bg-lightGrey border-0 ">
        <img src={hamburgerIcon} alt="Hamburger menu icon" className="w-4" />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu rounded-box w-52 p-2 shadow z-50 bg-lightGrey text-black" 
      >
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Sign up</a>
        </li>
      </ul>
    </div>
  );
};

export default MobileNavigation;
