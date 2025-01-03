import React from "react";
import SubTitle from "./SubTitle";
import Title from "./Title";
import CategoryCard from "./CategoryCard";
import useFetchCategories from "../hooks/useFetchCategories";

const categoryImages = {
  ADV: "/assets/Icons/Motorycycle categories/ADV.png",
  Sport: "/assets/Icons/Motorycycle categories/Sport.png",
  Naked: "/assets/Icons/Motorycycle categories/Naked.png",
  Cruiser: "/assets/Icons/Motorycycle categories/Cruiser.png",
  Touring: "/assets/Icons/Motorycycle categories/Touring.png",
  Electric: "/assets/Icons/Motorycycle categories/Electric.png",
  Retro: "/assets/Icons/Motorycycle categories/Retro.png",
};

const HomepageCategoryDisplay = () => {
  const { categories, error, loading } = useFetchCategories();

  return (
    <div className="w-full flex flex-col gap-y-4">
      <SubTitle text={"Categories"} />
      <Title text={"Browse By Category"} />
      <div className="flex flex-wrap gap-4 py-8 justify-center">
        {loading && (
          <p className="text-lg font-semibold">Loading categories...</p>
        )}
        {error && (
          <p className="text-lg font-semibold text-red-500">Error: {error}</p>
        )}
        {!loading &&
          !error &&
          categories.map((category) => (
            <CategoryCard
              key={category}
              img={categoryImages[category]}
              text={category}
            />
          ))}
      </div>
    </div>
  );
};

export default HomepageCategoryDisplay;
