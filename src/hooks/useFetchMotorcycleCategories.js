import { useState, useEffect } from "react";
import useFetchMotorcycles from "./useFetchMotorcycles";

const useFetchMotorcycleBrands = () => {
  const [motorcycleCategories, setMotorcycleCategories] = useState([]);
  const { motorcycles, error, loading } = useFetchMotorcycles();

  useEffect(() => {
    const uniqueCategories = [
      ...new Set(motorcycles.map((motorcycle) => motorcycle.category)),
    ];
    uniqueCategories.unshift("None Selected");
    setMotorcycleCategories(uniqueCategories);
  }, [motorcycles]);

  return { motorcycleCategories, error, loading };
};

export default useFetchMotorcycleBrands;
