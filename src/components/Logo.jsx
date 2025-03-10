import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  const LogoImg = "/assets/Icons/Logo/Logo.png"

  return (
    <Link to={"/"} className="max-[770px]:flex max-[770px]:justify-center">
      <img src={LogoImg} alt="Logo" className=" w-2/12 max-[770px]:w-4/12" />;
    </Link>
  );
};

export default Logo;
