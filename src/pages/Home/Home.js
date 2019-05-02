import React, { Component } from 'react'
import './Home.css'

import Work from '../Work/Work'
import Bio from '../Bio/Bio'

import Button from '../../components/Button/Button'
import SocialLinks from '../../components/SocialLinks/SocialLinks'
import EffectsCanvas from '../../components/EffectsCanvas/EffectsCanvas'


class Home extends Component {

  render() {
    return (
      <div className="home">
        <div className="half work">
          <div className="inner">
            <div className="work-info info">
              <h1>Hey I'm Sean.</h1>
              <b>
                An Austin based <i>developer</i> and <i>designer</i>, focused on writing
                <br/><i className="white">Beautiful Full Stack Javascript.</i>
              </b>
            </div>
            <Button value="View My Work" color="white" style={{position: "absolute", bottom: 16, left: 16}} onClick={()=>this.props.ChangePage(<Work ChangePage={this.props.ChangePage} EnterFullScreen={this.props.EnterFullScreen}/>, "#E65151")}/>
          </div>
          {/* <div className="background hover"></div> */}
        </div>
        <div className="half bio">
          <div className="inner">
            <div className="bio-info info">
              <h1>Your next developer.</h1>
              <b>
                <span className="white">Front End, Back End, Design, or <i>anything</i> in between. </span><br></br>
                I have over <i>10 years of experience</i> to help you succeed.
              </b>
            </div>
            <Button value="View My Skills" color="white" style={{position: "absolute", bottom: 16, right: 16}} onClick={()=>this.props.ChangePage(<Bio ChangePage={this.props.ChangePage} EnterFullScreen={this.props.EnterFullScreen}/>, "#2A9BE2")}/>
          </div>
          {/* <div className="background hover"></div> */}
        </div>
        <EffectsCanvas />
      </div>
    )
  }

}

export default Home
