import React from 'react'

import './SkillEntry.css'
import Button from '../Button/Button'

const SkillEntry = ({title, subtitle, subtitleSize, subtitleSizeMobile, color, darkColor, icon, active, children, languageList, onClick, goBack}) => (
  <div
    className={`skill-entry ${active ? "active": ""}`}
    style={{background: color, color: darkColor}}
    onClick={active ? null : ()=>onClick()}
  >
    <div className="skill-inner">
      <h1 className="title">{title}</h1>
      <p className="title-background">{title.charAt(0)}</p>
      <p className="subtitle" style={{fontSize: window.innerWidth > 900 ? subtitleSize:subtitleSizeMobile}}>{subtitle}</p>
      <div className="skill-body">
        <p>{children}</p>
        <ul className="language-list">
          {languageList.map((language, i) => <li key={i}>{language}</li>)}
        </ul>
      </div>
      <div className="button-container">
        <Button value="Back to Skills" color="white" onClick={()=>goBack()}/>
      </div>
    </div>
    <div className="icon" style={{backgroundImage: `url(${icon})`}}></div>
  </div>
)

export default SkillEntry
