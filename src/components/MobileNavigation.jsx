import React from "react";
import { Dropdown } from "flowbite-react";
import hamburgerIcon from "../../public/assets/Icons/services/HamburgerMenu.png";

const MobileNavigation = () => {
  return (
    <div className="min-[620px]:hidden bg-lightGrey rounded-xl">
      <Dropdown
        className="w-2/5 text-center "
        dismissOnClick={false}
        renderTrigger={() => (
          <img src={hamburgerIcon} alt="Menu icon" className="w-6" />
        )}
      >
        <Dropdown.Item className="text-center p-4 flex justify-center">Home</Dropdown.Item>
        <Dropdown.Item className="text-center p-4 flex justify-center">Contact</Dropdown.Item>
        <Dropdown.Item className="text-center p-4 flex justify-center">About</Dropdown.Item>
        <Dropdown.Item className="text-center p-4 flex justify-center">Sign Up</Dropdown.Item>
      </Dropdown>
    </div>
  );
};

export default MobileNavigation;
