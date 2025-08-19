let arr = [1, 2, 3, 4, 5, 6];
const sum = arr.reduce((accumulator, currentValue) => {
  accumulator + currentValue;
});
console.log(arr); // Output: [1, 2, 3, 5, 6]
console.log(sum); // Output: 21

// approach 2
let arr2 = [1, 2, 3, 4, 5, 6];
const sum2 = arr2.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(arr2); // Output: [1, 2, 3, 4, 5, 6]
console.log(sum2); // Output: 21
