import React, { useEffect, useState } from "react";
import TopHeader from "../components/TopHeader";
import Container from "../components/Container";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import FooterComponent from "../components/FooterComponent";
import FullWidthContainer from "../components/FullWidthContainer";
import Cart from "../components/Cartpage/Cart";
import CartTotal from "../components/Cartpage/CartTotal";
import useFetchRandomMotorcycles from "../hooks/useFetchRandomMotorcycles";

const CartPage = () => {
  const { randomMotorcycles, error, loading } = useFetchRandomMotorcycles(6);
  const [motorcycles, setMotorcycles] = useState([]);

  useEffect(() => {
    if (randomMotorcycles && randomMotorcycles.length > 0) {
      setMotorcycles(randomMotorcycles);
    }
  }, [randomMotorcycles]);

  if (loading) return <p>Loading motorcycles...</p>;
  if (error) return <p>Error loading motorcycles!</p>;

  return (
    <>
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
            <Cart motorcycles={motorcycles} />
            <div className="w-full flex justify-between">
              <button className="font-semibold btn bg-black text-white duration-75  hover:bg-white hover:text-black hover:border-2 hover:border-black p-4 rounded border-2">
                Return to shop
              </button>
              <button className="font-semibold btn bg-black text-white duration-75  hover:bg-white hover:text-black hover:border-2 hover:border-black p-4 rounded border-2">
                Remove all
              </button>
            </div>
            <CartTotal />
          </Container>
        </div>
        <FullWidthContainer>
          <FooterComponent />
        </FullWidthContainer>
      </div>
    </>
  );
};

export default CartPage;
