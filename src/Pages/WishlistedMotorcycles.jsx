import React, { useEffect, useState } from "react";
import TopHeader from "../components/TopHeader";
import Container from "../components/Container";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import FooterComponent from "../components/FooterComponent";
import FullWidthContainer from "../components/FullWidthContainer";
import ProductCard from "../components/Wishlistpage/productCard";
import useFetchRandomMotorcycles from "../hooks/useFetchRandomMotorcycles";
import { Alert } from "flowbite-react";

const WishlistedMotorcycles = () => {
  const { randomMotorcycles, error, loading } = useFetchRandomMotorcycles(4);
  const [motorcycles, setMotorcycles] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (randomMotorcycles && randomMotorcycles.length > 0) {
      setMotorcycles(randomMotorcycles);
    }
  }, [randomMotorcycles]);

  const onDelete = (id) => {
    setMotorcycles((prevMotorcycles) =>
      prevMotorcycles.filter((motorcycle) => motorcycle.id !== id)
    );
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  const moveToBasket = () => {
    alert("Moved to basket!");
  };

  if (loading) return <p>Loading motorcycles...</p>;
  if (error) return <p>Error loading motorcycles!</p>;

  return (
    <>
      {showAlert && (
        <div className="fixed inset-x-0 top-10 flex justify-center z-50">
          <Alert
            color="info"
            className="bg-primaryRed text-white px-6 py-3 rounded-lg text-center animate-fade-in-out"
          >
            <p className="text-md">Motorcycle deleted from wishlist!</p>
          </Alert>
        </div>
      )}
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
            <div className="w-full flex flex-wrap gap-4 py-8 justify-start">
              {motorcycles.length > 0 ? (
                motorcycles.map((motorcycle) => (
                  <ProductCard
                    key={motorcycle.id}
                    motorcycle={motorcycle}
                    onDelete={onDelete}
                    showAlert={showAlert}
                    moveToBasket={moveToBasket}
                  />
                ))
              ) : (
                <p>No motorcycles in your wishlist.</p>
              )}
            </div>
          </Container>
        </div>
        <FullWidthContainer>
          <FooterComponent />
        </FullWidthContainer>
      </div>
    </>
  );
};

export default WishlistedMotorcycles;
