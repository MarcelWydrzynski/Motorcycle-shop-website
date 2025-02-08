import React from "react";

const CartTotal = () => {
  return (
    <div className="border-2 border-black w-1/2 p-4 flex flex-col gap-4 rounded-xl my-20 max-[1000px]:w-full">
      <h2 className="text-2xl font-semibold">Cart Total</h2>
      <ul>
        <li className="flex justify-between border-b-2 py-4">
          <p>Subtotal:</p>
          <p>1,750$</p>
        </li>
        <li className="flex justify-between border-b-2 py-4">
          <p>Shipping</p>
          <p>Free in Poland</p>
        </li>
        <li className="flex justify-between border-b-2 py-4">
          <p>Total:</p>
          <p>1,750$</p>
        </li>
      </ul>
      <button className="font-semibold btn bg-black text-white duration-75  hover:bg-white hover:text-black hover:border-2 hover:border-black p-4 rounded border-2 self-center">
        Proceed to checkout
      </button>
    </div>
  );
};

export default CartTotal;
