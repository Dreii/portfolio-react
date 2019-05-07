import React from 'react'

import './LoadingBar.css'

const LoadingBar = ({color, y, done}) => {
  return(
    <div className="loading-bar-container" style={{top: y}}>
      <div className="loading-bar-inner">
        <p className="loading-bar-subtitle site-subtitle">Designer & Developer</p>
        <h1 className="loading-bar-title site-title">Sean Verhaagen</h1>
        {/* <div className={`loading-bar ${done ? "done":""}`}>
          <div className="loading-bar-dot" style={{background: color}}></div>
          <div className="loading-bar-dot" style={{background: color}}></div>
          <div className="loading-bar-dot" style={{background: color}}></div>
        </div> */}
      </div>
    </div>
  )
}

export default LoadingBar
