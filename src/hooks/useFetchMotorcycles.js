import { useState, useEffect } from "react";

const useFetchMotorcycles = () => {
  const [motorcycles, setMotorcycles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("motorcycles.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Could not get data from our shop. Please try again later :)");
        }
        return res.json();
      })
      .then((res) => {
        setMotorcycles(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
    console.log(motorcycles);
  }, []);

  return { motorcycles, error, loading };
};

export default useFetchMotorcycles;
