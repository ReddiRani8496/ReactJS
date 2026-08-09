function findLargest(arr) {
  // your solution here
  if (!Array.isArray(arr)) {
    return false;
  }
  if (arr && arr.length == 0) {
    return null;
  }
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (typeof val !== "number" || !Number.isFinite(val)) {
      return false;
    }
    if (arr[i] >= max) {
      max = arr[i];
    }
  }
  return max;
}

module.exports = { findLargest };
