const a = 10;
const b = 20;
const temp = a;
a = b;
b = temp;
console.log("a: ", a, " b: ", b);

// approach 2
let x = 10;
let y = 20;
[x, y] = [y, x];
console.log("x: ", x, " y: ", y);
