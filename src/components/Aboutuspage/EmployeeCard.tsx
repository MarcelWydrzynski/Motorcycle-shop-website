import React from "react";
import { Card } from "flowbite-react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Footer } from "flowbite-react";

type EmployeeCardProps = {
  img?: string;
  position?: string;
  name?: string;
};

const EmployeeCard: React.FC<EmployeeCardProps> = ({ img, name, position }) => {
  if (!img || !position || !name) return null;

  return (
    <Card className="max-w-sm hover:scale-110 duration-100 group hover:bg-primaryRed p-2" imgAlt={`Employee ${name} profile picture`} imgSrc={img}>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-black group-hover:text-white">{name}</h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 group-hover:text-white">{position}</p>
      <div className="flex justify-start gap-4">
        <Footer.Icon href="https://www.facebook.com/" target="blank" icon={BsFacebook} className="text-black group-hover:text-white" />

        <Footer.Icon href="https://www.instagram.com/" target="blank" icon={BsInstagram} className="text-black group-hover:text-white" />
        <Footer.Icon href="https://x.com/home" target="blank" icon={BsTwitter} className="text-black group-hover:text-white" />
        <Footer.Icon
          href="https://www.linkedin.com/in/marcel-wydrzy%C5%84ski-23896b239/"
          target="blank"
          icon={BsLinkedin}
          className="text-black group-hover:text-white"
        />
      </div>
    </Card>
  );
};

export default EmployeeCard;
