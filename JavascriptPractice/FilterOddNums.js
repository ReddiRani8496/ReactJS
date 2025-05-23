const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumbers = numbers.filter((number) => number % 2 !== 0);

console.log("Odd Numbers:", oddNumbers); // Output: [1, 3, 5, 7, 9]

// approach 2
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers1 = [];

for (let i = 0; i < numbers1.length; i++) {
  if (numbers1[i] % 2 !== 0) {
    oddNumbers1.push(numbers1[i]);
  }
}

console.log("Odd Numbers:", oddNumbers1); // Output: [1, 3, 5, 7, 9]
