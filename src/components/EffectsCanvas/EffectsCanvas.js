import React, { Component } from 'react'
import './EffectsCanvas.css'

import Create from './Create'
import Step from './Step'
import Draw from './Draw'

class EffectsCanvas extends Component {
  state={
    mountains: null,
    undersea: null,
    fish: null,
    fishClose: null,
    cloud0: null,
    cloud1: null,
    cloud2: null,
    cloud3: null,
    cloud4: null,
    cloud5: null,
    cloud6: null
  }

  constructor(props) {
      super(props);

      this._resizeHandler = () => {
          /* Allows CSS to determine size of canvas */
          this.refs.canvas.width = window.innerWidth;
          this.refs.canvas.height = window.innerHeight;
      }
  }

  init() {
    this.time = 0

    Create.apply(this)

    //Begin Step Loop
    setInterval(Step.bind(this), 1000/30)

    //Begin Draw Loop
    setInterval(Draw.bind(this), 1000/60)
  }

  componentDidMount() {
      window.addEventListener('resize', this._resizeHandler)

      /* Allows CSS to determine size of canvas */
      this.refs.canvas.width = window.innerWidth;
      this.refs.canvas.height = window.innerHeight;

      const canvas = this.refs.canvas
      this.ctx = canvas.getContext("2d")
      this.init()
  }

  componentWillUnmount() {window.removeEventListener('resize', this._resizeHandler)}

  render() {

      return (
        <div>
          <canvas id="effects-canvas" ref="canvas" width={640} height={425} />
          <img ref="mountains" src={"/mountains.svg"} className="hidden" />
          <img ref="undersea" src={"/undersea.svg"} className="hidden" />
          <img ref="fish" src={"/fish.svg"} className="hidden" />
          <img ref="fishClose" src={"/fish-close.svg"} className="hidden" />
          <img ref="cloud0" src={"/cloud-0.svg"} className="hidden" />
          <img ref="cloud1" src={"/cloud-1.svg"} className="hidden" />
          <img ref="cloud2" src={"/cloud-2.svg"} className="hidden" />
          <img ref="cloud3" src={"/cloud-3.svg"} className="hidden" />
          <img ref="cloud4" src={"/cloud-4.svg"} className="hidden" />
          <img ref="cloud5" src={"/cloud-5.svg"} className="hidden" />
          <img ref="cloud6" src={"/cloud-6.svg"} className="hidden" />
        </div>
      );
  }
}

export default EffectsCanvas
