import React from "react";
import { Card } from "flowbite-react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Footer, FooterIcon } from "flowbite-react";

const EmployeeCard = ({ img, name, position }) => {
  return (
    <Card className="max-w-sm" imgAlt="Employee profile picture" imgSrc={img}>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
        {name}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">{position}</p>
      <div className="flex justify-start gap-4">
        <Footer.Icon href="#" icon={BsFacebook} className="text-black " />
        <Footer.Icon href="#" icon={BsInstagram} className="text-black" />
        <Footer.Icon href="#" icon={BsTwitter} className="text-black" />
        <Footer.Icon href="#" icon={BsLinkedin} className="text-black" />
      </div>
    </Card>
  );
};

export default EmployeeCard;
