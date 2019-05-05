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
    let lw, rw
    switch(this.props.mode){
      case "HOME":
        lw = window.innerWidth/2
        rw = window.innerWidth/2
      break;

      case "WORK":
        lw = window.innerWidth
        rw = 0
      break;

      case "SKILLS":
        lw = 0
        rw = window.innerWidth
      break;
    }

    this.setState({leftCanvasWidth: lw, rightCanvasWidth: rw, canvasHeight: window.innerHeight})
    this.refs.leftCanvas.width = lw
    this.refs.rightCanvas.width = rw
    this.refs.leftCanvas.height = window.innerHeight
    this.refs.rightCanvas.height = window.innerHeight
    Create.call(this, lw, rw, window.innerHeight)
  }

  Loop(){
    Step.call(this)
    DrawLeft.call(this)
    DrawRight.call(this)
  }

  init() {
    this.Resize()

    this.loop = setInterval(this.Loop.bind(this), 1000/30)
  }

  componentDidMount() {
    window.addEventListener('resize', this.Resize)

    const leftCanvas = this.refs.leftCanvas
    const rightCanvas = this.refs.rightCanvas
    this.lctx = leftCanvas.getContext("2d")
    this.rctx = rightCanvas.getContext("2d")

    this.init()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.Resize)
    clearInterval(this.Loop)
  }

  render() {
      return (
        <div>
          <canvas id="left-canvas" ref="leftCanvas" />
          <canvas id="right-canvas" ref="rightCanvas" />
          <div className="background-left" style={{width: this.state.leftCanvasWidth}}>
            <div className="background-image"></div>
          </div>
          <div className="background-right" style={{width: this.state.rightCanvasWidth}}>
            <div className="background-image"></div>
          </div>
          <img ref="fish" src={"/fish.svg"} className="hidden" />
          <img ref="fishClose" src={"/fish-close.svg"} className="hidden" />
          <img ref="cloud0" src={"/cloud-0.svg"} className="hidden" />
          <img ref="cloud1" src={"/cloud-1.svg"} className="hidden" />
          <img ref="cloud2" src={"/cloud-2.svg"} className="hidden" />
          <img ref="cloud3" src={"/cloud-3.svg"} className="hidden" />
          <img ref="cloud4" src={"/cloud-4.svg"} className="hidden" />
          <img ref="cloud5" src={"/cloud-5.svg"} className="hidden" />
          <img ref="cloud6" src={"/cloud-6.svg"} className="hidden" />
          <img ref="bird0" src={"/bird-0.svg"} className="hidden" />
          <img ref="bird1" src={"/bird-1.svg"} className="hidden" />
          <img ref="bird2" src={"/bird-2.svg"} className="hidden" />
          <img ref="bird3" src={"/bird-3.svg"} className="hidden" />
          <img ref="bird4" src={"/bird-4.svg"} className="hidden" />
          <img ref="bird5" src={"/bird-5.svg"} className="hidden" />
          <img ref="bird6" src={"/bird-6.svg"} className="hidden" />
          <img ref="bird7" src={"/bird-7.svg"} className="hidden" />
          <img ref="bird8" src={"/bird-8.svg"} className="hidden" />
        </div>
      )
  }
}

export default EffectsCanvas
