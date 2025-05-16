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

//approach-2
const squareRoot1 = (num) => {
  if (num < 0) {
    return "Invalid input";
  }
  if (num === 0 || num === 1) {
    return num;
  }
  let x = num;
  let root;
  while (true) {
    root = 0.5 * (x + num / x);
    if (Math.abs(root - x) < 1) {
      break;
    }
    x = root;
  }
  return Math.floor(root);
};

console.log(squareRoot1(16)); // 4
console.log(squareRoot1(20)); // 4
