import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";
import React from "react";
import { div, text } from "motion/react-client";

const ImageBannerSlider = () => {
  const bannerOne = "/assets/Icons/Banners/Banner-1.jpg";
  const bannerTwo = "/assets/Icons/Banners/Banner-2.jpeg";
  const bannerThree = "/assets/Icons/Banners/banner-3.jpeg";

  const banners = [
    { id: 1, text: "Check out the new Royal Enfield!", img: "/assets/Icons/Banners/Banner-1.jpg", path: "/products/royal-enfield-meteor-350" },
    { id: 2, text: "Check out the new KTM1290 Super Duke-R!", img: "/assets/Icons/Banners/Banner-2.jpeg", path: "/products/ktm-1290-super-duke-r" },
    { id: 3, text: "Ready for some more KTM action?", img: "/assets/Icons/Banners/banner-3.jpeg", path: "/products/ktm-790-duke" },
  ];

  return (
    <div className="w-full h-auto">
      <Carousel pauseOnHover>
        {banners.map((banner) => {
          return (
            <div key={banner.id} className="relative w-full">
              <img src={banner.img} alt={banner.text} className="w-full" />

              <Link to={banner.path}>
                <span
                  className="absolute text-white text-4xl font-alumni right-10
    bottom-2 cursor-pointer transition duration-150 ease-in-out hover:scale-105
    max-lg:text-lg max-lg:bottom-1 max-sm:text-sm max-[1336px]:text-xl"
                >
                  {banner.text}
                </span>
              </Link>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default ImageBannerSlider;
