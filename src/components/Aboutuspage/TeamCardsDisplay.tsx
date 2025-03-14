import React from "react";
import EmployeeCard from "./EmployeeCard";
import Title from "../Title";

const AchivemntsCardsDisplay = () => {
  const TomImage = "/assets/Icons/team/Frame 874.png";
  const EmmaImage = "/assets/Icons/team/Frame 875.png";
  const WillImage = "/assets/Icons/team/Frame 876.png";
  return (
    <div className="flex flex-col gap-12">
      <Title text={"Meet our Leaders"} />
      <div className="flex gap-12 flex-wrap justify-center mb-20 w-full">
        <EmployeeCard
          img={TomImage}
          name={"Tom Cruise"}
          position={"Founder & chairman"}
        />
        <EmployeeCard
          img={EmmaImage}
          name={"Emma Watson"}
          position={"Software team lead"}
        />
        <EmployeeCard
          img={WillImage}
          name={"Will Smith"}
          position={"Warehouse Manager"}
        />
      </div>
    </div>
  );
};

export default AchivemntsCardsDisplay;
