import React from "react";
import SearchIcon from "../../public/assets/Icons/services/Search.png";

const Search = () => {
  return (
    <div className=" bg-lightGrey rounded-xl flex px-4 py-2 gap-5 max-[530px]:mx-auto max-[530px]:order-last">
      <input
        type="text"
        placeholder="What are you looking for?"
        className="w-48 outline-none bg-transparent text-black"
      />
      <img className="cursor-pointer transition duration-150 ease-in-out  hover:scale-110" src={SearchIcon} alt="" />
    </div>
  );
};

export default Search;
