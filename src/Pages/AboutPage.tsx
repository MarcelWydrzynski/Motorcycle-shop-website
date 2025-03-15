import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import banner from "../../public/assets/Icons/Logo/Logo.png";
import StoryText from "../components/Aboutuspage/StoryText";
import AchivemntsCardsDisplay from "../components/Aboutuspage/AchivemntsCardsDisplay";
import TeamCardsDisplay from "../components/Aboutuspage/TeamCardsDisplay";
import ServiceIcons from "../components/ServiceIcons";
import SeparatorNolIne from "../components/SeparatorNoLine";
import Separator from "../components/Separator";

const AboutPage = () => {
  return (
    <>
      <Breadcrumbs />
      <div className="flex justify-center max-[1200px]:flex-col">
        <img
          src={banner}
          alt="Logo of iron rider garage company"
          className="max-w-96 self-center"
        />
        <StoryText />
      </div>
      <Separator />
      <AchivemntsCardsDisplay />
      <SeparatorNolIne />
      <TeamCardsDisplay />
      <Separator />
      <ServiceIcons />
      <SeparatorNolIne />
    </>
  );
};

export default AboutPage;
