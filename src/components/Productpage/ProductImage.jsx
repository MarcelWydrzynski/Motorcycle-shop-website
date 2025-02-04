import React from "react";

const ProductImage = ({ motorcycle, onImageClick }) => {
  return (
    <div className="w-1/2 max-[1000px]:w-full">
      <img
        src={motorcycle.image}
        alt={`${motorcycle.brand} ${motorcycle.model}`}
        className="w-full hover:cursor-pointer"
        onClick={() => onImageClick()}
      />
    </div>
  );
};

export default ProductImage;
