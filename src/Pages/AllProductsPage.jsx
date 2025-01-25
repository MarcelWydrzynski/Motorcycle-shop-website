import React from "react";
import TopHeader from "../components/TopHeader";
import Container from "../components/Container";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import Filters from "../components/Filters"
import FooterComponent from "../components/FooterComponent";
import FullWidthContainer from "../components/FullWidthContainer";

const AllProductsPage = () => {
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
          <Filters />
        </Container>
      </div>
      <FullWidthContainer>
        <FooterComponent />
      </FullWidthContainer>
    </div>
  );
};

export default AllProductsPage;
