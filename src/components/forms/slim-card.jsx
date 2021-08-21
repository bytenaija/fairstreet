import PropTypes from "prop-types";
import React from "react";

const SlimCard = ({ children, ...props }) => {
  return (
    <div className="slim-card" {...props}>
      {children}
    </div>
  );
};

SlimCard.propTypes = {
  children: PropTypes.node,
};
export default SlimCard;
