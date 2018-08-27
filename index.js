function findMatching(drivers, string) {
  return drivers.filter (function (name){
    return name.toLowerCase() === string.toLowerCase();
  });
}

function fuzzyMatch(drivers, string) {
  return drivers.filter (function (name){
    return name.charAt(0) === string.charAt(0);
  });
}

function matchName(drivers, string) {
  return drivers.filter (function(driver){
    return driver['name'].toLowerCase() === string.toLowerCase();
  });
}
