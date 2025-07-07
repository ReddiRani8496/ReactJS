function groupBy(arr, key) {
  // Your implementation
  return arr.reduce((result, obj) => {
    const value = obj[key];
    if (!result[value]) {
      result[value] = [];
    }
    result[value].push(obj);
    return result;
  }, {});
}
groupBy(
  [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 },
  ],
  "age"
);
module.exports = groupBy;
