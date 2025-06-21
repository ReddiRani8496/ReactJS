const fibonacci = (n) => {
  if (n < 0) return "Fibonacci is not defined for negative numbers";
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};
console.log("Fibonacci of 5 is:", fibonacci(5)); // Output: 5
console.log("Fibonacci of 0 is:", fibonacci(0));
