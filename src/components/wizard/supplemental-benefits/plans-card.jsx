import PropTypes from "prop-types";
import React from "react";

const PlanCard = ({ planNo, onClick, icon, title, ...props }) => {
  console.log({ __html: title });

  return (
    <div className="plan-card" onClick={() => onClick(planNo)} {...props}>
      <div className="icon-benefit">{icon}</div>
      <div
        className="title-benefits"
        dangerouslySetInnerHTML={{ __html: title }}
      ></div>
    </div>
  );
};

PlanCard.propTypes = {
  planNo: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.node,
  children: PropTypes.node,
  title: PropTypes.string,
};
export default PlanCard;
