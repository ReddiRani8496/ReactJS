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
