import React from "react";
import ProductCard from "../ProductCard";

const ProductPageProductsDisplay = ({ motorcycles, error, loading }) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="w-full flex flex-col gap-y-4">
      <p className="text-sm">We have returned {motorcycles.length} results</p>
      <div className="flex gap-8 py-8 flex-wrap justify-center">
        {motorcycles.map((motorcycle) => (
          <ProductCard key={motorcycle.id} motorcycle={motorcycle} />
        ))}
      </div>
    </div>
  );
};

export default ProductPageProductsDisplay;
