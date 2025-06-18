const method1 = (a, b) => {
  console.log("Before swap: a =", a, ", b =", b);
  const temp = a;
  a = b;
  b = temp;
  console.log("After swap: a =", a, ", b =", b);
};
const method2 = (x, y) => {
  console.log("Before swap: x =", x, ", y =", y);
  [x, y] = [y, x];
  console.log("After swap: x =", x, ", y =", y);
};

console.log("Method 1:");
method1(10, 20);
console.log("Method 2:");
method2(30, 40);
