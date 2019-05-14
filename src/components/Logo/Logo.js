import React from 'react'
import './Logo.css'

import Home from '../../pages/Home/Home'


const Logo = ({logo, className, ChangePage, EnterFullScreen}) => (
  <div id="logo-container" className={className} onClick={()=>ChangePage(<Home ChangePage={ChangePage} EnterFullScreen={EnterFullScreen}/>, "#E65151")}>
    <div id="logo-inner-container">
      <img src={logo} id="logo" alt="logo"/>
    </div>
  </div>
)

export default Logo
