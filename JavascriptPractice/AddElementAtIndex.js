// Add element at a specific index in an array
const addElementAtIndex = (array, index, element) => {
  if (index < 0 || index > array.length) {
    return "Index out of bounds";
  }
  const newArray = [...array];
  newArray.splice(index, 0, element);
  return newArray;
};
const arr = [10, 20, 30, 40, 50];
console.log(addElementAtIndex(arr, 2, 25)); // Output: [10, 20, 25, 30, 40, 50]
console.log(addElementAtIndex(arr, 0, 5)); // Output: [5, 10, 20, 30, 40, 50]
