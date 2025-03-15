import React from "react";

type SubTitleProps = {
  text: string;
};

const SubTitle: React.FC<SubTitleProps> = ({ text }) => {
  const subTitleIcon = "/assets/Icons/services/Category Rectangle.png";

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
