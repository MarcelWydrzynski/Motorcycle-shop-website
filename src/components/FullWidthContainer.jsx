const FullWidthContainer = ({ children }) => {
    return (
      <div className="scroll-smooth flex-wrap w-full gap-5 flex flex-col items-center justify-center max-md:w-full">
        {children}
      </div>
    );
  };
  
  export default FullWidthContainer;
  