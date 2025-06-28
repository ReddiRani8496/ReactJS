// print subarrays of an array
const printSubarrays = (array) => {
  const subarrays = [];
  for (let start = 0; start < array.length; start++) {
    for (let end = start + 1; end <= array.length; end++) {
      subarrays.push(array.slice(start, end));
    }
  }
  return subarrays;
};
const arr = [1, 2, 3, 4];
const subarrays = printSubarrays(arr);
console.log("Subarrays:", subarrays);
