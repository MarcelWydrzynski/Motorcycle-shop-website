import { useContext, useEffect, useState } from "react";
import TopHeader from "../components/TopHeader";
import Container from "../components/Container";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import FooterComponent from "../components/FooterComponent";
import FullWidthContainer from "../components/FullWidthContainer";
import ProductCard from "../components/Wishlistpage/productCard";
import useFetchRandomMotorcycles from "../hooks/useFetchRandomMotorcycles";

const WishlistedMotorcycles = () => {
  const { wishlist } = useContext(WishlistContext);
  const { randomMotorcycles, error, loading } = useFetchRandomMotorcycles(4);
  const [motorcycles, setMotorcycles] = useState([]);

  useEffect(() => {
    if (randomMotorcycles && randomMotorcycles.length > 0) {
      setMotorcycles(randomMotorcycles);
    }
  }, [randomMotorcycles]);

  const onDelete = (id) => {
    setMotorcycles((prevMotorcycles) =>
      prevMotorcycles.filter((motorcycle) => motorcycle.id !== id)
    );
  };

  const moveToBasket = () => {
    alert("Moved to basket!");
  };

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
          <h1 className="text-2xl font-bold">Your Wishlisted Motorcycles</h1>
          <div className="w-full flex flex-wrap gap-4 py-8 justify-start">
            {wishlist.length > 0 ? (
              wishlist.map((motorcycle) => (
                <ProductCard
                  key={motorcycle.id}
                  motorcycle={motorcycle}
                  onDelete={onDelete}
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
  );
};

export default WishlistedMotorcycles;
