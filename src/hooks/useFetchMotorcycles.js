import { useState, useEffect } from "react";

const useFetchMotorcycles = () => {
  const [motorcycles, setMotorcycles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + "motorcycles.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            "Could not get data from our shop. Please try again later."
          );
        }
        return res.json();
      })
      .then((data) => {
        setMotorcycles(data.motorcycles || []);
        setLoading(false);
      });
  }, []);

  return { motorcycles, error, loading };
};

export default useFetchMotorcycles;
