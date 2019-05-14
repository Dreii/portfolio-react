import React from 'react'
import './Work.css'
import '../Page.css'

import Button from '../../components/Button/Button'
import SocialLinks from '../../components/SocialLinks/SocialLinks'
import WorkEntry from '../../components/WorkEntry/WorkEntry'
import Contact from '../../components/Contact/Contact'

import Projects from './Projects'

import Bio from '../Bio/Bio'
import EffectsCanvas from '../../components/EffectsCanvas/EffectsCanvas'



const Work = ({ChangePage, EnterFullScreen}) => (
  <div className="work page">
    <div className="inner">
      <div className="header">
        <h1>My Work</h1>
      </div>
      <div className="work-list">
        {Projects.map((project, i)=>(
          <WorkEntry name={project.name} image={project.image} imageMin={project.imageMin} view={project.view} message={project.message} tags={project.tags} key={i} />
        ))}
        <Contact />
      </div>
      <Button value="View My Skills" color="white" style={{position: "fixed", bottom: 16, right: 16}} onClick={()=>ChangePage(<Bio ChangePage={ChangePage} EnterFullScreen={EnterFullScreen}/>, "#2A9BE2")}/>
    </div>
    {/* <div className="background"></div> */}
    <EffectsCanvas mode="WORK"/>
  </div>
)

export default Work
