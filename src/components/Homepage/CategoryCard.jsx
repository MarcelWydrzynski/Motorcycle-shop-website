import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ img, text }) => {
  return (
    <>
      {text === "None Selected" ? null : (
        <Link
          to="/products" // Navigate to /products route
          state={{ category: text }} // Pass selected category as state
          className="flex text-center flex-col border-2 px-12 py-8 hover:bg-primaryRed cursor-pointer ease-in-out duration-75"
        >
          <img
            src={img}
            alt={text}
            className="w-24 h-24 max-sm:w-14 max-sm:h-14"
          />
          <p className="text-center mt-2 text-black text-lg">{text}</p>
        </Link>
      )}
    </>
  );
};

export default CategoryCard;
