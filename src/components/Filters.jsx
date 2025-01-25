import React from "react";
import SearchFilter from "./SearchFilter";
import useFetchMotorcycles from "../hooks/useFetchMotorcycles";

const Filters = () => {
  const [, motorcycleBrands] = useFetchMotorcycles();

  return (
    <div className="self-start flex gap-8">
      <SearchFilter text={'Select your brand'} options={motorcycleBrands}/>
    </div>
  );
};

export default Filters;
