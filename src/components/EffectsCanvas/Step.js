export default function Step(leftCanvasWidth, rightCanvasWidth, canvasHeight){

  if(this.props.mode === "HOME" || this.props.mode === "WORK"){
    StepClouds.call(this, leftCanvasWidth, canvasHeight)
    StepBirds.call(this, leftCanvasWidth, canvasHeight)
  }

  if(this.props.mode === "HOME" || this.props.mode === "SKILLS"){
    StepFish.call(this, rightCanvasWidth, canvasHeight)
    StepBubbles.call(this, canvasHeight)
    StepGodRays.call(this)
  }
}

function StepClouds(leftCanvasWidth, canvasHeight){
  this.clouds.forEach(cloud => {
    cloud.x += cloud.direction ? -cloud.speed : cloud.speed
    if(cloud.x > leftCanvasWidth) cloud.x = -cloud.size
    if(cloud.x < -cloud.size) cloud.x = leftCanvasWidth
  })
}

function StepBirds(leftCanvasWidth, canvasHeight){
  this.birds.forEach(bird => {
    bird.x += bird.direction ? -bird.speed : bird.speed
    if(bird.x > leftCanvasWidth) bird.x = -bird.size

    bird.animStep++

    switch(bird.animStep){
      case 3: bird.animState = 0; break;
      case 6: bird.animState = 1; break;
      case 9: bird.animState = 2; break;
      case 12: bird.animState = 3; break;
      case 15: bird.animState = 4; break;
      case 18: bird.animState = 5; break;
      case 21: bird.animState = 6; break;
      case 24: bird.animState = 7; break;
      case 27: bird.animState = 8; bird.animStep = 0; bird.y++; break;
    }
  })
}

function StepFish(rightCanvasWidth, canvasHeight){
  this.school.forEach(fish => {
    fish.x += fish.far ? -fish.speed : fish.speed
    if(fish.x > rightCanvasWidth && !fish.far) fish.x = -fish.size
    if(fish.x < -fish.size  && fish.far) fish.x = rightCanvasWidth+fish.size
  })
}

function StepBubbles(canvasHeight){
  this.bubbles.forEach(bubble => {
    bubble.x += Math.sin(0.25*bubble.y)/5
    bubble.y-=bubble.speed
    if(bubble.y < -bubble.size) bubble.y += canvasHeight+bubble.size
  })
}

function StepGodRays(){
  this.godraysTime++
  this.godrays[0].x4Modified = this.godrays[0].x4+(Math.sin(0.01*this.godraysTime)*32)
  this.godrays[1].x4Modified = this.godrays[1].x4+(Math.sin(0.005*this.godraysTime)*32)

}
