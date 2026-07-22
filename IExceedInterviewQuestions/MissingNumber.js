let arr = [2, 3, 4, 5, 7, 8];
// let arr = [2, 6, 8, 10];

let differenceOfNumbers = [];

function findSequenceOfNumbers(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let difference = arr[i + 1] - arr[i];
    differenceOfNumbers.push(difference);
  }
}

findSequenceOfNumbers(arr);

let uniqueDifference = differenceOfNumbers[0];

function findUniqueDifference(differenceOfNumbers) {
  for (let i = 0; i < differenceOfNumbers.length - 1; i++) {
    for (let j = i + 1; j < differenceOfNumbers.length; j++) {
      if (differenceOfNumbers[i] == differenceOfNumbers[j]) {
        uniqueDifference = differenceOfNumbers[i];
        return;
      }
    }
  }
}

findUniqueDifference(differenceOfNumbers);

function findMissingNumber(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] != arr[i] + uniqueDifference) {
      return arr[i] + uniqueDifference;
    }
  }
  return arr[0] - 1;
}

console.log("Missing number ", findMissingNumber(arr));
