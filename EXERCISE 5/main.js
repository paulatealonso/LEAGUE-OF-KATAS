function stray(numbers) {
    let orderedArr = numbers.sort()

    if (orderedArr[0] === orderedArr[1]) {
        return orderedArr[orderedArr.length -1]
    } else {
        return orderedArr[0]
    }
  }