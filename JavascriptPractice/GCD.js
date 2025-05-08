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
