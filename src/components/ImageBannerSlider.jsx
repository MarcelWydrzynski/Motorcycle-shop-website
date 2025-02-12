import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";
import bannerOne from "../../public/assets/Icons/Banners/Banner-1.jpg";
import bannerTwo from "../../public/assets/Icons/Banners/Banner-2.jpeg";
import bannerThree from "../../public/assets/Icons/Banners/Banner-3.jpeg";
import iconLeft from "../../public/assets/Icons/services/iconLeft.png";

const ImageBannerSlider = () => {
  return (
    <div className="w-full h-auto">
      <Carousel pauseOnHover>
        <div>
          <img src={bannerOne} className="w-full" />
          <Link to={"/products/18"}>
            <p
              className="absolute text-white text-4xl font-alumni right-10
  bottom-2 cursor-pointer transition duration-150 ease-in-out hover:scale-105
  max-lg:text-lg max-lg:bottom-1 max-sm:text-sm max-[1336px]:text-xl"
            >
              Check out the new Royal Enfield!
            </p>
          </Link>
        </div>
        <div>
          <img src={bannerTwo} className="w-full" />
          <Link to={"/products/8"}>
            <p
              className="absolute text-white text-4xl font-alumni right-10
  bottom-2 cursor-pointer transition duration-150 ease-in-out hover:scale-105
  max-lg:text-lg max-lg:bottom-1 max-sm:text-sm max-[1336px]:text-xl"
            >
              Check out the new KTM1290 Super Duke-R!
            </p>
          </Link>
        </div>
        <div className=" relative w-full">
          <img src={bannerThree} className="w-full" />
          <Link to={"/products/24"}>
            <p
              className="absolute text-white text-4xl font-alumni right-10
  bottom-2 cursor-pointer transition duration-150 ease-in-out hover:scale-105
  max-lg:text-lg max-lg:bottom-1 max-sm:text-sm max-[1336px]:text-xl"
            >
              Ready for some more KTM action?
            </p>
          </Link>
        </div>
      </Carousel>
    </div>
  );
};

export default ImageBannerSlider;
