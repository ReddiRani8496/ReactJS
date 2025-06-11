//remove an element from an array at a specific index
const removeElementAtIndex = (array, index) => {
  if (index < 0 || index >= array.length) {
    return "Index out of bounds";
  }
  return array.filter((_, i) => i !== index);
};

const arr = [10, 20, 30, 40, 50];
console.log(removeElementAtIndex(arr, 2));
console.log(removeElementAtIndex(arr, 0));
