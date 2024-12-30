import { useState } from "react";
import TopHeader from "./components/TopHeader";
import Container from "./components/Container";
import data from "../motorcycles.json";
import Header from "./components/Header";
import ImageBannerSlider from "./components/ImageBannerSlider";
import Separator from "./components/Separator";

function App() {
  return (
    <div className="flex flex-col w-screen overflow-hidden	">
      <div className="flex justify-center w-screen bg-black">
        <Container>
          <TopHeader />
        </Container>
      </div>
      <div className="flex justify-center w-screen bg-white">
        <Container>
          <Header />
          <Separator />
          <ImageBannerSlider />
        </Container>
      </div>
    </div>
  );
}

export default App;
