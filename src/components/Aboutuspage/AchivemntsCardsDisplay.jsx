import React from "react";
import moneyIcon from "../../../public/assets/Icons/services/Icon-Moneybag.png";
import saleIcon from "../../../public/assets/Icons/services/Icon-Sale.png";
import shopIcon from "../../../public/assets/Icons/services/Icon-Shop.png";
import bagIcon from "../../../public/assets/Icons/services/Icon-Shop.png";
import AchivmentCard from "./AchivmentCard";

const AchivemntsCardsDisplay = () => {
  return (
    <div className="flex gap-12 flex-wrap justify-center">
      <AchivmentCard
        img={moneyIcon}
        number={"10.5"}
        text={"Sellers active on our site"}
      />
       <AchivmentCard
        img={saleIcon}
        number={"3"}
        text={"Monthly Motorbike Sales"}
      />
       <AchivmentCard
        img={shopIcon}
        number={"45"}
        text={"Visitors each day on our site"}
      />
       <AchivmentCard
        img={bagIcon}
        number={"34.2"}
        text={"Annual gross sale on our site"}
      />
    </div>
  );
};

export default AchivemntsCardsDisplay;
