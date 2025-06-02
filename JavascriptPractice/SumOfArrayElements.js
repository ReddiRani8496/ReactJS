const arr = [10, 20, 30, 40, 50];
const sumOfArrayElements = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};
console.log(sumOfArrayElements(arr)); // Output: 150
