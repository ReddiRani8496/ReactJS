function bubbleSort(arr) {
  const a = arr.slice();
  let n = a.length;
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 1; i < n; i++) {
      if (a[i - 1] > a[i]) {
        [a[i - 1], a[i]] = [a[i], a[i - 1]];
        swapped = true;
      }
    }
    n--;
  }
  return a;
}

console.log(bubbleSort([5, 1, 4, 2, 8]));
