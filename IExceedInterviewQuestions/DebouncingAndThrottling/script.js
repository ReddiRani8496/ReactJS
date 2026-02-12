const debounceFun = (fn, delay) => {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, delay);
  };
};

const getData = () => {
  console.log("inside get data");
};

const betterFun = debounceFun(getData, 300);

const expensive = () => {
  console.log("expensive function");
};

const throttling = (fn, delay) => {
  let flag = true;

  return function () {
    if (flag) {
      fn();
      flag = false;
      timer = setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
};

window.addEventListener("resize", throttling(expensive, 300));
