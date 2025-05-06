const fizzBuzz = (n) => {
  if (n % 3 == 0 && n % 5 == 0) {
    return "FizzBuzz";
  } else if (n % 3 == 0) {
    return "Fizz";
  } else if (n % 5 == 0) {
    return "Buzz";
  } else {
    return n;
  }
};

console.log(fizzBuzz(15)); // FizzBuzz
console.log(fizzBuzz(9)); // Fizz
console.log(fizzBuzz(10)); // Buzz
console.log(fizzBuzz(7)); // 7
