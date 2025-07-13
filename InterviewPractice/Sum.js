function sum(...args) {
  // Your implementation
  //   let sum = 0;
  //   for (let i = 0; i < args.length; i++) sum += args[i];
  //   return sum;

  return args.reduce((acc, cur) => acc + cur, 0);
}

//For the purpose of user debugging.
sum(100, 200, 300, 400);
console.log(sum(100, 200, 300, 400)); // Output: 1000
console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(5, -5, 10, 20)); // Output: 30
console.log(sum(5)); // Output: 5
console.log(sum()); // Output: 0
