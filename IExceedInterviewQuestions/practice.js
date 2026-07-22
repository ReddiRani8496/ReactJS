const products = [
  { name: "iPhone", category: "Electronics" },
  { name: "Nike Shoes", category: "Fashion" },
  { name: "MacBook", category: "Electronics" },
];
// Output
// {
//   Electronics: ["iPhone", "MacBook"],
//   Fashion: ["Nike Shoes"]
// }

const categoriseProducts = products.reduce((acc, cur) => {
  if (acc[cur.category]) {
    acc[cur.category].push(cur.name);
  } else {
    acc[cur.category] = [cur.name];
  }
  return acc;
}, {});

console.log(categoriseProducts);
