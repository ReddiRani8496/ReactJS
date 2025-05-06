const reverseNumber = (num) => {
  let rem = num % 10;
  let sum = 0;
  while (num > 0) {
    sum = sum * 10 + rem;
    num = Math.floor(num / 10);
    rem = num % 10;
  }
  return sum;
};
console.log(reverseNumber(12345)); // 54321
console.log(reverseNumber(6789)); // 9876
