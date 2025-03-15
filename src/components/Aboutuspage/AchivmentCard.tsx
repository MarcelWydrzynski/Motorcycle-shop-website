import React from "react";

type AchivmentCardProps = {
  img: string;
  number: number;
  text: string;
};
const AchivmentCard: React.FC<AchivmentCardProps> = ({ img, number, text }) => {
  return (
    <div className="flex flex-col items-center gap-4 py-8 px-14 border-2 border-lightGrey rounded-lg group hover:bg-primaryRed duration-100 hover:scale-110">
      <img
        src={img}
        alt=""
        className="w-24 rounded-full p-5 bg-lightGrey border-black border-2 group-hover:text-white"
      />
      <h3 className="text-3xl font-bold group-hover:text-white">{number}k</h3>
      <p className="font-semibold group-hover:text-white">{text}</p>
    </div>
  );
};

export default AchivmentCard;
