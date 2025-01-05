const Container = ({ children }) => {
  return (
    <div className="scroll-smooth flex-wrap w-4/5 gap-5 flex flex-col items-center justify-center max-md:w-full p-2">
      {children}
    </div>
  );
};

export default Container;
