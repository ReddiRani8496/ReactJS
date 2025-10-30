const arr = [1, 2, 3, 4, 1, 5, 6, 4, 7, 8, 9, 10];
const removeDuplicates = (arr) => {
  const uniqueElements = [];
  const seen = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (!seen.has(arr[i])) {
      uniqueElements.push(arr[i]);
      seen.add(arr[i]);
    }
  }

  return uniqueElements;
};
console.log("Array after removing duplicates:", removeDuplicates(arr)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// approach 2
const removeDuplicates2 = (arr) => {
  return [...new Set(arr)];
};
console.log(
  "Array after removing duplicates using Set:",
  removeDuplicates2(arr)
);
