import React, { useState } from "react";
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
  const defaultProductsList = motorcycles;
  const [filteredMotorcycles, setFilteredMotorcycles] = useState(motorcycles);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  const filterList = () => {
    const filtered = motorcycles.filter((motorcycle) =>
      selectedCategory ? motorcycle.category === selectedCategory : true
    );

    setFilteredMotorcycles(filtered);
    console.log("Filtered Motorcycles by Category:", filtered);
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
            setCategory={setSelectedCategory}
            setBrand={setSelectedBrand}
            setPrice={setSelectedPrice}
            filterList={filterList}
          />
          <ProductPageProductsDisplay
            motorcycles={defaultProductsList} // Render filtered list
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
