import React from 'react'

import './SocialLinks.css'

const SocialLinks = ({color}) => (
  <ul className="social-links">
    <li><a className={color}>Resume</a></li>
    <li><a><img src={`github-icon-${color}.svg`}></img></a></li>
    <li><a><img src={`linkedin-icon-${color}.svg`}></img></a></li>
  </ul>
)

export default SocialLinks
