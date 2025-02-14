import React from "react";
import { Outlet } from "react-router-dom";
import TopHeader from "../components/TopHeader";
import Container from "../components/Container";
import Header from "../components/Header";
import FooterComponent from "../components/FooterComponent";
import FullWidthContainer from "../components/FullWidthContainer";

const Layout = () => {
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
          <Outlet />
        </Container>
      </div>
      <FullWidthContainer>
        <FooterComponent />
      </FullWidthContainer>
    </div>
  );
};

export default Layout;
