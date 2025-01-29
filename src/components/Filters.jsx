import React, { useState } from "react";
import SearchFilter from "./SearchFilter";
import { Button } from "flowbite-react";
import useFetchMotorcycleBrands from "../hooks/useFetchMotorcycleBrands";
import useFetchMotorcycleCategories from "../hooks/useFetchMotorcycleCategories";
import MobileFilters from "./MobileFilters";

const Filters = ({
  setCategory,
  selectedCategory,
  setBrand,
  selectedBrand,
  setPrice,
  selectedPrice,
  resetFilters,
}) => {
  const { motorcycleBrands } = useFetchMotorcycleBrands();
  const { motorcycleCategories } = useFetchMotorcycleCategories();

  return (
    <div className="flex justify-between items-end w-full">
      <MobileFilters
        setCategory={setCategory}
        setBrand={setBrand}
        setPrice={setPrice}
      />
      <div className="self-start flex gap-x-8 flex-wrap gap-y-2 justify-start max-[1000px]:hidden w-2/3">
        <SearchFilter
          text={"Select your Category"}
          options={motorcycleCategories}
          state={selectedCategory}
          stateSetter={setCategory}
        />
        <SearchFilter
          text={"Select your brand"}
          options={motorcycleBrands}
          state={selectedBrand}
          stateSetter={setBrand}
        />
        <SearchFilter
          text={"Select your price"}
          options={[
            "None selected",
            "Under $10,000",
            "Between $10,000 & $20,000",
            "Above $20,000",
          ]}
          state={selectedPrice}
          stateSetter={setPrice}
        />
        <Button
          color="light"
          className="focus:outline-none focus:ring-0 active:scale-110 transition-transform my-4"
          onClick={() => resetFilters()}
        >
          Reset Filters
        </Button>
      </div>
      <div className="w">
        <SearchFilter
          text={"Sort motorcycles by"}
          options={[
            "Price going down",
            "Price goinng down",
            "Fastest top speed",
            "lowest weight",
          ]}
        />
      </div>
    </div>
  );
};

export default Filters;
