import { useState, React } from "react";
import ProductDescription from "./ProductDescription";
import ProductImage from "./ProductImage";

const ProductDisplay = ({ motorcycle }) => {

  return (
    <div className="w-full border-1 border-black flex max-[1000px]:flex-col">
      <ProductImage motorcycle={motorcycle}/>
      <ProductDescription motorcycle={motorcycle} />
    </div>
  );
};

export default ProductDisplay;
