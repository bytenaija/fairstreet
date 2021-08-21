import "layouts/default/layout.scss";

import Navbar from "components/nav";
import PropTypes from "prop-types";
import React from "react";
import SideMenu from "components/side-menu";

const DefaultLayout = ({ children }) => {
  return (
    <div className="default-layout">
      <div className="nav">
        <Navbar />
      </div>
      <div className="content">
        <SideMenu />
        {children}
      </div>
    </div>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node,
};
export default DefaultLayout;
