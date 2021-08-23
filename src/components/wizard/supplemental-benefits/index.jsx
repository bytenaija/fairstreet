import BenefitCard from "./benefits-card";
import Button from "components/forms/button";
import ChoosePlans from "./choose-plans";
import { FaCheckCircle } from "react-icons/fa";
import Page from "components/wizard/page";
import Title from "components/forms/title";
import { addData } from "contexts/reducers/wizard-data";
import benefits from "data/benefits.json";
import { useState } from "react";
import { useStore } from "contexts/wizard-context";

const SupplementalBenefits = () => {
  const [currentPage, setCurrentPage] = useState("default");
  const [{ data }, dispatch] = useStore();

  const DefaultPage = () => {
    let updatedData = {};
    const addBenefit = (selectedBenefit) => {
      const allBenefits = data.supplementaryBenefits || [];
      if (allBenefits.includes(selectedBenefit)) {
        // remove
        let benefitsRemaining = allBenefits.filter(
          (benefit) => benefit !== selectedBenefit
        );
        updatedData = { ...data, supplementaryBenefits: benefitsRemaining };
      } else {
        allBenefits.push(selectedBenefit);
        updatedData = { ...data, supplementaryBenefits: allBenefits };
      }

      dispatch(addData(updatedData));
    };
    return (
      <>
        <Title>What benefits are important to you</Title>
        {benefits.map((benefit) => (
          <BenefitCard
            title={benefit}
            key={benefit}
            onClick={addBenefit}
            icon={
              data.supplementaryBenefits.includes(benefit) ? (
                <FaCheckCircle color="#00ff00" />
              ) : null
            }
          />
        ))}
        <Button
          className="cont-btn"
          primary
          onClick={() => setCurrentPage("choose-plans")}
        >
          Continue
        </Button>
      </>
    );
  };
  let content = null;
  switch (currentPage) {
    case "choose-plans":
      content = <ChoosePlans />;
      break;
    default:
      content = <DefaultPage />;
  }
  return <Page>{content}</Page>;
};

export default SupplementalBenefits;
