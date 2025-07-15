function reverseWords(sentence) {
  // Your implementation
  return sentence
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

//For the purpose of user debugging.
reverseWords("Hello World");

module.exports = reverseWords;
