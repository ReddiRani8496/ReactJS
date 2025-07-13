function findMaxNumber(arr) {
  // Your implementation
  if (arr.length == 0) return null;
  //   let max = arr[0];
  //   for (let i = 1; i < arr.length; i++) {
  //     if (arr[i] > max) max = arr[i];
  //   }
  //   return max;
  return arr.reduce((max, current) => (current > max ? current : max), arr[0]);
}

//For the purpose of user debugging.
findMaxNumber([1, 2, 3, 4, 5]);
console.log(findMaxNumber([1, 2, 3, 4, 5])); // Output: 5
console.log(findMaxNumber([-1, -2, -3, -4, -5])); // Output: -1
console.log(findMaxNumber([10, 20, 30, 40, 50])); // Output: 50
console.log(findMaxNumber([])); // Output: null
console.log(findMaxNumber([5])); // Output: 5
