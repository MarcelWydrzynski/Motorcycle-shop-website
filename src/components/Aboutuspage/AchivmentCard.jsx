import React from "react";

const AchivmentCard = ({ img, number, text }) => {
  return (
    <div className="flex flex-col items-center gap-4 py-8 px-14 border-2 border-lightGrey rounded-lg">
      <img src={img} alt="" className="w-24 rounded-full p-5 bg-lightGrey border-black border-2" />
      <h3 className="text-3xl font-bold">{number}k</h3>
      <p className="font-semibold">{text}</p>
    </div>
  );
};

export default AchivmentCard;
