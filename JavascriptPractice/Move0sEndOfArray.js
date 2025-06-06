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

// approach-2
const move0sToEnd1 = (arr) => {
  let count = 0; // Count of non-zero elements

  // Traverse the array and move non-zero elements to the front
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[count++] = arr[i];
    }
  }

  // Fill the remaining positions with zeros
  while (count < arr.length) {
    arr[count++] = 0;
  }

  return arr;
};
console.log(move0sToEnd1(arr)); // Output: [1, 1, 1, 1, 0, 0, 0, 0]
