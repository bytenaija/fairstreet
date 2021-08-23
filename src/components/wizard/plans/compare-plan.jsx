import CompareCard from "./compare-card";
import { FaAngleLeft } from "react-icons/fa";
import PropTypes from "prop-types";
import React from "react";
import Title from "components/forms/title";
import plansDetails from "data/plan-details.json";

function ComparePlans({ setCurrentPage }) {
  return (
    <div>
      <div className="navigation">
        <div onClick={() => setCurrentPage("default")} className="back">
          <FaAngleLeft /> Back
        </div>
        <Title>
          We calculated the difference between your best fit plan and the next
          best options{" "}
        </Title>
      </div>
      <div className="column-compare">
        <div className="legend">
          <div className="sctionOne">
            <div>Plan Type</div>
            <div>Premium</div>
            <div>Est. Out-of Pocket Expenses</div>
          </div>

          <div className="sctionTwo">
            <div>Doctors</div>

            <div>Prescription Drugs</div>
          </div>

          <div className="sctionThree">
            <div>Deductible</div>

            <div>Maximum ...</div>
          </div>
        </div>
        {plansDetails.map((plans) => {
          return (
            <div key={JSON.stringify(plans.sectionOne)}>
              <CompareCard
                details={plans.sectionOne}
                preffered={plans.preffered}
                sectionName="sectionOne"
              />

              <CompareCard
                details={plans.sectionTwo}
                preffered={plans.preffered}
                sectionName="sectionTwo"
              />
              <CompareCard
                details={plans.sectionThree}
                preffered={plans.preffered}
                sectionName="sectionThree"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

ComparePlans.propTypes = { setCurrentPage: PropTypes.func };

export default ComparePlans;
