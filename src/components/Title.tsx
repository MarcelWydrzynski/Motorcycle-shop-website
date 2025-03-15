import React from "react";

type TitleProps = {
  text: string;
};

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <>
      {text === "" ? (
        ""
      ) : (
        <h2 className="text-black text-3xl font-bold">{text}</h2>
      )}
    </>
  );
};

export default Title;
