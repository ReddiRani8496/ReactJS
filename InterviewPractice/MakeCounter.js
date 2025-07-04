function makeCounter(initialValue = 0) {
  // Your implementation
  let value = initialValue;
  return {
    increment: function () {
      value += 1;
      return value;
    },
    decrement: function () {
      value -= 1;
      return value;
    },
    reset: function () {
      value = initialValue;
      return value;
    },
  };
}

module.exports = makeCounter;
