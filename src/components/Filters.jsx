import React, { useEffect } from "react";
import SearchFilter from "./SearchFilter";
import { Button } from "flowbite-react";
import useFetchMotorcycleBrands from "../hooks/useFetchMotorcycleBrands";
import useFetchMotorcycleCategories from "../hooks/useFetchMotorcycleCategories";
import MobileFilters from "./MobileFilters";

const Filters = ({
  motorcycles,
  setFilteredMotorcycles,
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

  const applyFilters = () => {
    let filtered = [...motorcycles];

    if (selectedCategory !== "None Selected") {
      filtered = filtered.filter((moto) => moto.category === selectedCategory);
    }

    if (selectedBrand !== "None Selected") {
      filtered = filtered.filter((moto) => moto.brand === selectedBrand);
    }

    if (selectedPrice !== "None Selected") {
      filtered = filtered.filter((moto) => {
        const cleanPrice = parseInt(moto.price.replace(/[$,]/g, ""), 10);
        switch (selectedPrice) {
          case "Under $10,000":
            return cleanPrice < 10000;
          case "Between $10,000 & $20,000":
            return cleanPrice >= 10000 && cleanPrice <= 20000;
          case "Above $20,000":
            return cleanPrice > 20000;
          default:
            return true;
        }
      });
    }

    if (sortingFilter === "Price going up") {
      filtered = filtered.sort((a, b) => {
        const priceA = parseInt(a.price.replace(/[$,]/g, ""), 10);
        const priceB = parseInt(b.price.replace(/[$,]/g, ""), 10);
        return priceA - priceB;
      });
    } else if (sortingFilter === "Price going down") {
      filtered = filtered.sort((a, b) => {
        const priceA = parseInt(a.price.replace(/[$,]/g, ""), 10);
        const priceB = parseInt(b.price.replace(/[$,]/g, ""), 10);
        return priceB - priceA;
      });
    }
    setFilteredMotorcycles(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedCategory, selectedBrand, selectedPrice, sortingFilter]);

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
