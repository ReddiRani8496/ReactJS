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

const electronics = [];
const fashion = [];

const addToElectorincs = (product) => {
  electronics.push(product);
};

const addToFashionCategory = (product) => {
  fashion.push(product);
};

function categoriseProducts(products, electoronicCategory, fashionCategory) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].category == "Electronics") {
      electoronicCategory(products[i].name);
    } else if (products[i].category == "Fashion") {
      fashionCategory(products[i].name);
    }
  }
}

categoriseProducts(products, addToElectorincs, addToFashionCategory);

let result = { Electronics: electronics, Fashion: fashion };
console.log(result);
