import React from "react";
import SubTitle from "./SubTitle";
import Title from "./Title";
import CategoryCard from "./CategoryCard";
import fetchCategories from "../hooks/fetchCategories";

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
  const categories = fetchCategories();

  return (
    <div className="w-full flex flex-col gap-y-4">
      <SubTitle text={"Categories"} />
      <Title text={"Browse By Category"} />
      <div className="flex flex-wrap gap-4 py-8 justify-center">
        {categories.map((category) => (
          <CategoryCard
            key={category}
            img={categoryImages[category]} // Dynamically set the image for each category
            text={category}
          />
        ))}
      </div>
    </div>
  );
};

export default HomepageCategoryDisplay;
