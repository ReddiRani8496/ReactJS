function shuffle(array) {
  // Your implementation
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

//For the purpose of user debugging.
shuffle([1, 2, 3, 4, 5]);

module.exports = shuffle;
