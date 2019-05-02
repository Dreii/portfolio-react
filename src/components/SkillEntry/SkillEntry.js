import React from 'react'

import './SkillEntry.css'
import Button from '../Button/Button'

const SkillEntry = ({title, subtitle, color, darkColor, icon, active, children, onClick, goBack}) => (
  <div
    className={`skill-entry ${active ? "active": ""}`}
    style={{background: color, color: darkColor}}
    onClick={active ? null : ()=>onClick()}
  >
    <div className="skill-inner">
      <h1 className="title">{title}</h1>
      <p className="title-background">{title.charAt(0)}</p>
      <p className="subtitle">{subtitle}</p>
      <p className="skill-body">{children}</p>
      <div className="button-container">
        <Button value="Back to Skills" color="white" onClick={()=>goBack()}/>
      </div>
    </div>
    <div className="icon" style={{backgroundImage: `url(${icon})`}}></div>
  </div>
)

export default SkillEntry
