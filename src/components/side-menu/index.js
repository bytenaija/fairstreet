import sideMenu from 'data/sidemenu'
import React, { useState } from 'react'
import SideMenuItem from './side-menu-item'

import './sidemenu.scss'

const SideMenu = () => {
  const [childrenOpened, setChildrenOpened] = useState(null)
  
  return (
    <div className="sideMenu">
      {sideMenu.map((data, index) => <SideMenuItem
        index={index + 1}
        title={data.name}
        sideMenu={data.children}
        childrenOpened={childrenOpened === data.name}
        setChildrenOpen={setChildrenOpened}
      />)}
    </div>
  )
  
}

export default SideMenu