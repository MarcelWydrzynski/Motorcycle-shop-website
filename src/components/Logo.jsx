import React from "react";
import LogoImg from "../../public/assets/Icons/Logo/Logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"}>
      <img src={LogoImg} alt="Logo" className=" w-2/12 max-[500px]:w-3/12" />;
    </Link>
  );
};

export default Logo;
