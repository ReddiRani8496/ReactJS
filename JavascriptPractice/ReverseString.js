const reverseString = (str) => {
  const len = str.length;
  let rev = "";
  for (let i = len - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev;
};
console.log(reverseString("hello"));
console.log(reverseString("world"));
console.log(reverseString("AbcbA"));

// approach 2
const reverseString2 = (str) => {
  return str.split("").reverse().join("");
};
console.log(reverseString2("hello"));
//approach 3
const reverseString3 = (str) => {
  return [...str].reverse().join("");
};
console.log(reverseString3("hello"));

// approach 4
const reverseString4 = (str) => {
  const arr = str.split("");
  for (let i = 0; i < arr.length / 2; i++) {
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
  }
  return arr.join("");
};
console.log(reverseString4("hello"));
