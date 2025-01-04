import React from "react";
import Title from "./Title";
import SubTitle from "./SubTitle";
import ProductCard from "./ProductCard";
import useFetchRandomMotorcycle from "../hooks/useFetchRandomMotorcycles";

const HomepageProductsDisplay = () => {
  const { randomMotorcycles, error, loading } = useFetchRandomMotorcycle(4);

  console.log(randomMotorcycles);

  return (
    <div className="w-full flex flex-col gap-y-4 ">
      <SubTitle text={"This year"} />
      <Title text={"Best selling motorcycles"} />
      <div className="flex gap-4 py-8 overflow-x-scroll">
        {randomMotorcycles.map((motorcycle) => {
          return <ProductCard key={motorcycle.id} motorcycle={motorcycle} />;
        })}
      </div>
    </div>
  );
};

export default HomepageProductsDisplay;
