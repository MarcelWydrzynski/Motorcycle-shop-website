import React from "react";
import LogoImg from "../../public/assets/Icons/Logo/Logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"} className="max-[770px]:flex max-[770px]:justify-center">
      <img src={LogoImg} alt="Logo" className=" w-2/12 max-[770px]:w-4/12" />;
    </Link>
  );
};

export default Logo;
