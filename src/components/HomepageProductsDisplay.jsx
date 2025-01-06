import { Carousel } from "flowbite-react"; // Import Carousel component from Flowbite
import Title from "./Title";
import SubTitle from "./SubTitle";
import ProductCard from "./ProductCard";
import useFetchRandomMotorcycle from "../hooks/useFetchRandomMotorcycles";
import bannerOne from "../../public/assets/Icons/Banners/Banner-1.jpg";
import bannerTwo from "../../public/assets/Icons/Banners/Banner-2.jpeg";
import bannerThree from "../../public/assets/Icons/Banners/Banner-3.jpeg";

const HomepageProductDisplay = () => {
  const { randomMotorcycles, error, loading } = useFetchRandomMotorcycle(4); // Fetch more items for slider

  return (
    <div className="w-full flex flex-col gap-y-4">
      <SubTitle text={"This year"} />
      <Title text={"Best selling motorcycles"} />

      <div className="flex flex-col gap-8">
        <div className="block min-[840px]:hidden">
          <Carousel pauseOnHover indicators={false}>
            {randomMotorcycles.map((motorcycle) => (
              <ProductCard key={motorcycle.id} motorcycle={motorcycle} />
            ))}
          </Carousel>
        </div>

        <div className="hidden min-[840px]:flex gap-4 py-8 flex-wrap justify-center">
          {randomMotorcycles.map((motorcycle) => (
            <ProductCard key={motorcycle.id} motorcycle={motorcycle} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomepageProductDisplay;
