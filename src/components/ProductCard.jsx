import React from "react";

const ProductCard = ({ motorcycle }) => {
  return (
    <div className="rounded flex flex-col border-grey border-2 min-w-72 2xl:min-w-80 max-[750px]:min-w-full group hover:bg-primaryRed cursor-pointer ease-in-out duration-75">
      <div>
        <img
          src={motorcycle.image}
          alt={`${motorcycle.brand} ${motorcycle.model}`}
        />
      </div>
      <div className="flex flex-col justify-between align-middle text-black p-4 gap-y-2">
        <h3 className="text-xl	 font-bold">{`${motorcycle.brand} ${motorcycle.model}`}</h3>
        <span className="text-sm text-grey group-hover:text-black">{motorcycle.short_description}</span>
        <div className="flex justify-between w-full">
          <span className="text-lg font-semibold text-primaryRed group-hover:text-black">{`${motorcycle.price}`}</span>
          <button class="btn bg-black text-white hover:bg-black group-hover:bg-white group-hover:text-black border-none">View page</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
