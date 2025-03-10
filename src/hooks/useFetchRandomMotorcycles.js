import { useState, useEffect } from "react";

const useFetchRandomMotorcycles = (count) => {
  const [randomMotorcycles, setRandomMotorcycles] = useState([]);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    setLoading(true);
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
        setLoading(false);
      });
  }, [count]);

  return { randomMotorcycles, loading };
};

export default useFetchRandomMotorcycles;
