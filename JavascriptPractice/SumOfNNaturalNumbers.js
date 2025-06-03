const n = 10;
const sumOfNNaturalNumbers = (n) => {
  if (n < 1) return 0;
  return (n * (n + 1)) / 2;
};
console.log("Sum of first", n, "natural numbers is:", sumOfNNaturalNumbers(n));
