import { useContext } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import WishListProductCard from "../components/Wishlistpage/WishlistProductCard";
import { ShopContext } from "../context/ShopContext";

const WishlistedMotorcycles = () => {
  const { wishlist, toggleWishlisted, updateCart } = useContext(ShopContext);

  return (
    <>
      <Breadcrumbs />
      <h1 className="text-2xl font-bold">Your Wishlisted Motorcycles</h1>
      <div className="w-full flex flex-wrap gap-4 py-8 justify-start">
        {wishlist.length > 0 ? (
          wishlist.map((motorcycle) => (
            <WishListProductCard
              key={motorcycle.id}
              motorcycle={motorcycle}
              toggleWishlisted={toggleWishlisted}
              updateCart={updateCart}
            />
          ))
        ) : (
          <p className="text-center w-full">No motorcycles in your wishlist.</p>
        )}
      </div>
    </>
  );
};

export default WishlistedMotorcycles;
