import React, { ChangeEvent } from "react";
import { Label } from "flowbite-react";

type PaymentOptionsProps = {
  setPaymentOption: (value: string) => void;
  paymentOption: string;
};

const PaymentOptions: React.FC<PaymentOptionsProps> = ({
  setPaymentOption,
  paymentOption,
}) => {
  const selectPaymentOption = (e: ChangeEvent<HTMLInputElement>) => {
    setPaymentOption(e.target.value);
  };

  const mastercardIcon = "assets/Icons/services/icon-delete.png";
  const visaIcon = "assets/Icons/services/Visa.png";
  const blikIcon = "assets/Icons/services/BLIK-LOGO-RGB.png";

  return (
    <div className="flex flex-col gap-4 mt-10">
      <h2 className="text-xl font-semibold">Payment Options:</h2>
      <ul className="flex justify-between flex-wrap">
        <li className="flex gap-2 items-center">
          <input
            type="radio"
            id="bank"
            name="payment"
            value="bank"
            onChange={selectPaymentOption}
            checked={paymentOption === "bank"}
          />
          <Label htmlFor="bank">Bank Transfer</Label>
          <img src={mastercardIcon} alt="Mastercard logo" className="w-10" />
          <img src={visaIcon} alt="Visa logo" className="w-10" />
        </li>
        <li className="flex gap-2 items-center">
          <input
            type="radio"
            id="blik"
            name="payment"
            value="blik"
            onChange={selectPaymentOption}
            checked={paymentOption === "blik"}
          />
          <Label htmlFor="blik">Blik</Label>
          <img src={blikIcon} alt="Blik logo" className="w-14" />
        </li>
        <li className="flex gap-2 items-center">
          <input
            type="radio"
            id="cash"
            name="payment"
            value="cash"
            onChange={selectPaymentOption}
            checked={paymentOption === "cash"}
          />
          <Label htmlFor="cash">Cash on Delivery</Label>
        </li>
      </ul>
    </div>
  );
};

export default PaymentOptions;
