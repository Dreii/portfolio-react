export function iRandom(max){
  return Math.round(Math.random()*max)
}

export function iRandomRange(min, max){
  return max-Math.round(Math.random()*min)
}

export function randomInArray(array){
  return array[Math.ceil(Math.random()*array.length-1)]
}
