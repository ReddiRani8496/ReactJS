const lcm = (a, b) => {
  let max = Math.max(a, b);
  while (true) {
    if (max % a === 0 && max % b === 0) {
      return max;
    }
    max++;
  }
};
console.log(lcm(4, 6)); // 12
console.log(lcm(15, 20)); // 60

// approach 2
const lcm1 = (a, b) => {
  const gcd = (num1, num2) => {
    while (num1 != num2) {
      if (num1 > num2) num1 = num1 - num2;
      else num2 = num2 - num1;
    }
    return num1;
  };
  return (a * b) / gcd(a, b);
};

console.log(lcm1(4, 6)); // 12
console.log(lcm1(15, 20)); // 60
