import "./plan.scss";

import { addData, updateNav } from "contexts/reducers/wizard-data";

import ComparePlans from "./compare-plan";
import Page from "components/wizard/page";
import PlanDisplayCard from "./plan-display-card";
import Title from "components/forms/title";
import plans from "data/plans.json";
import { useState } from "react";
import { useStore } from "contexts/wizard-context";

const Plans = () => {
  const [currentPage, setCurrentPage] = useState("default");

  const [{ data }, dispatch] = useStore();

  const addPlan = (selectedPlan) => {
    const plan = data.plan == selectedPlan ? undefined : selectedPlan;

    const updatedData = { ...data, plan };

    dispatch(addData(updatedData));
    dispatch(updateNav("Get Started with your plan"));
  };
  const DefaultPage = () => {
    return (
      <>
        <Title>Your top 3 Recommended Plans</Title>
        <div>Don&apos;t worry, Alma Clini is in netwok with all of them</div>
        {plans.map((plan) => {
          return (
            <PlanDisplayCard
              key={plan.id}
              plan={plan}
              setCurrentPage={setCurrentPage}
              addPlan={addPlan}
            />
          );
        })}
      </>
    );
  };
  let content = null;
  switch (currentPage) {
    case "compare-plans":
      content = <ComparePlans setCurrentPage={setCurrentPage} />;
      break;
    default:
      content = <DefaultPage />;
  }
  return <Page>{content}</Page>;
};

export default Plans;
