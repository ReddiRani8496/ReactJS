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

const result = {};

const addToCategory = (product) => {
  if (result[product.category]) {
    result[product.category].push(product.name);
  } else {
    result[product.category] = [product.name];
  }
};

function categoriseProducts(products, addToCategory) {
  for (let i = 0; i < products.length; i++) {
    addToCategory(products[i]);
  }
}

categoriseProducts(products, addToCategory);

console.log(result);
