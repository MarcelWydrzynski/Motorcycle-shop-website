import React from "react";
import ImageBannerSlider from "../components/ImageBannerSlider";
import Separator from "../components/Separator";
import HomepageCategoryDisplay from "../components/Homepage/HomepageCategoryDisplay";
import ProductsShowcase from "../components/Homepage/HomePageProductsShowcase";
import HomepageBanner from "../components/Homepage/HomepageBanner";
import ServiceIcons from "../components/ServiceIcons";

const HomePage = () => {
  return (
    <>
      <ImageBannerSlider />
      <Separator />
      <HomepageCategoryDisplay />
      <Separator />
      <ProductsShowcase
        productNumber={4}
        title={"Best selling motorcycles"}
        subtitle={"This month"}
      />
      <Separator />
      <HomepageBanner />
      <Separator />
      <ProductsShowcase
        productNumber={6}
        title={"Explore our products"}
        subtitle={"Our products"}
      />
      <Separator />
      <ServiceIcons />
    </>
  );
};

export default HomePage;
