import React from "react";
import { Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";

const MobileNavigation = () => {
  const hamburgerIcon = "/assets/Icons/services/HamburgerMenu.png"

  return (
    <div className="min-[620px]:hidden bg-lightGrey rounded-xl">
      <Dropdown
        className="w-2/5 text-center "
        dismissOnClick={false}
        renderTrigger={() => (
          <img src={hamburgerIcon} alt="Menu icon" className="w-6" />
        )}
      >
        <Dropdown.Item className="text-center p-4 flex justify-center">
          <Link to="/">Home</Link>
        </Dropdown.Item>
        <Dropdown.Item className="text-center p-4 flex justify-center">
          <Link to="/contact">Contact</Link>
        </Dropdown.Item>
        <Dropdown.Item className="text-center p-4 flex justify-center">
          <Link to="/about">About</Link>
        </Dropdown.Item>
        <Dropdown.Item className="text-center p-4 flex justify-center">
          <Link to="/products">Shop all</Link>
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
};

export default MobileNavigation;
