import { FaCheckCircle } from "react-icons/fa";
import PropTypes from "prop-types";
import React from "react";

function CompareCard({ details, preffered, sectionName }) {
  if (sectionName == "sectionOne") {
    return (
      <div
        style={{ backgroundColor: preffered ? "#edf2ff" : "" }}
        className="compare-card"
      >
        <div className="plan-section">
          {details.logo && <img src={details.logo} alt="logo" />}
        </div>
        <div className="plan-name">{details.name}</div>
        <div className="plan-section extended">
          <div>{details.planType}</div>
        </div>

        <div className="plan-section extended">
          <div
            style={{
              color:
                details.premium.delta == "positive"
                  ? "#49ceb8"
                  : details.premium.delta == "negative"
                  ? "#f5715f"
                  : "",
            }}
          >
            {details.premium.value}
          </div>
        </div>

        <div className="plan-section extended">
          <div
            style={{
              color:
                details.outOfPocket.delta == "positive"
                  ? "#49ceb8"
                  : details.outOfPocket.delta == "negative"
                  ? "#f5715f"
                  : "",
            }}
          >
            {details.outOfPocket.value}
          </div>
        </div>
      </div>
    );
  }

  if (sectionName == "sectionTwo") {
    return (
      <div
        style={{ backgroundColor: preffered ? "#edf2ff" : "" }}
        className="compare-card"
      >
        <div className="plan-section"></div>
        <div className="plan-name">{details.name}</div>
        <div className="plan-section extended">
          <div>
            {details.doctors.map((doc) => (
              <div key={doc.value} className="small-extended">
                <FaCheckCircle
                  color={
                    doc.delta == "positive"
                      ? "#49ceb8"
                      : doc.delta == "negative"
                      ? "#f5715f"
                      : ""
                  }
                  size="14px"
                />
                {doc.value}
              </div>
            ))}
          </div>
        </div>

        <div className="plan-section extended">
          <div>
            {details.prescriptionDrugs.map((drugs) => (
              <div key={drugs.value} className="small-extended">
                <FaCheckCircle
                  color={
                    drugs.delta == "positive"
                      ? "#49ceb8"
                      : drugs.delta == "negative"
                      ? "#f5715f"
                      : ""
                  }
                  size="14px"
                />
                {drugs.value}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (sectionName == "sectionThree") {
    return (
      <div
        style={{ backgroundColor: preffered ? "#edf2ff" : "" }}
        className="compare-card"
      >
        <div className="plan-section"></div>
        <div className="plan-name">{details.name}</div>
        <div className="plan-section extended">
          <div
            style={{
              color:
                details.deductable.delta == "positive"
                  ? "#49ceb8"
                  : details.deductable.delta == "negative"
                  ? "#f5715f"
                  : "",
            }}
          >
            {details.deductable.value}
          </div>
        </div>
        <div className="plan-section extended">
          <div
            style={{
              color:
                details.maximum.delta == "positive"
                  ? "#49ceb8"
                  : details.maximum.delta == "negative"
                  ? "#f5715f"
                  : "",
            }}
          >
            {details.maximum.value}
          </div>
        </div>
      </div>
    );
  }
  return null;
}

CompareCard.propTypes = {
  details: PropTypes.object,
  preffered: PropTypes.bool,
  sectionName: PropTypes.string,
};

export default CompareCard;
