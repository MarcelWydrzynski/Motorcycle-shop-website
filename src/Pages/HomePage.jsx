import React from "react";
import TopHeader from "../components/TopHeader";
import Container from "../components/Container";
import Header from "../components/Header";
import ImageBannerSlider from "../components/ImageBannerSlider";
import Separator from "../components/Separator";
import HomepageCategoryDisplay from "../components/HomepageCategoryDisplay";
import HomepageProductsDisplay from "../components/HomepageProductsDisplay";
import HomepageBanner from "../components/HomepageBanner";
import ServiceIcons from "../components/ServiceIcons";
import FooterComponent from "../components/FooterComponent";
import FullWidthContainer from "../components/FullWidthContainer";

const HomePage = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden align-middle justify-center">
      <div className="flex justify-center w-screen bg-black">
        <Container>
          <TopHeader />
        </Container>
      </div>
      <div className="flex justify-center w-screen bg-white">
        <Container>
          <TopHeader />
          <Header />
          <ImageBannerSlider />
          <Separator />
          <HomepageCategoryDisplay />
          <Separator />
          <HomepageProductsDisplay
            productNumber={4}
            title={"Best selling motorcycles"}
            subtitle={"This month"}
          />
          <Separator />
          <HomepageBanner />
          <Separator />
          <HomepageProductsDisplay
            productNumber={6}
            title={"Explore our products"}
            subtitle={"Our products"}
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

export default HomePage;
