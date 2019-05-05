import React, { Component } from 'react'
import './PageTransition.css'

const STAGING = 0, GROWING = 1, SPREADING = 2

class PageTransition extends Component {
  state = {
    blobs: [],
    superBlob: null
  }

  componentDidMount(){
    let {blobs} = this.state
    let {startX, startY} = this.props

    for(let i = 0; i< 10; i++){blobs.push(getBlobProps('small', startX, startY))}
    for(let i = 0; i< 10; i++){blobs.push(getBlobProps('large', startX, startY))}
    let superBlob = getBlobProps('super', startX, startY)
    this.setState({blobs, superBlob})
  }

  render() {
    let {blobs, superBlob} = this.state
    let {color, stage} = this.props

    let xpos, ypos, size
    if(stage === STAGING){  xpos = 'startX';  ypos = 'startY';  size = 'minSize';}
    if(stage === GROWING){  xpos = 'midX';    ypos = 'midY';    size = 'maxSize';}
    if(stage === SPREADING){ xpos = 'endX';    ypos = 'endY';    size = 'minSize';}

    return (
      <div className="transition-container">
        {blobs.map((blob, i) => <div className="blob" key={i} style={{
          top:  blob[ypos],
          left: blob[xpos],
          width: blob[size],
          height: blob[size],
          background: color,
          transition: stage===STAGING ? 'none':`all ${blob.speed}ms linear ${blob.speed/2}ms`
        }}></div>)}
        {superBlob ? (
          <div className="blob super-blob" style={{
            top: superBlob[ypos],
            left: superBlob[xpos],
            width: stage===GROWING ? window.innerWidth*2 : 0,
            height: stage===GROWING ? window.innerHeight*2 : 0,
            background: color,
            transition: stage===STAGING ? 'all 0s linear':`all ${stage===GROWING ? 1200:600}ms linear`
          }}></div>
        ):null}
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
      </div>
    )
  }
}

export default PageTransition

function getBlobProps(type, startX, startY){
  let midX, midY, endX, endY, speed, minSize, maxSize

  midX = (type === 'super') ? startX : Math.round(Math.random()*window.innerWidth)
  midY = (type === 'super') ? startY : Math.round(Math.random()*window.innerHeight)

  let ran = Math.random() > 0.5 ? -1:1
  endX = ran*(window.innerWidth*2)
  endY = ran*(window.innerHeight*2)

  speed = (type === 'small') ? 450 : 600

  minSize = 0
  maxSize = (type === 'small') ? Math.round(Math.random()*600)+40 : Math.round(Math.random()*1000)+40

  return {startX, startY, midX, midY, endX, endY, speed, minSize, maxSize}
}
