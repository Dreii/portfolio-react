export default function Draw(){
  const canvasWidth = this.refs.canvas.width,
        canvasHeight = this.refs.canvas.height

  this.time++

  //Clear the canvas
  this.ctx.clearRect(0, 0, canvasWidth, canvasHeight)

  // //draw background colors and images
  DrawLeft.call(this, canvasWidth, canvasHeight)
  DrawRight.call(this, canvasWidth, canvasHeight)
}

export function DrawLeft(canvasWidth, canvasHeight){
  // this.ctx.save()
  // this.ctx.rect(0, 0, canvasWidth/2, canvasHeight)
  // this.ctx.clip()

  this.ctx.fillStyle = "#FF7373"
  this.ctx.fillRect(0, 0, canvasWidth/2, canvasHeight)

  let mountains = this.state.mountains
  if(mountains) {
    this.ctx.drawImage(mountains, 0, 0, mountains.width, mountains.height, 0, (canvasHeight-mountains.height*mountains.ratio)-96, canvasWidth/2, mountains.height*mountains.ratio)
    this.ctx.fillStyle = "#A50A29"
    this.ctx.fillRect(0, canvasHeight-100, canvasWidth/2, 100)
  }

  //draw clouds
  DrawClouds.call(this, canvasWidth, canvasHeight)

  // this.ctx.restore()
}

export function DrawRight(canvasWidth, canvasHeight){
  this.ctx.save()
  this.ctx.rect(canvasWidth/2, 0, canvasWidth/2, canvasHeight)
  this.ctx.clip()

  let grd = this.ctx.createRadialGradient(canvasWidth, 0, 32, canvasWidth, 0, canvasWidth/2)
  grd.addColorStop(0, "#0B87A9")
  grd.addColorStop(1, "#274A92")
  this.ctx.fillStyle = grd

  this.ctx.fillRect(canvasWidth/2, 0, canvasWidth/2, canvasHeight)

  let undersea = this.state.undersea
  if(undersea)this.ctx.drawImage(undersea, 0, 0, undersea.width, undersea.height, canvasWidth/2, canvasHeight-undersea.height*undersea.ratio, canvasWidth/2, undersea.height*undersea.ratio)

  //create a mask for the right side of the page

  //Draw Fish, bubbles, and godrays
  DrawFish.call(this, canvasWidth, canvasHeight)
  DrawBubbles.call(this, canvasWidth, canvasHeight)
  DrawGodRays.call(this, canvasWidth, canvasHeight)

  this.ctx.restore()

}

function DrawClouds(canvasWidth, canvasHeight){
  let cloudImages = [this.state.cloud0, this.state.cloud1, this.state.cloud2, this.state.cloud3, this.state.cloud4, this.state.cloud5, this.state.cloud6]
  if(cloudImages.every((cloudImg)=> cloudImg !== null)){
    this.clouds.forEach(cloudObj => {
      let img = cloudImages[cloudObj.type]
      this.ctx.drawImage(img, cloudObj.x, cloudObj.y, cloudObj.size, img.height*(cloudObj.size/img.width))
    })
  }
}

function DrawFish(){
  let fishImg = this.state.fish, fishCloseImg = this.state.fishClose
  if(fishImg && fishCloseImg) {
    this.school.forEach(fishObj => {
      let img = fishObj.far ? fishImg : fishCloseImg
      this.ctx.drawImage(img, fishObj.x, fishObj.y, fishObj.size, img.height*(fishObj.size/img.width))
    })
  }
}

function DrawBubbles(){
  this.bubbles.forEach(bubble => {
    this.ctx.fillStyle = bubble.color
    this.ctx.beginPath()
    this.ctx.arc(bubble.x, bubble.y, bubble.size/2, 0, 2 * Math.PI)
    this.ctx.fill()
  })
}

function DrawGodRays(){
  let cw = this.refs.canvas.width,
      ch = this.refs.canvas.height,
      startX = cw-cw/6+128


  this.ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'
  this.ctx.strokeStyle = 'rgba(30, 90, 155, 0.6)'
  this.ctx.beginPath()
  this.ctx.moveTo(startX+28, 0)
  this.ctx.moveTo(startX+38, 0)
  this.ctx.lineTo(startX-128, ch)
  this.ctx.lineTo(startX-128-64+Math.sin(0.01*this.time)*32, ch)
  this.ctx.lineTo(startX+28, 0)
  this.ctx.closePath()
  this.ctx.stroke()
  this.ctx.fill()


  this.ctx.beginPath()
  this.ctx.moveTo(startX+40, 0)
  this.ctx.moveTo(startX+48, 0)
  this.ctx.lineTo(startX+40-128, ch)
  this.ctx.lineTo(startX+40-128-32+Math.sin(0.005*this.time)*32, ch)
  this.ctx.lineTo(startX+40, 0)
  this.ctx.closePath()
  this.ctx.stroke()
  this.ctx.fill()
}
