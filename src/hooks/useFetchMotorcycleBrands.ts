import { useState, useEffect } from "react";
import useFetchMotorcycles from "./useFetchMotorcycles";

type motorcycle = {
  brand: string;
};

const useFetchMotorcycleBrands = () => {
  const [motorcycleBrands, setMotorcycleBrands] = useState<string[]>([]);
  const { motorcycles, loading, error } = useFetchMotorcycles() as {
    motorcycles: motorcycle[];
    loading: boolean;
    error: boolean;
  };

  useEffect(() => {
    const uniqueBrands = [
      ...new Set(motorcycles.map((motorcycle) => motorcycle.brand)),
    ];
    uniqueBrands.unshift("None Selected");
    setMotorcycleBrands(uniqueBrands);
  }, [motorcycles]);

  return { motorcycleBrands, loading, error };
};

export default useFetchMotorcycleBrands;
