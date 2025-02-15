import { useState, useEffect } from "react";

const useFetchRandomMotorcycles = (count) => {
  const [randomMotorcycles, setRandomMotorcycles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/motorcycles.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            "Could not get data from our shop. Please try again later :)"
          );
        }
        return res.json();
      })
      .then((res) => {
        const motorcycles = res.motorcycles || [];
        const shuffled = motorcycles.sort(() => 0.5 - Math.random());
        const randomSelection = shuffled.slice(0, count);
        setRandomMotorcycles(randomSelection);
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [count]);

  return { randomMotorcycles, error, loading };
};

export default useFetchRandomMotorcycles;
