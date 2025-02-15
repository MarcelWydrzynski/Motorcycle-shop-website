import React from "react";

const CartTotal = ({ totalPrice }) => {
  const taxRate = 0.08;
  const taxAmount = totalPrice * taxRate;
  const totalWithTaxAndShipping = totalPrice + taxAmount;

  return (
    <div className="border-2 border-black p-4 flex flex-col gap-4 rounded-xl h-fit py-8 mt-4 w-fit self-end">
      <h2 className="text-2xl font-semibold">Cart Total</h2>
      <ul>
        <li className="flex justify-between border-b-2 py-4">
          <p>Subtotal:</p>
          <p>${totalPrice.toLocaleString()}</p>
        </li>
        <li className="flex justify-between border-b-2 py-4">
          <p>Shipping</p>
          <p>Outside of Poland extra $250</p>
        </li>
        <li className="flex justify-between border-b-2 py-4">
          <p>Tax (8%):</p>
          <p>${taxAmount.toLocaleString()}</p>
        </li>
        <li className="flex justify-between border-b-2 py-4">
          <p>Total:</p>
          <p>${totalWithTaxAndShipping.toLocaleString()}</p>
        </li>
      </ul>
      <div>
        <button className="font-semibold btn bg-black text-white duration-75 hover:bg-white hover:text-black hover:border-2 hover:border-black p-4 rounded border-2 self-center">
          Proceed to checkout
        </button>
        <button className="font-semibold btn bg-black text-white duration-75 hover:bg-white hover:text-black hover:border-2 hover:border-black p-4 rounded border-2">
          Remove all
        </button>
        <button className="font-semibold btn bg-black text-white duration-75 hover:bg-white hover:text-black hover:border-2 hover:border-black p-4 rounded border-2">
          Return to shop
        </button>
      </div>
    </div>
  );
};

export default CartTotal;
