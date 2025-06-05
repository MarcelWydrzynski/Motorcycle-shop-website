import React from "react";
import { Link } from "react-router-dom";

type CartTotalProps = {
  cartTotal: number;

};

const CartTotal: React.FC<CartTotalProps> = ({ cartTotal }) => {
  const tax = cartTotal * 0.08;
  const cartTotalWithTax = cartTotal + tax;

  return (
    <div className="border-2 border-black p-4 flex flex-col gap-4 rounded-xl h-fit py-8 mt-4 w-fit self-end">
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
      <div>
        <Link to="/checkout">
          <button className="font-semibold btn bg-black text-white duration-75 hover:bg-white hover:text-black hover:border-2 hover:border-black p-4 rounded border-2 self-center">
            Proceed to checkout
          </button>
        </Link>
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
