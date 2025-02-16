import React from "react";
import { Link } from "react-router-dom";

const TopHeader = () => {
  return (
    <div className="w-full flex justify-center gap-2 max-md:flex-col max-md:gap-1 p-2">
      <p className="text-white">
        Brand New Motorcycles in Stock! 🚀🏍️ Check out our latest arrivals and
        ride home your dream bike today!
      </p>
      <Link to="/products">
        {" "}
        <button className="text-white underline font-bold">ShopNow!</button>
      </Link>
    </div>
  );
};

export default TopHeader;
