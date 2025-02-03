import React from "react";

const ProductImage = ({ motorcycle}) => {
  return (
    <div className="w-1/2 max-[1000px]:w-full">
      <img
        src={motorcycle.image}
        alt={`${motorcycle.brand} ${motorcycle.model}`}
        className="w-full"
      />
    </div>
  );
};

export default ProductImage;
