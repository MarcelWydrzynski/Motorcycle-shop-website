const Container = ({ children }) => {
  return (
    <div className="w-4/5 flex flex-col items-center justify-center max-md:w-full p-2">
      {children}
    </div>
  );
};

export default Container