import React from 'react'

import './WorkEntry.css'

const WorkEntry = ({image, name, tags, message}) => (
  <div className="work-entry-container">
    <div className="work-entry">
      <div className="image-container">
        <div className="image" style={{backgroundImage: `url(${image})`}}></div>
      </div>
      <div className="text-container">
        <h2 className="work-title">{name}</h2>
        <div className="tag-container">
          {tags.map((tag, i) => (
            <i className="work-tag" key={i}>{`${tag}${i===tags.length-1 ? '':','}`}</i>
          ))}
        </div>
        <p className="work-text">{message}</p>
        <button className="work-button">View</button>
      </div>
    </div>
  </div>
)

export default WorkEntry
