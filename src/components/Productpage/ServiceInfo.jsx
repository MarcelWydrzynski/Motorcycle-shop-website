import React from "react";

const ServiceInfo = () => {
  const deliveryIcon = "/assets/Icons/services/icon-delivery.png";
  const serviceIcon = "/assets/Icons/services/icon-service.png";

  return (
    <div className="flex max-[768px]:flex-col max-[768px]:items-center gap-2">
      <div className="flex border-2 border-lightGrey p-4 justify-center items-center gap-4 rounded-lg max-w-fit">
        <img src={deliveryIcon} alt="" className="w-12 h-12" />
        <div>
          <p className="font-semibold">Free Delivery</p>
          <p>
            We offer free delivery to clients based in the country of Poland
          </p>
        </div>
      </div>

      <div className="flex border-2 border-lightGrey p-4 justify-center items-center gap-4 rounded-lg max-w-fit">
        <img src={serviceIcon} alt="" className="w-12 h-12" />
        <div>
          <p className="font-semibold">Free Service</p>
          <p>
            We offer free service for the first year of ownership of the
            motorbike
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceInfo;
