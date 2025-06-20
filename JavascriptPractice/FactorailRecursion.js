const facrorial = (n) => {
  if (n < 0) return "Factorial is not defined for negative numbers";
  if (n === 0 || n === 1) return 1;
  return n * facrorial(n - 1);
};
console.log("Factorial of 5 is:", facrorial(5)); // Output: 120
console.log("Factorial of 0 is:", facrorial(0)); // Output: 1
