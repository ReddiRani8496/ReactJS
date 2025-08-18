let arr = [1, 2, 3, 4, 5, 6];
const sum = arr.reduce((accumulator, currentValue) => {
  accumulator + currentValue;
});
console.log(arr); // Output: [1, 2, 3, 5, 6]
console.log(sum); // Output: 21
