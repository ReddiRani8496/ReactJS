Array.prototype.myReduce = function (callback, initialValue) {
  // Your implementation
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  const arr = this;
  const len = arr.length;
  let accumulator;
  let startIdx = 0;

  if (arguments.length > 1) {
    accumulator = initialValue;
  } else {
    while (startIdx < len && !arr.hasOwnProperty(startIdx)) {
      startIdx++;
    }
    if (startIdx >= len) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    accumulator = arr[startIdx++];
  }

  for (let i = startIdx; i < len; i++) {
    if (arr.hasOwnProperty(i)) {
      accumulator = callback(accumulator, arr[i], i, arr);
    }
  }
  return accumulator;
};
