// const fibonacci = (num) => {
//   let n1 = 0;
//   let n2 = 1;
//   console.log(n1 + " ");
//   console.log(n2 + " ");
//   num -= 2;
//   while (num >= 1) {
//     let n3 = n1 + n2;
//     console.log(n3 + " ");
//     n1 = n2;
//     n2 = n3;
//     num--;
//   }
// };
// fibonacci(5);

const fibonacci = (num) => {
  if (num <= 0) return [];
  if (num === 1) return [0];

  let series = [0, 1];
  for (let i = 2; i < num; i++) {
    series.push(series[i - 1] + series[i - 2]);
  }
  return series;
};

console.log("Fibonacci series:", fibonacci(5));
