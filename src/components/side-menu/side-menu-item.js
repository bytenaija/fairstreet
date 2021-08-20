import React, { useContext } from 'react'
import { FaAngleDown, FaAngleRight } from "react-icons/fa"
import SubMenu from './sub-menu'
import WizardContext, { useStore } from 'contexts/wizard-context'
import { updateNav } from 'contexts/reducers/wizard-data'

const SideMenuItem = ({ index, title, sideMenu = [], childrenOpened = false, setChildrenOpen }) => {

  const [{ nav }, dispatch] = useStore();
  const onClick = () => {
    setChildrenOpen((open) => open === title ? null : title);
 
      if (!childrenOpened && !nav) {
        dispatch(updateNav( (sideMenu[0] || null)))
      } else {
        dispatch(updateNav(nav))
      }
    
  }
  return (<>
    <div class="menu" onClick={onClick}>{index}. {title} {childrenOpened ? <FaAngleDown />: <FaAngleRight />}</div >
    {childrenOpened && sideMenu.map(menu => <SubMenu currentChild={nav === menu} title={menu}/>)}
    </>)
    }

export default SideMenuItem