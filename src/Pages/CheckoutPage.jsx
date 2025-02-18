import Breadcrumbs from "../components/Breadcrumbs";
import CartTotal from "../components/Checkoutpage/CartTotal";
import CheckoutForm from "../components/Checkoutpage/CheckoutForm";
import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";

const CheckoutPage = () => {
  const { cart, cartTotal } = useContext(ShopContext);

  return (
    <>
      <Breadcrumbs />
      <div className="w-full flex justify-between max-[1000px]:flex-col gap-y-12 py-16">
        <CheckoutForm />
        <CartTotal cartTotal={cartTotal} />
      </div>
    </>
  );
};

export default CheckoutPage;
