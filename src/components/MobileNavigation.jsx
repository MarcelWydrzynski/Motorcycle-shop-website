import React from "react";
import { Dropdown } from "flowbite-react";
import hamburgerIcon from "../../public/assets/Icons/services/HamburgerMenu.png";

const MobileNavigation = () => {
  return (
    <div className="min-[620px]:hidden bg-lightGrey rounded-xl">
      <Dropdown
        dismissOnClick={false}
        renderTrigger={() => (
          <img src={hamburgerIcon} alt="Menu icon" className="w-6" />
        )}
      >
        <Dropdown.Item>Home</Dropdown.Item>
        <Dropdown.Item>Contact</Dropdown.Item>
        <Dropdown.Item>About</Dropdown.Item>
        <Dropdown.Item>Sign Up</Dropdown.Item>
      </Dropdown>
    </div>
  );
};

export default MobileNavigation;
