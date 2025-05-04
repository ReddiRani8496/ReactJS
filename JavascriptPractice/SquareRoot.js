const squareRoot = (num) => {
  if (num < 0) {
    return "Invalid input";
  }
  let left = 0;
  let right = num;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    const square = mid * mid;

    if (square === num) {
      return mid;
    } else if (square < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
};
console.log(squareRoot(16)); // 4
console.log(squareRoot(20)); // 4
