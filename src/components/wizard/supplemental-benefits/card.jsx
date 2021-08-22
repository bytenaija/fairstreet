import PropTypes from "prop-types";
import React from "react";

const Card = ({ title, onClick, icon }) => {
  return (
    <div className="card" onClick={() => onClick(title)}>
      <div className="icon-benefit">{icon}</div>
      <div className="title-benefits">{title}</div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.node,
};
export default Card;
