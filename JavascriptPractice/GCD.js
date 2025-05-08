const GCD = (a, b) => {
  let min = Math.min(a, b);

  let gcd = 1;
  for (let i = 1; i <= min; i++) {
    if (a % i === 0 && b % i === 0) {
      gcd = i;
    }
  }
  return gcd;
};
console.log(GCD(12, 15)); // 3
console.log(GCD(100, 25)); // 25

//approach 2
const GCD1 = (num1, num2) => {
  while (num1 != num2) {
    if (num1 > num2) num1 = num1 - num2;
    else num2 = num2 - num1;
  }
  return num1;
};
console.log(GCD1(12, 15)); // 3
console.log(GCD1(100, 25)); // 25
