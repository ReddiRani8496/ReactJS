function findSmallest(arr) {
  // your solution here

  if (!Array.isArray(arr)) {
    return false;
  }
  if (arr.length == 0) return null;

  let small = Infinity;
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (typeof val != "number" || !Number.isFinite(val)) return false;
    if (val < small) {
      small = val;
    }
  }
  return small;
}

module.exports = { findSmallest };
