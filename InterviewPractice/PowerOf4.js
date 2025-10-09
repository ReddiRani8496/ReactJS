function isPowerOfFour(n) {
  if (typeof n != "number" || n < 0 || !Number.isInteger(n)) return false;
  return Math.log2(n) % 2 == 0;
}

module.exports = { isPowerOfFour };
