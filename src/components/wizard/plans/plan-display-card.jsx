import "./plan.scss";

import Button from "components/forms/button";
import PropTypes from "prop-types";
import React from "react";

const PlanDisplayCard = ({ plan, setCurrentPage, addPlan }) => {
  return (
    <div className="plan-display-card">
      <div className="section">
        <img className="plan-logo" src={plan.logo} alt="logo" />
        <div>{plan.bestFit && <span>Best Fit for You</span>}</div>
      </div>
      <div className="section cost-analysis">
        <div>
          {plan.currency}
          {plan.cost}/{plan.frequency}
        </div>
        <div>{plan.description}</div>
      </div>
      <div className="section plan-details">
        <div>{plan.name}</div>
      </div>
      <div className="section">
        <div>
          <div>
            Deductible {plan.currency}
            {plan.deductible}
          </div>
          <div>
            {plan.currency}
            {plan.copayPrimary} for primary care
          </div>
          <div>
            {plan.currency}
            {plan.copaySpecialist} for specialist care
          </div>
        </div>
        <div className="plan-cta">
          <Button
            className="sec-btn plan-btn"
            onClick={() => setCurrentPage("compare-plans")}
          >
            Compare
          </Button>
          <Button className="plan-btn pry-btn" onClick={() => addPlan(plan.id)}>
            Enroll
          </Button>
        </div>
      </div>
    </div>
  );
};

PlanDisplayCard.propTypes = {
  plan: PropTypes.object.isRequired,
  setCurrentPage: PropTypes.func,
  addPlan: PropTypes.func,
};
export default PlanDisplayCard;
