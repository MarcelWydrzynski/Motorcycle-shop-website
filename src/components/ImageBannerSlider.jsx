import React from "react";
import bannerOne from "../../public/assets/Icons/Banners/Banner-1.jpg";
import bannerTwo from "../../public/assets/Icons/Banners/Banner-2.jpeg";
import bannerThree from "../../public/assets/Icons/Banners/Banner-3.jpeg";
import iconLeft from "../../public/assets/Icons/services/iconLeft.png";

const ImageBannerSlider = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={bannerOne} className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a
            href="#slide3"
            className="btn btn-circle bg-white border-0 hover:bg-white hover:scale-105"
          >
            <img className="" src={iconLeft} alt="Left arrow icon" />
          </a>
          <a
            href="#slide2"
            className="btn btn-circle bg-white border-0 hover:bg-white hover:scale-105"
          >
            <img className=" rotate-180" src={iconLeft} alt="Left arrow icon" />
          </a>
        </div>
        <p
          className="absolute text-white text-4xl font-bold font-Oswald right-10 
        bottom-2 cursor-pointer transition duration-150 ease-in-out hover:scale-105 max-lg:text-lg max-lg:bottom-1 max-sm:text-sm max-[1336px]:text-xl"
        >
          Check out the new Royal Enfield!
        </p>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={bannerTwo} className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a
            href="#slide1"
            className="btn btn-circle bg-white border-0 hover:bg-white hover:scale-105"
          >
            <img src={iconLeft} alt="Left arrow icon" />
          </a>
          <a
            href="#slide3"
            className="btn btn-circle bg-white border-0 hover:bg-white hover:scale-105"
          >
            <img className=" rotate-180" src={iconLeft} alt="Left arrow icon" />
          </a>
        </div>
        <p
          className="absolute text-white text-4xl font-bold font-Oswald right-10 
    bottom-2 cursor-pointer transition duration-150 ease-in-out hover:scale-105 
    max-lg:text-lg max-lg:bottom-1 max-sm:text-sm max-[1336px]:text-xl"
        >
          Ready for some KTM Action?
        </p>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={bannerThree} className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a
            href="#slide2"
            className="btn btn-circle bg-white border-0 hover:bg-white hover:scale-105"
          >
            <img src={iconLeft} alt="Left arrow icon" />
          </a>
          <a
            href="#slide1"
            className="btn btn-circle bg-white border-0  hover:bg-white hover:scale-105"
          >
            <img className=" rotate-180" src={iconLeft} alt="Left arrow icon" />
          </a>
        </div>
        <p
          className="absolute text-white text-4xl font-bold font-Oswald right-10 
        bottom-2 cursor-pointer transition duration-150 ease-in-out hover:scale-105 max-lg:text-lg max-lg:bottom-1 max-sm:text-sm max-[1336px]:text-xl"
        >
          Check out the new KTM 990R!
        </p>
      </div>
    </div>
  );
};

export default ImageBannerSlider;
