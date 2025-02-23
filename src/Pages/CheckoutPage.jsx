import Breadcrumbs from "../components/Breadcrumbs";
import CartTotal from "../components/Checkoutpage/CartTotal";
import CheckoutForm from "../components/Checkoutpage/CheckoutForm";
import { ShopContext } from "../context/ShopContext";
import { useContext, useState } from "react";

const CheckoutPage = () => {
  const { cartTotal } = useContext(ShopContext);
  const [paymentOption, setPaymentOption] = useState("");

  return (
    <>
      <Breadcrumbs />
      <div className="w-full flex justify-between max-[1000px]:flex-col gap-y-12 py-16">
        <CheckoutForm paymentOption={paymentOption} />
        <CartTotal
          cartTotal={cartTotal}
          setPaymentOption={setPaymentOption}
          paymentOption={paymentOption}
        />
      </div>
    </>
  );
};

export default CheckoutPage;
