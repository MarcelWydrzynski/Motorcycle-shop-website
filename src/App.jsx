import { useState } from "react";
import TopHeader from "./components/TopHeader";
import Container from "./components/Container";
import Header from "./components/Header";
import ImageBannerSlider from "./components/ImageBannerSlider";
import Separator from "./components/Separator";
import HomepageCategoryDisplay from "./components/HomepageCategoryDisplay";
import fetchMotorcycles from "./hooks/useFetchMotorcycles";
import HomepageProductsDisplay from "./components/HomepageProductsDisplay";
import HomepageBanner from "./components/HomepageBanner";

function App() {
  fetchMotorcycles();
  return (
    <div className="flex flex-col w-full overflow-hidden">
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
          <HomepageProductsDisplay />
          <HomepageBanner />
        </Container>
      </div>
    </div>
  );
}

export default App;
