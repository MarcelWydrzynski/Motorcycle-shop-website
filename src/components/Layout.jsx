import React from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import TopHeader from "../components/TopHeader";
import Container from "../components/Container";
import Header from "../components/Header";
import FooterComponent from "../components/FooterComponent";

const Layout = () => {

  return (
    <div className="flex flex-col w-full align-middle justify-center overflow-hidden">
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
      <FooterComponent />
    </div>
  );
};

export default Layout;
