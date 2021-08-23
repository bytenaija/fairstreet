import PropTypes from "prop-types";
import React from "react";

const BenefitsCard = ({ title, onClick, icon, ...props }) => {
  return (
    <div className="card" onClick={() => onClick(title)} {...props}>
      <div className="icon-benefit">{icon}</div>
      <div className="title-benefits">{title}</div>
    </div>
  );
};

BenefitsCard.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.node,
};
export default BenefitsCard;
