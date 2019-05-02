import React, { Component } from 'react'
import './PageTransition.css'

import Konva from 'konva'


const STAGING = 0, GROWING = 1, SPREADING = 2

class PageTransition extends Component {
  state = {
    blobs: [],
    superBlob: null
  }

  _resizeHandler = () => {
      /* Allows CSS to determine size of canvas */
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;

      this.setup();
      this.draw();
  }

  componentDidMount(){
    window.addEventListener('resize', this._resizeHandler);

    let {blobs} = this.state
    let {startX, startY} = this.props

    for(let i = 0; i< 20; i++){blobs.push(getBlobProps('small', startX, startY))}
    for(let i = 0; i< 20; i++){blobs.push(getBlobProps('large', startX, startY))}
    let superBlob = getBlobProps('super', startX, startY)
    this.setState({blobs, superBlob})
  }

  componentWillUnmount() {
      window.removeEventListener('resize', this._resizeHandler);
  }

  setup(){
      this.stage = new Konva.Stage({
        container: 'container',
        width: this.canvas.width,
        height: this.canvas.height,
      });

      this.layer = new Konva.Layer();

      this.group = new Konva.Group({
        x: 0,
        y: -this.canvas.height/1.25,
        rotation: 20,
      });
    }

    draw() {

      var rect1 = new Konva.Rect({
        x: 0,
        y: 0,
        width: this.canvas.width/2,
        height: this.canvas.height,
        fillLinearGradientStartPoint: { x : 0, y : 0},
        fillLinearGradientEndPoint: { x : 0, y : this.canvas.height},
        fillLinearGradientColorStops: [0, "red", 1, "red"],
      });

      var rect2 = new Konva.Rect({
        x: this.canvas.width/2,
        y: 0,
        width: this.canvas.width/2,
        height: this.canvas.height,
        fillLinearGradientStartPoint: { x : 0, y : 0},
        fillLinearGradientEndPoint: { x : 0, y : this.canvas.height},
        fillLinearGradientColorStops: [0, "blue", 1, "blue"],
      });

      this.layer.add(rect1);
      this.layer.add(rect2);

      let arr = [
        "copper",
        "explain",
        "behavior",
        "truck",
        "neat",
        "unite",
        "branch",
        "educated",
        "tenuous",
        "hum",
        "decisive",
        "notice"
      ];
      let margin = 8;

      let smallestWidth = 10000000000000000000000;

      let textHeight = 0;

      for(let i = 0; i < arr.length; i++){
        let text = new Konva.Text({
            x: 0,
            y: 0,
            text: arr[i],
            fontSize: 86,
            fontFamily: 'Oswald, sans-serif',
            fontWeight: 'bold',
        });

        let thisWidth = text.getWidth();
        if(thisWidth < smallestWidth) smallestWidth = thisWidth;

        if(i === 0) textHeight = text.getHeight();
      }

      //run the function as many times as there is
      let xiterations = Math.ceil(this.canvas.width/(smallestWidth+margin))+5;
      let yiterations = Math.ceil((this.canvas.height*2)/(textHeight+margin))+5;

      console.log(yiterations);

      for(let y=0; y < yiterations; y++){
        let word = arr[Math.floor(Math.random()*arr.length)].toUpperCase();
        for(let x = 0; x < xiterations; x++) {
          word = word + ' ' + arr[Math.floor(Math.random()*arr.length)].toUpperCase();
        }

        let text = new Konva.Text({
          x: 0,
          y: y*(textHeight+margin),
          text: word,
          fontSize: 86,
          fontFamily: 'Oswald, sans-serif',
          fontWeight: 'bold',
          fill: 'rgb(0,0,0)',
          opacity: 0
        });

        this.group.add(text);
      }

      this.layer.add(this.group);
      this.stage.add(this.layer);

      this.group.children.map((text, i)=>{
        var tween = new Konva.Tween({
          node: text,
          duration: 1,
          opacity: Math.random()*0.1+0.1,
        });

        // start tween after 2 seconds
        setTimeout(function() {
          tween.play();
        }, Math.random()*2000);

        return text;
      })
    }

    render() {

        return (
          <div className="transition-container" ref={canvas => this.canvas = canvas}></div>
        );
    }

  // render() {
  //   let {blobs, superBlob} = this.state
  //   let {color, stage} = this.props
  //
  //   let xpos, ypos, size
  //   if(stage === STAGING){  xpos = 'startX';  ypos = 'startY';  size = 'minSize';}
  //   if(stage === GROWING){  xpos = 'midX';    ypos = 'midY';    size = 'maxSize';}
  //   if(stage === SPREADING){ xpos = 'endX';    ypos = 'endY';    size = 'minSize';}
  //
  //   return (
  //     <div className="transition-container">
  //       {blobs.map((blob, i) => <div className="blob" key={i} style={{
  //         top:  blob[ypos],
  //         left: blob[xpos],
  //         width: blob[size],
  //         height: blob[size],
  //         background: color,
  //         transition: stage===STAGING ? 'none':`all ${blob.speed}ms linear ${blob.speed/2}ms`
  //       }}></div>)}
  //       {superBlob ? (
  //         <div className="blob super-blob" style={{
  //           top: superBlob[ypos],
  //           left: superBlob[xpos],
  //           width: stage===GROWING ? window.innerWidth*2 : 0,
  //           height: stage===GROWING ? window.innerHeight*2 : 0,
  //           background: color,
  //           transition: stage===STAGING ? 'all 0s linear':`all ${stage===GROWING ? 1200:600}ms linear`
  //         }}></div>
  //       ):null}
  //       <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  //         <defs>
  //           <filter id="goo">
  //             <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
  //             <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
  //             <feBlend in="SourceGraphic" in2="goo" />
  //           </filter>
  //         </defs>
  //       </svg>
  //     </div>
  //   )
  // }

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
