import React, { Component } from 'react'
import './Bio.css'
import '../Page.css'

import Skills from '../../functions/Skills'
import Button from '../../components/Button/Button'
import Contact from '../../components/Contact/Contact'
import SkillEntry from '../../components/SkillEntry/SkillEntry'
import Work from '../Work/Work'

import EffectsCanvas from '../../components/EffectsCanvas/EffectsCanvas'


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
                  <b>I want to spend of my life building beautiful things.</b>
                  I’ve focused that goal into the art of making software that is beautiful inside and out.
                </p>
              </div>
            </div>

            <div className="skills-container">
              <SkillEntry
                title="Design"
                // subtitle="The best laid plans."
                // subtitleSize={"5.4vw"}
                subtitle="Make it simple, but significant"
                subtitleSize="3.37vw"
                subtitleSizeMobile="3.37vw"
                color="#B85EAC"
                darkColor="#813176"
                icon="/design-icon.svg"
                languageList={["Illustrator", "Photoshop", "XD", "Premiere"]}
                active={this.state.skill === "design"}
                onClick={()=>this.EnterSkill("design")}
                goBack={()=>this.ExitSkill()}
              >
                In my 10 years of production experience I've found that a solid design phase is vital to a beautiful project.
                This is why I plan out most or all of an application, before I touch a single line of code.
                <br/><br/>
                The design process is fluid however, and I often test and modify designs as the project is developed and opportunities to change function or form arise.
              </SkillEntry>

              <SkillEntry
                title="Client"
                subtitle="A thing of beauty is a joy forever"
                subtitleSize="3.29vw"
                subtitleSizeMobile="3.37vw"
                color="#76C9AF"
                darkColor="#3E9076"
                icon="/client-icon.svg"
                languageList={["React", "jQuery", "Sass"]}
                active={this.state.skill === "client"}
                onClick={()=>this.EnterSkill("client")}
                goBack={()=>this.ExitSkill()}
              >
                Working on the front end is my favorite part of software development.
                <br/><br/>
                I love to grow and shape an application from its barebones version all the way into a fully fleshed piece, seeing the progress each time I hit save.
                I spend the most of my time in the front end development phase, and usually work with mock data to save worrying about the underlying pipework for later.
              </SkillEntry>

              <SkillEntry
                title="Server"
                subtitle="Structure is requred for creativity"
                subtitleSize="3.15vw"
                subtitleSizeMobile="3.37vw"
                color="#F2C85A"
                darkColor="#A88320"
                icon="/server-icon.svg"
                languageList={["Node.js", "Socket.io", "SQLite", "Mongo DB", "PHP"]}
                active={this.state.skill === "server"}
                onClick={()=>this.EnterSkill("server")}
                goBack={()=>this.ExitSkill()}
              >
                Back end code is where form meets the function.
                <br/><br/>
                I like to think of server code as a series of pipes pumping data to the user through the client layer.
                Once I have figured out all of the data I will need and where it will go, I get to work on the real engine behind the magic.
              </SkillEntry>
            </div>
          </div>

          <Contact />
          <Button value="View My Work" color="white" style={{position: "fixed", bottom: 16, right: 16}} onClick={()=>ChangePage(<Work ChangePage={ChangePage} EnterFullScreen={this.props.EnterFullScreen}/>, "#E65151")}/>
        </div>

        {/* <div className="background"></div> */}
        <EffectsCanvas mode="SKILLS"/>
      </div>
    )
  }

}

export default Bio
