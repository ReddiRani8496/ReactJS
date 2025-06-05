const arr = [0, 1, 0, 1, 0, 1, 0, 1];
const move0sToEnd = (arr) => {
  let zeroIndex = 0;
  let nonZeroIndex = 0;

  while (nonZeroIndex < arr.length) {
    if (arr[nonZeroIndex] !== 0) {
      // Swap the elements
      [arr[zeroIndex], arr[nonZeroIndex]] = [arr[nonZeroIndex], arr[zeroIndex]];
      zeroIndex++;
    }
    nonZeroIndex++;
  }
  return arr;
};
console.log(move0sToEnd(arr)); // Output: [1, 1, 1, 1, 0, 0, 0, 0]
