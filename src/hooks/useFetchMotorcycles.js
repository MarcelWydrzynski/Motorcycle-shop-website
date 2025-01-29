import { useState, useEffect } from "react";

const useFetchMotorcycles = () => {
  const [motorcycles, setMotorcycles] = useState([]);
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
        setMotorcycles(data.motorcycles || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { motorcycles, error, loading };
};

export default useFetchMotorcycles;
