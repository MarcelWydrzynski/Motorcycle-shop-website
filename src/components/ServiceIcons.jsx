import React from "react";
import DeliveryIcon from "../../public/assets/Icons/services/Delivery.png";
import CustomerSupportIcon from "../../public/assets/Icons/services/CustomerSupport.png";
import MoneyIcon from "../../public/assets/Icons/services/MoneyBack.png";

const ServiceIcons = () => {
  return (
    <div className="w-full flex justify-center items-center mb-24">
      <ul className="flex justify-around w-full flex-wrap gap-x-4 gap-y-8">
        <li className="flex flex-col items-center p-4">
          <img src={DeliveryIcon} alt="Delivery" className="w-20 mb-2" />
          <h5 className="text-lg font-semibold">FREE AND FAST DELIVERY</h5>
          <p className="text-sm">Free delivery for all orders over $140</p>
        </li>
        <li className="flex flex-col items-center p-4">
          <img src={CustomerSupportIcon} alt="Customer Support" className="w-20 mb-2" />
          <h5 className="text-lg font-semibold">24/7 CUSTOMER SUPPORT</h5>
          <p className="text-sm">We're here to help you anytime</p>
        </li>
        <li className="flex flex-col items-center p-4">
          <img src={MoneyIcon} alt="Money Back" className="w-20 mb-2" />
          <h5 className="text-lg font-semibold">MONEY BACK GUARANTEE</h5>
          <p className="text-sm">30-day money-back guarantee</p>
        </li>
      </ul>
    </div>
  );
};

export default ServiceIcons;