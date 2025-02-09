import React from "react";
import TopHeader from "../components/TopHeader";
import Container from "../components/Container";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import FooterComponent from "../components/FooterComponent";
import FullWidthContainer from "../components/FullWidthContainer";
import banner from "../../public/assets/Icons/Logo/Logo.png";
import StoryText from "../components/Aboutuspage/StoryText";
import AchivemntsCardsDisplay from "../components/Aboutuspage/AchivemntsCardsDisplay";
import TeamCardsDisplay from "../components/Aboutuspage/TeamCardsDisplay";
import ServiceIcons from "../components/ServiceIcons";
import SeparatorNolIne from "../components/SeparatorNoLine";

const AboutPage = () => {
  return (
    <>
      <div className="flex flex-col w-full overflow-hidden align-middle justify-center">
        <div className="flex justify-center w-screen bg-black">
          <Container>
            <TopHeader />
          </Container>
        </div>
        <div className="flex justify-center w-screen bg-white">
          <Container>
            <Header />
            <Breadcrumbs />
            <div className="flex justify-center max-[1200px]:flex-col">
              <img
                src={banner}
                alt="Logo of iron rider garage company"
                className="max-w-96 self-center"
              />
              <StoryText />
            </div>
            <SeparatorNolIne />
            <AchivemntsCardsDisplay />
            <SeparatorNolIne />
            <TeamCardsDisplay />
            <SeparatorNolIne />
            <ServiceIcons />
            <SeparatorNolIne />
          </Container>
        </div>
        <FullWidthContainer>
          <FooterComponent />
        </FullWidthContainer>
      </div>
    </>
  );
};

export default AboutPage;
