const factorial = (num) => {
  let fact = 1;
  while (num >= 1) {
    fact *= num;
    num--;
  }
  return fact;
};
console.log("factorial of 3 ", factorial(3));
