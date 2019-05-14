import React, { Component } from 'react'
import './EffectsCanvas.css'

import Create from './Create'
import Step from './Step'
import DrawLeft from './DrawLeft'
import DrawRight from './DrawRight'

class EffectsCanvas extends Component {
  state={
    leftCanvasWidth: 0,
    rightCanvasWidth: 0,
    canvasHeight: 0,
    fish: null,
    fishClose: null,
    cloud0: null,
    cloud1: null,
    cloud2: null,
    cloud3: null,
    cloud4: null,
    cloud5: null,
    cloud6: null,
    bird0:  null,
    bird1:  null,
    bird2:  null,
    bird3:  null,
    bird4:  null,
    bird5:  null,
    bird6:  null,
    bird7:  null,
    bird8:  null,
  }

  Resize = () => {
    let {lw, rw, hh} = GetBounds.call(this)
    Create.call(this, lw, rw, hh)
  }

  Loop(){
    let {lw, rw, hh} = GetBounds.call(this)

    if(this.refs.leftCanvas){
      this.refs.leftCanvas.width = lw
      this.refs.leftCanvas.height = hh
    }

    if(this.refs.rightCanvas){
      this.refs.rightCanvas.width = rw
      this.refs.rightCanvas.height = hh
    }

    Step.call(this, lw, rw, hh)
    DrawLeft.call(this, lw, hh)
    DrawRight.call(this, rw, hh)
  }

  init() {
    this.Resize()

    this.loop = setInterval(this.Loop.bind(this), 1000/30)
  }

  componentDidMount() {
    window.addEventListener('resize', this.Resize)

    const leftCanvas = this.refs.leftCanvas
    const rightCanvas = this.refs.rightCanvas

    if(this.props.mode !== "SKILLS")
      this.lctx = leftCanvas.getContext("2d")

    if(this.props.mode !== "WORK")
      this.rctx = rightCanvas.getContext("2d")

    this.init()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.Resize)
    clearInterval(this.Loop)
  }

  render() {
      return (
        <div id="effects-canvas">
          <div className={`left-effects ${this.props.mode === "WORK" ? 'effect-page': this.props.mode === "SKILLS" ? "hidden": ""}`}>
            <canvas id="left-canvas" className="effect-canvas" ref="leftCanvas" />
            <div className="background-image"></div>
          </div>

          <div className={`right-effects ${this.props.mode === "SKILLS" ? 'effect-page': this.props.mode === "WORK" ? "hidden": ""}`}>
            <canvas id="right-canvas" className="effect-canvas" ref="rightCanvas" />
            <div className="background-image"></div>
          </div>

          <img ref="fish" src={"/fish.svg"} className="hidden" aria-hidden="true" alt="" />
          <img ref="fishClose" src={"/fish-close.svg"} className="hidden" aria-hidden="true" alt=""/>
          <img ref="cloud0" src={"/cloud-0.svg"} className="hidden" aria-hidden="true" alt="" />
          <img ref="cloud1" src={"/cloud-1.svg"} className="hidden" aria-hidden="true" alt="" />
          <img ref="cloud2" src={"/cloud-2.svg"} className="hidden" aria-hidden="true" alt="" />
          <img ref="cloud3" src={"/cloud-3.svg"} className="hidden" aria-hidden="true" alt="" />
          <img ref="cloud4" src={"/cloud-4.svg"} className="hidden" aria-hidden="true" alt="" />
          <img ref="cloud5" src={"/cloud-5.svg"} className="hidden" aria-hidden="true" alt="" />
          <img ref="cloud6" src={"/cloud-6.svg"} className="hidden" aria-hidden="true" alt="" />
          <img ref="bird0" src={"/bird-0.svg"} className="hidden" aria-hidden="true" alt="" />
          <img ref="bird1" src={"/bird-1.svg"} className="hidden" aria-hidden="true" alt="" />
          <img ref="bird2" src={"/bird-2.svg"} className="hidden" aria-hidden="true" alt="" />
          <img ref="bird3" src={"/bird-3.svg"} className="hidden" aria-hidden="true" alt="" />
          <img ref="bird4" src={"/bird-4.svg"} className="hidden" aria-hidden="true" alt="" />
          <img ref="bird5" src={"/bird-5.svg"} className="hidden" aria-hidden="true" alt="" />
          <img ref="bird6" src={"/bird-6.svg"} className="hidden" aria-hidden="true" alt="" />
          <img ref="bird7" src={"/bird-7.svg"} className="hidden" aria-hidden="true" alt="" />
          <img ref="bird8" src={"/bird-8.svg"} className="hidden" aria-hidden="true" alt="" />
        </div>
      )
  }
}

export default EffectsCanvas

function GetBounds(){
  let lw, rw, hh
  switch(this.props.mode){
    case "HOME":
      if(window.innerWidth < 900){
        lw = window.innerWidth
        rw = window.innerWidth
      }else{
        lw = window.innerWidth/2
        rw = window.innerWidth/2
      }
    break;

    case "WORK":
      lw = window.innerWidth
      rw = 0
    break;

    case "SKILLS":
      lw = 0
      rw = window.innerWidth
    break;

    default:
      lw = window.innderWidth
      rw = window.innerWidth
  }
  hh = window.innerHeight

  return {lw, rw, hh}
}
