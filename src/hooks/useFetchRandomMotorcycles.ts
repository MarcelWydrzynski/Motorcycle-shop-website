import { useState, useEffect } from "react";

const useFetchRandomMotorcycles = (count: number) => {
  const [randomMotorcycles, setRandomMotorcycles] = useState<object[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch(import.meta.env.BASE_URL + "motorcycles.json")
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
