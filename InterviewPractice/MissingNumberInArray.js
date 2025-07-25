function findMissingNumber(nums) {
  // Your implementation
  let n = nums.length;
  let sum = (n * (n + 1)) / 2;
  let arraySum = 0;
  for (let i = 0; i < n; i++) arraySum += nums[i];
  return sum - arraySum;
}

//For the purpose of user debugging.
findMissingNumber([3, 0, 1]);

module.exports = findMissingNumber;
