import React from "react";

const CategoryCard = ({ img, text }) => {
  return (
    <div className=" flex e text-center flex-col border-2 px-12 py-8 hover:bg-primaryRed cursor-pointer ease-in-out duration-75">
      <img src={img} alt={text} className="w-24 h-24 max-sm:w-14 max-sm:h-14"></img>
      <p className="text-center mt-2 text-black text-lg">{text}</p>
    </div>
  );
};

export default CategoryCard;
