import React from "react";
import SubTitle from "../SubTitle";
import Title from "../Title";
import CategoryCard from "./CategoryCard";
import { Spinner } from "flowbite-react";
import useFetchMotorcycleCategories from "../../hooks/useFetchMotorcycleCategories";

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
  const { motorcycleCategories, loading } = useFetchMotorcycleCategories();

  return (
    <div className="w-full flex flex-col gap-y-4">
      <SubTitle text={"Categories"} />
      <Title text={"Browse By Category"} />
      <div className="flex flex-wrap gap-4 py-8 justify-center">
        {loading ? (
          <Spinner color="failure" />
        ) : (
          motorcycleCategories.length > 0 &&
          motorcycleCategories.map((category) => (
            <CategoryCard
              key={category}
              img={categoryImages[category]}
              text={category}
            />
          ))
        )}
        {}
      </div>
    </div>
  );
};

export default HomepageCategoryDisplay;
