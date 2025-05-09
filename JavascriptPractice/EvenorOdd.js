const evenOrOdd = (num) => {
  if (num % 2 === 0) {
    return `${num} is even`;
  }
  return `${num} is odd`;
};
console.log(evenOrOdd(4)); // 4 is even
console.log(evenOrOdd(5)); // 5 is odd

// approach 2
const evenOrOdd1 = (num) => {
  return num % 2 === 0 ? `${num} is even` : `${num} is odd`;
};
console.log(evenOrOdd1(4)); // 4 is even

// approach 3
const evenOrOdd2 = (num) => {
  return num & 1 ? `${num} is odd` : `${num} is even`;
};
console.log(evenOrOdd2(4)); // 4 is even
