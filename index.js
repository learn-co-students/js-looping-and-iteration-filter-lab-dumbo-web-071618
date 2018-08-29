function findMatching(arr, name) {
    let newArr = []
    for (ele of arr) {
        if (name.toLowerCase() === ele.toLowerCase()) newArr.push(ele)
    }
    return newArr
}

function fuzzyMatch(arr, beg) {
    let newArr = []
    for (const ele of arr) {
        if (ele.slice(0, beg.length).toLowerCase() === beg.toLowerCase()) newArr.push(ele)
    }
    return newArr
}

function matchName(arr, name) {
    let newArr = []
    for (const ele of arr) {
        if (ele.name.toLowerCase() === name.toLowerCase()) newArr.push(ele)
    }
    return newArr
}