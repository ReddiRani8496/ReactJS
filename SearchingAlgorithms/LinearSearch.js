const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return true;
    }
  }
  return false;
};

console.log(linearSearch([1, 2, 3, 4, 5], 2));

console.log(linearSearch([1, 2, 3, 4, 5], 7));
