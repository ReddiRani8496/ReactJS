let arr = [0, 1, 0, 3, 12];
const moveZerosToEnd = (arr) => {
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
console.log(moveZerosToEnd(arr)); // Output: [1, 3, 12, 0, 0]

// approach -2

let arr1 = [0, 1, 0, 3, 12];
const moveZerosToEnd1 = (arr) => {
  let zeroCount = 0; // Count of zeros

  // Traverse the array and count zeros
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroCount++;
    } else if (zeroCount > 0) {
      // If we encounter a non-zero element after zeros, shift it to the left
      arr[i - zeroCount] = arr[i];
    }
  }

  // Fill the end of the array with zeros
  for (let i = arr.length - zeroCount; i < arr.length; i++) {
    arr[i] = 0;
  }

  return arr;
};
console.log(moveZerosToEnd1(arr1)); // Output: [1, 3, 12, 0, 0]
