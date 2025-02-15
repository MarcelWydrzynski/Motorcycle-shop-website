import { React, useState, useEffect } from "react";
import ProductDescription from "./ProductDescription";
import ProductImage from "./ProductImage";
import ImagesModal from "./ImagesModal";

const ProductDisplay = ({ motorcycle }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  if (modalOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

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
