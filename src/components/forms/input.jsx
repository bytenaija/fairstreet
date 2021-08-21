import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const Input = ({
  onChange,
  placeholder,
  className,
  inputClass,
  icon = null,
  ...props
}) => {
  return (
    <div className={className}>
      {icon && <div className="input-icon">{icon}</div>}
      <input
        onChange={onChange}
        {...props}
        placeholder={placeholder}
        className={classNames(["default-input", inputClass])}
      />
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node,
  inputClass: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};
export default Input;
