const arr = [1, 2, 1, 3, 1, 5];

const uniqueElements = arr.reduce((acc, cur) => {
  if (!acc.includes(cur)) {
    acc.push(cur);
  }
  return acc;
}, []);
console.log(uniqueElements);
