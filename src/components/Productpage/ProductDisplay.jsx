import { React, useState, useEffect } from "react";
import ProductDescription from "./ProductDescription";
import ProductImage from "./ProductImage";
import ImagesModal from "./ImagesModal";

const ProductDisplay = ({ motorcycle, toggleModal, modalOpen }) => {
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modalOpen]);

  return (
    <div className="w-full flex max-[1000px]:flex-col">
      {modalOpen && (
        <ImagesModal motorcycleImage={motorcycle.image} onClose={toggleModal} />
      )}
      <ProductImage motorcycle={motorcycle} onImageClick={toggleModal} />
      <ProductDescription motorcycle={motorcycle} />
    </div>
  );
};

export default ProductDisplay;
