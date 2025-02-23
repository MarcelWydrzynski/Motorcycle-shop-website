import React from "react";
import PaymentOptions from "./PaymentOptions";

const CartTotal = ({ cartTotal, setPaymentOption, paymentOption }) => {
  const tax = cartTotal * 0.08;
  const cartTotalWithTax = cartTotal + tax;

  return (
    <div className="border-2 border-black w-1/3 p-4 flex flex-col rounded-xl max-[1000px]:w-full h-fit py-10">
      <h2 className="text-2xl font-semibold">Cart Total</h2>
      <ul>
        <li className="flex justify-between border-b-2 py-4">
          <p>Subtotal:</p>
          <p>${cartTotal}</p>
        </li>
        <li className="flex justify-between border-b-2 py-4">
          <p>Shipping:</p>
          <p>$250 outside of Poland</p>
        </li>
        <li className="flex justify-between border-b-2 py-4">
          <p>Tax (8%):</p>
          <p>${tax.toFixed(2)}</p>
        </li>
        <li className="flex justify-between border-b-2 py-4">
          <p>Total:</p>
          <p>${cartTotalWithTax.toFixed(2)}</p>
        </li>
      </ul>
      <PaymentOptions
        setPaymentOption={setPaymentOption}
        paymentOption={paymentOption}
      />
    </div>
  );
};

export default CartTotal;
