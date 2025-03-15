import React from "react";
import SearchFilter from "./SearchFilter";
import { Button } from "flowbite-react";
import useFetchMotorcycleBrands from "../hooks/useFetchMotorcycleBrands";
import useFetchMotorcycleCategories from "../hooks/useFetchMotorcycleCategories";
import MobileFilters from "./MobileFilters";
import { Motorcycle } from "../../src/shared/types";

type FiltersProps = {
  motorcycles: Motorcycle[];
  setFilteredMotorcycles: React.Dispatch<React.SetStateAction<Motorcycle[]>>;
  selectedCategory: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  selectedBrand: string;
  setBrand: React.Dispatch<React.SetStateAction<string>>;
  selectedPrice: string;
  setPrice: React.Dispatch<React.SetStateAction<string>>;
  resetFilters: () => void;
  sortingFilter: string;
  setSortingFilter: React.Dispatch<React.SetStateAction<string>>;
}

const Filters: React.FC<FiltersProps> = ({
  selectedCategory,
  setCategory,
  selectedBrand,
  setBrand,
  selectedPrice,
  setPrice,
  resetFilters,
  sortingFilter,
  setSortingFilter,
}) => {
  const { motorcycleBrands } = useFetchMotorcycleBrands();
  const { motorcycleCategories } = useFetchMotorcycleCategories();

  return (
    <div className="flex justify-between items-center w-full">
      <MobileFilters
        setCategory={setCategory}
        selectedCategory={selectedCategory}
        setBrand={setBrand}
        selectedBrand={selectedBrand}
        setPrice={setPrice}
        selectedPrice={selectedPrice}
        resetFilters={resetFilters}
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
            "None Selected",
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
          onClick={resetFilters}
        >
          Reset Filters
        </Button>
      </div>
      <div>
        <SearchFilter
          text={"Sort motorcycles by"}
          options={["None Selected", "Price going down", "Price going up"]}
          state={sortingFilter}
          stateSetter={setSortingFilter}
        />
      </div>
    </div>
  );
};

export default Filters;
