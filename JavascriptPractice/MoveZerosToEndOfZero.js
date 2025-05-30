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
