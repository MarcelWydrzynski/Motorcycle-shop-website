import React from "react";
import { Carousel, Spinner } from "flowbite-react";
import Title from "../Title";
import SubTitle from "../SubTitle";
import ProductCard from "../ProductCard";
import useFetchRandomMotorcycles from "../../hooks/useFetchRandomMotorcycles";

const ProductsShowcase = ({ productNumber, title, subtitle, modalOpen }) => {
  const { randomMotorcycles, loading } =
    useFetchRandomMotorcycles(productNumber);

  return (
    <div
      className={`w-full flex flex-col gap-y-4 ${modalOpen ? "-z-20" : "flex"}`}
    >
      <SubTitle text={subtitle} />
      <Title text={title} />

      <div className="flex flex-col gap-8">
        <div className="block min-[840px]:hidden">
          <Carousel pauseOnHover>
            {randomMotorcycles.map((motorcycle) => (
              <ProductCard key={motorcycle.id} motorcycle={motorcycle} />
            ))}
          </Carousel>
        </div>

        <div className="hidden min-[840px]:flex gap-4 py-8 flex-wrap justify-center">
          {loading ? (
            <Spinner color="failure" />
          ) : (
            randomMotorcycles.map((motorcycle) => (
              <ProductCard key={motorcycle.id} motorcycle={motorcycle} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsShowcase;
