import React, { Component } from 'react'
import './WorkEntry.css'

class WorkEntry extends Component {
  state = {imageLoaded: false, img: new Image()}

  componentDidMount(){
    // const img = new Image();
    this.state.img.src = this.props.image;
    this.state.img.onload = () => {
      this.setState({imageLoaded: true})
    }
  }

  render() {
    let {image, imageMin, name, tags, message, view} = this.props
    let {imageLoaded} = this.state


    return(
      <div className="work-entry-container">
        <div className="work-entry">
          <div className="image-container">
            <div className={`image`} style={{backgroundImage: `url(${image})`}}></div>
            <div className={`loader ${imageLoaded ? "done":""}`} style={{backgroundImage: `url(${imageMin})`}}></div>
          </div>
          <div className="text-container">
            <h2 className="work-title">{name}</h2>
            <div className="tag-container">
              {tags.map((tag, i) => (
                <i className="work-tag" key={i}>{`${tag}${i===tags.length-1 ? '':','}`}</i>
              ))}
            </div>
            <p className="work-text">{message}</p>
            <a className="work-button" href={view} target="_blank">View</a>
          </div>
        </div>
      </div>
    )
  }

}

export default WorkEntry
