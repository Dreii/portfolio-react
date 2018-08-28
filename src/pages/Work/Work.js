import React from 'react';
import './Work.css'

import WorkEntry from '../../components/WorkEntry/WorkEntry'
import locations from '../../constants/locations'

import {CSSTransition} from 'react-transition-group'

import projects from '../../functions/RandomWorkGenerator'

const Work = ({location}) => (
  <CSSTransition classNames="work" in={location === locations.WORK} appear={true} timeout={{enter:0, exit:300}} unmountOnExit={true}>
    <div className="work">
      {projects.map((project, i)=>(
        <WorkEntry name={project.name} image={project.image} message={project.message} key={i} />
      ))}
    </div>
  </CSSTransition>
)

export default Work;
