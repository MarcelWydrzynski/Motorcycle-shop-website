import React, { useEffect, useState } from "react";
import TopHeader from "../components/TopHeader";
import Container from "../components/Container";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import Filters from "../components/Filters";
import FooterComponent from "../components/FooterComponent";
import FullWidthContainer from "../components/FullWidthContainer";
import ProductPageProductsDisplay from "../components/AllProductspage/ProductPageProductsDisplay";
import Separator from "../components/Separator";
import ServiceIcons from "../components/ServiceIcons";
import useFetchMotorcycles from "../hooks/useFetchMotorcycles";
import { WishlistProvider } from "../context/WishlistContext";

const AllProductsPage = () => {
  const { motorcycles, error, loading } = useFetchMotorcycles();
  const [filteredMotorcycles, setFilteredMotorcycles] = useState([]);
  const [unfilterdList, setUnfilterdList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("None Selected");
  const [selectedBrand, setSelectedBrand] = useState("None Selected");
  const [selectedPrice, setSelectedPrice] = useState("None Selected");
  const [sortingFilter, setSortingFilter] = useState("None Selected");

  useEffect(() => {
    if (motorcycles.length > 0) {
      setUnfilterdList(motorcycles);
    }
  }, [motorcycles]);

  useEffect(() => {
    if (motorcycles.length > 0) {
      setUnfilterdList(motorcycles);
    }
  }, [motorcycles]);

  useEffect(() => {
    const filterList = () => {
      let filtered = [...unfilterdList];

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

      return filtered;
    };

    setFilteredMotorcycles(filterList());
  }, [
    selectedCategory,
    selectedBrand,
    selectedPrice,
    sortingFilter,
    unfilterdList,
  ]);

  const resetFilters = () => {
    setSelectedBrand("None Selected");
    setSelectedCategory("None Selected");
    setSelectedPrice("None Selected");
    setSortingFilter("None Selected");
    setFilteredMotorcycles(unfilterdList);
  };

  return (
    <WishlistProvider>
      <div className="flex flex-col w-full overflow-hidden align-middle justify-center">
        <div className="flex justify-center w-screen bg-black">
          <Container>
            <TopHeader />
          </Container>
        </div>
        <div className="flex justify-center w-screen bg-white">
          <Container>
            <Header />
            <Breadcrumbs />
            <Filters
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
            {loading ? (
              <p>loading</p>
            ) : (
              <ProductPageProductsDisplay
                motorcycles={filteredMotorcycles}
                error={error}
                loading={loading}
              />
            )}

            <Separator />
            <ServiceIcons />
          </Container>
        </div>
        <FullWidthContainer>
          <FooterComponent />
        </FullWidthContainer>
      </div>
    </WishlistProvider>
  );
};

export default AllProductsPage;
