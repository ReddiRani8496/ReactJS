const areaOfTraingle = (length, breadth) => {
  return (length * breadth) / 2;
};
console.log("Area of Traingle ", areaOfTraingle(2, 3)); // 3

//approach-2
const areaOfTraingle1 = (length, breadth) => {
  return 0.5 * length * breadth;
};

console.log("Area of Traingle ", areaOfTraingle1(2, 3)); // 3
console.log("Area of Traingle ", areaOfTraingle1(4, 5)); // 10
