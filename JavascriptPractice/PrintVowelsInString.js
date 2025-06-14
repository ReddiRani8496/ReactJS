let str = "javascript";
const printVowels = () => {
  const vowels = "aeiou";
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      result += str[i];
    }
  }

  return result;
};
console.log(printVowels()); // Output: "aia"
