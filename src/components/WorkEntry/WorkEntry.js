import React, { Component } from 'react'
import './WorkEntry.css'

class WorkEntry extends Component {
  state = {imageLoaded: false}

  componentDidMount(){
    const img = new Image();
    img.src = this.props.image;
    img.onload = () => {
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
            {view ? <a className="work-button" href={view} target="_blank">View</a>:null}
          </div>
        </div>
      </div>
    )
  }

}

export default WorkEntry
