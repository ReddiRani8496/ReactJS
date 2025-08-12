function isPowerOfThree(n) {
  if (n < 1) return false;

  while (n >= 3) {
    if (n % 3 !== 0) return false;
    n /= 3;
  }
  return n == 1;
}

console.log(isPowerOfThree(10));

console.log(isPowerOfThree(27));
