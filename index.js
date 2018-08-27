// Code your solution in this file
function findMatching(array, name){
  return array.filter(n => n.toUpperCase() === name.toUpperCase())
}

function fuzzyMatch(array, letters){
  return array.filter( n=> n.slice(0, letters.length) === letters)
}

function matchName(array, name){
  return array.filter(n=> n["name"] === name)
}
