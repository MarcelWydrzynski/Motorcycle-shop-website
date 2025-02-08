import React, { useState } from "react";
import { Checkbox, Label } from "flowbite-react";
import mastercardIcon from "../../../public/assets/Icons/Payment methods/Mastercard.png";
import visaIcon from "../../../public/assets/Icons/Payment methods/Visa.png";
import blikIcon from "../../../public/assets/Icons/Payment methods/BLIK-LOGO-RGB.png";

const PaymentOptions = () => {
  return (
    <div className="flex flex-col gap-4 mt-10">
      <h2 className="text-xl font-semibold">Payment Options:</h2>
      <ul className="flex justify-between flex-wrap">
        <li className="flex gap-2 items-center">
          <Checkbox id="bank" />
          <Label htmlFor="bank">Bank Transfer</Label>
          <img
            src={mastercardIcon}
            alt="logo of mastercard card company"
            className="w-10"
          />
          <img
            src={visaIcon}
            alt="logo od visa card company"
            className="w-10"
          />
        </li>
        <li className="flex gap-2 items-center">
          <Checkbox id="blik" />
          <Label htmlFor="blik">Blik</Label>
          <img
            src={blikIcon}
            alt="logo of mastercard card company"
            className="w-14"
          />
        </li>
        <li className="flex gap-2 items-center">
          <Checkbox id="cash" />
          <Label htmlFor="cash">Cash on delivery</Label>
        </li>
      </ul>
      <button className="font-semibold btn bg-black text-white duration-75  hover:bg-white hover:text-black hover:border-2 hover:border-black p-4 rounded border-2 self-start max-[1000px]:self-center">
        Place order
      </button>
    </div>
  );
};

export default PaymentOptions;
