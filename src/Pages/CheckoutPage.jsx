
import Breadcrumbs from "../components/Breadcrumbs";
import CartTotal from "../components/Checkoutpage/CartTotal";
import CheckoutForm from "../components/Checkoutpage/CheckoutForm";

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
