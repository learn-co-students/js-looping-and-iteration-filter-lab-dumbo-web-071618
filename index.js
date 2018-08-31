// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(function (el) {
    return el.toLowerCase() === string.toLowerCase()
  })
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function (el) {
    return el.charAt(0) === string.charAt(0)
  })
}

function matchName(drivers, string) {
    return drivers.filter(function(obj){
      return obj.name === string
    })
  }
