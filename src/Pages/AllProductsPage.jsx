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
  const [selectedCategory, setSelectedCategory] = useState("None Selected");
  const [selectedBrand, setSelectedBrand] = useState("None Selected");
  const [selectedPrice, setSelectedPrice] = useState("None Selected");

  useEffect(() => {
    setFilteredMotorcycles(motorcycles);
  }, [motorcycles]);

  useEffect(() => {
    filterList();
  }, [selectedCategory, selectedBrand, selectedPrice, motorcycles]);

  const filterList = () => {
    if (motorcycles.length === 0) return;

    let filtered = motorcycles;

    if (selectedCategory && selectedCategory !== "None Selected") {
      filtered = filtered.filter(
        (motorcycle) => motorcycle.category === selectedCategory
      );
    }

    if (selectedBrand && selectedBrand !== "None Selected") {
      filtered = filtered.filter(
        (motorcycle) => motorcycle.brand === selectedBrand
      );
    }

    if (selectedPrice && selectedPrice !== "None Selected") {
      filtered = filtered.filter((motorcycle) => {
        const price = parseFloat(motorcycle.price.replace(/[$,]/g, ""));
        if (selectedPrice === "Under $10,000") return price < 10000;
        if (selectedPrice === "Between $10,000 & $20,000")
          return price >= 10000 && price <= 20000;
        if (selectedPrice === "Above $20,000") return price > 20000;
        return true;
      });
    }

    setFilteredMotorcycles(filtered);
  };

  const resetFilters = () => {
    setSelectedBrand("None Selected");
    setSelectedCategory("None Selected");
    setSelectedPrice("None Selected");

    if (motorcycles.length > 0) {
      setFilteredMotorcycles(motorcycles);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

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
          <ProductPageProductsDisplay
            motorcycles={filteredMotorcycles}
            error={error}
            loading={loading}
          />
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
