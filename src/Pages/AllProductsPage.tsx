import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import Filters from "../components/Filters";
import ProductPageProductsDisplay from "../components/AllProductspage/ProductPageProductsDisplay";
import Separator from "../components/Separator";
import ServiceIcons from "../components/ServiceIcons";
import useFetchMotorcycles from "../hooks/useFetchMotorcycles";
import { ShopProvider } from "../context/ShopContext";
import { Spinner } from "flowbite-react";
import { Motorcycle } from "../../src/shared/types";

const AllProductsPage = () => {
  const location = useLocation();
  const passedCategory = location.state?.category;
  const { motorcycles, loading, error } = useFetchMotorcycles();
  const defaultCategory = passedCategory || "None Selected";
  const defaultBrand = "None Selected";
  const defaultPrice = "None Selected";
  const defaultSortingFilter = "None Selected";
  const [filteredMotorcycles, setFilteredMotorcycles] = useState<Motorcycle[]>(
    []
  );
  const [unfilteredList, setUnfilteredList] = useState<Motorcycle[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);
  const [selectedBrand, setSelectedBrand] = useState(defaultBrand);
  const [selectedPrice, setSelectedPrice] = useState(defaultPrice);
  const [sortingFilter, setSortingFilter] = useState(defaultSortingFilter);

  useEffect(() => {
    if (motorcycles.length > 0) {
      setUnfilteredList(motorcycles);
    }
  }, [motorcycles]);

  useEffect(() => {
    const filterList = () => {
      let filtered = [...unfilteredList];

      if (selectedCategory !== "None Selected") {
        filtered = filtered.filter(
          (moto) => moto.category === selectedCategory
        );
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
      } else if (sortingFilter === "Fastest top speed") {
        filtered = filtered.sort(
          (a, b) => b.performance.topSpeed - a.performance.topSpeed
        );
      } else if (sortingFilter === "Lowest weight") {
        filtered = filtered.sort(
          (a, b) => a.performance.weight - b.performance.weight
        );
      }

      setFilteredMotorcycles(filtered);
    };

    if (unfilteredList.length > 0) {
      filterList();
    }
  }, [
    selectedCategory,
    selectedBrand,
    selectedPrice,
    sortingFilter,
    unfilteredList,
  ]);

  const resetFilters = () => {
    setSelectedCategory("None Selected");
    setSelectedBrand("None Selected");
    setSelectedPrice("None Selected");
    setSortingFilter("None Selected");
    setFilteredMotorcycles(unfilteredList);
  };

  return (
    <ShopProvider>
      <Breadcrumbs />
      {loading ? (
        <Spinner color="failure" aria-label="Failure spinner example" />
      ) : (
        <>
          <Filters
            motorcycles={motorcycles}
            setFilteredMotorcycles={setFilteredMotorcycles}
            selectedCategory={selectedCategory}
            setCategory={setSelectedCategory}
            selectedBrand={selectedBrand}
            setBrand={setSelectedBrand}
            selectedPrice={selectedPrice}
            setPrice={setSelectedPrice}
            resetFilters={resetFilters}
            sortingFilter={sortingFilter}
            setSortingFilter={setSortingFilter}
          />
          <ProductPageProductsDisplay
            motorcycles={filteredMotorcycles}
            loading={loading}
          />
        </>
      )}
      ;
      <Separator />
      <ServiceIcons />
    </ShopProvider>
  );
};

export default AllProductsPage;
