import React from "react";

const Title = ({ text }) => {
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
