// Code your solution in this file

// function findMatching(drivers, string) {
//   var result = [];
//   for (var i = 0; i < drivers.length; i++) {
//     if (string.toLowerCase() === drivers[i].toLowerCase()) {
//       result.push(drivers[i]);
//     }
//   }
//   return result;
// }

// function findMatching(drivers, string) {
//   let result = drivers.filter(driver => {
//     return driver.toLowerCase() === string.toLowerCase();
//   });
//   return result;
// }
function findMatching(drivers, string) {
 return drivers.filter( function(driver) {
    return driver.toLowerCase() === string.toLowerCase();
  });
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function(driver){
    return driver.slice(0, 2) == string;
  });
}

function matchName(drivers, string) {
  return drivers.filter(function(driver){
    return driver.name === string;
  });
}
