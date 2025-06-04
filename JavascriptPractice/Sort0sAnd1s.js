const arr = [0, 1, 0, 1, 0, 1, 0, 1];
const sort0sAnd1s = (arr) => {
  let zeroIndex = 0;
  let oneIndex = arr.length - 1;

  while (zeroIndex < oneIndex) {
    if (arr[zeroIndex] === 0) {
      zeroIndex++;
    } else if (arr[oneIndex] === 1) {
      oneIndex--;
    } else {
      // Swap the elements
      [arr[zeroIndex], arr[oneIndex]] = [arr[oneIndex], arr[zeroIndex]];
      zeroIndex++;
      oneIndex--;
    }
  }
  return arr;
};
