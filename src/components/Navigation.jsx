import React from "react";

const Navigation = () => {
  return (
    <div>
      {" "}
      <ul className="flex items-center gap-20 h-full text-lg text-black">
        <li className="cursor-pointer transition duration-150 ease-in-out  hover:scale-110">
          Home
        </li>
        <li className=" cursor-pointer transition duration-150 ease-in-out hover:scale-110">
          Contact
        </li>
        <li className=" cursor-pointer transition duration-150 ease-in-out  hover:scale-110">
          About
        </li>
        <li className=" cursor-pointer transition duration-150 ease-in-out hover:scale-110">
          Sign up
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
