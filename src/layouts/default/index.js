import SideMenu from 'components/side-menu'
import React, { useState } from 'react'
import 'layouts/default/layout.scss'
import Navbar from 'components/nav'

const DefaultLayout = ({ children }) => {
  return (
    <div className="default-layout">
      <div className="nav"><Navbar /></div>
      <div className="content">
        <SideMenu />
        {children}
      </div>
    </div>
  )
}

export default DefaultLayout