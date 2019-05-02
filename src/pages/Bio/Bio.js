import React, { Component } from 'react'
import './Bio.css'
import '../Page.css'

import Skills from '../../functions/Skills'
import Button from '../../components/Button/Button'
import Contact from '../../components/Contact/Contact'
import SkillEntry from '../../components/SkillEntry/SkillEntry'
import Work from '../Work/Work'

class Bio extends Component {

  state={
    skill: null
  }

  EnterSkill(skill){
    this.props.EnterFullScreen(true)
    this.setState({skill})
  }

  ExitSkill(){
    this.props.EnterFullScreen(false)
    this.setState({skill: null})
  }

  render() {
    let ChangePage = this.props.ChangePage
    return (
      <div className="bio page">
        <div className="inner">
          <div className="header">
            <h1>My Work</h1>
          </div>
          <div className="body">
            <div className="bio-container">
              <div className="bio-text-container">
                <h2 className="bio-title">Build Beautiful Things.</h2>
                <p className="bio-text">
                  My goal is to spend as much of my life as I can building beautiful things. I’ve focused that goal into the art of software development and design. I strive to make software that is beautiful inside and out.
                </p>
              </div>
            </div>

            <div className="skills-container">
              <SkillEntry
                title="Design"
                subtitle="Lorem ipsum ismet dolor"
                color="#B85EAC"
                darkColor="#813176"
                icon="/design-icon.svg"
                active={this.state.skill === "design"}
                onClick={()=>this.EnterSkill("design")}
                goBack={()=>this.ExitSkill()}
              >
                Nulla vitae elit libero, a pharetra augue. Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit.
              </SkillEntry>

              <SkillEntry
                title="Client"
                subtitle="Lorem ipsum ismet dolor"
                color="#76C9AF"
                darkColor="#3E9076"
                icon="/client-icon.svg"
                active={this.state.skill === "client"}
                onClick={()=>this.EnterSkill("client")}
                goBack={()=>this.ExitSkill()}
              >
                Nulla vitae elit libero, a pharetra augue. Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit.
              </SkillEntry>

              <SkillEntry
                title="Server"
                subtitle="Lorem ipsum ismet dolor"
                color="#F2C85A"
                darkColor="#A88320"
                icon="/server-icon.svg"
                active={this.state.skill === "server"}
                onClick={()=>this.EnterSkill("server")}
                goBack={()=>this.ExitSkill()}
              >
                Nulla vitae elit libero, a pharetra augue. Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit.
              </SkillEntry>
            </div>
          </div>

          <Contact />
          <Button value="View My Work" color="white" style={{position: "fixed", bottom: 16, right: 16}} onClick={()=>ChangePage(<Work ChangePage={ChangePage} EnterFullScreen={this.props.EnterFullScreen}/>, "#E65151")}/>
        </div>

        <div className="background"></div>
      </div>
    )
  }

}

export default Bio
