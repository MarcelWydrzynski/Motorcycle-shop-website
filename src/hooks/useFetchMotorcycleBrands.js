import { useState, useEffect } from "react";
import useFetchMotorcycles from "./useFetchMotorcycles";

const useFetchMotorcycleBrands = () => {
  const [motorcycleBrands, setMotorcycleBrands] = useState([]);
  const { motorcycles, loading } = useFetchMotorcycles();

  useEffect(() => {
    const uniqueBrands = [
      ...new Set(motorcycles.map((motorcycle) => motorcycle.brand)),
    ];
    uniqueBrands.unshift("None Selected");
    setMotorcycleBrands(uniqueBrands);
  }, [motorcycles]);

  return { motorcycleBrands, loading };
};

export default useFetchMotorcycleBrands;
