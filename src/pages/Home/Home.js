import React, { Component } from 'react'
import './Home.css'

import Work from '../Work/Work'
import Bio from '../Bio/Bio'

import Button from '../../components/Button/Button'
import EffectsCanvas from '../../components/EffectsCanvas/EffectsCanvas'


class Home extends Component {
  state={wh: window.innerHeight}

  componentDidMount(){window.addEventListener('resize', this._resizeHandler.bind(this))}
  componentWillUnmount(){window.removeEventListener('resize', this._resizeHandler.bind(this))}

  _resizeHandler(){
    this.setState({wh: window.innerHeight})
  }

  render() {
    return (
      <div className="home">
        <div className="half work" style={{height: window.innerHeight}}>
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
        <div className="half bio" style={{height: window.innerHeight}}>
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
        <EffectsCanvas mode="HOME"/>
      </div>
    )
  }

}

export default Home
