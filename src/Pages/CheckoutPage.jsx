import React, { useEffect, useState } from "react";
import TopHeader from "../components/TopHeader";
import Container from "../components/Container";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import FooterComponent from "../components/FooterComponent";
import FullWidthContainer from "../components/FullWidthContainer";
import CartTotal from "../components/Checkoutpage/CartTotal";
import CheckoutForm from "../components/Checkoutpage/CheckoutForm";
import useFetchRandomMotorcycles from "../hooks/useFetchRandomMotorcycles";

const CheckoutPage = () => {
  return (
    <>
      <Breadcrumbs />
      <div className="w-full flex justify-between max-[1000px]:flex-col gap-y-12 py-16">
        <CheckoutForm />
        <CartTotal />
      </div>
    </>
  );
};

export default CheckoutPage;
