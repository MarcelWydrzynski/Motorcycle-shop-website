import { createContext, useState, useEffect, useRef, ReactNode } from "react";

type Motorcycle = {
  id: number;
  price: string;
};

type ShopContextType = {
  wishlist: Motorcycle[];
  toggleWishlisted: (motorcycle: Motorcycle) => void;
  cart: Motorcycle[];
  updateCart: (motorcycle: Motorcycle) => void;
  cartTotal: number;
  alert: boolean;
  triggerAlert: (message: string) => void;
  alertMessage: string;
};

const ShopContext = createContext<ShopContextType>({
  wishlist: [],
  toggleWishlisted: () => {},
  cart: [],
  updateCart: () => {},
  cartTotal: 0,
  alert: false,
  triggerAlert: () => {},
  alertMessage: "",
});

type ShopProviderProps = {
  children: ReactNode;
};

const ShopProvider: React.FC<ShopProviderProps> = ({ children }) => {
  const [wishlist, setWishlist] = useState<Motorcycle[]>([]);
  const [cart, setCart] = useState<Motorcycle[]>([]);
  const [cartTotal, setCartTotal] = useState<number>(0);
  const [alert, setAlert] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleWishlisted = (motorcycle: Motorcycle) => {
    const isInWishlist = wishlist.some((moto) => moto.id === motorcycle.id);
    setWishlist((prevWishlist) =>
      isInWishlist
        ? prevWishlist.filter((item) => item.id !== motorcycle.id)
        : [...prevWishlist, motorcycle]
    );
  };

  const updateCart = (motorcycle: Motorcycle) => {
    const isInCart = cart.some((moto) => moto.id === motorcycle.id);
    setCart((prevCart) =>
      isInCart
        ? prevCart.filter((item) => item.id !== motorcycle.id)
        : [...prevCart, motorcycle]
    );
  };

  const triggerAlert = (message: string) => {
    console.log(message);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setAlertMessage(message);
    setAlert(true);
    timeoutRef.current = setTimeout(() => {
      setAlert(false);
    }, 3000);
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
        alert,
        triggerAlert,
        alertMessage,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export { ShopContext, ShopProvider };
