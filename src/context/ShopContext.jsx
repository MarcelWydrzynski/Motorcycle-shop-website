import { createContext, useState, useEffect } from "react";

const ShopContext = createContext();

const ShopProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

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

  useEffect(() => {
    const totalPrice = cart.reduce((total, motorcycle) => {
      const price = parseFloat(motorcycle.price.replace(/[^0-9.-]+/g, ""));
      return total + price;
    }, 0);
    setCartTotal(totalPrice);
  }, [cart]);

  return (
    <ShopContext.Provider
      value={{
        wishlist,
        toggleWishlisted,
        cart,
        updateCart,
        cartTotal,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export { ShopContext, ShopProvider };