import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShopProvider } from "./context/ShopContext";
import HomePage from "./Pages/HomePage";
import AllProductsPage from "./Pages/AllProductsPage";
import ProductPage from "./Pages/ProductPage";
import WishlistedMotorcycles from "./Pages/WishlistedMotorcycles";
import CartPage from "./Pages/CartPage";
import CheckoutPage from "./Pages/CheckoutPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  return (
    <ShopProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<AllProductsPage />} />
          {/* Add this dynamic route */}
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/wishlist" element={<WishlistedMotorcycles />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </ShopProvider>
  );
}

export default App;
