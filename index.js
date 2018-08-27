function findMatching(drivers, name) {
    return drivers.filter(n => n.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers, partial)   {
    return drivers.filter(name => name.substring(0, partial.length) === partial)
}

function matchName(drivers, name)    {
    debugger
    return drivers.filter(n => n.name === name)
}