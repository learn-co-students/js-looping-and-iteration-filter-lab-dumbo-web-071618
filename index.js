

function findMatching(list, name){
  // This returns the what the filter returns
  return list.filter((driverName) => {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(list, letter){
  return list.filter((driverName) => {
    return driverName.slice(0, letter.length) === letter;
  });
}

/*
Write matchName -
This function takes an array of
drivers and a string as arguments.
In this function, each element of
the drivers array is a JavaScript
object that has a property of name.
The function should return each
element whose name property matches
the provided string argument.

*/
function matchName(list, name){

  return list.filter((driverName) => {
    return driverName.name.toLowerCase() === name.toLowerCase();
  });
}
