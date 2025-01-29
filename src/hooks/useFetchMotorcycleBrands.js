import { useState, useEffect } from "react";
import useFetchMotorcycles from "./useFetchMotorcycles";

const useFetchMotorcycleBrands = () => {
  const [motorcycleBrands, setMotorcycleBrands] = useState([]);
  const { motorcycles, error, loading } = useFetchMotorcycles();

  useEffect(() => {
    const uniqueBrands = [
      ...new Set(motorcycles.map((motorcycle) => motorcycle.brand)),
    ];
    uniqueBrands.unshift("None selected")
    setMotorcycleBrands(uniqueBrands);
  }, [motorcycles]);

  return { motorcycleBrands, error, loading };
};

export default useFetchMotorcycleBrands;
