function countVowels(str) {
  // Your implementation
  let vowelCount = 0;
  let word = str.toLowerCase().trim();
  for (let i = 0; i < word.length; i++) {
    if (
      word.charAt(i) == "a" ||
      word.charAt(i) == "e" ||
      word.charAt(i) == "i" ||
      word.charAt(i) == "o" ||
      word.charAt(i) == "u"
    )
      vowelCount++;
  }
  return vowelCount;
}

console.log(countVowels("Javascript")); // Output: 3
console.log(countVowels("bcd"));
console.log(countVowels("")); // Output: 0
console.log(countVowels("AEIOU")); // Output: 5
