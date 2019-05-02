export default function Create(){
  const canvasWidth = this.refs.canvas.width,
        canvasHeight = this.refs.canvas.height

  PrepareImages.call(this, canvasWidth, canvasHeight)
  PrepareClouds.call(this, canvasWidth, canvasHeight)
  PrepareFish.call(this, canvasWidth, canvasHeight)
  PrepareBubbles.call(this, canvasWidth, canvasHeight)
}

export function PrepareClouds(canvasWidth, canvasHeight){
  this.clouds = []
  for(let i=0; i<30;i++){
    let {x, y} = PlaceRandomly(0, 0, canvasWidth/2, canvasHeight/4)
    let size = RandomInRange(32, 64), speed = RandomInRange(0, 0.25), direction = OneInTwo(), type = ~~RandomInRange(0, 6)
    this.clouds.push({x, y, size, speed, direction, type})
    console.log(type)
  }

}

export function PrepareBubbles(canvasWidth, canvasHeight){
  this.bubbles = []
  for(let i=0; i<100;i++){
    let {x, y} = PlaceRandomly(canvasWidth/2, 0, canvasWidth, canvasHeight)
    let size = RandomInRange(1, 3), speed = RandomInRange(0.25, 0.5), color = RandomInArray(['#19DDE9', '#FFD157', '#B85EAC', '#366DAC'])

    this.bubbles.push({color, x, y, size, speed})
  }
}

export function PrepareFish(canvasWidth, canvasHeight){
  this.school = []
  for(let i=0; i<10;i++){
    let {x, y} = PlaceRandomly(canvasWidth/2, 0, canvasWidth, canvasHeight)
    let far = OneInTwo(),
        size = far ? RandomInRange(8, 16) : RandomInRange(16, 32),
        speed = far ? RandomInRange(0.25, 0.5) : RandomInRange(0.5, 1)

    this.school.push({size, x, y, far, speed})
  }
}

export function PrepareImages(canvasWidth, canvasHeight){

  this.refs.mountains.onload =  () => {
    let mountains = this.refs.mountains
    mountains.ratio = Math.min((canvasWidth*0.5) / mountains.width, canvasHeight / mountains.height)
    this.setState({mountains})
  }
  this.refs.undersea.onload =   () => {
    let undersea = this.refs.undersea
    undersea.ratio = Math.min((canvasWidth*0.5) / undersea.width, canvasHeight / undersea.height),
    this.setState({undersea})
  }
  this.refs.fish.onload =       () => {this.setState({fish:       this.refs.fish})}
  this.refs.fishClose.onload =  () => {this.setState({fishClose:  this.refs.fishClose})}
  this.refs.cloud0.onload =     () => {this.setState({cloud0:     this.refs.cloud0})}
  this.refs.cloud1.onload =     () => {this.setState({cloud1:     this.refs.cloud1})}
  this.refs.cloud2.onload =     () => {this.setState({cloud2:     this.refs.cloud2})}
  this.refs.cloud3.onload =     () => {this.setState({cloud3:     this.refs.cloud3})}
  this.refs.cloud4.onload =     () => {this.setState({cloud4:     this.refs.cloud4})}
  this.refs.cloud5.onload =     () => {this.setState({cloud5:     this.refs.cloud5})}
  this.refs.cloud6.onload =     () => {this.setState({cloud6:     this.refs.cloud6})}
}

function RandomInArray(array){return array[Math.random()*array.length >> 1]}
function RandomInRange(min, max){return (Math.random()*(max-min))+min}
function PlaceRandomly(xx, yy, ww, hh){return {x: RandomInRange(xx, ww), y: RandomInRange(yy, hh)}}
function OneInTwo(){return Math.random() > 0.5}
