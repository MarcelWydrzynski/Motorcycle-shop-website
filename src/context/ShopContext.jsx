import { createContext, useState } from "react";

const ShopContext = createContext();

const ShopProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const toggleWishlisted = (motorcycle) => {
    const isInWishlist = wishlist.some((moto) => moto.id === motorcycle.id);

    setWishlist((prevWishlist) =>
      isInWishlist
        ? prevWishlist.filter((item) => item.id !== motorcycle.id)
        : [...prevWishlist, motorcycle]
    );
  };

  const updateCart = (motorcycle) => {
    const isInCart = cart.some((moto) => moto.id === motorcycle.id);

    setCart((prevCart) =>
      isInCart
        ? prevCart.filter((item) => item.id !== motorcycle.id)
        : [...prevCart, motorcycle]
    );
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

