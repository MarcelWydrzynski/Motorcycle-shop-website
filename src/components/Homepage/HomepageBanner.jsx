import Banner from "../../../public/assets/Icons/Banners/Honda-banner.jpg";

const HomepageBanner = () => {
  return (
    <div className="w-full h-auto relative cursor-pointer">
      <img src={Banner} alt="Honda cbr on track" />

      <p
        className="absolute text-primaryRed text-4xl font-alumni right-10
  bottom-2 cursor-pointer transition duration-150 ease-in-out hover:scale-105
  max-lg:text-lg max-lg:bottom-1 max-sm:text-sm max-[1336px]:text-xl"
      >
        Check out the new Honda CBR!
      </p>
    </div>
  );
};

export default HomepageBanner;
