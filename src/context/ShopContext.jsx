import { createContext, useState } from "react";

const ShopContext = createContext();

const ShopProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const toggleWishlisted = (motorcycle) => {
    const isInWishlist = wishlist.some((moto) => moto.id === motorcycle.id);

    if (isInWishlist) {
      setWishlist((prevWishList) =>
        prevWishList.filter((item) => item.id !== motorcycle.id)
      );
    } else {
      setWishlist((prevWishlist) => [...prevWishlist, motorcycle]);
    }
  };

  const updateCart = (motorcycle) => {
    const isInCart = cart.some((moto) => moto.id === motorcycle.id);

    if (isInCart) {
      setCart((prevCart) =>
        prevCart.filter((item) => item.id !== motorcycle.id)
      );
    } else {
      setCart((prevCart) => [...prevCart, motorcycle]);
    }
  };

  return (
    <ShopContext.Provider
      value={{ wishlist, toggleWishlisted, cart, updateCart }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export { ShopContext, ShopProvider };
