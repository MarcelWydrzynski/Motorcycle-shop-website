import React from "react";
import ProductCard from "../ProductCard";
import { Spinner } from "flowbite-react";
import { Motorcycle } from "../../shared/types";

type ProductPageProductsDisplayProps = {
  motorcycles: Motorcycle[];
  loading: boolean;
};

const ProductPageProductsDisplay: React.FC<ProductPageProductsDisplayProps> = ({
  motorcycles,
  loading,
}) => {
  return (
    <div className="w-full flex flex-col gap-y-4">
      <p className="text-sm">We have returned {motorcycles.length} results</p>
      <div className="flex gap-8 py-8 flex-wrap justify-center">
        {loading ? (
          <Spinner color="failure" />
        ) : (
          motorcycles.map((motorcycle) => (
            <ProductCard key={motorcycle.id} motorcycle={motorcycle} />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductPageProductsDisplay;
