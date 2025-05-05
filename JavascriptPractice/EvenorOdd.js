const evenOrOdd = (num) => {
  if (num % 2 === 0) {
    return `${num} is even`;
  }
  return `${num} is odd`;
};
console.log(evenOrOdd(4)); // 4 is even
console.log(evenOrOdd(5)); // 5 is odd
