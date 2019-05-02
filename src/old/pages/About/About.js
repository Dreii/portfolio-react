import React from 'react';
import locations from '../../constants/locations'

import {CSSTransition} from 'react-transition-group'

const About = ({location}) => (
  <CSSTransition classNames="work" in={location === locations.ABOUT} appear={true} timeout={{enter:0, exit:300}} unmountOnExit={true}>
    <div>About</div>
  </CSSTransition>
)

export default About;
