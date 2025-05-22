const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log("Even Numbers:", evenNumbers); // Output: [2, 4, 6, 8, 10]

// approach 2
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers1 = [];

for (let i = 0; i < numbers1.length; i++) {
  if (numbers1[i] % 2 === 0) {
    evenNumbers1.push(numbers1[i]);
  }
}

console.log("Even Numbers:", evenNumbers1); // Output: [2, 4, 6, 8, 10]
