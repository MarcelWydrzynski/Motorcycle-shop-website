import React from "react";
import { Footer, FooterCopyright, FooterLink } from "flowbite-react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  const sendIcon = "/assets/Icons/services/send.png"
  const googleStoreIcon = "/assets/Icons/services/googlestore.png"
  const appStoreIcon = "/assets/Icons/services/AppStore.png"

  return (
    <Footer className="bg-black rounded-none py-12 mt-20 mb-0">
      <div className="w-4/5 flex flex-col justify-center items-center mx-auto">
        <div className="w-full px-6 py-8 bg-red flex justify-between flex-wrap gap-y-8">
          <div className=" text-white max-[1000px]:w-1/2 flex flex-col max-[1000px]:items-center max-[650px]:w-full">
            <Footer.Title
              title="Exclusive"
              className="text-white text-lg mb-0"
            />
            <div className="py-4 flex flex-col gap-4">
              <span>Subscribe</span>
              <span>Get 10% off your first order</span>
              <div className="flex bg-transparent rounded-md p-2 justify-between border-2 border-white text-white">
                <input
                  className="outline-none bg-transparent "
                  placeholder="Enter your email"
                />
                <img
                  className="cursor-pointer transition duration-150 ease-in-out hover:scale-110 h-6 w-6"
                  src={sendIcon}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className=" text-white max-[1000px]:w-1/2 flex flex-col max-[1000px]:items-center max-[650px]:w-full">
            <Footer.Title title="Support" className="text-white text-lg mb-0" />
            <div className="py-4 flex flex-col gap-4">
              <span>
                111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
              </span>
              <span>exclusive@gmail.com</span>
              <span>+88015-88888-9999</span>
            </div>
          </div>
          <div className=" text-white max-[1000px]:w-1/2 flex flex-col max-[1000px]:items-center max-[650px]:w-full">
            <Footer.Title title="Account" className="text-white text-lg mb-0" />
            <div className="py-4 flex flex-col gap-4 list-none">
              <Link to="/about">
                <Footer.Link className="m-0">About</Footer.Link>
              </Link>
              <Link to="/wishlist">
                <Footer.Link className="m-0">Wishlist</Footer.Link>
              </Link>
              <Link to="/products">
                {" "}
                <Footer.Link className="m-0">Shop</Footer.Link>
              </Link>
            </div>
          </div>
          <div className=" text-white max-[1000px]:w-1/2 flex flex-col max-[1000px]:items-center max-[650px]:w-full">
            <Footer.Title
              title="Download App"
              className="text-white text-lg mb-0"
            />
            <div className="py-4 flex flex-col gap-4 list-none">
              <span>Save $3 with App New User Only</span>
              <FooterLink
                href="https://play.google.com/store/games?device=windows"
                target="blank"
                className="self-center m-0"
              >
                <img
                  src={googleStoreIcon}
                  alt="Google sttore link"
                  className="w-32"
                />
              </FooterLink>
              <FooterLink
                href="https://www.apple.com/pl/app-store/"
                target="blank"
                className="self-center m-0"
              >
                <img src={appStoreIcon} alt="App store link" className="w-32" />
              </FooterLink>
              <div className="flex justify-around">
                <Footer.Icon
                  href="https://www.facebook.com/"
                  target="blank"
                  icon={BsFacebook}
                  className="text-white "
                />

                <Footer.Icon
                  href="https://www.instagram.com/"
                  target="blank"
                  icon={BsInstagram}
                  className="text-white"
                />
                <Footer.Icon
                  href="https://x.com/home"
                  target="blank"
                  icon={BsTwitter}
                  className="text-white"
                />
                <Footer.Icon
                  href="https://www.linkedin.com/in/marcel-wydrzy%C5%84ski-23896b239/"
                  target="blank"
                  icon={BsLinkedin}
                  className="text-white"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-6  justify-center w-full">
          <Link to="/">
            <FooterCopyright
              by="IronRider Garage™"
              year={2025}
              className="text-center text-white"
            />
          </Link>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComponent;
