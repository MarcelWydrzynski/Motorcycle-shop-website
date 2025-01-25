import { useState, useEffect } from "react";

const useFetchMotorcycles = () => {
  const [motorcycles, setMotorcycles] = useState([]);
  const [motorcycleBrands, setMotorcyclesBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("motorcycles.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            "Could not get data from our shop. Please try again later :)"
          );
        }
        return res.json();
      })
      .then((data) => {
        // Extract unique brands
        const uniqueBrands = [
          ...new Set(data.motorcycles.map((motorcycle) => motorcycle.brand)),
        ];
        setMotorcyclesBrands(uniqueBrands);

        // Extract unique categories
        const uniqueCategories = [
          ...new Set(data.motorcycles.map((motorcycle) => motorcycle.category)),
        ];
        setCategories(uniqueCategories);
        
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setMotorcycles([]);
        setMotorcyclesBrands([]);
        setCategories([]);
        setLoading(false);
      });
  }, []);

  return [
    motorcycles,
    motorcycleBrands,
    categories,
    error,
    loading,
  ];
};

export default useFetchMotorcycles;
