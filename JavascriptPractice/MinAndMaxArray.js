const arr = [12, 5, 8, 130, 44];

let max = arr[0];
let min = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) max = arr[i];
  if (arr[i] < min) min = arr[i];
}

console.log("Maximum:", max);
console.log("Minimum:", min);
