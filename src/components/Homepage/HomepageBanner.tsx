import React from "react";

import { Link } from "react-router-dom";

const HomepageBanner = () => {
  const Banner = "/assets/Icons/Banners/Honda-banner.jpg";
  return (
    <div className="w-full h-auto relative">
      <img src={Banner} alt="Honda cbr on track" />
      <Link to="/products/honda-cbr600rr">
        <p
          className="absolute text-primaryRed text-4xl font-alumni right-10
  bottom-2 cursor-pointer transition duration-150 ease-in-out hover:scale-105
  max-lg:text-lg max-lg:bottom-1 max-sm:text-sm max-[1336px]:text-xl"
        >
          Check out the new Honda CBR!
        </p>
      </Link>
    </div>
  );
};

export default HomepageBanner;
