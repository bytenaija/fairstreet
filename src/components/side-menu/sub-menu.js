import { useStore } from 'contexts/wizard-context'
import React from 'react'
import { updateNav } from 'contexts/reducers/wizard-data'


const SubMenu = ({ currentChild, title, setCurrentchild }) => {
   const [, dispatch] = useStore()
  return (
    <div onClick={() => dispatch(updateNav( title))} className="submenu">
      
        <div className="current-child" style={{background: currentChild? '#f45d48': ''}}></div>
      
      <div className="submenu-title">{title}</div>
    </div>
  )
}

export default SubMenu