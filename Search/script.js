const search = document.querySelector("#input");

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.textContent = card.getAttribute("data-value");
});

// search.addEventListener("keydown", (e) => {
//   console.log(e.target.value);
//   cards.forEach((card) => {
//     const data = card.getAttribute("data-value").toLowerCase();
//     if (data.includes(e.target.value.toLowerCase())) {
//       card.style.display = "block";
//     } else {
//       card.style.display = "none";
//     }
//   });
// });

const searchData = (e) => {
  console.log("inside search");
  cards.forEach((card) => {
    const data = card.getAttribute("data-value").toLowerCase();
    if (data.includes(e.target.value.toLowerCase())) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
};

const getData = (fn, delay) => {
  let context = this;
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

search.addEventListener("keydown", getData(searchData, 500));
