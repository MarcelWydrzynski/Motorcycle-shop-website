import { useState, useEffect } from "react";

const fetchCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch the JSON data from the public folder
    fetch("/motorcycles.json")
      .then((response) => response.json())
      .then((data) => {
        // Extract unique categories from the data
        const uniqueCategories = [...new Set(data.motorcycles.map((item) => item.category))];
        setCategories(uniqueCategories);
      })
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  return categories;
};

export default fetchCategories;