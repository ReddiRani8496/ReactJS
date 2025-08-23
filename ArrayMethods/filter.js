let arr = [1, 2, 3, 4, 5, 6];
let filteredArr = arr.filter((num) => num % 2 === 0);
console.log(filteredArr); // Output: [2, 4, 6]
console.log(arr); // Output: [1, 2, 3, 4,

// filter program to check powers of 2
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
let powerOfTwo = arr1.filter((num) => (num & (num - 1)) === 0);
console.log(powerOfTwo); // Output: [1, 2, 4, 8, 16]
