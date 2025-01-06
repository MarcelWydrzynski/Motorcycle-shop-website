import React from "react"
import SearchIcon from "../../public/assets/Icons/services/Search.png";

const Search = () => {
  return (
    <div className="flex bg-lightGrey rounded-xl p-4 gap-5 max-[530px]:mx-auto justify-between max-[550px]:order-last max-[550px]:w-full">
     <input className="w-48 outline-none bg-transparent text-black" placeholder="What are you looking for?"/>
      <img className="cursor-pointer transition duration-150 ease-in-out  hover:scale-110 h-6 w-6" src={SearchIcon} alt="" />
    </div>
  );
};

export default Search;


