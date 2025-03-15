import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";
import React from "react";

const ImageBannerSlider = () => {
  const bannerOne = "/assets/Icons/Banners/Banner-1.jpg";
  const bannerTwo = "/assets/Icons/Banners/Banner-2.jpeg";
  const bannerThree = "/assets/Icons/Banners/banner-3.jpeg";

  return (
    <div className="w-full h-auto">
      <Carousel pauseOnHover>
        <div>
          <img src={bannerOne} className="w-full" />
          <Link to={"/products/royal-enfield-meteor-350"}>
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
          <Link to={"/products/ktm-1290-super-duke-r"}>
            <p
              className="absolute text-white text-4xl font-alumni right-10
  bottom-2 cursor-pointer transition duration-150 ease-in-out hover:scale-105
  max-lg:text-lg max-lg:bottom-1 max-sm:text-sm max-[1336px]:text-xl"
            >
              Check out the new KTM1290 Super Duke-R!
            </p>
          </Link>
        </div>
        <div className="relative w-full">
          <img src={bannerThree} className="w-full" />
          <Link to={"/products/ktm-790-duke"}>
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
