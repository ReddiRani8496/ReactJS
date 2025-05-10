const factorial = (num) => {
  let fact = 1;
  while (num >= 1) {
    fact *= num;
    num--;
  }
  return fact;
};
console.log("factorial of 3 ", factorial(3));

// approach-2
const factorial1 = (num) => {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorial1(num - 1);
};
console.log("factorial of 3 ", factorial1(3));
