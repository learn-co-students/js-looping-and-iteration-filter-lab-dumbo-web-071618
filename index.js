// Code your solution in this file


function findMatching(array, string){

  return array.filter(function(element){

    return element.toLowerCase() === string.toLowerCase()

  })


}

function fuzzyMatch(array, string){

    return array.filter(function(element){

      return element[0] === string[0]
    })

}

function matchName(array, string){

  return array.filter(function(element){

    return element.name === string

  })
}
