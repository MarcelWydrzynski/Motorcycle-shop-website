import React from "react";
import SearchFilter from "./SearchFilter";
import useFetchMotorcycles from "../hooks/useFetchMotorcycles";
import { Button } from "flowbite-react";

const Filters = () => {
  const [motorcycles, motorcycleBrands, categories, error, loading] =
    useFetchMotorcycles();

  return (
    <div className="self-start flex gap-x-8 flex-wrap gap-y-2 justify-start w-full max-[570px]:justify-center">
      <SearchFilter text={"Select your Category"} options={categories} />
      <SearchFilter text={"Select your brand"} options={motorcycleBrands} />
      <SearchFilter
        text={"Select your price"}
        options={[
          "Under $10,000",
          "Between $10,000 & $20,000",
          "Above $20,000",
        ]}
      />
      <div className="ml-auto flex gap-2 max-[570px]:w-full max-[570px]:justify-center">
        <Button
          color="light"
          className="focus:outline-none focus:ring-0 active:scale-110 transition-transform"
        >
          Filter
        </Button>
        <Button
          color="light"
          className="focus:outline-none focus:ring-0 active:scale-110 transition-transform "
        >
          Sort by
        </Button>
      </div>
    </div>
  );
};

export default Filters;
