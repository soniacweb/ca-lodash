const _ = {

  clamp(number, lower, upper) {
    let lowerClampedVal = Math.max(number, lower)
    let clampedVal = Math.min(lowerClampedVal, upper)
    return clampedVal
  }
}

// Do not write or modify code below this line.
module.exports = _