import { useState, useEffect } from "react";

const useFetchCategories = () => {
  const [categories, setCategories] = useState([]);
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
      .then((data) => {
        const uniqueCategories = [
          ...new Set(data.motorcycles.map((item) => item.category)),
        ];
        setCategories(uniqueCategories);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { categories, error, loading };
};

export default useFetchCategories;
