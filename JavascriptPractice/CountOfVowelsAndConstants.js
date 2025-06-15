const str = "javascript";
const countVowelsAndConsonants = () => {
  const vowels = "aeiou";
  let vowelCount = 0;
  let consonantCount = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (vowels.includes(char)) {
      vowelCount++;
    } else if (char >= "a" && char <= "z") {
      consonantCount++;
    }
  }
  return {
    vowels: vowelCount,
    consonants: consonantCount,
  };
};
console.log(countVowelsAndConsonants()); // Output: { vowels: 3, consonants: 7 }
