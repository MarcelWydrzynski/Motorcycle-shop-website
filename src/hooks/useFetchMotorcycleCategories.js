import { useState, useEffect } from "react";
import useFetchMotorcycles from "./useFetchMotorcycles"; // Assuming motorcycles data is already available

const useFetchMotorcycleCategories = () => {
  const [motorcycleCategories, setMotorcycleCategories] = useState([]);
  const { motorcycles, error, loading } = useFetchMotorcycles(); // Fetch motorcycles from API

  useEffect(() => {
    if (motorcycles.length > 0) {
      // Extract unique categories from motorcycles
      const uniqueCategories = [
        ...new Set(motorcycles.map((motorcycle) => motorcycle.category)),
      ];
      uniqueCategories.unshift("None Selected"); // Optionally add a 'None Selected' category
      setMotorcycleCategories(uniqueCategories); // Update state with the categories
    }
  }, [motorcycles]); // Re-run effect whenever motorcycles change

  return { motorcycleCategories, error, loading };
};

export default useFetchMotorcycleCategories;
