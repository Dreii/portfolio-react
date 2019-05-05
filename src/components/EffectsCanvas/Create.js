export default function Create(leftCanvasWidth, rightCanvasWidth, canvasHeight){
  PrepareImages.call(this)

  PrepareClouds.call(this, leftCanvasWidth, canvasHeight)
  PrepareBirds.call(this, leftCanvasWidth, canvasHeight)

  PrepareFish.call(this, rightCanvasWidth, canvasHeight)
  PrepareBubbles.call(this, rightCanvasWidth, canvasHeight)
  PrepareGodRays.call(this, rightCanvasWidth, canvasHeight)
}

export function PrepareClouds(ww, canvasHeight){
  this.clouds = []
  for(let i=0; i<3;i++){
    let {x, y} = PlaceRandomly(0, 0, ww/i, canvasHeight/3)
    let size = RandomInRange(0.25*ww, 0.5*ww), speed = RandomInRange(0, 0.25), direction = OneInTwo(), type = ~~RandomInRange(0, 6)
    this.clouds.push({x, y, size, speed, direction, type})
  }
}

export function PrepareBirds(ww, canvasHeight){
  this.birds = []
  for(let i=0; i<3; i++){
    let {x, y} = PlaceRandomly(0, 0, ww/2, canvasHeight/2)
    let size = RandomInRange(0.01*ww, 0.05*ww), speed = RandomInRange(1, 2), animStep = ~~RandomInRange(0, 27), animState = 0

    this.birds.push({x, y, size, speed, animStep, animState})
  }
}



export function PrepareBubbles(ww, canvasHeight){
  this.bubbles = []
  for(let i=0; i<100;i++){
    let {x, y} = PlaceRandomly(0, 0, ww, canvasHeight)
    let size = RandomInRange(1, 3), speed = RandomInRange(0.25, 0.5), color = RandomInArray(['#19DDE9', '#FFD157', '#B85EAC', '#366DAC'])
    this.bubbles.push({color, x, y, size, speed})
  }
}

export function PrepareFish(ww, canvasHeight){
  this.school = []
  for(let i=0; i<10;i++){
    let {x, y} = PlaceRandomly(0, 0, ww, canvasHeight)
    let far = OneInTwo(),
        size = far ? RandomInRange(8, 16) : RandomInRange(16, 32),
        speed = far ? RandomInRange(0.25, 0.5) : RandomInRange(0.5, 1)

    this.school.push({size, x, y, far, speed})
  }
}

export function PrepareGodRays(ww, canvasHeight){
  this.godrays = []
  this.godraysTime = 0
  let startX = ww-ww/6+128

  let x1 = startX+28, y1 = 0,
  x2 = startX+38, y2 = 0,
  x3 = startX-128, y3 = canvasHeight,
  x4 = startX-128-64, y4 = canvasHeight,
  x5 = startX+28, y5 = 0

  this.godrays[0] = {x1, x2, x3, x4, x5, y1, y2, y3, y4, y5}

  x1 = startX+40, y1 = 0,
  x2 = startX+48, y2 = 0,
  x3 = startX+40-128, y3 = canvasHeight,
  x4 = startX+40-128-32, y4 = canvasHeight,
  x5 = startX+40, y5 = 0

  this.godrays[1] = {x1, x2, x3, x4, x5, y1, y2, y3, y4, y5}
}

export function PrepareImages(){
  this.refs.fish.onload =       () => {this.setState({fish:       this.refs.fish})}
  this.refs.fishClose.onload =  () => {this.setState({fishClose:  this.refs.fishClose})}
  this.refs.cloud0.onload =     () => {this.setState({cloud0:     this.refs.cloud0})}
  this.refs.cloud1.onload =     () => {this.setState({cloud1:     this.refs.cloud1})}
  this.refs.cloud2.onload =     () => {this.setState({cloud2:     this.refs.cloud2})}
  this.refs.cloud3.onload =     () => {this.setState({cloud3:     this.refs.cloud3})}
  this.refs.cloud4.onload =     () => {this.setState({cloud4:     this.refs.cloud4})}
  this.refs.cloud5.onload =     () => {this.setState({cloud5:     this.refs.cloud5})}
  this.refs.cloud6.onload =     () => {this.setState({cloud6:     this.refs.cloud6})}
  this.refs.bird0.onload =      () => {this.setState({bird0:      this.refs.bird0})}
  this.refs.bird1.onload =      () => {this.setState({bird1:      this.refs.bird1})}
  this.refs.bird2.onload =      () => {this.setState({bird2:      this.refs.bird2})}
  this.refs.bird3.onload =      () => {this.setState({bird3:      this.refs.bird3})}
  this.refs.bird4.onload =      () => {this.setState({bird4:      this.refs.bird4})}
  this.refs.bird5.onload =      () => {this.setState({bird5:      this.refs.bird5})}
  this.refs.bird6.onload =      () => {this.setState({bird6:      this.refs.bird6})}
  this.refs.bird7.onload =      () => {this.setState({bird7:      this.refs.bird7})}
  this.refs.bird8.onload =      () => {this.setState({bird8:      this.refs.bird8})}
}

function RandomInArray(array){return array[Math.random()*array.length >> 1]}
function RandomInRange(min, max){return (Math.random()*(max-min))+min}
function PlaceRandomly(xx, yy, ww, canvasHeight){return {x: RandomInRange(xx, ww), y: RandomInRange(yy, canvasHeight)}}
function OneInTwo(){return Math.random() > 0.5}
