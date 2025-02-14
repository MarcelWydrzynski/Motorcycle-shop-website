import React from "react";
import TopHeader from "../components/TopHeader";
import Container from "../components/Container";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import FooterComponent from "../components/FooterComponent";
import FullWidthContainer from "../components/FullWidthContainer";
import SeparatorNoLine from "../components/SeparatorNoLine";

const AboutPage = () => {
  return (
    <>
      <Breadcrumbs />
      <div className="flex flex-col items-center gap-y-14">
        <h2 className="text-8xl font-semibold max-[675px]:text-5xl">
          404 Not Found
        </h2>
        <p className="text-2xl max-[675px]:text-xl">
          Looks like your lost. Click below to return to home page :)
        </p>
        <button className="font-semibold btn bg-primaryRed text-white duration-75  hover:bg-white hover:text-primaryRed hover:border-2 hover:border-primaryRed p-4 rounded border-2">
          Return to home page
        </button>
      </div>
    </>
  );
};

export default AboutPage;
