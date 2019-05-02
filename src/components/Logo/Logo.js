import React from 'react'
import './Logo.css'

import Home from '../../pages/Home/Home'


const Logo = ({logo, x, y, ChangePage, EnterFullScreen}) => (
  <div id="logo-container" style={{left: x, top: y}} onClick={()=>ChangePage(<Home ChangePage={ChangePage} EnterFullScreen={EnterFullScreen}/>, "#E65151")}>
    <div id="logo-inner-container">
      <img src={logo} id="logo" />
    </div>
  </div>
)

export default Logo
