import React from 'react'
import './nav.scss'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="brand">
        FairStreet
      </div>
      <div className="nav-menu">
         <div className="nav-items">
          
        <a href="#signup">Sign Up</a>
</div>
        <div className="nav-items">
          
        <a href="#login">Login</a>
</div>
              
      </div>
    </div>
  )
}

export default Navbar