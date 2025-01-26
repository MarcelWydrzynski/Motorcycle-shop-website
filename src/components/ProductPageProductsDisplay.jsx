import React from "react";
import { Carousel } from "flowbite-react";
import ProductPageProductCard from "./ProductPageProductCard";
import useFetchRandomMotorcycles from "../hooks/useFetchRandomMotorcycles";

const ProductPageProductsDisplay = ({ productNumber, title, subtitle }) => {
  const { randomMotorcycles, error, loading } =
    useFetchRandomMotorcycles(productNumber);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="w-full flex flex-col gap-y-4">
      <div className="flex gap-8 py-8 flex-wrap justify-center">
        {randomMotorcycles.map((motorcycle) => (
          <ProductPageProductCard key={motorcycle.id} motorcycle={motorcycle} />
        ))}
      </div>
    </div>
  );
};

export default ProductPageProductsDisplay;
