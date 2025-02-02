import React, { useEffect, useState } from "react";
import TopHeader from "../components/TopHeader";
import Container from "../components/Container";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import Filters from "../components/Filters";
import FooterComponent from "../components/FooterComponent";
import FullWidthContainer from "../components/FullWidthContainer";
import ProductPageProductsDisplay from "../components/ProductPageProductsDisplay";
import Separator from "../components/Separator";
import ServiceIcons from "../components/ServiceIcons";
import useFetchMotorcycles from "../hooks/useFetchMotorcycles";

const AllProductsPage = () => {
  const { motorcycles, error, loading } = useFetchMotorcycles();
  const [filteredMotorcycles, setFilteredMotorcycles] = useState([]);
  const [unfilterdList, setUnfilterdList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("None Selected");
  const [selectedBrand, setSelectedBrand] = useState("None Selected");
  const [selectedPrice, setSelectedPrice] = useState("None Selected");

  useEffect(() => {
    if (motorcycles.length > 0) {
      setUnfilterdList(motorcycles);
    }
  }, [motorcycles]);

  useEffect(() => {
    if (unfilterdList.length > 0) {
      filterList();
    }
  }, [selectedCategory, selectedBrand, selectedPrice, unfilterdList]);

  const filterList = () => {
    let filtered = unfilterdList;

    console.log(filtered);

    // Apply Category filter if it's not "None Selected"
    if (selectedCategory !== "None Selected") {
      filtered = filtered.filter((moto) => moto.category === selectedCategory);
    }

    // Apply Brand filter if it's not "None Selected"
    if (selectedBrand !== "None Selected") {
      filtered = filtered.filter((moto) => moto.brand === selectedBrand);
    }

    // Apply Price filter if it's not "None Selected"
    if (selectedPrice !== "None Selected") {
      filtered = filtered.filter((moto) => {
        const cleanPrice = parseInt(moto.price.replace(/[$,]/g, ""), 10);

        if (selectedPrice === "Under $10,000") return cleanPrice < 10000;
        if (selectedPrice === "Between $10,000 & $20,000")
          return cleanPrice >= 10000 && cleanPrice <= 20000;
        if (selectedPrice === "Above $20,000") return cleanPrice > 20000;

        return true;
      });
    }

    console.log("Filtered list:", filtered);
    setFilteredMotorcycles(filtered);
  };

  const resetFilters = () => {
    setSelectedBrand("None Selected");
    setSelectedCategory("None Selected");
    setSelectedPrice("None Selected");
    setFilteredMotorcycles(unfilterdList);
  };

  return (
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
  );
};

export default AllProductsPage;
