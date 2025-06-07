const arr = [10, 20, 30, 40, 50];
const linearSearch = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
};
console.log(linearSearch(arr, 30)); // Output: 2
console.log(linearSearch(arr, 60)); // Output: -1
