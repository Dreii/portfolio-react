export default function Draw(canvasWidth, canvasHeight){
  if(this.props.mode === "SKILLS") return;

  //Clear the canvas
  this.lctx.clearRect(0, 0, canvasWidth, canvasHeight)

  DrawClouds.call(this)
  DrawBirds.call(this)
}

function DrawClouds(){
  let cloudImages = [this.state.cloud0, this.state.cloud1, this.state.cloud2, this.state.cloud3, this.state.cloud4, this.state.cloud5, this.state.cloud6]
  if(cloudImages.every((cloudImg)=> cloudImg !== null)){
    this.clouds.forEach(cloudObj => {
      let img = cloudImages[cloudObj.type]
      this.lctx.drawImage(img, cloudObj.x, cloudObj.y, cloudObj.size, img.height*(cloudObj.size/img.width))
    })
  }
}

function DrawBirds(){
  let birdImages = [this.state.bird0, this.state.bird1, this.state.bird2, this.state.bird3, this.state.bird4, this.state.bird5, this.state.bird6, this.state.bird7, this.state.bird8]
  if(birdImages.every((birdImg)=> birdImg !== null)){
    this.birds.forEach(bird => {
      let img = birdImages[bird.animState]
      this.lctx.drawImage(img, bird.x, bird.y, bird.size, img.height*(bird.size/img.width))
    })
  }
}
