import React from "react";
import CartIcon from "../../public/assets/Icons/services/Cart1.png";

const Search = () => {
  return (
    <div className="bg-lightGrey rounded-xl flex px-4 py-2 gap-5">
      <input
        type="text"
        placeholder="What are you looking for?"
        className="w-48 outline-none bg-transparent"
      />
      <img className="cursor-pointer" src={CartIcon} alt="" />
    </div>
  );
};

export default Search;
