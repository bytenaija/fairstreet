import { addData, updateNav } from "contexts/reducers/wizard-data";

import Button from "components/forms/button";
import { FaCheckCircle } from "react-icons/fa";
import PlanCard from "./plans-card";
import React from "react";
import Title from "components/forms/title";
import plans from "data/supplemental-plans.json";
import { useStore } from "contexts/wizard-context";

const ChoosePlans = () => {
  const [{ data }, dispatch] = useStore();

  const addPlan = (selectedPlan) => {
    const plan = data.plan == selectedPlan ? undefined : selectedPlan;

    const updatedData = { ...data, plan };

    dispatch(addData(updatedData));
  };
  return (
    <>
      <Title>
        Choose the plan description that best fits what you are looking for
      </Title>
      <div className="choose-plans">
        {plans.map((plan) => (
          <PlanCard
            onClick={() => addPlan(plan.id)}
            key={plan.id}
            planNo={plan.id}
            title={plan.title}
            icon={
              data.plan == plan.id ? <FaCheckCircle color="#00ff00" /> : null
            }
          />
        ))}
      </div>

      <Button
        className="cont-btn"
        primary
        onClick={() => dispatch(updateNav("Pick a Plan"))}
      >
        Continue
      </Button>
    </>
  );
};

export default ChoosePlans;
