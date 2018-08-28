// Code your solution in this file
function findMatching(array, name) {
  return array.filter(word => word.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(array, chars) {
  return array.filter (word => word.startsWith(chars))
}

function matchName(array, name_match) {
  return array.filter (user => user.name === name_match)
}
