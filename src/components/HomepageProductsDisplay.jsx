import React from "react";
import { Carousel } from "flowbite-react";
import Title from "./Title";
import SubTitle from "./SubTitle";
import ProductCard from "./ProductCard";
import useFetchRandomMotorcycle from "../hooks/useFetchRandomMotorcycles";

const HomepageProductDisplay = ({ productNumber, title, subtitle }) => {
  const { randomMotorcycles, error, loading } = useFetchRandomMotorcycle(productNumber);

  return (
    <div className="w-full flex flex-col gap-y-4">
      <SubTitle text={subtitle} />
      <Title text={title} />

      <div className="flex flex-col gap-8">
        <div className="block min-[840px]:hidden">
          <Carousel pauseOnHover indicators={false}>
            {randomMotorcycles.map((motorcycle) => (
              <ProductCard key={motorcycle.id} motorcycle={motorcycle} />
            ))}
          </Carousel>
        </div>

        <div className="hidden min-[840px]:flex gap-4 py-8 flex-wrap justify-center">
          {randomMotorcycles.map((motorcycle) => (
            <ProductCard key={motorcycle.id} motorcycle={motorcycle} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomepageProductDisplay;