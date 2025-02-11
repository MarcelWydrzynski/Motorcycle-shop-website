import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import ServiceIcons from "../components/ServiceIcons";
import FullWidthContainer from "../components/FullWidthContainer";
import FooterComponent from "../components/FooterComponent";
import Separator from "../components/Separator";
import ProductDisplay from "../components/Productpage/ProductDisplay";
import HomepageProductsShowcase from "../components/Homepage/HomePageProductsShowcase";
import useFetchMotorcycles from "../hooks/useFetchMotorcycles";
import { ShopProvider } from "../context/ShopContext";

const ProductPasge = () => {
  const { motorcycles, error, loading } = useFetchMotorcycles();

  const [motorcycle, setMotorcycle] = useState(null);

  useEffect(() => {
    if (motorcycles.length > 0) {
      setMotorcycle(motorcycles[1]);
    }
  }, [motorcycles]);

  return (
    <ShopProvider>
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
            {motorcycle ? (
              <ProductDisplay motorcycle={motorcycle} />
            ) : (
              <p>Loading...</p>
            )}
            <Separator />
            <HomepageProductsShowcase
              productNumber={4}
              subtitle={"Check out our diffrent motorcycles"}
            />
            <Separator />
            <ServiceIcons />
          </Container>
        </div>
        <FullWidthContainer>
          <FooterComponent />
        </FullWidthContainer>
      </div>
    </ShopProvider>
  );
};

export default ProductPasge;
