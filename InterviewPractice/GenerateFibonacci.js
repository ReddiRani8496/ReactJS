function generateFibonacci(n) {
  let first = 0;
  let second = 1;

  let result = [];

  if (n == 0) {
    return result;
  }

  if (n >= 1) {
    result.push(first);
  }
  if (n >= 2) {
    result.push(second);
  }

  for (let i = 3; i <= n; i++) {
    let sum = first + second;
    result.push(sum);
    first = second;
    second = sum;
  }

  return result;
}

module.exports = { generateFibonacci };
