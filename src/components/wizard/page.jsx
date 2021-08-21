import PropTypes from "prop-types";
import React from "react";

const Page = ({ children }) => {
  return <div className="page">{children}</div>;
};

Page.propTypes = {
  children: PropTypes.node,
};
export default Page;
