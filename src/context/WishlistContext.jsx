import React, { createContext, useState } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

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

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlisted }}>
      {children}
    </WishlistContext.Provider>
  );
};
