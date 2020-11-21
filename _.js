const _ = {

  clamp(number, lower, upper) {
    const lowerClampedVal = Math.max(number, lower)
    const clampedVal = Math.min(lowerClampedVal, upper)
    return clampedVal
  },

  inRange(number, start, end) {
    if (end === undefined) {
      end = start
      start = 0 
    } if (start > end) {
      const temp = end
      end = start
      start = temp
    }
    const isInRange = (start <= number) && (number < end) ? true : false
    return isInRange 
  },

  words(string) {
    const words = string.split(' ')
    return words  
  },

  pad(string, length) {
    if (string.length >= length) {
      return string
    }
    const startPaddingLength = Math.floor((length - string.length) / 2)
    const endPaddingLength = length - string.length - startPaddingLength
    const paddedString = ' '.repeat(startPaddingLength) + string +  ' '.repeat(endPaddingLength)
    return paddedString
  },

  has(object, key) {
    const hasValue = object[key] 
    if (hasValue !== undefined) {
      return true
    } return false

  },

  invert(object) {
    const invertedObject = {}
    for (const key in object) {
      const originalVal = object[key]
      invertedObject[originalVal] = key
    }
    return invertedObject
  },

  findKey(object, predicate) {
    for (const key in object) {
      const value = object[key]
      const predVal = predicate(value)
      if (predVal) {
        return key
      }
    }
    undefined
    return undefined
  },

  drop(arr, n) {
    if (n === undefined) {
      n = 1
    }
    const droppedArray = arr.slice(n, arr.length)
    return droppedArray
  },

  dropWhile(arr, pred) {
    const callback = (a, b) => {
      return !pred(a, b, arr)
    }
    const dropnum = arr.findIndex(callback)
    const droppedArr = this.drop(arr, dropnum)
    return droppedArr
  }
}

// Do not write or modify code below this line.
module.exports = _