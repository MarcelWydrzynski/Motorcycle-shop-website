import { useState, useEffect } from "react";
import useFetchMotorcycles from "./useFetchMotorcycles";

const useFetchMotorcycleCategories = () => {
  const [motorcycleCategories, setMotorcycleCategories] = useState([]);
  const { motorcycles, loading } = useFetchMotorcycles(); 

  useEffect(() => {
    if (motorcycles.length > 0) {
      const uniqueCategories = [
        ...new Set(motorcycles.map((motorcycle) => motorcycle.category)),
      ];
      uniqueCategories.unshift("None Selected"); 
      setMotorcycleCategories(uniqueCategories); 
    }
  }, [motorcycles]); 

  return { motorcycleCategories, loading};
};

export default useFetchMotorcycleCategories;
