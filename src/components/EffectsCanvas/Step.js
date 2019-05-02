export default function Step(){
  const canvasWidth = this.refs.canvas.width,
        canvasHeight = this.refs.canvas.height

  StepClouds.call(this, canvasWidth, canvasHeight)
  StepFish.call(this, canvasWidth, canvasHeight)
  StepBubbles.call(this, canvasWidth, canvasHeight)
}

export function StepClouds(canvasWidth, canvasHeight){
  this.clouds.forEach(cloudObj => {
    cloudObj.x += cloudObj.direction ? -cloudObj.speed : cloudObj.speed
    if(cloudObj.x > canvasWidth/2) cloudObj.x = -cloudObj.size
    if(cloudObj.x < -cloudObj.size) cloudObj.x = canvasWidth/2
  })
}

export function StepFish(canvasWidth, canvasHeight){
  this.school.forEach(fishObj => {
    fishObj.x += fishObj.far ? -fishObj.speed : fishObj.speed
    if(fishObj.x > canvasWidth && !fishObj.far) fishObj.x = canvasWidth/2-fishObj.size
    if(fishObj.x < canvasWidth/2-fishObj.size  && fishObj.far) fishObj.x = canvasWidth+fishObj.size
  })
}

export function StepBubbles(canvasWidth, canvasHeight){
  this.bubbles.forEach(bubble => {
    bubble.x += Math.sin(0.25*bubble.y)/5
    bubble.y-=bubble.speed
    if(bubble.y < -bubble.size) bubble.y += this.refs.canvas.height+bubble.size
  })
}
