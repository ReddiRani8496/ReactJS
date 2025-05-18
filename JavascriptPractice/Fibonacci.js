function fibonacciSeries(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];

  let series = [0, 1];
  for (let i = 2; i < n; i++) {
    series.push(series[i - 1] + series[i - 2]);
  }
  return series;
}

console.log("Fibonacci series:", fibonacciSeries(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// approach-2
function fibonacciSeriesRecursive(n, memo = {}) {
  if (n <= 0) return [];
  if (n === 1) return [0];

  // Helper recursive function
  function fib(num) {
    if (num in memo) return memo[num];
    if (num === 0) return 0;
    if (num === 1) return 1;
    memo[num] = fib(num - 1) + fib(num - 2);
    return memo[num];
  }

  let series = [];
  for (let i = 0; i < n; i++) {
    series.push(fib(i));
  }
  return series;
}

console.log("Fibonacci series (Recursive):", fibonacciSeriesRecursive(10));
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
