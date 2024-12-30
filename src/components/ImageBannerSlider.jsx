import React from "react";
import bannerOne from "../../public/assets/Icons/Banners/Banner-1.jpg";
import bannerTwo from "../../public/assets/Icons/Banners/Banner-2.jpeg";
import bannerThree from "../../public/assets/Icons/Banners/Banner-3.jpeg";

const ImageBannerSlider = () => {
  return (
    <div className="carousel w-full border-2 border-black mx-auto">
      {" "}
      {/* Center the carousel */}
      <div
        id="slide1"
        className="carousel-item relative flex justify-center items-center w-full"
      >
        <img src={bannerOne} className="object-cover w-full h-auto" />
        <div className="absolute right-5 top-1/2 -translate-y-1/2 transform">
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
        <p
          className="absolute text-black text-4xl font-bold font-Oswald left-5 w-1 
        top-5 cursor-pointer transition duration-150 ease-in-out hover:scale-110 "
        >
          TRY OUT THE NEW SCRAMBLER 400 FROM ROYAL ENFIELD!
        </p>
      </div>
      <div
        id="slide2"
        className="carousel-item relative flex justify-center items-center w-full"
      >
        <img src={bannerTwo} className="object-cover w-full h-auto" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
        <p
          className="absolute text-white text-4xl font-bold font-Oswald left-10 
        bottom-5 cursor-pointer transition duration-150 ease-in-out hover:scale-110"
        >
          TRY OUT THE NEW KTM DUKE 660
        </p>
      </div>
      <div
        id="slide3"
        className="carousel-item relative flex justify-center items-center w-full"
      >
        <img src={bannerThree} className="object-cover w-full h-auto" />
        <div className="absolute left-5 top-1/2 -translate-y-1/2 transform">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
        </div>
        <p
          className="absolute text-white text-4xl font-bold font-Oswald right-10
        bottom-2 cursor-pointer transition duration-150 ease-in-out hover:scale-110"
        >
          TRY OUT THE NEW KTM DUKE 990R!
        </p>
      </div>
    </div>
  );
};

export default ImageBannerSlider;
