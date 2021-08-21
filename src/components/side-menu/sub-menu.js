import PropTypes from "prop-types";
import React from "react";
import { updateNav } from "contexts/reducers/wizard-data";
import { useStore } from "contexts/wizard-context";

const SubMenu = ({ currentChild, title }) => {
  const [, dispatch] = useStore();
  return (
    <div onClick={() => dispatch(updateNav(title))} className="submenu">
      <div
        className="current-child"
        style={{ background: currentChild ? "#f45d48" : "" }}
      ></div>

      <div className="submenu-title">{title}</div>
    </div>
  );
};

SubMenu.propTypes = {
  currentChild: PropTypes.bool,
  title: PropTypes.string,
};

export default SubMenu;
