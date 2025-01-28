import React from "react";
import ProductPageProductCard from "./ProductPageProductCard";

const ProductPageProductsDisplay = ({ motorcycles, error, loading }) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="w-full flex flex-col gap-y-4">
      <div className="flex gap-8 py-8 flex-wrap justify-center">
        {motorcycles.map((motorcycle) => (
          <ProductPageProductCard key={motorcycle.id} motorcycle={motorcycle} />
        ))}
      </div>
    </div>
  );
};

export default ProductPageProductsDisplay;
