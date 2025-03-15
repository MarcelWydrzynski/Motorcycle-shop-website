import React from "react";
import { Motorcycle } from "../../shared/types";

type ProductImageProps = {
  motorcycle: Motorcycle;
  onImageClick: () => void;
};

const ProductImage: React.FC<ProductImageProps> = ({
  motorcycle,
  onImageClick,
}) => {
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
