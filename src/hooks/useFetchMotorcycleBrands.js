import { useState, useEffect } from "react";
import useFetchMotorcycles from "./useFetchMotorcycles";

const useFetchMotorcycleBrands = () => {
  const [motorcycleBrands, setMotorcycleBrands] = useState([]);
  const { motorcycles, error, loading } = useFetchMotorcycles();

  console.log(motorcycles);

  useEffect(() => {
    const uniqueBrands = [
      ...new Set(motorcycles.map((motorcycle) => motorcycle.brand)),
    ];
    setMotorcycleBrands(uniqueBrands);
  }, [motorcycles]);

  console.log(motorcycleBrands);

  return { motorcycleBrands, error, loading };
};

export default useFetchMotorcycleBrands;
