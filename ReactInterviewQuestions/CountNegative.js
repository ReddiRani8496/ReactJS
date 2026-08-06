function countNegatives(arr) {
  // implement your solution here

  if (!Array.isArray(arr)) {
    return false;
  }

  if (arr.length == 0) return 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] != "number" || !Number.isFinite(arr[i])) return false;
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}

module.exports = { countNegatives };
