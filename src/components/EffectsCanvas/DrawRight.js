export default function Draw(){
  let canvasWidth = this.state.rightCanvasWidth,
      canvasHeight = this.state.canvasHeight

  //Clear the canvas
  this.rctx.clearRect(0, 0, canvasWidth, canvasHeight)
  //Draw Fish, bubbles, and godrays
  DrawFish.call(this)
  DrawBubbles.call(this)
  DrawGodRays.call(this)
}

function DrawFish(){
  let fishImg = this.state.fish, fishCloseImg = this.state.fishClose
  if(fishImg && fishCloseImg) {
    this.school.forEach(fishObj => {
      let img = fishObj.far ? fishImg : fishCloseImg
      this.rctx.drawImage(img, fishObj.x, fishObj.y, fishObj.size, img.height*(fishObj.size/img.width))
    })
  }
}

function DrawBubbles(){
  this.bubbles.forEach(bubble => {
    this.rctx.fillStyle = bubble.color
    this.rctx.beginPath()
    this.rctx.arc(bubble.x, bubble.y, bubble.size/2, 0, 2 * Math.PI)
    this.rctx.fill()
  })
}

function DrawGodRays(){
  this.rctx.fillStyle = 'rgba(255, 255, 255, 0.1)'
  this.rctx.strokeStyle = 'rgba(30, 90, 155, 0.6)'

  this.godrays.forEach(gr => {
    this.rctx.beginPath()
    this.rctx.moveTo(gr.x1, gr.y1) //x1, y1
    this.rctx.moveTo(gr.x2, gr.y2) //x2, y2
    this.rctx.lineTo(gr.x3, gr.y3) //x3, y3
    this.rctx.lineTo(gr.x4Modified, gr.y4) //x4, y4
    this.rctx.lineTo(gr.x5, gr.y5) //x5, y5
    this.rctx.closePath()
    this.rctx.fill()
  })
}
