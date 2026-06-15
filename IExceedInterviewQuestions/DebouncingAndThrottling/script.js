// const debounceFun = (fn, delay) => {
//   let timer;
//   return function () {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn();
//     }, delay);
//   };
// };

// const getData = () => {
//   console.log("inside get data");
// };

// const betterFun = debounceFun(getData, 300);

// const expensive = () => {
//   console.log("expensive function");
// };

// const throttling = (fn, delay) => {
//   let flag = true;

//   return function () {
//     if (flag) {
//       fn();
//       flag = false;
//       timer = setTimeout(() => {
//         flag = true;
//       }, delay);
//     }
//   };
// };

// window.addEventListener("resize", throttling(expensive, 300));

const debounceFun = (fn, delay) => {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, delay);
  };
};

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);
};

const betterFun = debounceFun(getData, 300);
