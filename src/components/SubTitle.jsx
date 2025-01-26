import React from "react";
import subTitleIcon from "../../public/assets/Icons/services/Category Rectangle.png";

const SubTitle = ({ text }) => {
  return (
    <>
      {" "}
      {text === "" ? (
        ""
      ) : (
        <div className="flex w-full align-middle gap-4">
          <img src={subTitleIcon} alt="" />
          <h3 className="text-primaryRed text-2xl font-semibold">{text}</h3>
        </div>
      )}
    </>
  );
};

export default SubTitle;
