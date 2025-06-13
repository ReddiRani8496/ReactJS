const arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};
const printAllPrimeNumbersInArray = (arr) => {
  const primeNumbers = arr.filter(isPrime);
  return primeNumbers;
};
console.log("Prime Numbers in Array:", printAllPrimeNumbersInArray(arr)); // Output: [2, 3, 5, 7, 11, 13]
