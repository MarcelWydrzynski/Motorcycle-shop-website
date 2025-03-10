import React from "react";

const ContactInfo = () => {
  const mailIcon = "assets/Icons/services/icons-mail.png"
  const Phoneicon = "assets/Icons/services/icons-phone.png"

  return (
    <div className=" shadow-lg px-8 py-10 w-1/3 max-[1000px]:w-full">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-6">
          <img src={Phoneicon} alt="icon of a phone" />
          <h2 className="text-3xl font-semibold">Call to us</h2>
        </div>
        <p className="text-lg">We are available 24/7, 7 days a week.</p>
        <p className="text-lg">Phone: +8801611112222</p>
      </div>
      <div className="w-full h-0.5 bg-grey my-10"></div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-6">
          <img src={Mailicon} alt="icon of a phone" />
          <h2 className="text-3xl font-semibold">Write To US</h2>
        </div>
        <p className="text-lg">
          Fill out our form and we will contact you within 24 hours.
        </p>
        <p className="text-lg">Emails: customer@exclusive.com</p>
        <p className="text-lg">Emails: support@exclusive.com</p>
      </div>
    </div>
  );
};

export default ContactInfo;
