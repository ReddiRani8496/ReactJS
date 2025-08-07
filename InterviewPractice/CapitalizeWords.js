function capitalizeWords(sentence) {
  // Your implementation
  return sentence
    .trim()
    .split(/\s+/)
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}

//For the purpose of user debugging.
capitalizeWords("hello world");
module.exports = capitalizeWords;
