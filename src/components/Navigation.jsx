import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="max-[620px]:hidden">
      <ul className=" flex items-center gap-20 h-full text-lg text-black">
        <li className="cursor-pointer transition duration-150 ease-in-out  hover:scale-110">
          <Link to="/">Home</Link>
        </li>
        <li className=" cursor-pointer transition duration-150 ease-in-out hover:scale-110">
          <Link to="/contact">Contact</Link>
        </li>
        <li className=" cursor-pointer transition duration-150 ease-in-out  hover:scale-110">
          <Link to="/about">About</Link>
        </li>
        <li className=" cursor-pointer transition duration-150 ease-in-out hover:scale-110">
          <Link to="/products">Shop all</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
