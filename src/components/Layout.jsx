import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import TopHeader from "../components/TopHeader";
import Container from "../components/Container";
import Header from "../components/Header";
import FooterComponent from "../components/FooterComponent";
import { ShopContext } from "../context/ShopContext";
import Alert from "../components/Alert";
import { AnimatePresence } from "motion/react";

const Layout = () => {
  const { alert } = useContext(ShopContext);

  return (
    <div className="flex flex-col w-full align-middle justify-center overflow-hidden">
      <div className="flex justify-center w-screen bg-black max-[800px]:hidden">
        <Container>
          <TopHeader />
        </Container>
      </div>
      <div className="flex justify-center w-screen bg-white">
        <Container>
          <Header />
          <AnimatePresence> {alert && <Alert />}</AnimatePresence>

          <Outlet />
        </Container>
      </div>
      <FooterComponent />
    </div>
  );
};

export default Layout;
