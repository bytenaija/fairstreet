import { FaAngleDown, FaAngleRight } from "react-icons/fa";

import PropTypes from "prop-types";
import React from "react";
import SubMenu from "./sub-menu";
import { updateNav } from "contexts/reducers/wizard-data";
import { useStore } from "contexts/wizard-context";

const SideMenuItem = ({
  index,
  title,
  sideMenu = [],
  childrenOpened = false,
  setChildrenOpen,
}) => {
  const [{ nav }, dispatch] = useStore();
  const onClick = () => {
    if (sideMenu.length > 0)
      setChildrenOpen((open) => (open === title ? null : title));

    if (!childrenOpened && !sideMenu.includes(nav)) {
      dispatch(updateNav(sideMenu[0] || title));
    } else {
      dispatch(updateNav(nav));
    }
  };

  console.log(nav, title);
  return (
    <>
      <div className="sub-menu-item">
        <div
          className="indicator"
          style={{
            background: childrenOpened ? "" : nav == title ? "#f45d48" : "",
          }}
        ></div>
        <div className="menu" onClick={onClick}>
          {index}. {title}
          {childrenOpened ? <FaAngleDown /> : <FaAngleRight />}
        </div>
      </div>
      {childrenOpened &&
        sideMenu.map((menu) => (
          <SubMenu key={menu} currentChild={nav === menu} title={menu} />
        ))}
    </>
  );
};

SideMenuItem.propTypes = {
  childrenOpened: PropTypes.bool,
  index: PropTypes.number,
  setChildrenOpen: PropTypes.func,
  sideMenu: PropTypes.array,
  title: PropTypes.string,
};
export default SideMenuItem;
