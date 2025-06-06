import React, { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};
const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="scroll-smooth flex-wrap w-4/5 gap-10 flex flex-col items-center justify-center max-md:w-full max-w-full p-2">
      {children}
    </div>
  );
};

export default Container;
