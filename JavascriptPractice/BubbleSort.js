const arr = [64, 34, 25, 12, 22, 11, 90];
const bubbleSort = (array) => {
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
};
console.log(bubbleSort(arr)); // Output: [11, 12, 22, 25, 34, 64, 90]
