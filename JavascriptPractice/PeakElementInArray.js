// peak element in an array
const findPeakElement = (array) => {
  if (array.length === 0) return -1;
  if (array.length === 1) return 0;

  for (let i = 0; i < array.length; i++) {
    if (
      (i === 0 || array[i] >= array[i - 1]) &&
      (i === array.length - 1 || array[i] >= array[i + 1])
    ) {
      return i;
    }
  }

  return -1;
};

const arr = [1, 3, 20, 4, 1, 0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const peakIndex = findPeakElement(arr);
if (peakIndex !== -1) {
  console.log(
    `Peak element found at index ${peakIndex} with value ${arr[peakIndex]}`
  );
} else {
  console.log("No peak element found in the array");
}
