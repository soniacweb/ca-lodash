const _ = {

  clamp(number, lower, upper) {
    let lowerClampedVal = Math.max(number, lower)
    let clampedVal = Math.min(lowerClampedVal, upper)
    return clampedVal
  },

  inRange(number, start, end) {
    if (end === undefined) {
      end = start
      start= 0 
    } if (start > end) {
      let temp = end
      end = start
      start = temp
    }
    const isInRange = (start <= number) && (number < end) ? true : false
    return isInRange 
  }
}

// Do not write or modify code below this line.
module.exports = _