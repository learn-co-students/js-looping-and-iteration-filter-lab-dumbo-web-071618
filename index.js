// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const drivers = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];

findMatching = (driversCollection,name) => {
  let matchedDrivers = driversCollection.filter( driver => {
    return driver.toUpperCase() == name.toUpperCase()
  })
  return matchedDrivers
}

fuzzyMatch = (drivers, str) => {
  let matchedDrivers = drivers.filter( driver => {
    let counter = 0
    while (driver[counter] === str[counter]){
      if (counter === str.length - 1){
        return driver
      }
      counter++
    }
  })
  return matchedDrivers
}

matchName = (drivers,name) => {
  let matches = drivers.filter( driver => {
    return driver.name === name
  })
  return matches;
}
