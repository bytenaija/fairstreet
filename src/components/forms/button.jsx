import PropTypes from "prop-types";
import React from "react";

function Button({ children, className, primary, ...props }) {
  return (
    <div
      className={className}
      {...props}
      style={{ backgroundColor: primary ? "#ff5720" : "", fontSize: 30 }}
    >
      {children}
    </div>
  );
}

Button.propTypes = {
  primary: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};
export default Button;
