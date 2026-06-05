const grandParent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

grandParent.addEventListener("click", () => {
  console.log("grand parent clicked");
});

parent.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("parent clicked");
});

child.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("child clicked");
});
